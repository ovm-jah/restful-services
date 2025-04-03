/* JSON.stringify() convierte valores JavaScript en una cadena JSON válida.
    La función se aplica tanto a valores primitivos como a objetos y arreglos.
    En la salida, las cadenas están rodeadas por comillas dobles "", los arreglos aparecen con [], y los objetos se representan con {}.
    Este proceso de serialización es clave para enviar datos entre sistemas o almacenarlos en bases de datos o archivos. */

var age = 39; // Número entero
console.log('age = ' + JSON.stringify(age) + '\n');

var fullName = 'Larson Richard'; // Cadena de texto
console.log('fullName = ' + JSON.stringify(fullName) + '\n'); 

var tags = ['json', 'rest', 'api', 'oauth']; // Arreglo
console.log('tags = ' + JSON.stringify(tags) + '\n');

var registered = true; // Booleano
console.log('registered = ' + JSON.stringify(registered) + '\n');

var speaker = {  // Objeto literal
    firstName: 'Larson',
    lastName: 'Richard',
    email: 'larsonrichard@ecratic.com',
    about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
    company: 'Ecratic',
    tags: ['json', 'rest', 'api', 'oauth'],
    registered: true
};

console.log('speaker = ' + JSON.stringify(speaker));