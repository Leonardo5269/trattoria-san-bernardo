import React from 'react';
import styles from './Topbar.module.scss';
import Circle from '@/components/Button/Circle/Circle';
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { LuClock } from "react-icons/lu";
import { infos, socials } from '@/features/infos';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className={`${styles.topbar} s-px`}>
      <ul>
        <li>
          <Circle Icon={IoCallOutline} href={`tel:${infos.phone}`} classname={styles.circle} />
          <a className={`${styles.text} simple-link`} href={`tel:${infos.phone}`} target='_blank'>{infos.phone}</a> 
        </li>
        <li className={styles['not-mobile']}>
          <Circle Icon={IoMailOutline} href={`mailto:${infos.email}`} classname={styles.circle} />
          <a className={`${styles.text} simple-link`} href={`mailto:${infos.email}`} target='_blank'>{infos.email}</a> 
        </li>
        <li className={styles['not-mobile']}>
          <Circle Icon={IoLocationOutline} href={infos.site.url} classname={styles.circle} />
          <a className={`${styles.text} simple-link`} href={infos.site.url} target='_blank'>{infos.site.text}</a> 
        </li>
        <li className={styles['not-mobile']}>
          <Circle Icon={LuClock} classname={styles.circle} />
          <span className={styles.text}>{infos.timetable.open.days}: {infos.timetable.open.hours}</span> 
        </li>
        <li className={styles.socials}>
          <a href={socials.facebook} target='blank'><Circle Icon={FaFacebook} classname={styles.circle} /></a>
          <a href={socials.instagram} target='blank'><Circle Icon={FaInstagram} classname={styles.circle} /></a>
        </li>
      </ul>
    </div>
  );
};
