import { useEffect, useState } from "react";
//Styles
import {
  Button,
  ListItem,
  FormControlLabel,
  Checkbox,
  DialogTitle,
  Dialog,
  List,
} from "@material-ui/core/";
//API-Client
import { getCategories } from "../../Api/categories";
import { getCities, getProvinces } from "../../Api/locations";

export default function Filters({ open, setOpen, applyFilters }) {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [filters, setFilters] = useState({
    is_profile: false,
    typePublication: true,
  });
  const [location, setLocation] = useState({
    province: "Chaco",
    city: "PRESIDENCIA ROQUE SAENZ PENA",
  });
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  //Close the dialog
  function handleClose() {
    setOpen(false);
  }

  //First render callback
  useEffect(async () => {
    //Setting first filters to see them in nav
    applyFilters(location);

    //Setting categories
    let res = await getCategories();
    if (res.length !== 0) {
      setSelectedCat(res[0]);
      setFilters({ ...filters, category: res[0].name, category_id: res[0].id, ...location });
    }
    setCategories(res);

    //Setting location
    setProvinces(await getProvinces());
    setCities(await getCities("Chaco"));
  }, []);

  //On select a province it has to update the city select
  async function selectProvince(e) {
    const province_ = e.target.value;
    const cities_ = await getCities(province_);
    setCities(cities_);

    setLocation({
      province: province_,
      city: cities_[0].nombre,
    });
  }

  //On select a category, set filters
  function selectCategory(e) {
    setSelectedCat(e.target.value);
    
    let aux_cat = JSON.parse(e.target.value);
    console.log(aux_cat)

    let filters_ = {...filters};
    filters_["category_id"] = aux_cat.id;
    filters_["category"] = aux_cat.name;

    setFilters({ ...filters, ...filters_, ...location });
  }

  function saveFilters() {
    console.log(filters)
    applyFilters({ ...filters, ...location });
    setOpen(false);
  }

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">
          Seleccione los filtros deseados
        </DialogTitle>
        <List>
          <ListItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.is_profile}
                  name="type"
                  onChange={() => {
                    setFilters({ ...filters, is_profile: !filters.is_profile });
                  }}
                />
              }
              label="Filtrar por perfiles de proveedores de servicio"
            />
          </ListItem>

          {!filters.is_profile && (
            <>
              <ListItem>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!filters.typePublication}
                      name="type"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          typePublication: !filters.typePublication,
                        });
                      }}
                    />
                  }
                  label="Filtrar por publicaciones de solicitudes de servicios de usuarios (estas publicaciones son creadas por personas que están buscando un servicio en especial)."
                />
              </ListItem>
            </>
          )}
          <ListItem>
            <select
              name="select"
              className="w-100 select"
              onChange={selectCategory}
              value={selectedCat ? selectedCat : ""}
            >
              {categories.map((category, i) => (
                <option key={i} value={JSON.stringify(category)}>
                  {category.name}
                </option>
              ))}
            </select>
          </ListItem>

          <h3 className="m-15">Locación</h3>
          <ListItem>
            <select
              name="select"
              className="select w-50 m-5"
              onChange={selectProvince}
              value={location.province}
            >
              {provinces.map((province, i) => (
                <option key={i} value={province.nombre}>
                  {province.nombre}
                </option>
              ))}
            </select>

            <select
              name="select"
              className="select w-50 m-5"
              onChange={(e) => {
                setLocation({
                  ...location,
                  city: e.target.value,
                });
              }}
              value={location.city}
            >
              {cities.map((city, i) => (
                <option key={i} value={city.nombre}>
                  {city.nombre}
                </option>
              ))}
            </select>
          </ListItem>
        </List>

        <Button
          onClick={() => {
            setOpen(false);
          }}
          variant="contained"
          color="inherit"
        >
          Cancelar
        </Button>
        <Button onClick={saveFilters} variant="contained" color="secondary">
          Guardar
        </Button>
      </Dialog>
    </div>
  );
}
