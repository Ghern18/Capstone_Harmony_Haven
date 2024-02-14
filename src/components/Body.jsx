
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Sidebar from './Sidebar'

export default function Body({ children}) {

  return (
    <Container>
    <Stack direction= 'horizontal'>
      <Sidebar />
      { children }

    </Stack>
  
    </Container>
  )
}
