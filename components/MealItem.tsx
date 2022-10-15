import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type Meal from '../models/meal';
import type { ScreenStackMealsOverViewNavigationProp } from '../types/common';
import MealDetails from './MealDetails';

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 8,
        shadowOpacity: 0.25,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8,
    },
    pressable: {
        overflow: 'hidden',
        borderRadius: 8,
    },
    pressed: {
        opacity: 0.7,
    },
    image: {
        width: '100%',
        height: 200,
    },
});

const MealItem = (props: { meal: Meal }) => {
    const { meal } = props;

    const navigation = useNavigation<ScreenStackMealsOverViewNavigationProp>();
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.pressable,
                    pressed ? styles.pressed : null,
                ]}
                onPress={() => {
                    navigation.navigate('MealDetail', { mealID: meal.id });
                }}
            >
                <View>
                    <Image
                        source={{ uri: meal.imageUrl }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
                <MealDetails
                    duration={meal.duration}
                    complexity={meal.complexity}
                    affordability={meal.affordability}
                />
            </Pressable>
        </View>
    );
};
export default MealItem;
