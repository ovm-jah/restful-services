var speaker = {
    firstName: 'Larson',
    lastName: 'Richard',
    email: 'larsonrichard@ecratic.com',
    about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
    company: 'Ecratic',
    tags: ['json', 'rest', 'api', 'oauth'],
    registered: true,
    
    // Método para obtener el nombre completo
    name: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  // Uso del objeto speaker
  console.log('Nombre completo del speaker: ' + speaker.name());