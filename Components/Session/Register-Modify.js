import { useState, useEffect } from "react";
import Link from "next/link";
//Material UI
import {
  LinearProgress,
  Typography,
  TextField,
  Button,
  Divider,
  Paper,
  Grid,
  Checkbox,
  FormControlLabel,
  Hidden,
} from "@material-ui/core/";
import UploadImage from "../../Components/UploadImage";

export default function RegisterModify({
  user,
  setUser,
  UState,
  submit,
  loading,
  message,
  setProfile,
  setIsProvider,
  isProvider,
  register,
}) {
  const [profile_link, setProfile_link] = useState([]);
  console.log(UState)
    useEffect(()=>{
        if(UState?.user?.public_user){
            if(UState.user.public_user?.profile){
                setProfile_link([UState.user.public_user.profile])
            }
        }
    },[user])

  const handleChange = (e) => {
    if (message !== "") setMessage("");
    let value = e.target.value;
    let name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //Funcion para enviar los datos, ya sea de modificación de perfil como de creación de una cuenta nueva
  const save = (e) => {
    e.preventDefault();
    if (
      user.email.search("[.][a-z][a-z]") === -1 ||
      user.email.search("[.].*[0-9].*") !== -1
    ) {
      setMessage("El email se encuentra escrito incorrectamente");
    } else {
      if (user.password !== user.password_again) {
        setMessage("Las contraseñas no coinciden");
      } else if (user.password.length < 8) {
        setMessage("La contraseña debe tener al menos 8 caracteres");
      } else {
        submit();
      }
    }
  };
  return (
    <div className="medium-width centering-t">
      <form onSubmit={save}>
        <Grid spacing={2} container justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" component="h1" align="center">
              Registrar usuario
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              label="Nombre"
              variant="filled"
              required
              className="w-100"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="text"
              name="surname"
              value={user.surname}
              onChange={handleChange}
              label="Apellido"
              variant="filled"
              required
              className="w-100"
            />
          </Grid>

          <Grid item xs={12}>
            <UploadImage
              setFiles={setProfile}
              amount={1}
              images={profile_link}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="email"
              value={user.email}
              onChange={handleChange}
              label="Correo electrónico"
              variant="filled"
              type="email"
              required
              className="w-100"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="username"
              value={user.username}
              onChange={handleChange}
              label="Usuario"
              variant="filled"
              required
              className="w-100"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type="number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              label="Telefono"
              variant="filled"
              className="w-100"
            />
          </Grid>
          <Divider />

          <Grid item xs={6}>
            <TextField
              required={register}
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
              label="Contraseña"
              variant="filled"
              className="w-100"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required={register}
              name="password_again"
              value={user.password_again}
              onChange={handleChange}
              type="password"
              label="Repetir contraseña"
              variant="filled"
              className="w-100"
            />
          </Grid>

          <Hidden xlDown={message === ""}>
            <Grid item xs={12}>
              <Typography color="error">{message}</Typography>
            </Grid>
          </Hidden>

          <Grid item xs={12}>
            <OkProveedor
              isProvider={isProvider}
              setIsProvider={setIsProvider}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              disabled={loading}
              className="centering"
            >
              {"Registrar Usuario"}
            </Button>
          </Grid>

          <div hidden={!loading} className="w-100">
            <LinearProgress />
          </div>
          <Grid item xs={12}>
            <Link href="/sesion">
              <a className="centering text-secondary-1">
                ¿Ya tenés una cuenta?
              </a>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

function OkProveedor({ setIsProvider, isProvider }) {
  const manejarCambio = (event) => {
    setIsProvider(!isProvider);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isProvider}
          onChange={manejarCambio}
          name="is_provider"
          color="primary"
        />
      }
      label="Soy proveedor de servicios"
    />
  );
}
