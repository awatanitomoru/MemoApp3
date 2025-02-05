import {
    View, TextInput, StyleSheet
} from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { db, auth } from '../../config'

const handlePress = (bodyText: string): void => {
    if (auth.currentUser === null) {return}
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
        .then((docRef) => {
            console.log('success', docRef.id)
            router.back()
        })
        .catch((error) => {
            console.log(error)
        })
}

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('')
   return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => {setBodyText(text)}}
                    autoFocus
                    keyboardType="default"
                    autoCapitalize="none"
            />
            </View>
            <CircleButton OnPress={() => { handlePress(bodyText) }}>
                <Icon name='check' size={40} color='#000000' />
            </CircleButton>
        </KeyboardAvoidingView>
   )
}

const styles = StyleSheet.create({
   container: {
       flex: 1
   },
   inputContainer: {
       flex: 1
   },
   input: {
       flex: 1,
       textAlignVertical: 'top',
       fontSize: 16,
       lineHeight: 24,
       paddingVertical: 32,
       paddingHorizontal: 27
   }
})

export default Create
