import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const Subtitle = (props: { title: string }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{props.title}</Text>
        </View>
    );
};
export default Subtitle;
