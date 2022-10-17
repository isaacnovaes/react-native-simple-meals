import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import type { CategoryDrawerScreenProps } from '../types/common';

const CategoriesScreen = ({ navigation }: CategoryDrawerScreenProps) => {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => (
                <CategoryGridTile
                    title={item.title}
                    color={item.color}
                    onPress={() => {
                        navigation.navigate('Meals', { categoryID: item.id });
                    }}
                />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    );
};
export default CategoriesScreen;
