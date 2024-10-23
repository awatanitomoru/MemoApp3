import { View, Text, ScrollView, StyleSheet } from "react-native"
import { router } from "expo-router"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/icon"

const handolePress = (): void => {
    router.push('/memo/edit')
}

const Detaile = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2024年8月16日 17:00</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>

            <CircleButton style={{ top:54, bottom:'auto' }} OnPress={handolePress}>
                <Icon name='pencil' size={40} color='#000000' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: "#76F8AC",
        height: 96,
        justifyContent: "center",
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        // color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        // color: "#ffffff",
        fontSize: 12,
        lineHeight: 16
    },
    memoBody:{
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detaile
