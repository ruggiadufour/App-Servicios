import { useState, useEffect, useContext } from "react";
import axios from "axios";
//Material-UI
import {
  Typography,
  TextField,
  FormControl,
  Button,
  Grid,
} from "@material-ui/core";

import { LinearProgress } from "@material-ui/core/";
import UploadImage from "../../Components/UploadImage";
import { UserState } from "../../States/User";

import { getCategories } from "../../Api/categories";
//Componente utilizado para crear o modificar publicaciones o solicitudes de servicios
export default function CreateModify({
  type,
  modify,
  loading,
  setLoading,
  submit,
}) {
  const { UState } = useContext(UserState);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  //Datos de la pagina
  const [data, setData] = useState({
    title: "",
    price: 0,
    description: "",
    type: type,
    category: null,
    public_user: UState?.user.public_user.id,
    category: "",
  });

  useEffect(async () => {
    const cat = await getCategories();
    setCategories(cat);
    setData({
      ...data,
      category: cat[0].id,
    });
  }, []);

  useEffect(async () => {
      console.log(images)
  }, [images]);

  //Funcion para captar los cambios en los inputs
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function selectCategory(e) {
      const category = JSON.parse(e.target.value);
      console.log(category)
    setData({
      ...data,
      category: category,
    });
  }

  function cancel() {}

  function save(e) {
      e.preventDefault();
    setLoading(true)
    submit(data, images);
  }

  return (
    <>
      <form onSubmit={save} className="medium-width centering-t ">
        <FormControl color="primary" fullWidth>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant="h5" component="h1" align="center">
                {modify ? "Modificar publicación" : "Crear publicación"}
              </Typography>
            </Grid>

            <Grid item sm={8} xs={12}>
              <TextField
                onChange={handleChange}
                value={data.title}
                name="title"
                label="Título de la publicación"
                variant="filled"
                maxLength={50}
                required
                className="w-100"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                onChange={handleChange}
                value={data.price}
                name="price"
                type="number"
                id="formatted-numberformat-input"
                label="Precio estimado"
                variant="filled"
                className="w-100"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography component="h2" align="left">
                Categoría
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <select
                name="select"
                className="w-100 select"
                onChange={selectCategory}
                value={data.category}
              >
                {categories.map((cat, i) => (
                  <option key={i} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                value={data.description}
                name="description"
                label="Descripción"
                maxLength={400}
                multiline
                variant="filled"
                className="w-100"
              />
            </Grid>

            <Grid item xs={12}>
              <UploadImage
                setFiles={setImages}
                Files={images}
                amount={5}
                preloadImages={[]}
                setToDelete={() => {console.log("deleting")}}
              />
            </Grid>

            <Grid item xs={12}>
              {loading && <LinearProgress />}
            </Grid>

            <Grid item xs={6} align="center">
              <Button
                disabled={loading}
                type="submit"
                size="large"
                variant="contained"
                color="primary"
              >
                Guardar
              </Button>
            </Grid>
            <Grid item xs={6} align="center">
              <Button
                onClick={cancel}
                size="large"
                variant="contained"
                color="secondary"
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </>
  );
}
