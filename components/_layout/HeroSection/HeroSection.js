// Ajouter use client pour indiquer que c'est un composant côté serveur
"use client";
import styles from "./HeroSection.module.scss";
import { useState, useEffect } from "react";
import Button from "../../Button/Button";

export default function HeroSection({ title, label, subTitle, bgImage }) {
  return (
    <section className={styles["hero-section-container"]}>
      <div
        className={styles["hero-section-text"]}
        style={{ "--bg-image": `url(${bgImage})` }}
      >
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <Button label={label} />
      </div>
    </section>
  );
}
