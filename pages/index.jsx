import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StudentForm from "./studentForm";
import React, { useState, useEffect } from "react";
import SideMenu from "../components/sidemenu";

export default function Home() {
  return (
    <>
      <SideMenu />
      <StudentForm />
    </>
  );
}
