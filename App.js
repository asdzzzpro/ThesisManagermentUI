import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';
import Login from './components/User/Login';
import { NavigationContainer } from '@react-navigation/native';
import API, { endpoint } from './configs/API';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerItem} initialRouteName='Login'>
        <Drawer.Screen name='Home' component={Home} options={{title: "Nhà"}}/>
        <Drawer.Screen name='Login' component={Login} options={{title: "Đăng nhập"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const DrawerItem = (props) => {
  const [committees, setCommittees] = React.useState([]);

  React.useEffect(() => {
    const loadCommittees = async () => {
      let res = await API.get(endpoint['committees'])
      setCommittees(res.data)
    }
    loadCommittees();
  },[])

  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {committees.map(c => {
         <DrawerItem label={c.name} key={c.id} onPress={() => props.navigation.navigate('Home', {id: c.id})}/>
      })}
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    fontSize: 50,
    fontWeight: 'bold',
  }
}); 
