"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import styles from "./styles.module.css";

export const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={styles.header_mobile}>
            <div className={styles.header_mobile_wrapper}>
                <div className={styles.header_mobile_logo}>
                    <Image
                        src="/logo_monomito.svg"
                        width={110}
                        height={50}
                        alt="Monomito Filmes"
                        title="Monomito Filmes"
                    />
                </div>
                <div className={styles.header_mobile_hamburguer}>
                    <button onClick={() => setIsOpen(true)}>
                        <RiMenu3Line />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className={styles.menu}>
                    <div className={styles.menu_close}>
                        <button onClick={() => setIsOpen(false)}>
                            <IoClose />
                        </button>
                    </div>
                    <div className={styles.menu_listWrapper}>
                        <ul className={styles.menu_list}>
                            <li>
                                <Link href="/">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="/projetos">
                                    Projetos
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="/equipe">
                                    Equipe
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.menu_socials}>
                        <ul className={styles.menu_socials_wrapper}>
                            <li>
                                <Link href="https://www.facebook.com/monomitofilmes/" target="_blank">
                                    <FaFacebookSquare color="white" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/monomitofilmes/" target="_blank">
                                    <FaInstagram color="white" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.youtube.com/channel/UCFacycfmcN-9HwOue4qE07Q"
                                    target="_blank"
                                >
                                    <FaYoutube color="white" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://br.linkedin.com/company/monomito-filmes"
                                    target="_blank"
                                >
                                    <AiFillLinkedin color="white" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    )
}