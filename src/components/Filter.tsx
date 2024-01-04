import { StyleSheet, Text, View } from "react-native"

type Props = {
    title: string,
    type: 'Created' | 'Done',
    qtd?: number
}

export function Filter({title, type, qtd = 0}: Props) {
    return (
        <View style={styles.container}>
            <Text style={type === 'Created' ? styles.created : styles.done}>{title}</Text>
            <View style={styles.counter}>
                <Text style={styles.textCounter}>{qtd}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    created: {
        color: '#4EA8DE',
        fontWeight: 'bold'
    },
    done: {
        color: '#8284FA',
        fontWeight: 'bold'
    },
    counter: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
        marginLeft: 6,
        borderRadius: 15
    },
    textCounter: {
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: 'bold'
    }
})