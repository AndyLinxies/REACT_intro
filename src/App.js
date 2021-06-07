
function App() {
  let dateCourante = new Date();
  let heure = dateCourante.getTime();
  console.log(dateCourante);
  console.log(heure);
  let mois;
  if (dateCourante.getMonth()===5) {
    mois ="Juin"
  }
  return (
    <div className="App">
      <h2>Temps JS :{heure} secondes se sont écoulés depuis 1970</h2>
      <h2> Temps PHP : {heure/1000} secondes se sont écoulés depuis 1970</h2>
      <h2>On est actuellement le : {dateCourante.getDate()} {mois} de l'année {dateCourante.getFullYear()} et il est : {dateCourante.getHours()} heures {dateCourante.getMinutes()} minutes</h2>
    </div>
  );
}

export default App;
