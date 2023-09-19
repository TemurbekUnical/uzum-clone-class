import * as React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Tab from '@mui/material/Tab';
import { useContext } from "react";
import AppContext from "../../../App.context";
import { CatalogsStyled } from "./Catalogs.style";

import HeadphonesIcon from '@mui/icons-material/Headphones';
import BlenderIcon from '@mui/icons-material/Blender';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CountertopsIcon from '@mui/icons-material/Countertops';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const Catalogs = () => {
    const {
        state: {
            Catologochiqmi,
            catalogs,
        },
        action: { setCatalogochiqmi }
    } = useContext(AppContext)


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Drawer anchor={"bottom"} open={Catologochiqmi} onClose={() => setCatalogochiqmi(false)}>
            <CatalogsStyled>
                <Box>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <div className='headerBox container'>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <div className='navBox'>
                                        <TabList
                                            orientation="vertical"
                                            variant="scrollable"
                                            onChange={handleChange}
                                            aria-label="lab API tabs example"
                                        >
                                            {
                                                catalogs.map(item => <Tab key={item.name} label={
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                } value={item.name}
                                                />)
                                            }



                                        </TabList>
                                    </div>
                                </Box>
                                <div className='infoBox'>
                                    {
                                        catalogs.map(item => <TabPanel key={item.name} value={item.name} className="infoBox">
                                            {item.items.map(subCategory => <h1>
                                                {subCategory.name}
                                                {subCategory.subkategoriya?.map(sub => <div key={sub.name}>
                                                    <p>{sub.name}</p>
                                                </div>)}
                                            </h1>)}
                                        </TabPanel>)
                                    }
                                </div>
                            </div>
                        </TabContext>
                    </Box>

                </Box>
            </CatalogsStyled>
        </Drawer>
    );
}

export default Catalogs
