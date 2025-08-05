// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreParticipantes =[];

function agregarParticipante() {
    let nombre = document.getElementById('nombreParticipante').value;
    
 if (nombre && nombre.trim() !== "" && /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.trim())
    ) {
        nombreParticipantes.push(nombre.trim());
        document.getElementById('nombreParticipante').value = '';
        actualizarListaAmigos();
    } else {
        alert('No ingresó un nombre o dejó el cuadro en blanco (ingrese solo texto).');
        document.querySelector('#nombreParticipante').value = ''

    }
}

function actualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ""; 
  nombreParticipantes.forEach(function(nombre) {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}
function sortearAmigo() {
  if (nombreParticipantes.length === 0) {
    alert("No hay amigos para elegir.");
    return;
  }
  
  const indiceAleatorio = Math.floor(Math.random() * nombreParticipantes.length);
  const nombreSorteado = nombreParticipantes[indiceAleatorio];

  
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ""; 
  const li = document.createElement('li');
  li.textContent = `El amigo secreto es: ${nombreSorteado}`;
  resultado.appendChild(li);

}
