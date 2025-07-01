import React from 'react';
import styles from './page.module.scss';

export default function page() {
  return (
    <div className={`s-mx ${styles['privacy-e-cookie']}`}>
      <h3 className="mt-xl">Privacy policy e note legali</h3>

      <h4 className="mt-xl">1. Titolare del Trattamento</h4>
      <p className="mt-xxs">
        Il titolare del trattamento dei dati è:<br />
        Trattoria San Bernardo<br />
        Via Roma 1, 20081 Morimondo (MI) – Italia<br />
        Telefono: +39 02 4965 0597
      </p>

      <h4 className="mt-xl">2. Tipologie di dati raccolti</h4>
      <p className="mt-xxs">
        Il sito non raccoglie dati personali direttamente, ad eccezione del seguente caso:
      </p>
      <ul className="mt-xxs">
        <li>
          Dati di navigazione raccolti in forma anonima tramite strumenti di analisi come Vercel Analytics.
        </li>
      </ul>

      <h4 className="mt-xl">3. Finalità del trattamento</h4>
      <p className="mt-xxs">
        I dati raccolti vengono trattati per le seguenti finalità:
      </p>
      <ul className="mt-xxs">
        <li>Rispondere a richieste di prenotazione o contatto.</li>
        <li>Analisi del traffico web per migliorare la qualità e l’esperienza del sito (in forma anonima e aggregata).</li>
      </ul>

      <h4 className="mt-xl">4. Strumenti di tracciamento</h4>
      <p className="mt-xxs">
        Questo sito utilizza Vercel Analytics, un sistema di monitoraggio privacy-first che non utilizza cookie traccianti né raccoglie dati personali identificabili.<br />
        Non effettuiamo profilazione né inviamo pubblicità personalizzata.
      </p>

      <h4 className="mt-xl">5. Conservazione dei dati</h4>
      <p className="mt-xxs">
        I dati personali eventualmente inviati tramite modulo di contatto o prenotazione saranno conservati solo per il tempo necessario a fornire il servizio richiesto, e non verranno ceduti a terzi.
      </p>

      <h4 className="mt-xl">6. Diritti dell’utente</h4>
      <p className="mt-xxs">
        In qualsiasi momento, ai sensi degli articoli 15-22 del GDPR, l’utente ha diritto di:
      </p>
      <ul className="mt-xxs">
        <li>richiedere l’accesso ai propri dati;</li>
        <li>chiederne la rettifica o cancellazione;</li>
        <li>opporsi al trattamento;</li>
        <li>richiedere la portabilità dei dati.</li>
      </ul>

      <h4 className="mt-xl">7. Copyright</h4>
      <p className="mt-xxs">
        Tutti i contenuti presenti su questo sito web, incluse immagini, testi, loghi e recensioni, sono di proprietà esclusiva di Trattoria San Bernardo e sono protetti da copyright.<br />
        È vietata qualsiasi riproduzione, copia o utilizzo non autorizzato dei materiali, anche parziale.
      </p>

      <h4 className="mt-xl">8. Modifiche</h4>
      <p className="mt-xxs">
        Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con data di aggiornamento.
      </p>

      <p className="mt-xl">
        Ultimo aggiornamento: 1 luglio 2025
      </p>
    </div>
  );
};
