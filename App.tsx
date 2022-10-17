import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverView from './screens/MealsOverView';
import MealDetail from './screens/MealDetail';
import { CATEGORIES } from './data/dummy-data';
import type { RootDrawerParamList, RootStackParamList } from './types/common';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { ContextProvider } from './context/ContextProvider';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const RenderDrawers = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#351401' },
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
                drawerContentStyle: { backgroundColor: '#351401' },
                drawerInactiveTintColor: '#fff',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1',
            }}
        >
            <Drawer.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    drawerIcon: ({ size, color }) => (
                        <Ionicons color={color} size={size} name='list' />
                    ),
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{
                    // eslint-disable-next-line react/no-unstable-nested-components
                    drawerIcon: ({ size, color }) => (
                        <Ionicons color={color} size={size} name='star' />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <ContextProvider>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTintColor: '#fff',
                        headerStyle: { backgroundColor: '#351401' },
                        contentStyle: { backgroundColor: '#3f2f25' },
                    }}
                >
                    <Stack.Screen
                        name='Drawers'
                        component={RenderDrawers}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Meals'
                        component={MealsOverView}
                        options={({ route }) => {
                            const {
                                params: { categoryID },
                            } = route;
                            const categoryTitle = CATEGORIES.find(
                                (cat) => cat.id === categoryID
                            )?.title;
                            return { title: categoryTitle ?? '' };
                        }}
                    />
                    <Stack.Screen name='MealDetail' component={MealDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </ContextProvider>
    );
}
