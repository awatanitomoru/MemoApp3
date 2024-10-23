import { View, StyleSheet } from "react-native"
import { router } from "expo-router"

import Header from "../../components/Header"
import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/icon"

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton OnPress={handlePress}>
                <Icon name='plus' size={40} color='#000000' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List
