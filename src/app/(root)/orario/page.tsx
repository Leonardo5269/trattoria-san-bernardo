import React from "react";
import styles from "./page.module.scss";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { infos } from "@/features/infos";

export default function page() {
  return (
    <section className={`s-px ${styles["orari"]}`}>
      <div className={`${styles["card"]}`}>
        <RiCalendarScheduleFill />
        <div className={`${styles["orari-info"]}`}>
          <p className="large">
            <span className="mt-xl font-weight-semibold large">{infos.timetable.open.days}</span>
            <br />
              {infos.timetable.open.hours}
            <br />
            <span className="mt-xxl font-weight-semibold large">{infos.timetable.close.days}</span>
            <br />
            Chiuso
          </p>
        </div>
      </div>
      <div className={`${styles["text"]}`}>
        <h2>Orari di apertura</h2>
        <p className="mt-l large">
          Vieni a trovarci nei nostri orari di apertura: ti aspettiamo per pranzo, cena o semplicemente per goderti l’atmosfera unica davanti all’Abbazia.
        </p>
        <a href={`tel:+39${infos.phone}`} className="btn-1l mt-xxl">Prenota Ora</a>
      </div>
    </section>
  );
}