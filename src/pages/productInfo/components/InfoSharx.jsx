import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppContext from "../../../App.context";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs({ bosilganMahsulot }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    state: { mahsulotlar, korilganMahsulotlar },
    action: { setKorilganMahsulotlar },
  } = React.useContext(AppContext);
  console.log(bosilganMahsulot);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Mahsulot tavsifi" />
          <Tab label="sharxlar" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {bosilganMahsulot.title}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {bosilganMahsulot.sharxlar.map((sharx) => (
          <h1>{sharx.title}</h1>
        ))}
      </CustomTabPanel>
    </Box>
  );
}
