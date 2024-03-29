import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import WalletScreen from "./screens/WalletScreen";

import { Entypo, Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function WalletStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wallet" component={WalletScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Keşfet"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="compass" size={26} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Daha Cüzdan"
          component={WalletStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="star" size={26} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
