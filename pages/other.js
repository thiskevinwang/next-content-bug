import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Other() {
  const one = "OTHER";
  return (
    <main>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1 className={styles.title}>
        <style jsx>{`
          --content: "${one}";
        `}</style>
        {one}
      </h1>
    </main>
  );
}
