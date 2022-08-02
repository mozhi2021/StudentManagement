import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import FormDetails from "./formDetails";
import StudentForm from "./studentForm";

export default function Home() {
  return (
    <div className={styles.container}>
    {/* <Header /> */}
    {/* <FormDetails /> */}
    <StudentForm />

    </div>
  );
}
