import { Injectable } from '@angular/core';

export const darkTheme = {
    'box-sadow-1': 'rgba(0, 0, 0, 0.22)',
    'box-sadow-2': 'rgba(0, 0, 0, 0.44)',
    'box-sadow-3': 'rgba(0, 0, 0, 0.21)',
    'primary-color': '#564f4f',
    'fore-color': '#e28917',
    'text-active-color': '#fff',
    'active-background': '#2979fb',
    'rgba-active-color': 'rgba(57, 155, 135, 0.94)',
    'label-color': '#rgba(0, 0, 0, 0.45)',
    'body-color': '#e8bc8f',
    'list-background-color': '#d4e9bf',
    'autocomplete-background-color': '#f5f5f5bd',
    'messege-color': '#B9B9B8',
    'secondary-color': '#fff',
    'title-color': '#fff',
    'content-span-color': '#fff',
    'subtile-color': '#818144',
    'title-cart-color': '#c8c8de',
    'paragraph-color': '#3e3e3f',
    'hash-link-color': '#1f8ce5',
    'header-border': '#d1d1d6',
    'rgba-inactive-background': 'rgba(53, 151, 236, 0.22)',
    'left-anchor-color': '#fff',
    'matcart-background': '#575454',
    'mar-button-color': 'dimgrey'
};

export const lightTheme = {
    'box-sadow-1': 'rgba(0, 0, 0, 0.2)',
    'box-sadow-2': 'rgba(0, 0, 0, 0.14)',
    'box-sadow-3': 'rgba(0, 0, 0, 0.12)',
    'primary-color': '#fff',
    'fore-color': '#5F5F5F',
    'text-active-color': '#3597ec',
    'active-background': '#2799fb',
    'rgba-active-color': 'rgba(57, 155, 236, 0.94)',
    'label-color': '#rgba(0, 0, 0, 0.54)',
    'body-color': '#EBF7FF',
    'list-background-color': '#d4e9fb',
    'autocomplete-background-color': '#f5f5f5db',
    'messege-color': '#B9B9B9',
    'secondary-color': '#000',
    'title-color': '#707070',
    'content-span-color': '#6a6a6a',
    'subtile-color': '#818181',
    'title-cart-color': '#4d4d4d',
    'paragraph-color': '#3e3e3e',
    'hash-link-color': '#1f8ce8',
    'header-border': '#d1d1d1',
    'rgba-inactive-background': 'rgba(53, 151, 236, 0.21)',
    'left-anchor-color': '#696868',
    'matcart-background': '#fff',
    'mar-button-color': 'none'
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

