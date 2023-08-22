import React from 'react'
import { Navbarstyled } from './NavbarCenter.style'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
const NavbarCenter = () => {
  return (
    <div>
        <Navbarstyled>
        <div className="nav-right">
        <FmdGoodOutlinedIcon/>  <p> Shahar:Toshkent  </p>
        <p>Topshirish punkti</p> 
        </div>

        <div className="nav-center">
            <p>Buyurmangizni 1kunda bepul yetqazib beramz!</p>
        </div>

        <div className="nav-left">
            <p>Saval-javablar</p>
             <p>Buyurmalarim </p>
             <p> <img src="http://www.w3.org/2000/svg" alt="" /> O'zbekcha</p>
        </div>


        </Navbarstyled>
    </div>
  )
}

export default NavbarCenter