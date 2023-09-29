import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './styles/formPoke.css'


const FormPoke = ({setFormUrl, urlBase}) => { 

    const inputPoke = useRef() 

    const navigate = useNavigate()

    const url = 'https://pokeapi.co/api/v2/type/' 
    const [ types, getAllTypes] = useFetch(url) 
                                                

    useEffect (() => {
        getAllTypes() 
    }, [])


    const handleSubmit = e => { 
        e.preventDefault()
        const path=`/pokedex/${inputPoke.current.value.trim().toLowerCase()}` 
        
        navigate(path)
    }

    const handleChange = (e)=> {
        setFormUrl(e.target.value); 
    }

  return (
    <div className='formPokeContainer' >
        
        <form className='formPokeContainer__form' onSubmit={handleSubmit}> 
            <input ref={inputPoke} type="text" />  
            <button>Search</button>
        </form>
        <select className='formPokeContainer__select' onChange={handleChange} name="" id=""> {/* select para elegir pokes por tipo */}
            <option value={urlBase}>todos los pokemones</option>
            {
                types?.results.map(type => ( //LISTA DE POKEMONES PARA TU SELECCION
                    <option key={type.url}  value={type.url}>{type.name}</option>
                ))
            }
        </select>
      </div>
  )
}

export default FormPoke