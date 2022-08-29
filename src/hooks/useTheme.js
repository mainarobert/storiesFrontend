import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined){
        throw new Error("use useTheme inside a theme provider")
    }

    return context
}
