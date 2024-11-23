// Función para generar un número aleatorio entre un rango
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  fetch('https://jsonplaceholder.typicode.com/users')   
  
    .then(response => response.json())
    .then(users => {
      const userList = document.getElementById('listaUsuarios');   
  
  
      users.forEach(user => {
        const { name, username, email, phone, company, address } = user;
        const age = getRandomInt(20, 60);
        const imgSrc = `./assets/img/${user.id}.jpeg`; 
       
        const userWithDetails = {
          name,
          age,
          username,
          imgSrc,
          phone,
          email,
          company: company.name, 
          address: `${address.street}, ${address.suite}, ${address.city}`
        };
  
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${userWithDetails.imgSrc}" alt="${userWithDetails.name}">
          <h2>${userWithDetails.name}</h2>
          <p>Edad: ${userWithDetails.age}</p>
          <p>Company: ${userWithDetails.company}</p>
          <p>Address: ${userWithDetails.street}</p>
          `;
        userList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });

