"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src={"/moon.png"} alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", left: 1 }
            : { backgroundColor: "white", right: 1 }
        }
      ></div>
      <Image src={"/sun.png"} alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
