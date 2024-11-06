/**
 * 
 * @param {Array} product 
 * @returns {JSX.Element}
 */
export function ProductRow({product}){
    //Ajout du style 
    const style = product.stocked === false ? {color:"red"} : undefined; 

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}