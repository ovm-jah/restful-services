var json = '{' +  // Cadena JSON en múltiples líneas
'"firstName": "Larson",' +
'"lastName": "Richard",' +
'"email": "larsonrichard@ecratic.com",' +
'"about": "Incididunt mollit cupidatat magna excepteur do tempor ex non ...",' +
'"company": "Ecratic",' +
'"tags": [' +
'"json",' +
'"rest",' +
'"api",' +
'"oauth"' +
'],' +
'"registered": true' +
'}';

// Deserializar la cadena JSON en un objeto speaker
var speaker = JSON.parse(json);

// Acceder a los datos del objeto speaker
console.log('speaker.firstName = ' + speaker.firstName);
