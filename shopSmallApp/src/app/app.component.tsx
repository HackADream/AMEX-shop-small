
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { appMappings, appThemes } from './app-theming';
import { AppIconsPack } from './app-icons-pack';
import { StatusBar } from '../components/status-bar.component';
import { SplashImage } from '../components/splash-image.component';
import { Theming } from '../services/theme.service';
import {AppNavigator} from "../navigation/app.navigation";


const App = (): React.ReactElement => {

    const [mappingContext, currentMapping] = Theming.useMapping(appMappings, "eva");
    const [themeContext, currentTheme] = Theming.useTheming(appThemes, "eva", "light");

    return (
        <React.Fragment>
            <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
            <AppearanceProvider>
                <ApplicationProvider {...currentMapping} theme={currentTheme}>
                    <Theming.MappingContext.Provider value={mappingContext}>
                        <Theming.ThemeContext.Provider value={themeContext}>
                            <SafeAreaProvider>
                                <StatusBar/>
                                <AppNavigator/>
                            </SafeAreaProvider>
                        </Theming.ThemeContext.Provider>
                    </Theming.MappingContext.Provider>
                </ApplicationProvider>
            </AppearanceProvider>
        </React.Fragment>
    );
};

// const Splash = ({ loading }): React.ReactElement => (
//     <SplashImage
//         loading={loading}
//         source={require('../assets/images/shop-small.png')}
//     />
// );

export default (): React.ReactElement => (
    <App/>
);