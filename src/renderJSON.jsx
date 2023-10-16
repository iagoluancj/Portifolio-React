import jsonData from '../../assets/profile.json'

function renderSkills() {
    const skillsList = document.querySelector('.profile__Skills'); // Corrigido o seletor
  
    for (let i = 0; i < jsonData.skills.competencias.length; i++) {
      const li = document.createElement('li'); // Criar um elemento <li>
      li.textContent = jsonData.skills.competencias[i]; // Definir o conteúdo do <li>
      skillsList.appendChild(li); // Adicionar o <li> à lista de habilidades
    }
}

export default renderSkills