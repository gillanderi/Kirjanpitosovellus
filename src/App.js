
import { useState } from 'react';
import './App.css';


function App() {


    // Velka taulukon tilamuuttujat
    const [nimi, setNimi] =useState ();
    const [velka, setVelka] =useState();

    const [kenelle, setKenelle] = useState (["Eetu esimerkki"]);
    const [summa, setSumma] =useState (["0"]);



    //Saatavat taulukon tilamuuttujat

    const [nimi2,setNimi2] =useState();
    const [velka2,setVelka2] =useState();

    const [kenelle2, setKenelle2] = useState (["Ella esimerkki"]);
    const [summa2, setSumma2] =useState (["0"]);



    //Velat taulukon funktiot
  
    const lisaaSumma = (uusiSumma) => {

      
          setSumma([...summa, uusiSumma]);
        
          
    }
    const lisaaNimi = (uusiNimi) => {

        

          setKenelle([...kenelle, uusiNimi]);

          

    }
    const poistaRivi = (idx) => {

      const summat =[...summa];
      summat.splice (idx, 1);
      setSumma (summat);

      const ketka = [...kenelle];
      ketka.splice (idx, 1);
      setKenelle (ketka);

    }
    
    const laskeKokosumma = summa.reduce((laskuri, obj) => {

        

        return Number(laskuri) + Number(obj);

    },0);
    


    //Saatavat taulukon muuttujat

    const lisaaSumma2 = (uusiSumma2) => {

      setSumma2([...summa2, uusiSumma2]);

      
}
const lisaaNimi2 = (uusiNimi2) => {

      setKenelle2([...kenelle2, uusiNimi2]);

      

}
const poistaRivi2 = (idx) => {

  const summat2 =[...summa2];
  summat2.splice (idx, 1);
  setSumma2 (summat2);

  const ketka2 = [...kenelle2];
  ketka2.splice (idx, 1);
  setKenelle2 (ketka2);

}

const laskeKokosumma2 = summa2.reduce((laskuri2, obj2) => {

    

    return Number(laskuri2) + Number(obj2);

},0);
    
  return (

    <div className="App">

      {/* Velat taulukon toiminnallisuus ----*/}

      <header>

      <h1>Velat</h1>

      </header>
      <div className="velka_taulukko">

      <table>
        <thead>
        <tr>
          <th>Kenelle</th>
          <th>Summa</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
        
      {kenelle.map ( (keta, idx ) => {
        
        

        return (
          
                
               <tr key={idx}> 
                <td >
                {keta}
                </td>
                <td>
                {summa[idx]}
                

                </td>
                <td>
                <button onClick={ () => {

                  (poistaRivi(idx))

                }}
                >Poista</button>
                </td>
                </tr>
              );

      } ) } 
      
      
      
      
      </tbody> 
      <tfoot>
        <tr>
            <td>
          <input
              type="text"
              name="nimi"
              required="required"
              placeholder="Kenelle..."
              onChange={ (e) => { setNimi (e.target.value);
             
              
              } }
          />
    
            </td>
            <td>
          <input

            
            type="text"
            name="summa"
            required="required"
            placeholder="Summa"
            
            onChange={ (e) => { setVelka (e.target.value) } }
            
        />

            </td>
            <td>
              
              <button onClick={ () => {
                       lisaaSumma (velka); 
                       lisaaNimi  (nimi); 
                       
                      
                             
            } }
            >Lisää velka</button>
            </td>
            </tr>
          </tfoot>
      </table>

    </div>
    <p> Velkasi on yhteensä {laskeKokosumma} euroa</p>
            <br></br>
            <br></br>
            <br></br>

    {/* Saatavat taulukon toiminnallisuus ----*/}

    <h1>Saatavat</h1>


          <div className="velka_taulukko">

          <table>
            <thead>
            <tr>
              <th>Kenelle</th>
              <th>Summa</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            
          {kenelle2.map ( (keta2, idx ) => {
            
            

            return (
                  <tr key={idx}> 
                    <td >
                    {keta2}
                    </td>
                    <td>
                    {summa2[idx]}
                    

                    </td>
                    <td>
                    <button onClick={ () => {

                      (poistaRivi2(idx))

                    }}
                    >Poista</button>
                    </td>
                    </tr>
                  );

          } ) } 




          </tbody> 
          <tfoot>
            <tr>
                <td>
              <input
                  type="text"
                  name="nimi"
                  required="required"
                  placeholder="Kenelle..."
                  onChange={ (e) => { setNimi2 (e.target.value);
                
                  
                  } }
              />

                </td>
                <td>
              <input

                
                type="text"
                name="Saatava"
                required="required"
                placeholder="Saatava"
                
                onChange={ (e) => { setVelka2 (e.target.value) } }
                
            />

                </td>
                <td>
                  <button onClick={ () => {
                          lisaaSumma2 (velka2); 
                          lisaaNimi2  (nimi2); 
                          
                          
                                
                } }
                >Lisää saatava</button>
                </td>
                </tr>
              </tfoot>
          </table>

          </div>
          <p> Saatavia on yhteensä {laskeKokosumma2} euroa</p>


              </div>
            );
          }

          export default App;
