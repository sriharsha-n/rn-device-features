import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import Colors from '../constants/Colors';
import PlacesListScreen from "../screens/PlaceListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";

const PlaceNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
      defaultNavigationOptions:{
          headerStyle:{
            backgroundColor: Colors.primary,
          },
          headerTintColor: 'white',
      }
  }
);

export default  createAppContainer(PlaceNavigator);