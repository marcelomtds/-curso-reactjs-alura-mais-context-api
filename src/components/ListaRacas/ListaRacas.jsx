import React, { useContext } from 'react'
import RacasContext from '../../context/racas'
import './styles.scss'

const ListaRacas = () => {

  const { racas, selecionaRaca } = useContext(RacasContext)

  return (
    <ul className="lista-racas">
      {
        racas.map(raca => (
          <li
            className="lista-racas__item"
            key={raca.id}
            onClick={() => selecionaRaca(raca.name)}
          >
            {raca.name}
          </li>
        ))
      }
    </ul>
  )
}

export default ListaRacas