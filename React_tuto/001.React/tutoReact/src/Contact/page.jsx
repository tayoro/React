'use client'
import { useThemeContext } from "../context/theme"


const Contact = () => {
    const { background, setBackground } = useThemeContext() // voir context theme
    return <div className="container">
        <br />
            <h1>Utilisation de context</h1>
            <br />
            <h2>Contact</h2>
            <div style={{
                'background': background,
                'width': '500px',
                'height': '500px'
            }}>
                <button onClick={() => setBackground('lightblue')}>switch</button>
            </div>
            
    </div>
        
    
}

export default Contact