"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/kreattix-colors-logo.svg"
          alt=""
          width={180}
          height={24}
        />
      </div>
      <ul className={styles.navigation}>
        <li>
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/color-picker" ? "active" : ""}`}
            href={"/color-picker"}
          >
            Color Picker
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
