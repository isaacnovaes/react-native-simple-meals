import { useContext, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import RightHeader from '../components/RightHeader';
import type { ScreenStackMealsDetailProps } from '../types/common';
import { Context } from '../context/ContextProvider';

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff',
    },
    detailText: {
        color: '#fff',
    },
});

const MealDetail = (props: ScreenStackMealsDetailProps) => {
    const {
        route: { params },
        navigation,
    } = props;

    const {
        state: { favoriteMealsID },
        dispatch,
    } = useContext(Context);

    const isMealFavorite = favoriteMealsID.includes(params.mealID);

    const selectedMeal = MEALS.find((meal) => meal.id === params.mealID);

    const selectedMealID = selectedMeal?.id ?? '';

    useEffect(() => {
        navigation.setOptions({
            title: 'Meal Detail',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
                <RightHeader
                    onPress={() => {
                        if (isMealFavorite) {
                            dispatch({
                                type: 'REMOVE_MEAL',
                                mealID: selectedMealID,
                            });
                        } else {
                            dispatch({
                                type: 'ADD_MEAL',
                                mealID: selectedMealID,
                            });
                        }
                    }}
                    isMealFavorite={isMealFavorite}
                />
            ),
        });
    }, [dispatch, isMealFavorite, navigation, selectedMealID]);

    if (!selectedMeal) return <Text>Meal not found</Text>;

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={{ alignItems: 'center' }}>
                <View style={{ maxWidth: '80%' }}>
                    <Subtitle title='Ingredients' />
                    <List list={selectedMeal.ingredients} />
                    <Subtitle title='Steps' />
                    <List list={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};
export default MealDetail;
