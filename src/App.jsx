//import Container from '@mui/material/Container';
import {Container, Typography, Grid} from '@mui/material'
import Formulario from './components/Formulario'
import { NoticiasProvider } from './context/NoticiasProvider'

function App() {


  return (
  <>
    <NoticiasProvider>
      <Container>
        <header>
          <Typography  align='center' marginY={5} component="h1" variant="h3">Good News App</Typography>
        </header>

          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item md={6} xs={12} lg={4}>
              <Formulario/>
            </Grid>
          </Grid>
      </Container>
    </NoticiasProvider>
  </>
  )
}

export default App
