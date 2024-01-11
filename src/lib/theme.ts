import { browser } from "$app/environment"
import { writable } from "svelte/store"


type Theme = 'cmyk' | 'night'

const userTheme = browser && localStorage.getItem('data-theme')
export const theme = writable(userTheme ?? 'night')

export function toggleTheme() {
    theme.update(currentTheme => {
        const newTheme: Theme = currentTheme === 'night' ? 'cmyk' : 'night'
        document.documentElement.setAttribute('data-theme',
            newTheme)
        localStorage.setItem('data-theme', newTheme)
        return newTheme
    })
}

export function setTheme(newTheme: Theme) {
    theme.set(newTheme)
}
