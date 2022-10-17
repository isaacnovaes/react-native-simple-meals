import { useState, useRef } from 'react';
import {
    Text,
    View,
    Pressable,
    Image,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: '#ccc',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

const MealItem = (props: { meal: Meal }) => {
    const { meal } = props;

    const navigation = useNavigation<ScreenStackMealsOverViewNavigationProp>();

    const [loadStatus, setLoadStatus] = useState<'loadStart' | 'loadFinish'>(
        'loadStart'
    );

    const spinValue = useRef(new Animated.Value(0)).current;

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

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
                    <View style={styles.imageContainer}>
                        {loadStatus === 'loadStart' ? (
                            <Animated.View
                                style={{
                                    transform: [{ rotate: spin }],
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 2,
                                    marginTop: 100,
                                }}
                            >
                                <AntDesign
                                    name='loading2'
                                    size={24}
                                    color='#351401'
                                />
                            </Animated.View>
                        ) : null}
                        <Image
                            source={{ uri: meal.imageUrl }}
                            style={[
                                styles.image,
                                {
                                    opacity: loadStatus === 'loadStart' ? 0 : 1,
                                },
                            ]}
                            onLoadEnd={() => {
                                setTimeout(() => {
                                    setLoadStatus('loadFinish');
                                }, 100);
                            }}
                        />
                    </View>
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
