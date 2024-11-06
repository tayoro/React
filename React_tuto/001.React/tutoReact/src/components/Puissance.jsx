import React from "react"

const Puissance = ({ calculPuissance }) => {
    console.log('rendu de puissance')

    return (
        <button onClick={calculPuissance}>Calcul la puissance</button>
    )
}

export default React.memo(Puissance) //Composant pure
//Composant pure: rend la meme sortie pour le meme state et les memes props