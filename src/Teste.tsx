import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo principal>Nao clique aqui</BotaoPerigo>
    </>
  )
}

export default Teste