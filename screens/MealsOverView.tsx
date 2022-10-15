import { MEALS } from '../data/dummy-data';
import { FlatList, StyleSheet, View } from 'react-native';
import type { ScreenStackMealsOverViewProps } from '../types/common';
import MealItem from '../components/MealItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

const MealsOverView = ({ route }: ScreenStackMealsOverViewProps) => {
    const { categoryID: routeCategoryID } = route.params;
    const selectedMeals = MEALS.filter((meal) =>
        meal.categoryIds.includes(routeCategoryID)
    );

    // SET OPTIONS PROP FROM WITHIN THE COMPONENT, AVOID DOING IT, BUT IT'S STILL A POSSIBILITY
    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find(
    //         (cat) => cat.id === routeCategoryID
    //     )?.title;
    //     navigation.setOptions({ title: categoryTitle ?? '' });
    // }, [navigation, routeCategoryID]);

    return (
        <View style={styles.container}>
            <FlatList
                data={selectedMeals}
                renderItem={({ item }) => <MealItem meal={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
export default MealsOverView;
