import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
//Material UI
import {Typography, Paper, Avatar, Grid, IconButton} from '@material-ui/core/'
import Cargando from '@material-ui/core/LinearProgress';

import Estilos from '../Estilos';
import { ObtenerEstadoAplicacion } from '../../Estados/AplicacionEstado'
export default function Inicio({tipo}) {
  const classes = Estilos();
  const [categorias, setcategorias] = useState([])
  const [cargando, setcargando] = useState(false)
  const { state, dispatch } = useContext(ObtenerEstadoAplicacion);
  
  useEffect(()=>{
    if (state.jwt!=="" || state.publico===true){
      setcargando(true)
      buscarCategorias()
    }
  },[state.jwt, state.publico])
  
  function buscarCategorias(){
    axios.get(state.servidor+"/api/categorias")
    .then(response => {
      setcategorias(response.data)
      setcargando(false)
    })
    .catch(error => {
      alert("Un error ha ocurrido al cargar las categorías.")
      console.log(error.response)
    }) 
  }

  return (
    <div className={classes.fondo} >
      <Paper elevation={3} className="Fondo" style={{width:"85%"}}>      
        <Typography component="h3" variant="h3" align="center">Servia</Typography>
        <Typography component="h4" variant="h5" align="center">{tipo?"¡Encuentra tu servicio ideal!":"¡Contacta con personas que buscan tu ayuda!"}</Typography>
        
        
        {
          //Cuando cargando es true (seteado al momento de empezar a realizar la búsqueda de las categorías), nos muestra el componente de carga,
          //y desaparece cuando cambia a false (seteado al finalizar la búsqueda de los datos)
          cargando && <Cargando style={{margin:"15px"}}/>
        }
        <hr/>
        <Grid container spacing={5} justify="space-around" alignItems="center">
          {
            categorias.map((cat, i) => (
              <Grid item sm={4} md={3} lg={2} key={i} align="center">
                {
                  <Link to={state.ruta+"/publicaciones/"+cat.id} className={classes.EstiloLink}>
                    <Typography align="center">{cat.nombre}</Typography>
                    <IconButton>
                      <Avatar style={{width:"100px", height:"100px"}} src={state.servidor+cat.imagen.formats.thumbnail.url} color="secondary" fontSize="inherit"/>
                    </IconButton>
                  </Link>
                }
              </Grid>
            ))
          }
          </Grid>
          <hr/>
          {cargando && <br/>}
        </Paper>
    </div>
  );
}