import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

//Material UI
import {
  Container,
  AppBar,
  Backdrop,
  CircularProgress,
  Box,
  Tab,
  Tabs,
} from "@material-ui/core";
import Nuevo from "@material-ui/icons/Announcement";
import Reloj from "@material-ui/icons/QueryBuilder";
import Check from "@material-ui/icons/AssignmentTurnedIn";

import ReportsSection from "./ReportsSection";
import { useReports, useMotives } from "../../Api/reports";
import { UserState } from "../../States/User";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}
//Hasta aquí código copiado para el Tab

export default function ManageReports() {
  const { UState, socket } = useContext(UserState);
  //Variables del componente
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const { reports, isLoading } = useReports(UState.jwt);

  //Función que sirve para manejar el cambio de la sección del Tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Función que sirve para modificar un determinado reporte y actualizarlo en la lista actual de reportes
  // function modificarReporte(Report) {
  //   setreportes(
  //     reports.map((report) => {
  //       if (report.id === Report.id) {
  //         return Report;
  //       } else {
  //         return report;
  //       }
  //     })
  //   );
  // }

  if(isLoading){
    return <p>Cargando</p>
  }

  return (
    <div className="general-width centering-t">
  
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Gestionar nuevos reportes"
            icon={<Nuevo />}
            {...a11yProps(0)}
          />
          <Tab label="Reportes en espera" icon={<Reloj />} {...a11yProps(1)} />
          <Tab
            label="Historial de reportes"
            icon={<Check />}
            {...a11yProps(2)}
          />
        </Tabs>

        <Backdrop open={loading}>
          <CircularProgress />
        </Backdrop>

        <TabPanel value={value} index={0}>
          <ReportsSection
            type={0}
            loading={loading}
            updateReport={() => {}}
            reports={reports.filter(rep => (rep.state<1))}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ReportsSection
            type={1}
            loading={loading}
            updateReport={() => {}}
            reports={reports.filter(rep => (rep.state==1))}
          />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <ReportsSection
            type={2}
            loading={loading}
            updateReport={() => {}}
            reports={reports.filter(rep => (rep.state>1))}
          />
        </TabPanel>
   
    </div>
  );
}
