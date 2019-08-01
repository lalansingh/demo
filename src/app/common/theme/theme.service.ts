import { Injectable } from '@angular/core';

export const darkTheme = {
    'primary-color': '#292929',
    'fore-color': '#aaadba',
    'text-active-color': '#fff',
    'active-background': '#38393b',
    'rgba-active-color': 'rgba(57, 155, 135, 0.94)',
    'label-color': '#6c6c6c',
    'body-color': '#000000de',
    'list-background-color': '#d4e9bf',
    'autocomplete-background-color': '#f5f5f5bd',
    'messege-color': '#B9B9B8',
    'secondary-color': '#c1b6b6',
    'title-color': '#c1b6b6',
    'content-span-color': '#c1b6b6',
    'subtile-color': '#818144',
    'title-cart-color': '#c8c8de',
    'paragraph-color': '#bdb8b8',
    'hash-link-color': '#c1b6b6',
    'border-color': '#424040',
    'rgba-inactive-background': 'rgba(53, 151, 236, 0.22)',
    'left-anchor-color': '#fff',
    'matcart-background': '#292929',
    'mar-button-color': '#292929',
    'topsearch-border-color': '#424040',
    'custom-scroll-background-color': 'none',
    'custom-scroll-thumb-color': '#5c5858fc',
    'btn-submit-color': '#fff'
};

export const lightTheme = {
    'primary-color': '#fff',
    'fore-color': '#5F5F5F',
    'text-active-color': '#3597ec',
    'active-background': '#2799fb',
    'rgba-active-color': 'rgba(57, 155, 236, 0.94)',
    'label-color': '#5F5F5F',
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
    'border-color': '#D1D1D1',
    'rgba-inactive-background': 'rgba(53, 151, 236, 0.21)',
    'left-anchor-color': '#696868',
    'matcart-background': '#fff',
    'mar-button-color': 'none',
    'topsearch-border-color': '#3597ec',
    'custom-scroll-background-color': '#f5f5f5',
    'custom-scroll-thumb-color': '#d4d4d4fc',
    'btn-submit-color': '#fff'
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

