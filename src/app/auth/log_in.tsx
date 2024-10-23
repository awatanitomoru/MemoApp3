import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const Login = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Log in</Text>
                <TextInput style={styles.input} value="Email adress" />
                <TextInput style={styles.input} value='password' />
                <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Login</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registerd</Text>
                    <Text style={styles.footerLink}>Sign up here!</Text>
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
    button: {
        backgroundColor: '#76F8AC',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: '#000000',
        paddingVertical: 8,
        paddingHorizontal: 24
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
        color: '#76F8AC'
    }
})

export default Login
