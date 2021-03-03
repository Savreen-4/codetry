import React, { Component } from 'react'; 
import { Text, View, Button, FlatList } from 'react-native';
import  {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 

 class App extends React.Component {
    
  render() {
    return (
      <View style={{flex:1,backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>hello</Text>      
        <View>

          
        <Button title="go"
        onPress={()=>{this.props.navigation.navigate("Next")}}
        />
          </View>

      </View>
    )
}
}
function Profile(props){

  return(
    <View>
      <Text>Profile
      </Text>
    </View>
  )
}
 const appNavigator = createStackNavigator({
   Home:{
     screen:App,
   },
   Next:{
      screen:Profile,
   }
 })
 export default createAppContainer(appNavigator);