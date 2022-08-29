import { useTheme } from "../hooks/useTheme";
import './ThemeSelector.css'

const themeColors = ['violet', 'green', 'turquoise', 'maroon']

function ThemeSelector() {

    const { changeColor } = useTheme()

  return (
    <div className="theme-selector">
        <div className="theme-buttons">
            {themeColors.map(color => (
                <div
                key={color}
                onClick={()=> changeColor(color)}
                style={{ background: color}}
                >

                </div>
            ))}
        </div>
    </div>
  )
}

export default ThemeSelector