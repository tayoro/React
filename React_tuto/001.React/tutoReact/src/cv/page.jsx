import { useThemeContext } from "../context/theme"

const Cv = () => {

    const {background, setBackground } = useThemeContext() // voir context theme
    return <div className="container">
        <br />
        <h2>CV</h2>
            <div style={{
                'background': background,
                'width': '500px',
                'height': '500px'
            }}>
            </div>
    </div>
        
    
}

export default Cv