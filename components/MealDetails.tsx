import { View, Text, StyleSheet } from 'react-native';

interface MealDetailProps {
    duration: number;
    complexity: string;
    affordability: string;
    style?: Record<string, string>;
    textStyle?: Record<string, string>;
}
const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});

const MealDetails = (props: MealDetailProps) => {
    const { duration, complexity, affordability, style, textStyle } = props;

    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
            <Text style={[styles.detailItem, textStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
};
export default MealDetails;
