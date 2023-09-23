import * as React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Tab from "@mui/material/Tab";
import { useContext } from "react";
import AppContext from "../../../App.context";
import { CatalogsStyled } from "./Catalogs.style";

import HeadphonesIcon from "@mui/icons-material/Headphones";
import BlenderIcon from "@mui/icons-material/Blender";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CountertopsIcon from "@mui/icons-material/Countertops";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";

const Catalogs = () => {
  const {
    state: { Catologochiqmi },
    action: { setCatalogochiqmi },
  } = useContext(AppContext);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Drawer
      anchor={"bottom"}
      open={Catologochiqmi}
      onClose={() => setCatalogochiqmi(false)}
    >
      <CatalogsStyled>
        <Box>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <div className="headerBox container">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <div className="navBox">
                    <TabList
                      orientation="vertical"
                      variant="scrollable"
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        label={
                          <p>
                            <HeadphonesIcon />
                            Elektronika
                          </p>
                        }
                        value="1"
                      />
                      <Tab
                        label={
                          <p>
                            <BlenderIcon />
                            Maishiy-texnikalar
                          </p>
                        }
                        value="2"
                      />

                      <Tab
                        label={
                          <p>
                            <CheckroomIcon />
                            Kiyim
                          </p>
                        }
                        value="3"
                      />
                      <Tab
                        label={
                          <p>
                            <IceSkatingIcon />
                            Poyabzallar
                          </p>
                        }
                        value="4"
                      />
                      <Tab
                        label={
                          <p>
                            <ShoppingBagIcon />
                            Aksessuarlar
                          </p>
                        }
                        value="5"
                      />
                      <Tab
                        label={
                          <p>
                            <VolunteerActivismIcon />
                            Go'zallik
                          </p>
                        }
                        value="6"
                      />
                      <Tab
                        label={
                          <p>
                            <MedicalInformationIcon />
                            Salomatlik
                          </p>
                        }
                        value="7"
                      />
                      <Tab
                        label={
                          <p>
                            <CountertopsIcon />
                            Uy-rozg'or
                          </p>
                        }
                        value="8"
                      />
                      <Tab
                        label={
                          <p>
                            <ConstructionOutlinedIcon />
                            Qurilish, ta'mirlash
                          </p>
                        }
                        value="9"
                      />
                    </TabList>
                  </div>
                </Box>
                <div className="infoBox">
                  <TabPanel value="1">
                    <h3>Elektronika</h3>
                    <div class="parent">
                      <div class="div1">
                        <h5>Smartfon va telefonlar</h5>
                        <p>Aksessuarlar va ehtiyot qismlari</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div2">
                        <h5>Aqilli soatlar va fitnes bilaguzuklar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div3">
                        <h5>Noutbuklar, planshetlar va elektron kitoblar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div4">
                        <h5>Kompyuter texnikasi</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div5">
                        <h5>Quloqchinlar va audio texnologiyalar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div6">
                        <h5>Foto va video texnika</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div7">
                        <h5>Soatlar va elektron budulniklar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>
                      <div class="div8">
                        <h5>Aqlli uy va xavfsizlik</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel value="2">
                    <h3>Maishiy texnikalar</h3>
                    <div class="parent">
                      <div class="div1">
                        <h5>Smartfon va telefonlar</h5>
                        <p>Aksessuarlar va ehtiyot qismlari</p>
                        <p>asdafldas;kglaskdlgkasdlgksadl;</p>
                        <p>lsmdgl</p>
                        <p>sdmgskdgsmgk</p>
                        <p>asf</p>
                      </div>

                      <div class="div2">
                        <h5>Aqilli soatlar va fitnes bilaguzuklar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div3">
                        <h5>Noutbuklar, planshetlar va elektron kitoblar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div4">
                        <h5>Kompyuter texnikasi</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>

                      <div class="div5">
                        <h5>Soatlar va elektron budulniklar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel value="3">
                    <h3>Kiyim</h3>
                    <div class="parent">
                      <div class="div1">
                        <h5>Soatlar va elektron budulniklar</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>
                      <div class="div2">
                        <h5>Aqlli uy va xavfsizlik</h5>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                        <p>loremasdasdasdasdas</p>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel value="4">
                    <h3>Pyabzallar</h3>
                  </TabPanel>
                  <TabPanel value="5">
                    <h3>Aksessuarlar</h3>
                  </TabPanel>
                  <TabPanel value="6">
                    <h3>Go'zallik</h3>
                  </TabPanel>
                  <TabPanel value="7">
                    <h3>Salomatlik</h3>
                  </TabPanel>
                  <TabPanel value="8">
                    <h3>Uy-ro'zg'or</h3>
                  </TabPanel>
                  <TabPanel value="9">
                    <h3>Qurilish ta'mirlash</h3>
                  </TabPanel>
                </div>
              </div>
            </TabContext>
          </Box>
        </Box>
      </CatalogsStyled>
    </Drawer>
  );
};

export default Catalogs;
