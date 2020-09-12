import { makeStyles } from '@material-ui/core/styles';

const Estilos = makeStyles((theme) => ({
    mostrarFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 10
    },
    proveedorSticky:{
        display: 'scroll',
        position: 'sticky',
        top: 10,
        flexWrap: 'wrap',
        marginBottom: 10,
        marginTop:10
    },
    margenArriba:{
        marginTop: 10,
    },
    padding:{
        padding: 20
    },
    padding2:{
        padding: 10
    },
    filaPublicacion:{
        padding: 10,
        marginTop: 10,
    },
    imagenPublicacion:{
        borderRadius: "8px",
        objectFit: "cover",
        width: "100%",
        minWidth: 250,
        minHeight: 200,
    },
    gridRegistro:{
        width:550, 
        padding: 20,
        marginTop: 10,
    },
    inputAncho:{
        width: "100%",
        padding: 10
    },
    papelFondo:{
        backgroundColor: "white",
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    pantallaMedia:{
        maxWidth: 800,
        minWidth: 360,
    },
    botonFijo: {
        left: "43%",
        top: "90%",
        display: "scroll",
        position: "fixed",
    },

    
}));

export default Estilos;