import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
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
    </header>
  );
};

export default Header;
