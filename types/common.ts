import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { DrawerScreenProps } from '@react-navigation/drawer';

//Native Stack
export type RootStackParamList = {
    Drawers: undefined;
    Meals: { categoryID: string };
    MealDetail: { mealID: string };
};

export type ScreenStackDrawersProps = NativeStackScreenProps<
    RootStackParamList,
    'Drawers'
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

// Drawers
export type RootDrawerParamList = {
    Categories: undefined;
    Favorites: undefined;
};

export type CategoryDrawerScreenProps = CompositeScreenProps<
    DrawerScreenProps<RootDrawerParamList, 'Categories'>,
    NativeStackScreenProps<RootStackParamList>
>;

export type FavoritesDrawerScreenProps = CompositeScreenProps<
    DrawerScreenProps<RootDrawerParamList, 'Favorites'>,
    NativeStackScreenProps<RootStackParamList>
>;
