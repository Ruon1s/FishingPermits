
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Permits from "../screens/Permits";
import Profile from "../screens/Profile";
import Restrictions from "../screens/Restrictions";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


type BottomTabParamList = {
    Luvat: undefined;
    Kalastusrajoitus: undefined;
    Profiili: undefined;
}

const Tab = createBottomTabNavigator<BottomTabParamList>();
const TabNavigator: React.FC = () => {



    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        if (route.name === 'Luvat'){
                           return <FontAwesome5 name="fish" size={size} color={color} />
                        };
                        if(route.name === 'Kalastusrajoitus'){
                           return <MaterialCommunityIcons name="fish-off" size={size} color={color} />
                        }
                        if(route.name === 'Profiili'){
                            return <MaterialCommunityIcons name="face-profile" size={size} color={color} />
                        }
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Luvat" component={Permits} options={{title: 'Kalastusluvat'}}/>
                <Tab.Screen name="Kalastusrajoitus" component={Restrictions} options={{title: 'Kalastusrajoitus'}}/>
                <Tab.Screen name="Profiili" component={Profile} options={{title: 'Profiili'}}/>
        </Tab.Navigator>
        </NavigationContainer>
    );
};
export default TabNavigator;
