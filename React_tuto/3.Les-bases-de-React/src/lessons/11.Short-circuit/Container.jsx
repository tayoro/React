export default function Container() {
  const isLogged = true;
  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>

     { isLogged && <p>afficher la collection</p> }
    </div>
  )
}
