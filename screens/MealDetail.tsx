import {
    ScrollView,
    View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import type { ScreenStackMealsDetailProps } from '../types/common';

const styles = StyleSheet.create({
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
    subtitleContainer: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        padding: 6,
        margin: 4,
    },
    subtitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const MealDetail = (props: ScreenStackMealsDetailProps) => {
    const {
        route: { params },
        navigation,
    } = props;

    const selectedMeal = MEALS.find((meal) => meal.id === params.mealID);

    if (!selectedMeal) return <Text>Meal not found</Text>;

    return (
        <ScrollView>
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
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Steps</Text>
            </View>
            {selectedMeal.steps.map((step) => (
                <Text key={step}>{step}</Text>
            ))}
            <Button
                title='Go to Categories'
                onPress={() => navigation.popToTop()}
            />
        </ScrollView>
    );
};
export default MealDetail;
