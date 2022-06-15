import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Pokedex } from '../Pokedex/Pokedex.jsx'


const PokedexRoute = () => <Pokedex />

const FavoritesRoute = () => <Text>Albums</Text>;

const TrainerRoute = () => <Text>Recents</Text>;

const RouteComponent = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'pokedex', title: 'Pokédex', icon: 'pokeball' },
    { key: 'favorites', title: 'Favoritos', icon: 'star' },
    { key: 'trainer', title: 'Treinador', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pokedex: PokedexRoute,
    favorites: FavoritesRoute,
    trainer: TrainerRoute,
  });


  const theme = {
    
    roundness: 2,
    version: 3,
    colors: {
      primary: 'black',
    },
  };


  return (
    <BottomNavigation
      theme={theme}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default RouteComponent;