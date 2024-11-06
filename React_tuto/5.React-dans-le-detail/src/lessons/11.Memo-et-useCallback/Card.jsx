import { memo, useCallback } from "react"

export default memo(function Card({txt, customLog}){

    customLog()
    console.log('renderEnfant')
    return(
        <div>
            <p>Carte</p>
            <p>{txt}</p>
            
        </div>
    )
})