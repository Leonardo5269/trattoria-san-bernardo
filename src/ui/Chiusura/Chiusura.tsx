"use client";

import React from "react";
import styles from "./Chiusura.module.scss";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { infos } from "@/features/infos";
import FadeIn from "@/components/Animation/FadeIn";

export default function Chiusura() {
  return (
    <FadeIn delay={0.4}>
      <section className={`s-px ${styles["chiusura"]}`}>
        <div className={`${styles["text-container"]}`}>
          <h2>Vieni e vivi un’esperienza da ricordare</h2>
          <p className="medium mt-regular">Godi dei sapori della cucina vissuta con passione</p>
          <a href={`tel:+39${infos.phone}`} className="btn-1li mt-xxl"><IoIosCall />Prenota ora</a>
        </div>
        <div className={`${styles["images-container"]}`}>
          <div className={`${styles["image-wrapper"]}`}>
            <Image
              src={"/location/interno-2.jpg"}
              alt="Esterno del ristorante"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>

          <div className={`${styles["image-wrapper"]}`}>
            <Image
              src={"/location/esterno-1.jpg"}
              alt="Esterno del ristorante"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>

          <div className={`${styles["image-wrapper"]}`}>
            <Image
              src={"/piatti/antipasto-1.jpg"}
              alt="Esterno del ristorante"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>

          <div className={`${styles["image-wrapper"]}`}>
            <Image
              src={"/location/interno-1.jpg"}
              alt="Esterno del ristorante"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </FadeIn>
  )
}