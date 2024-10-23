import { View, Text, ScrollView, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"

const Detaile = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
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

            <CircleButton style={{ top:160, bottom:'auto' }}>
                <AntDesign name='edit' size={30} />
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
