import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'

const Signup = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Signup</Text>
                <TextInput style={styles.input} value="Email adress" />
                <TextInput style={styles.input} value='password' />
                <Button label='Sign up'/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Alreadey registered?</Text>
                    <Text style={styles.footerLink}>Log in.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginBottom: 8,
        color: '#000000',
        paddingHorizontal: 8
    },
    footerLink :{
        fontSize: 14,
        lineHeight: 24,
        color: '#00B274'
    }
})

export default Signup
