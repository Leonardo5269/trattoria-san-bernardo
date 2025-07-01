import React from "react";
import { IoIosCall } from "react-icons/io";
import styles from "./page.module.scss";
import { infos } from "@/features/infos";

export default function page() {
  return (
    <section className={`s-px ${styles.prenota}`}>
        <div className={`${styles["text-content"]}`}>
          <h1>Vieni a trovarci</h1>
          <p className="medium mt-xl">
           {`La Trattoria San Bernardo si affaccia direttamente sul piazzale dell'Abbazia di Morimondo, in una posizione unica e suggestiva con vista sul prato e sull’Abbazia.`}
          </p>
          <a
            href={`tel:+39${infos.phone}`}
            className="btn-1li mt-xxl"
          >
            <IoIosCall style={{ fontSize: "1.5rem", verticalAlign: "middle", marginRight: "8px"}} />
            Chiama Ora
          </a>
        </div>
        <div className={`${styles["image-content"]}`}>
          <iframe
            title="Mappa Trattoria San Bernardo"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2803.8006036482507!2d8.9519752!3d45.3528372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786e4259069ebd1%3A0xdff8089a708a4648!2sTrattoria%20San%20Bernardo!5e0!3m2!1sit!2sit!4v1750870565529!5m2!1sit!2sit"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </section>
  );
}