
const axios = require('axios');


export async function FormatPokemonData(o) {
    return {
  
      name: o.name,
      types: o.types.map(o => o.type.name).join(', '),
      sprite: getMainSprite(o),
      games: o.game_indices.map(o => o.version.name).sort(),
      abilities: o.abilities.map(o => o.ability.name).join(', '),
      height: o.height,
      weight: o.weight,
      order: o.order,
      moves: o.moves.map(o => o.move.name).sort(),
      stats: o.stats.map(o => { return { stat: o.stat.name, base_stat: o.base_stat } }),
      general: await fetch(o.species.url)
        .then(o => o.json())
        .then(o => {
  
          return {
            genus: o.genera[7]?.genus,
            lengendary: o.is_legendary,
            mythical: o.is_mythical,
            shape: o.shape?.name,
            order: o.order,
            description: o.flavor_text_entries && o.flavor_text_entries[0]?.flavor_text?.replace('.', '.\n')
          }
  
        }),
      sprites: deepSearch(o.sprites).sort((x, o) => {
        if (x.includes('back'))
          return 1
        return 0;
      }),
      evolutions: await GetEvolutionsResult(o)
    }
  
  }
  
 export const  getPokemon = async (query)=>{
  
    return  await FormatPokemonData((await axios.get('https://pokeapi.co/api/v2/pokemon/'+query)).data)
 
  }
  
  async function GetEvolutionsResult(o) {
  
    if (o.name === o.species.name) {
  
      return await fetch(o?.species.url)
        .then(o => o.json())
        .then(async o => await fetch(o.evolution_chain.url).then(o => o.json())
          .then(async o => {
  
            let evolutions = getEvolutions(o.chain.evolves_to);
            evolutions.splice(0, 0, o.chain.species?.name)
  
            const promise = new Promise((resolve, reject) => {
  
              let requests = []
  
              evolutions.forEach(o => {
                requests.push(fetch('https://pokeapi.co/api/v2/pokemon/' + o))
              })
  
              Promise.all(requests)
                .then(o => o.map(async r => await r.json()))
                .then(async o => {
  
                  let sprites = []
  
                  let pokemons = (await Promise.all(o))
  
                  for (let index = 0; index < pokemons.length; index++) {
                    sprites = [...sprites, getMainSprite((pokemons[index]))[0]]
                  }
  
                  return resolve(sprites)
  
                })
  
            })
  
  
            return new Object({
              totalEvolves: evolutions.length,
              evolutions:
                [
                  evolutions.filter(o => o != ''),
                  (await promise)
                ]
            })
  
          })
        )
    }
    else
      return new Object({
        totalEvolves: 0,
        evolutions:
          [
            [],[]
          ]
      })
  
  }
  
  
  function getEvolutions(evolutions, names = []) {
  
    if (evolutions.length == 0)
      return names;
  
    for (const evolution of evolutions) {
      names.push(evolution.species.name)
      getEvolutions(evolution.evolves_to, names)
    }
  
    return names;
  
  }
  
  function getMainSprite(o) {
  
    let shiny = deepSearch(o.sprites, [], 'shiny')
  
    let final = shiny.find(o => o.includes('home/')) || shiny.find(o => !o.includes('back'))
  
    return [o.sprites.other.home.front_default != null ?
      o.sprites.other.home.front_default :
      o.sprites.other.dream_world.front_default != null ?
        o.sprites.other.dream_world.front_default :
        o.sprites.front_default != null ?
          o.sprites.front_default :
          deepSearch(o.sprites, [])[0], final]
  }
  
  
  
  function deepSearch(root, buffer = [], search = '') {
  
    let sprites = buffer;
  
    for (const prop in root) {
  
      if (typeof root[prop] === "object" && root[prop] != null)
        deepSearch(root[prop], sprites)
      else
        sprites.push(root[prop])
    }
  
    sprites = sprites.filter(o => {
      if (o != null && search === '')
        return true;
      else if (o != null && o.includes(search))
        return true;
  
      return false;
    })
  
    return sprites;
  }
  
  
  
  
  
  