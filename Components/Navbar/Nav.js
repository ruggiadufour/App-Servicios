//Material-UI
import { Typography } from "@material-ui/core/";
//Framework
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
//Components
import Filters from "./Filters";
import LoggedUser from "./LoggedUser";
import Hamburg from "./Hamburg";
import { UserState } from "../../States/User";

import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const { UState } = useContext(UserState);

  useEffect(() => {
    console.log(UState);
  }, [UState]);

  //State variables
  const [openFilters, setOpenFilters] = useState(false);
  const [word, setWord] = useState("");
  const [filters, setFilters] = useState(null);

  //Filters
  function search() {
    let aux_filters = {};
    if (filters) {
      aux_filters = { ...filters };
    }

    aux_filters["word"] = word;
    
    let query = `?province=${filters.province}&city=${filters.city}&`;

    if (
      !aux_filters.is_profile === undefined ||
      aux_filters.is_profile === true
    ) {
      query += `category_id=${aux_filters.category_id}&word=${word}`;
      router.push(`/perfiles${query}`);
    } else {
      if (aux_filters.category_id)
        query += `category_id=${aux_filters.category_id}&type=${aux_filters.typePublication}`;
      query += word !== "" ? "&word=" + word : "";

      router.push(`/publicaciones${query}`);
    }
  }

  function cleanFilters() {
    setFilters({ province: filters.province, city: filters.city });
  }

  function setFiltersCall(filters_){
    setFilters(filters_)
  }

  return (
    <div className="background-primary-1">
      <div className={`centering general-width ${styles.navbar_container}`}>
        <div className={styles.brand}>
          <Image src="/icono2.png" layout="intrinsic" width={75} height={75} />
          <Typography component="h1" variant="h5">
            <Link href="/">Servia</Link>
          </Typography>
        </div>

        {/* Publication filter */}
        <div className={`${styles.filters} flex-col`}>
          {/* Input and buttons */}
          <div className={`${styles.filters__input}`}>
            <input
              type="text"
              className={styles.input_search}
              placeholder="¡Buscá un servicio!"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
            <button
              className="button-center"
              onClick={() => {
                setOpenFilters(true);
              }}
            >
              🚩
            </button>
            <button
              onClick={search}
              className="button-right"
            >
              <span>🔎</span>
            </button>
          </div>

          {/* Data displayed on selecting filters */}
          <div className={`${styles.filters__info} `}>
            <strong><span className={styles.span}>{"🚩 Filtros: "}</span></strong>
            {filters && (
              <>
                <span className={`${styles.span} ${styles.category}`}>
                  {filters.province}
                </span>
                <span className={`${styles.span} ${styles.category}`}>
                  {filters.city}
                </span>
              </>
            )}
            {filters?.category_id && (
              <>
                <button
                  className={`${styles.button_clean}`}
                  onClick={cleanFilters}
                >
                  ❌
                </button>
                <span className={`${styles.span} ${styles.type}`}>
                  {filters.is_profile
                    ? "Perfiles"
                    : filters.typePublication
                    ? "Publicaciones"
                    : "Solicitudes de usuarios"}
                </span>
                <span className={`${styles.span} ${styles.category}`}>
                  {filters.category}
                </span>
              </>
            )}
          </div>

          {/* Filters modal */}
          <Filters
            open={openFilters}
            setOpen={setOpenFilters}
            applyFilters={setFiltersCall}
          />
        </div>

        {UState?.jwt && (
          <>
            <LoggedUser />
            <Hamburg />
          </>
        )}

        {/* Login buttons */}
        {!UState?.jwt && (
          <div className={styles.login_buttons}>
            <button
              className="button-left  background-secondary-2"
              onClick={() => {
                router.push("/sesion");
              }}
            >
              Iniciar
            </button>
            <button
              className="button-right background-secondary-2"
              onClick={() => {
                router.push("/sesion/registrar");
              }}
            >
              Registrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
