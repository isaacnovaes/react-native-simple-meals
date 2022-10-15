import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        overflow: Platform.select({ android: 'hidden' }),
    },
    button: {
        flex: 1,
        borderRadius: 8,
    },
    buttonPressed: {
        opacity: 0.7,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

const CategoryGridTile = (props: {
    title: string;
    color: string;
    onPress: () => void;
}) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: props.color }]}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{ color: '#ccc' }}
                onPress={props.onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.innerText}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
};
export default CategoryGridTile;
