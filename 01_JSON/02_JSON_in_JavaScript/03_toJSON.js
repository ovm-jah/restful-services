/* El uso de toJSON() en un objeto puede ser útil en casos muy específicos, pero en la mayoría de las situaciones:
        Se recomienda evitarlo para no perder la flexibilidad de JSON.stringify().
        Es preferible usar replacer y space para modificar la salida sin perder la estructura del objeto. */

var speaker = {
    firstName: 'Larson',
    lastName: 'Richard',
    email: 'larsonrichard@ecratic.com',
    about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
    company: 'Ecratic',
    tags: ['json', 'rest', 'api', 'oauth'],
    registered: true
};

// Se agrega un método toJSON() personalizado
speaker.toJSON = function() {
    return "Hi there!";
}

console.log('speaker.toJSON(): ' + JSON.stringify(speaker, null, 2));
