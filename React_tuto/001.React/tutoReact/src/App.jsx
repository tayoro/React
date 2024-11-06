import {Input} from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/CheckBox.jsx";
import { InputR } from "./components/forms/InputR.jsx";
import { useState } from "react";
import { ProductCategoryRow } from "./components/produits/ProductCategoryRow.jsx";
import { ProductRow } from "./components/produits/ProductRow.jsx";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
]

//Composante principal
function App() {

  const [showStockOnly,SetshowStockOnly] = useState(false)
  const [search, SetSearch] = useState('')
  const [searchR, SetSearchR] = useState(1)


  const visibleProducts = PRODUCTS.filter(product =>{
    if(showStockOnly && product.stocked !== true){
      console.log(showStockOnly)
      return false
    }
    if(search && !product.name.includes(search)){
      console.log(showStockOnly)
      return false
    }
    if(searchR && !product.price.includes(searchR)){
      return false
    }
    return true
  })

  return <div className="container my-3">
    <br />
    <h1>useEffect</h1>
    <h2>Formulaire controler</h2>
    
    <SearchBar 
        showStockOnly={showStockOnly} 
        SetshowStockOnly={SetshowStockOnly} 
        search={search} 
        SetSearch={SetSearch}
        searchR={searchR}
        SetSearchR={SetSearchR}
    />
    <ProductTable products={visibleProducts}/>
    <div>
     <hr />
    </div>
  </div>
  
}

//composante SearchBar
function SearchBar({showStockOnly,SetshowStockOnly,search,SetSearch,searchR,SetSearchR}){
    return <div>
        <div className="mb-3">
            <Input 
              value={search} 
              onChange={SetSearch} 
              placeholder="Rechercher..." 
            />

            <Checkbox 
              id="stocked" 
              checked={showStockOnly} 
              onChange={SetshowStockOnly} 
              label="N'afficher que les produits en stock" 
            />

            <InputR 
              value={searchR} 
              onChange={SetSearchR} 
              label={`Je recherche les fuits aux prix de $${searchR}`} 
            />
        </div>
    </div>
}


//composante ProductTable
function ProductTable({products}){
  const row = [];

  let lastCategory = null;

  for(let product of products){
    if(product.category !== lastCategory){
      row.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    row.push(<ProductRow key={product.name} product={product}/>)
  }

  return <table className="table">
    <thead>
      <tr>
        <th><strong>Nom</strong></th>
        <th><strong>prix</strong></th>
      </tr>
    </thead>
    <tbody>
    {row}
    </tbody>
  </table>
}

export default App


