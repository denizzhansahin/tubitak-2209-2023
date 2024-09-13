import React, { useState } from 'react';

import { BottomNavigation, Text } from 'react-native-paper';
import GenelHabeler from '../Sayfalar/GenelHabeler';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import HaberKategorileri from '../Sayfalar/HaberKategorileri';
import OnerilenHaberler from '../Sayfalar/OnerilenHaberler';
import UygulamaTanitim from '../Sayfalar/UygulamaTanitim';




function BottomNavigationMenu(): React.JSX.Element {

  const [index,setIndex] = useState(0)
  const [routes] = useState([
    {key:'anasayfa',title:'Anasayfa',focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    {key:'tanitim',title:'Hakkında',focusedIcon: 'information', unfocusedIcon: 'information-outline'},

  ])

  const renderScene = BottomNavigation.SceneMap({
    anasayfa: GenelHabeler,
    tanitim:UygulamaTanitim
  });

  return (

    <SafeAreaProvider>

      
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      

    </SafeAreaProvider>
  );
}

export default BottomNavigationMenu
