import React, { ReactNode } from "react";

interface SnapscrollElementsType {
  imgs: [string, string, string];
  title: string;
  description: ReactNode;
}

const snapscrollElements: SnapscrollElementsType[] = [
  {
    imgs: [
      "/location/esterno-6.jpg",
      "/location/interno-9.jpg",
      "/location/esterno-8.jpg"
    ],
    title: "Silenzio, natura e mura antiche",
    description: (
      <>
        Siamo a <strong>Morimondo</strong>, nel cuore del borgo. <br />
        Il glicine abbraccia il dehors, il profumo di legna e cucina ti coinvolgono immediatamente. <br />
        All’interno la sala arredata con gusto,
        con ampie vetrate che danno sui giardini per un’accoglienza che ti fa sentire atteso. <br />
        Non serviamo solo cibo, <strong>serviamo emozioni</strong>.
      </>
    ),
  },
  {
    imgs: [
      "/piatti/secondo-4.jpg",
      "/menu/vino-1.jpg",
      "/menu/primo-2.jpg"
    ],
    title: "Ogni piatto ha il suo complice",
    description: (
      <>
        La fusione tra i piatti della tradizione e la nostra <strong>scelta di vini</strong> è l’ingrediente segreto per un’esperienza suggestiva.<br />
        Rimarrai entusiasta di fronte alla ricca e ricercata scelta presente sulla carta dei vini.
      </>
    )
  },
  {
    imgs: [
      "/piatti/antipasto-1.jpg",
      "/menu/primo-6.jpg",
      "/menu/secondo-2.jpg"
    ],
    title: "Non è solo un pasto: è un rituale",
    description: (
      <>
        Ti lascerai trasportare da un flusso di emozioni: dalla scelta accurata delle <strong>materie prime</strong>,
        alla semplicità della <strong>tradizione</strong>, unita all’<strong>innovazione</strong> che cerca di trasmettere emozioni,
        non solo sapori, fino all’esaltazione culinaria servita con passione.
      </>
    )
  },
  {
    imgs: [
      "/location/esterno-10.jpg",
      "/menu/secondo-5.jpg",
      "/menu/secondo-6.jpg"
    ],
    title: "La carne, la nostra specialità",
    description: (
      <>
        Tagli generosi, scelti con cura minuziosa. Cotti sulla <strong>griglia a vista</strong>, dove il profumo ti avvolge e puoi vedere la passione in ogni gesto.
      </>
    )
  },
  {
    imgs: [
      "/menu/dolce-4.jpg",
      "/menu/dolce-3.jpg",
      "/menu/dolce-1.jpg"
    ],
    title: "Il finale perfetto non esiste",
    description: (
      <>
        Il <strong>dessert</strong> è la chiave per sigillare un’esperienza indimenticabile. L’ultimo bacio prima dei saluti.
      </>
    )
  }
];

export { snapscrollElements }
export type { SnapscrollElementsType }