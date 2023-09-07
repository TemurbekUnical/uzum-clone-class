import { Divider } from "@mui/material";
import React from "react";

const ProfileForm = () => {
  return (
    <div className="form">
      <div className="form__content">
        <h1>Ma'lumotlarim</h1>
        <ul className="top">
          <li>
            <label htmlFor="familiya">Familiya</label> <br />
            <input type="text" id="familiya" placeholder="Familiya" />
          </li>
          <li>
            <label htmlFor="Ism">Ism</label> <br />
            <input type="text" id="Ism" placeholder="Ism" />
          </li>
          <li>
            <label htmlFor="Otasining ismi">Otasining ismi</label> <br />
            <input
              type="text"
              id="Otasining ismi"
              placeholder="Otasining ismi"
            />
          </li>
        </ul>
        <Divider />
        <ul className="malumot">
          <li>
            <label
              htmlFor="Elektron pochta
"
            >
              Elektron pochta
            </label>
            <input
              type="text"
              id="Elektron pochta
"
              placeholder="Elektron pochta
"
            />
          </li>
          <li>
            <label htmlFor="Telefon raqami">Telefon raqami</label>
            <input
              type="tel"
              id="Telefon raqami"
              placeholder="+998__ ___-__-__"
            />
          </li>
        </ul>
        <Divider />
        <ul className="sana">
          <li>
            <label
              htmlFor="Tugʻilgan sana
"
            >
              Tugʻilgan sana
            </label>
            <input type="date" placeholder="kk/oo/yyyy" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileForm;
