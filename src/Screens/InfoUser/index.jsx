import React from "react";
import ProfileUser from "../../Components/ProfileUser";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import HeaderMobile from "../../Layouts/HeaderMobile";

export default function Profile() {
  return (
    <>
      <Header></Header>
      <HeaderMobile></HeaderMobile>
      <ProfileUser></ProfileUser>
      <Footer></Footer>
    </>
  );
}
