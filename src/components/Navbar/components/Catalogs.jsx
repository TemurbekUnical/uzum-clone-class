import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useContext } from "react";
import AppContext from "../../../App.context";
import { CatalogsStyled } from "./Catalogs.style";

const Catalogs = () => {
  const {
    state: { Catologochiqmi, catalogs },
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
                      {catalogs.map((item) => (
                        <Tab
                          value={item.name}
                          label={<p className="tab">{item.name}</p>}
                        />
                      ))}
                    </TabList>

                    {catalogs.map((sub) => (
                      <TabPanel value={sub.name} className="tabSubTitle">
                        {sub.items.map((subtitle) => (
                          <p>{subtitle.name}</p>
                        ))}
                      </TabPanel>
                    ))}
                  </div>
                </Box>
              </div>
            </TabContext>
          </Box>
        </Box>
      </CatalogsStyled>
    </Drawer>
  );
};

export default Catalogs;
