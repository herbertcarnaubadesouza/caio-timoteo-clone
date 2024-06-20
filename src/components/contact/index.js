"use client"
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import styles from "./styles.module.css";

export const ContactContent = () => {
    const handleScrollToForm = () => {
        window.scrollTo({
          top: 3000,
          behavior: "smooth",
        })
    }

    return (
        <section className={styles.contact}>
            <div className={styles.contact_wrapper}>
                <div className={styles.contact_texts}>
                    <div className={styles.contact_texts_item}>
                        <h1>
                            Fale conosco
                        </h1> 
                        <p>
                            Preencha os campos do <strong>formulário</strong> e envie sua mensagem,
                            ficaremos contentes em atendê-lo.
                        </p>
                        <p>
                            Clique
                            <span onClick={handleScrollToForm}>aqui</span>
                        </p>
                    </div>
                    <div className={styles.contact_texts_item}>
                        <h2>
                            WhatsApp
                        </h2> 
                        <p>
                            Se preferir, entre conosco através do nosso <strong>WhatsApp</strong>.
                        </p>
                        <p>
                            Clique
                            <Link href="https://api.whatsapp.com/send/?phone=5511930809909&text&type=phone_number&app_absent=0">
                                aqui
                            </Link>
                        </p>
                    </div>
                    <div className={styles.contact_texts_item}>
                        <ul>
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
                                <Link href="https://www.youtube.com/channel/UCFacycfmcN-9HwOue4qE07Q" target="_blank">
                                    <FaYoutube color="white" />
                                </Link>
                            </li>
                                <li>
                                <Link href="https://br.linkedin.com/company/monomito-filmes" target="_blank">
                                    <AiFillLinkedin color="white" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contact_map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.914962645863!2d-46.40734638824965!3d-23.499572259238338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63839e822eb9%3A0xe9b4528271aec7d4!2sRua%20Ilha%20de%20S%C3%A3o%20Francisco%2C%20283%20-%20Vila%20Silva%20Teles%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008110-310!5e0!3m2!1spt-BR!2sbr!4v1718900952998!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}