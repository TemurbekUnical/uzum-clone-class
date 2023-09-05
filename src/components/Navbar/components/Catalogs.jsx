import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useContext, useState } from "react";
import AppContext from "../../../App.context";
import { CatalogsStyled } from "./Catalogs.style";

import HeadphonesIcon from '@mui/icons-material/Headphones';
import BlenderIcon from '@mui/icons-material/Blender';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Catalogs = () => {

    const {
        state: {
            Catologochiqmi
        },
        action: { setCatalogochiqmi }
    } = useContext(AppContext)

    return (
        <Drawer anchor={"top"} open={Catologochiqmi} onClose={() => setCatalogochiqmi(false)}>
            <CatalogsStyled>
                <Box className="headerBox">
                    <div className="navCatalogs" >
                        <ul>
                            <li><HeadphonesIcon />Elektronika</li>
                            <li><BlenderIcon />Maishiy-texnika</li>
                            <li><CheckroomIcon />Kiyim </li>
                        </ul>
                    </div>


                    <div className="infoCatalogs">
                        <h4>Elektronika </h4>
                        <div class="parent">
                            <div class="div1">
                                <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
                            <div class="div2">
                            <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
                            <div class="div3">
                            <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
                            <div class="div4">
                            <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
                            <div class="div5">
                            <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
                            <div class="div6">
                            <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
                            <div class="div7">
                            <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
                            <div class="div8">
                            <h5>ererkwekrw</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eos earum, veniam harum nisi quia blanditiis perspiciatis laborum, ex ab qui laboriosam, illo doloremque? Officia unde dolorum doloremque numquam corrupti?</p>                            
                            </div>
            
                        </div>
                    </div>

                    
                </Box>
            </CatalogsStyled>
        </Drawer>
    );
}

export default Catalogs;
