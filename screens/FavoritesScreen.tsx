import { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Context } from '../context/ContextProvider';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    noFavoriteMealsContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    noFavoriteText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

// props: FavoritesDrawerScreenProps
export const FavoritesScreen = () => {
    const {
        state: { favoriteMealsID },
    } = useContext(Context);

    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealsID.includes(meal.id)
    );

    return (
        <View style={styles.container}>
            {favoriteMeals.length ? (
                <FlatList
                    data={favoriteMeals}
                    renderItem={({ item }) => <MealItem meal={item} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.noFavoriteMealsContainer}>
                    <Text style={styles.noFavoriteText}>
                        You have no favorite meals yet
                    </Text>
                </View>
            )}
        </View>
    );
};
