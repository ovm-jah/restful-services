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
