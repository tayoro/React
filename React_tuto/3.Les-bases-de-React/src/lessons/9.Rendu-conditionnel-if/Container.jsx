export default function Container() {

  const isLogged = false;
  let content = undefined;
  if(isLogged) content = 'vous etes connecté';
  else content = "Veillez vous connecté"
  return (
  <div>
    <h1>Rendu conditionnel  avec if </h1>
    <p>{content}</p>
  </div>
  )
}
