'use client';

import { useState } from 'react';
import styles from './UploadMenu.module.scss';
import { FaRegFilePdf } from 'react-icons/fa6';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Loader from '../Loader/Loader';

export function UploadMenu() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setIsLoading(true);

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

    setIsLoading(false);
  };

  return (
    <div className={styles['upload-menu']}>
      <div className={styles.uploader}>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          id='uploader'
        />  
        {
          file?.name
          ? <FileUploaded fileName={file.name} />
          : <UploadFile />
        }
      </div>
      {file && <button className="btn-1s mt-xl" onClick={handleUpload} disabled={isLoading}>
        {isLoading ? <Loader /> : 'Carica'}
      </button>}
      {status && <p className="mt-s">{status}</p>}
    </div>
  );
}

function UploadFile() {
  return (
    <>
      <FaCloudUploadAlt />
      <label htmlFor="uploader">Inserire menu</label>
    </>
  )
}
function FileUploaded({ fileName }: { fileName: string }) {
  return (
    <>
      <FaRegFilePdf />
      <label htmlFor="uploader">{fileName}</label>
    </>
  )
}