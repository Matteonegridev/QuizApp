type Questions = {
  id: number;
  question: string;
  options: string[];
  answer: string;
}[];

export const questions: Questions = [
  {
    id: 1,
    question: "Qual è l'obiettivo principale dell'economia circolare?",
    options: [
      "Ridurre i rifiuti e massimizzare l'uso delle risorse",
      "Aumentare la produzione di nuovi beni",
      "Promuovere prodotti monouso",
      "Massimizzare l'uso delle discariche",
    ],
    answer: "Ridurre i rifiuti e massimizzare l'uso delle risorse",
  },
  {
    id: 2,
    question:
      "Quale dei seguenti è un principio chiave dell'economia circolare?",
    options: [
      "Progettare per eliminare i rifiuti e l'inquinamento",
      "Aumentare il consumo di combustibili fossili",
      "Promuovere prodotti usa e getta",
      "Incoraggiare l'obsolescenza programmata",
    ],
    answer: "Progettare per eliminare i rifiuti e l'inquinamento",
  },
  {
    id: 3,
    question:
      "Come si chiama il processo di trasformazione dei materiali di scarto in nuovi materiali e oggetti?",
    options: ["Riciclo", "Discarica", "Incenerimento", "Compostaggio"],
    answer: "Riciclo",
  },
  {
    id: 4,
    question: "Quale dei seguenti materiali è comunemente riciclato?",
    options: ["Plastica", "Legno", "Ceramica", "Cemento"],
    answer: "Plastica",
  },
  {
    id: 5,
    question: "Cosa significa il termine 'upcycling'?",
    options: [
      "Trasformare i materiali di scarto in prodotti di valore superiore",
      "Bruciare i rifiuti per generare energia",
      "Seppellire i rifiuti nelle discariche",
      "Scomporre i rifiuti in materie prime",
    ],
    answer: "Trasformare i materiali di scarto in prodotti di valore superiore",
  },
  {
    id: 6,
    question: "Quale dei seguenti è un esempio di economia circolare?",
    options: [
      "Riparare e riutilizzare i prodotti",
      "Gettare i prodotti dopo un solo utilizzo",
      "Produrre nuovi beni da materie prime vergini",
      "Aumentare la produzione di rifiuti",
    ],
    answer: "Riparare e riutilizzare i prodotti",
  },
  {
    id: 7,
    question: "Qual è il vantaggio principale del riciclo?",
    options: [
      "Ridurre la quantità di rifiuti nelle discariche",
      "Aumentare il consumo di energia",
      "Promuovere l'uso di prodotti monouso",
      "Aumentare l'inquinamento",
    ],
    answer: "Ridurre la quantità di rifiuti nelle discariche",
  },
  {
    id: 8,
    question: "Quale dei seguenti materiali è più difficile da riciclare?",
    options: ["Plastica", "Vetro", "Carta", "Metallo"],
    answer: "Plastica",
  },
  {
    id: 9,
    question:
      "Qual è uno dei principali ostacoli all'adozione dell'economia circolare?",
    options: [
      "Mancanza di consapevolezza e educazione",
      "Disponibilità di risorse naturali",
      "Aumento della domanda di prodotti riciclati",
      "Riduzione dei costi di produzione",
    ],
    answer: "Mancanza di consapevolezza e educazione",
  },
];
