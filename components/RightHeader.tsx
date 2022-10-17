import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    pressed: { opacity: 0.7 },
});

const RightHeader = (props: {
    onPress: () => void;
    isMealFavorite: boolean;
}) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
        >
            <Ionicons
                name={props.isMealFavorite ? 'star' : 'star-outline'}
                color='#fff'
                size={24}
            />
        </Pressable>
    );
};
export default RightHeader;
