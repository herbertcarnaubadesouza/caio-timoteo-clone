"use client"
import Image from "next/image";
import styles from "./styles.module.css"

export const SectionBrands = () => {
    return (
        <section className={styles.section_brands}>
            <div className={styles.section_brands_title}>
                <h2>
                    Trabalhamos com grandes marcas
                </h2>
            </div>
            <div className={styles.section_brands_wrapper}>
                <div className={styles.section_brands_item}>
                    <Image
                        fill
                        src="/logo-clientes.jpg"
                        alt="Logo clientes"
                        title="Logo clientes"
                        sizes="100vw"
                        width={0}
                        height={0}
                    />
                </div>
            </div>
        </section>
    )
}