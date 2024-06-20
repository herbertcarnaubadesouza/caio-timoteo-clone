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
                        src="/logo-prefeitura-sp.png"
                        alt="Prefeitura de São Paulo"
                        title="Prefeitura de São Paulo"
                        width={180}
                        height={55}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-sesc.png"
                        alt="SESC"
                        title="SESC"
                        width={110}
                        height={50}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-virada-cultural.png"
                        alt="Virada Cultural"
                        title="Virada Cultural"
                        width={140}
                        height={50}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-galpao.png"
                        alt="Galpão"
                        title="Galpão"
                        width={130}
                        height={70}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-empreendeai.png"
                        alt="Empreende Aí"
                        title="Empreende Aí"
                        width={170}
                        height={55}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-cactus.png"
                        alt="Cactus"
                        title="Cactus"
                        width={160}
                        height={100}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-iab-dn.png"
                        alt="Instituto de Arquitetos do Brasil"
                        title="Instituto de Arquitetos do Brasil"
                        width={170}
                        height={60}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-fundacao-perseu-abramo.jpg"
                        alt="Fundação Perseu Abramo"
                        title="Fundação Perseu Abramo"
                        width={200}
                        height={80}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-instituto-tomie-ohtake.png"
                        alt="Instituto Tomie Ohtake"
                        title="Instituto Tomie Ohtake"
                        width={140}
                        height={60}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-world-resources-institute.png"
                        alt="World Resources Institute"
                        title="World Resources Institute"
                        width={180}
                        height={50}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-tide.png"
                        alt="Função Tide Setubal"
                        title="Função Tide Setubal"
                        width={150}
                        height={80}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-gerandofalcoes.png"
                        alt="Gerando Falcões"
                        title="Gerando Falcões"
                        width={150}
                        height={60}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-google.png"
                        alt="Google"
                        title="Google"
                        width={160}
                        height={50}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-tiktok.png"
                        alt="TikTok"
                        title="TikTok"
                        width={160}
                        height={50}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-amazon.png"
                        alt="Amazon"
                        title="Amazon"
                        width={140}
                        height={40}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-firgun.png"
                        alt="Firgun"
                        title="Firgun"
                        width={160}
                        height={40}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-ifood.png"
                        alt="iFood"
                        title="iFood"
                        width={110}
                        height={50}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-carrefour.png"
                        alt="Carrefour"
                        title="Carrefour"
                        width={100}
                        height={70}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-globo.png"
                        alt="Globo"
                        title="Globo"
                        width={85}
                        height={70}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-banka.png"
                        alt="A Banka"
                        title="A Banka"
                        width={180}
                        height={110}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-netflix.png"
                        alt="Netflix"
                        title="Netflix"
                        width={130}
                        height={40}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-accor.png"
                        alt="Accor"
                        title="Accor"
                        width={100}
                        height={75}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-pg.png"
                        alt="P&G"
                        title="P&G"
                        width={100}
                        height={40}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-danone.png"
                        alt="Danone"
                        title="Danone"
                        width={120}
                        height={40}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/logo-paramount.png"
                        alt="Paramount"
                        title="Paramount"
                        width={155}
                        height={60}
                    />
                </div>
            </div>
        </section>
    )
}