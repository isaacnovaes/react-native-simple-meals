import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Categories: undefined;
    Meals: { categoryID: string };
    MealDetail: { mealID: string };
};

export type ScreenStackCategoriesProps = NativeStackScreenProps<
    RootStackParamList,
    'Categories'
>;

export type ScreenStackMealsOverViewProps = NativeStackScreenProps<
    RootStackParamList,
    'Meals'
>;

export type ScreenStackMealsOverViewNavigationProp =
    ScreenStackMealsOverViewProps['navigation'];

export type ScreenStackMealsDetailProps = NativeStackScreenProps<
    RootStackParamList,
    'MealDetail'
>;
