/* El uso de JSON.stringify() con los parámetros replacer y space permite:
    Mejorar la legibilidad del JSON con formato indentado.
    Filtrar datos específicos antes de la serialización.
    Controlar la estructura del JSON generado según nuestras necesidades. */

var speaker = {
    firstName: 'Larson',
    lastName: 'Richard',
    email: 'larsonrichard@ecratic.com',
    about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
    company: 'Ecratic',
    tags: ['json', 'rest', 'api', 'oauth'],
    registered: true
};

// Función `replacer` para eliminar Strings y Arrays de la salida
function serializeSpeaker(key, value) {
    return (typeof value === 'string' || Array.isArray(value)) ? undefined : value;
}

// Impresión con formato legible
console.log('Speaker (pretty print):\n' + JSON.stringify(speaker, null, 2) + '\n');

// Impresión filtrando Strings y Arrays
console.log('Speaker without Strings and Arrays:\n' +
    JSON.stringify(speaker, serializeSpeaker, 2));