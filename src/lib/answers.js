const answers = [
  {
    title: "Cos'è ReactJS?",
    options: ["Domanda aperta"],
    response:
      "Una libreria JavaScript per costruire interfacce con componenti riutilizzabili",
  },
  {
    title: "ReactJS è un framework, non una libreria.",
    options: ["Vero", "Falso"],
    response: "Falso",
  },
  {
    title: "Il file package.json contiene...",
    options: [
      "Informazioni non essenziali, può essere tranquillamente eliminato",
      "Solamente il nome e la versione dell'applicazione",
      "Molte informazioni utili, come ad esempio l'elenco di tutte le dipendenze richieste dall'applicazione",
      "Il primo componente React caricato all'avvio",
    ],
    response:
      "Molte informazioni utili, come ad esempio l'elenco di tutte le dipendenze richieste dall'applicazione",
  },
  {
    title:
      "create-react-app è l'unico modo possibile per creare un'applicazione React.",
    options: ["Vero", "Falso"],
    response: "Falso",
  },
  {
    title:
      "Qual è il comando da lanciare nel terminale per creare una nuova create-react-app con nome “test”?",
    options: [
      "npx create-react-app test",
      "npm create-react-app test",
      "npx create-react-app-test",
      "npx create-new-react-app test",
    ],
    response:
      "create-react-app è deprecato, per i nuovi progetti React si può utilizzare Vite con il comando: npm create vite@latest test e selezionado tra le varie librerie React",
  },
  {
    title: "Cos'è un componente React?",
    options: [
      "Una libreria che è necessario importare dentro l'applicazione",
      "Una pagina ben specifica all'interno dell'applicazione",
      "Un blocco di logica/contenuto riutilizzabile all'interno dell'applicazione",
      "Una landing page per l'applicazione",
    ],
    response:
      "Un blocco di logica/contenuto riutilizzabile all'interno dell'applicazione",
  },
  {
    title:
      "Un componente React può venire creato in tre modi: come funzione, classe o interfaccia.",
    options: ["Vero", "Falso"],
    response: "Falso",
  },
  {
    title:
      "Le props sono frammenti di informazione assegnati all'invocazione di un componente React, utili al fine di rendere il componente dinamico e più riutilizzabile.",
    options: ["Vero", "Falso"],
    response: "Vero",
  },
  {
    title:
      "Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è possibile fare il contrario",
    options: ["Vero", "Falso"],
    response: "Vero",
  },
  {
    title:
      "Da dove possono venire recuperate le props all'interno di un componente React creato come classe?",
    options: [
      "Sono proprietà contenute in un oggetto accessibile attraverso i parametri della funzione",
      "Possono essere recuperate all'interno dello oggetto 'this', dentro un sotto-oggetto chiamato 'props'",
      "Vengono applicate come proprietà dell'oggetto globale 'window'",
      "Vengono applicate come proprietà dell'oggetto 'document'",
    ],
    response:
      "Possono essere recuperate all'interno dello oggetto 'this', dentro un sotto-oggetto chiamato 'props'",
  },
]

export default answers
