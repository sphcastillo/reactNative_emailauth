import { useState, useEffect, Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Registration from './screens/Registration';
import { firebase } from './config';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing){
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) {
    return null;
  }

  if(!user){
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            // headerTitle: ()  => <Header name="Sophia Castillo" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50, 
              borderBottomRightRadius: 50,
              backgroundColor: '00e4d0',
              shadowColor: '#000',
              elevation: 25
            }
          }}
        />
        <Stack.Screen 
          name="Registration"
          component={Registration}
          options={{
            // headerTitle: ()  => <Header name="Sophia Castillo" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50, 
              borderBottomRightRadius: 50,
              backgroundColor: '00e4d0',
              shadowColor: '#000',
              elevation: 25
            }
          }}        
        />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Dashboard"
        component={Dashboard}
        options={{
          // headerTitle: ()  => <Header name="Sophia Castillo" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '00e4d0',
            shadowColor: '#000',
            elevation: 25
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}