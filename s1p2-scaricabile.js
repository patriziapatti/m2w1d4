/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*In JavaScript i data type o dati primitivi rappresentano i valori più semplici ed elementari. Sono di 6 tipi:

1) Numeri: sono valori numerici in cifre -anche decimali- compresi tra e-(253 -1) e +(253 -1); si indicano senza apici e possono essere usati anche per le operazioni matematiche. Esistono dei valori speciali come +infinity e -infinity che servono a gestire operazioni come 50/0; e NaN (not a number) per operazioni dove uno degli elementi non è un numero. 

2) String: sequenza di caratteri inseriti tra apici o doppi apici, possono avere lunghezza libera da 0 caratteri in su. Anche la coppia di apici non contenente testo è comunque un dato di tipo string.

3) Boolean: sono utilizzati per esprimere condizioni logiche e rappresentano solo 2 valori: Vero o Falso.

4) Undefined e Null: il primo rappresenta una variabile a cui non è mai stato assegnato un valore; il secondo rappresenta una variabile esplicitatamente lasciata vuota o svuotata.

5) BinInt: sono numeri molto grandi.

6) Symbol: sono entità fisse all'interno di funzioni. 

 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Gli oggetti fanno parte della categoria dei dati strutturali. Sono costituiti da raccolte di coppie chiave-valore, come ad esempio: "nome": "Patrizia", "cognome": Patti, "età": 36, come dei gruppi di variabili che descrivono la stessa entità. 
Servono per rappresentare concetti più complessi di singoli numeri o stringhe di testo.  */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let num12 = 12
let num20 = 20
let risultato = num12 + num20 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12 */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = 'Patrizia' */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let num4 = 4
risultato = x - num4 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* let name1 = 'john'
let name2 = 'John'

console.log(name1 !== name2)

console.log(name1.toLowerCase === name2.toLowerCase)
*/

