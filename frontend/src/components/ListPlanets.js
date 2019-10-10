import React, {useState, useEffect} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import "./ListPlanets.css"
import api from '../services/api'

export default function ListPlanet(){
    const [planets, setPlanets] = useState([]) 
    
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await api.get("/planets")
            setPlanets(result.data)
        }
        fetchData()
    },[])
   
    const removePlanet = async (_id) =>{
        await api.post("/planets/remove",{_id})
        window.location.reload()
        
    }
    
    const addPlanet = async ({name, climate, terrain, films})=>{
        await api.post("/planets/add",{name, climate, terrain, films})

        console.log("adicionado")
    }
    const randomPlanet =  async () =>{
        const randomNumber = Math.floor(Math.random() * 60)
        await api.get(`/planets/${randomNumber}/`)
        console.log(randomNumber)
        window.location.reload()
    }
    
        return(
            <div className="planet-container">
                <h3>Lista de Planetas</h3>
            <ul>
                {planets.map((planet)=> (
                    <li key={planet._id}>
                    Planeta: {planet.name}, Clima: {planet.climate}, Terreno: {planet.terrain}, apareceu nos filmes {planet.films} vezes
                    <button onClick={()=> removePlanet(planet._id) }>
                        <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
                    </button>
                    </li>
                    ))}
            </ul>
            <div className="form-list">
                Nome: <input type="text" placeholder="Nome do Planeta" />
                Clima: <input type="text" placeholder="Clima do Planeta"/>
                Terreno: <input type="text" placeholder="Terreno do Planeta"/>
                Aparições: <input type="text" placeholder="Aparições do planeta nos filmes"/>
                <button className="btn">Adicionar</button>
                <button className="btn2" onClick={()=> randomPlanet()}>Aleatório</button>
            </div>
            </div>
        )
    }
