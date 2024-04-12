"use client"
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_link}>
        <div>
          <Link href="/">
            <h1>
              Monomito Filmes
            </h1>
          </Link>
        </div>
        <div className={styles.open_close}>
          <IoMenu size="1.4em" color="white" />
          <IoMdClose size="1.4em" color="white" />
        </div>
      </div>

      <ul className={styles.header_list}>
        <Link className={styles.item_link} href="/">
          <li className={styles.headeritemlist}>Inicio</li>
        </Link>
        <Link className={styles.item_link} href="/projetos">
          <li className={styles.headeritemlist}>Projetos</li>
        </Link>
        <Link className={styles.item_link} href="/sobre">
          <li className={styles.headeritemlist}>Sobre</li>
        </Link>
        <Link className={styles.item_link} href="/equipe">
          <li className={styles.headeritemlist}>Equipe</li>
        </Link>
        <Link className={styles.item_link} href="/contato">
          <li className={styles.headeritemlist}>Contato</li>
        </Link>
      </ul>
      <ul className={styles.list_icons}>
        <li className={styles.icons}>
          <Link href="https://www.facebook.com/monomitofilmes/" target="_blank">
            <FaFacebookSquare size="1.4em" color="white" />
          </Link>
        </li>
        <li className={styles.icons}>
          <Link href="https://www.instagram.com/monomitofilmes/" target="_blank">
            <FaInstagram size="1.4em" color="white" />
          </Link>
        </li>
        <li className={styles.icons}>
          <Link
            href="https://www.youtube.com/channel/UCFacycfmcN-9HwOue4qE07Q"
            target="_blank"
          >
            <FaYoutube size="1.4em" color="white" />
          </Link>
        </li>
        <li className={styles.icons}>
          <Link
            href="https://br.linkedin.com/company/monomito-filmes"
            target="_blank"
          >
            <AiFillLinkedin size="1.4em" color="white" />
          </Link>
        </li>
      </ul>
    </header>
  );
};