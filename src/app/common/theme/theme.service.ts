import { Injectable } from '@angular/core';

export const darkTheme = {
    'box-sadow-1': 'rgba(0, 0, 0, 0.22)',
    'box-sadow-2': 'rgba(0, 0, 0, 0.44)',
    'box-sadow-3': 'rgba(0, 0, 0, 0.21)',
    'primary-color': '#fff2f2',
    'fore-color': '#6F6F6F',
    'text-active-color': '#3597ec',
    'label-color': '#rgba(0, 0, 0, 0.45)',
    'body-color': '#EBF7dd',
    'list-background-color': '#d4e9bf',
    'autocomplete-background-color': '#f5f6f5db',
};

export const lightTheme = {
    'box-sadow-1': 'rgba(0, 0, 0, 0.2)',
    'box-sadow-2': 'rgba(0, 0, 0, 0.14)',
    'box-sadow-3': 'rgba(0, 0, 0, 0.12)',
    'primary-color': '#fff',
    'fore-color': '#5F5F5F',
    'text-active-color': '#3597ec',
    'label-color': '#rgba(0, 0, 0, 0.54)',
    'body-color': '#EBF7FF',
    'list-background-color': '#d4e9fb',
    'autocomplete-background-color': '#f5f5f5db',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
    toggleDark() {
        this.setTheme(darkTheme);
    }

    toggleLight() {
        this.setTheme(lightTheme);
    }

    private setTheme(theme: {}) {
        Object.keys(theme).forEach(k =>
            document.documentElement.style.setProperty(`--${k}`, theme[k])
        );
    }
}

