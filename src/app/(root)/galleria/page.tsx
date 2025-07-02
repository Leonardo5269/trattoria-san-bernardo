"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { infos } from "@/features/infos";
import { IoIosCall } from "react-icons/io";
import FadeIn from "@/components/Animation/FadeIn";

const images = [
  // location
  "/location/esterno-1.jpg",
  "/location/esterno-2.jpg",
  "/location/esterno-3.jpg",
  "/location/esterno-4.jpg",
  "/location/esterno-5.jpg",
  "/location/esterno-6.jpg",
  "/location/esterno-7.jpg",
  "/location/esterno-8.jpg",
  "/location/esterno-9.jpg",
  "/location/interno-1.jpg",
  "/location/interno-2.jpg",
  "/location/interno-3.jpg",
  "/location/interno-4.jpg",
  "/location/interno-5.jpg",
  "/location/interno-6.jpg",
  "/location/interno-7.jpg",
  "/location/interno-8.jpg",
  "/location/interno-9.jpg",
  // menu
  "/menu/antipasto-1.jpg",
  "/menu/antipasto-2.jpg",
  "/menu/antipasto-3.jpg",
  "/menu/antipasto-4.jpg",
  "/menu/dolce-1.jpg",
  "/menu/dolce-3.jpg",
  "/menu/dolce-4.jpg",
  "/menu/primo-1.jpg",
  "/menu/primo-2.jpg",
  "/menu/primo-3.jpg",
  "/menu/primo-4.jpg",
  "/menu/primo-5.jpg",
  "/menu/primo-6.jpg",
  "/menu/secondo-1.jpg",
  "/menu/secondo-2.jpg",
  "/menu/vino-1.jpg",
  // piatti
  "/piatti/antipasto-1.jpg",
  "/piatti/antipasto-2.jpg",
  "/piatti/antipasto-3.jpg",
  "/piatti/dolce-1.jpg",
  "/piatti/primo-1.jpg",
  "/piatti/secondo-1.jpg",
  "/piatti/secondo-2.jpg",
  "/piatti/secondo-3.jpg",
  "/piatti/secondo-4.jpg",
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Chiude il lightbox se clicchi fuori dall'immagine
  const handleBackdropClick = () => setOpenIndex(null);

  return (
    <>
      {/* Sfondo scuro e click per chiudere */}
      {openIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1999,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
          }}
          onClick={handleBackdropClick}
        />
      )}

      <section className={`s-px ${styles["galleria"]}`}>
        {images.map((src, i) => (
          <FadeIn key={i} delay={0.2}>
            <div
              className={`${styles["container"]} ${
                openIndex === i ? styles["open"] : ""
              }`}
              onClick={openIndex === null ? () => setOpenIndex(i) : undefined}
              style={{ zIndex: openIndex === i ? 2000 : "auto" }}
            >
              <Image
                src={src}
                alt={`Galleria image ${i + 1}`}
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </FadeIn>
        ))}
      </section>
      <section className={`${styles.chiusura} s-px`}>
        <div className={styles["text-content"]}>
          <h2>Vieni e vivi un’esperienza da ricordare</h2>
          <p className="large mt-xl">Goditi i sapori della cucina</p>
          <a
            href={`tel:+39${infos.phone}`}
            className="btn-1li mt-xxl"
          >
            <IoIosCall />
            Prenota Ora
          </a>
        </div>
      </section>
    </>
  );
}