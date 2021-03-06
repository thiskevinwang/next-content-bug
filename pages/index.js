import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const one = "HOME";
  return (
    <main>
      <Link href="/other">
        <a>Other</a>
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
