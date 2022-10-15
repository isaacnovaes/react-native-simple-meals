import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverView from './screens/MealsOverView';
import MealDetail from './screens/MealDetail';
import { CATEGORIES, MEALS } from './data/dummy-data';
import type { RootStackParamList } from './types/common';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <>
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
                        name='Categories'
                        component={CategoriesScreen}
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
                    <Stack.Screen
                        name='MealDetail'
                        component={MealDetail}
                        options={({ route }) => {
                            const {
                                params: { mealID },
                            } = route;
                            const selectedMealTitle = MEALS.find(
                                (meal) => meal.id === mealID
                            )?.title;
                            return { title: selectedMealTitle ?? '' };
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
