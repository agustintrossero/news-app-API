import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ListadoNoticias() {
    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
    //console.log(noticias)
    //console.log(totalNoticias)
    const totalaPaginas = Math.ceil(totalNoticias / 20)

  return (
    <>
    <Typography
        textAlign="center"
        marginY={5}
        variant="h3"
        component="h2"
    >
        Ultimas Noticias
    </Typography>
    <Grid container spacing={2}>
        {noticias.map(noticia =>(
            <Noticia
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </Grid>
    <Stack 
        sx={{marginY: 5}}
        spacing={2}
        direction={'row'}
        justifyContent='center'
        alignItems={'center'}
    >
        <Pagination 
            count={totalaPaginas} 
            color='primary'
            onChange={handleChangePagina}
            page={pagina}
        />
    </Stack>
    </>
  )
}
