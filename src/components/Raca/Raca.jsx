import React, { useContext } from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'
import RacaSelecionadaContext from '../../context/racaSelecionada'

const Raca = () => {

  const { raca } = useContext(RacaSelecionadaContext)
  const racaFoiSelecionada = Boolean(raca.name)

  return (
    racaFoiSelecionada
      ?
      <RacaSelecionada />
      :
      <RacaNaoSelecionada />
  )
}

export default Raca