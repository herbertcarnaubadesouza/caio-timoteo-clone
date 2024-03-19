import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.center}>
        <Image
          src="/logo_monomito.svg"
          alt="Monomito Filmes Logo"
          width={500}
          height={500}
          priority
        />
      </div>
    </main>
  );
}
