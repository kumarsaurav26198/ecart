import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/afterLogin/homeScreen/HomeScreen';
import LogInScreen from '../pages/beforeLogin/logInScreen/LogInScreen';
import SignUpScreen from '../pages/beforeLogin/signUpScreen/SignUpScreen';
import SplashScreen from '../pages/beforeLogin/splashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;