import { createStackNavigator, createAppContainer } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';

const LoggedOutNavigation = createStackNavigator({
    LogIn: LogInScreen
}, {
    initialRouteName: 'LogIn'
});

export default createAppContainer(LoggedOutNavigation);