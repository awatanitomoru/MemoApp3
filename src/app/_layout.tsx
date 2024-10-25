import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Layout = (): JSX.Element => {
    <StatusBar style="light" backgroundColor="#76F8AC" />
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#76F8AC'
        },
        headerTintColor: '#000000',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
    }} />
}

export default Layout
