/* Nunca uses eval() para analizar JSON, ya que puede ejecutar código malicioso y comprometer la seguridad de la aplicación.
 Siempre usa JSON.parse(), que es seguro, rápido y confiable para convertir cadenas JSON en objetos JavaScript. */

var x = '{ "sessionDate": "2014-10-06T13:30:00.000Z" }';

// Deserialización con eval()
console.log('Parse with eval(): ' + eval('(' + x + ')').sessionDate + '\n');

// Deserialización con JSON.parse()
console.log('Parse with JSON.parse(): ' + JSON.parse(x).sessionDate);

var x = '{ "sessionDate": new Date() }';

// eval() ejecuta la declaración JavaScript dentro del JSON
console.log('Parse with eval(): ' + eval('(' + x + ')').sessionDate + '\n');

// JSON.parse() rechaza la cadena porque no es JSON válido
console.log('Parse with JSON.parse(): ' + JSON.parse(x).sessionDate);
