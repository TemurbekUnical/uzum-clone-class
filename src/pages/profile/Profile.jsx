import React from "react";
import ProfileSidebar from "./components/Profile.sidebar";
import ProfileOrders from "./components/Profile.info";
import { ProfileStyled } from "./Profile.style";
import { Route, Routes } from "react-router-dom";
import ProfileForm from "./components/Profile.form";

const Profile = () => {
  return (
    <ProfileStyled>
      <ProfileSidebar />
      <Routes>
        <Route path="orders" element={<ProfileOrders />} />
        <Route path="form" element={<ProfileForm />} />
      </Routes>
    </ProfileStyled>
  );
};

export default Profile;
