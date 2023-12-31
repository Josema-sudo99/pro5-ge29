import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import './styles/pokedex.css'
const Pokedex = () => { 


    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
    const [formUrl, setFormUrl] = useState(urlBase)

    const {trainerName} = useSelector(store => store) 

  return (
    
    <article className='pokedex'>
        <header className='pokedex__header'>
          <div className="pokedex__text-container"></div>
        </header>
        <section className='pokedex__form-and-pokecontainer'>
            <p className='pokedex__welcome'>
              <span className='pokedex__welcome-span1'>Welcome {trainerName},</span>
              <span className='pokedex__welcome-span2'> here you can find your favorite Pokemon</span>
            </p>
            <FormPoke setFormUrl = {setFormUrl} urlBase = {urlBase} />
            <PokeContainer formUrl = {formUrl}  />
        </section>
    </article>
  )
}

export default Pokedex