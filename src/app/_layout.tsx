import { Stack } from "expo-router"

const Layout = (): JSX.Element => {
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
