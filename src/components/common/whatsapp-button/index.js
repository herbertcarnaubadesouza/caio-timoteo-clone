"use client"
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

export const WhatsAppButton = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
        window.scrollY > 1000 ? setIsActive(true) : setIsActive(false)
        })
    }, [])

    return (
        <Fragment>
            {isActive && (
                <button className={styles.whatsappButton}>
                    <Link href="https://api.whatsapp.com/send/?phone=5511930809909&text&type=phone_number&app_absent=0">
                        <FaWhatsapp />
                    </Link>
                </button>
            )}
        </Fragment>
    )
}