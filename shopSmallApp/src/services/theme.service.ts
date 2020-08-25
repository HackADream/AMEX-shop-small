
import React from 'react';
import { Appearance, AppearancePreferences, ColorSchemeName } from 'react-native-appearance';
import { AppStorage } from './app-storage.service';

export type Mapping = 'eva' | 'material';
export type Theme = 'light' | 'dark' | 'brand';

export interface MappingContextValue {
    currentMapping: Mapping;
    setCurrentMapping: (mapping: Mapping) => void;
    isEva: () => boolean;
}

export interface ThemeContextValue {
    currentTheme: Theme;
    setCurrentTheme: (theme: Theme) => void;
    isDarkMode: () => boolean;
    createTheme: (upstreamTheme: Theme) => any;
}

export class Theming {

    static MappingContext = React.createContext<MappingContextValue>(null);
    static ThemeContext = React.createContext<ThemeContextValue>(null);

    static useMapping = (mappings: Record<Mapping, any>,
                         mapping: Mapping): [MappingContextValue, any] => {
        const setCurrentMapping = (nextMapping: Mapping): void => {
            AppStorage.setMapping(nextMapping);
        };

        const isEva = (): boolean => {
            return mapping === 'eva';
        };

        const mappingContext: MappingContextValue = {
            currentMapping: mapping,
            setCurrentMapping,
            isEva,
        };

        return [mappingContext, mappings[mapping]];
    };

    static useTheming = (themes: Record<Mapping, Record<Theme, any>>,
                         mapping: Mapping,
                         theme: Theme): [ThemeContextValue, any] => {

        const [currentTheme, setCurrentTheme] = React.useState<Theme>(theme);

        React.useEffect(() => {
            const subscription = Appearance.addChangeListener((preferences: AppearancePreferences): void => {
                const appearanceTheme: Theme = Theming.createAppearanceTheme(
                    preferences.colorScheme,
                    theme,
                );
                setCurrentTheme(appearanceTheme);
            });

            return () => subscription.remove();
        }, []);

        const isDarkMode = (): boolean => {
            return currentTheme === 'dark';
        };

        const createTheme = (upstreamTheme: Theme): any => {
            return { ...themes[mapping][currentTheme], ...themes[mapping][upstreamTheme][currentTheme] };
        };

        const themeContext: ThemeContextValue = {
            currentTheme,
            setCurrentTheme: (nextTheme) => {
                AppStorage.setTheme(nextTheme);
                setCurrentTheme(nextTheme);
            },
            isDarkMode,
            createTheme,
        };

        return [themeContext, themes[mapping][currentTheme]];
    };

    static useTheme = (upstreamTheme: Theme): any => {
        const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);
        return themeContext.createTheme(upstreamTheme);
    };

    private static createAppearanceTheme = (appearance: ColorSchemeName,
                                            preferredTheme: Theme): Theme => {
        if (appearance === 'no-preference') {
            return preferredTheme;
        }
        return appearance;
    };
}