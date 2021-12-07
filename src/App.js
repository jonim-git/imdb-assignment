import './App.css'
import { useState} from 'react'
import axios from 'axios';

const URL = 'http://localhost/imdb/'

function App () {
  const [leffat, setLeffat] = useState([]);
  const [lyhyet, setLyhyet] = useState([]);

  function etsi(e) {
    e.preventDefault();
    axios
      .get(URL+ 'bean.php')
      .then(response => {
        setLeffat(response.data)
        console.log(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }

  function etsiLyhyet(e) {
    e.preventDefault();
    axios
      .get(URL + 'lyhyetleffat.php')
      .then(response => {
        setLyhyet(response.data)
        console.log(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }


  return (
    <div className='container-fluid'>
      <h1 id="center">Kaikki mitä olet halunnut IMDB:ltä!</h1>
      <h2 id="center">Olethan kärsivällinen, olen aika hidas...</h2>
      <div className="row">
        <div className="col-6">
      <br />
      <button onClick={etsi} >Paina tästä löytääksesi parhaat Bean-leffat!</button>
      <br />
      <ol>
         {leffat?.map(leffa => (
          <li key={leffa.title_id}>
            <b><p>{leffa.primary_title}</p></b>
            <p>Vuosi: {leffa.start_year}</p>
            <p>Arvosana: {leffa.average_rating}</p>
          </li>
        ))}  
      </ol>
      </div>
      <div className="col-6">
      <br />
      <button onClick={etsiLyhyet} >Paina tästä löytääksesi lyhyitä action-leffoja suomenkielisillä julkaisunimillä!</button>
      <br />
      <ol>
        {lyhyet?.map(lyhyt => (
          <li key={lyhyt.title_id}>
            <b><p>{lyhyt.primary_title}</p></b>
            <p>Vuosi: {lyhyt.start_year}</p>
            <p>Pituus: {lyhyt.runtime_minutes}</p>      
          </li>
        ))}  

        </ol>
        </div>
        </div>
</div>
  )
}

export default App