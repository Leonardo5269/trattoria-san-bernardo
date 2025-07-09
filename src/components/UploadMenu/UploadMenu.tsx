'use client';

import { useState } from 'react';
import styles from "@/components/UploadMenu/UploadMenu.module.scss"

export function UploadMenu() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/menu', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setStatus('Menu aggiornato con successo!');
    } else {
      setStatus(`Errore: ${data.error}`);
    }
  };

  return (
    <div className={``}>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button className="btn-1s mt-m" onClick={handleUpload} disabled={!file}>
        Carica menu
      </button>
      {status && <p className="mt-s">{status}</p>}
    </div>
  );
}
