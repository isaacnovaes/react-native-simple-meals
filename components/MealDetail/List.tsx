import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#e351401',
        textAlign: 'center',
    },
});

const List = (props: { list: string[] }) => {
    return (
        <>
            {props.list.map((listItem) => (
                <View key={listItem} style={styles.listItem}>
                    <Text style={styles.itemText}>{listItem}</Text>
                </View>
            ))}
        </>
    );
};
export default List;
