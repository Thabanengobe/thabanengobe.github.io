
getFrontendSkills();
getbackEndSkills();

function togleMenu(){
  const menu = document.querySelector('.menu-icon');
  const mobile_links = document.querySelector(".mobile-links");

  menu.classList.toggle('open');
  mobile_links.classList.toggle('open');
}


function getFrontendSkills(){
  const skills_div = document.querySelector('.frontend');
  
  const frontend_skills = [
    ['CSS', 'Intermediate'], ['HTML', 'Experienced'], ['JavaScript', 'Intermediate'],
    ['React', 'Basic']
  ]

  addSkills(skills_div, frontend_skills);

}

function getbackEndSkills(){
  const skills_div = document.querySelector('.backend');
  
  const backend_skills = [
    ['Java', 'Intermediate'], ['Python', 'Experienced'], ['PostgreSQL', 'Basic'],
    ['Springboot', 'Basic'], ['Git', 'Experienced']
  ]

  addSkills(skills_div, backend_skills);


}

function addSkills(skills_div,skills){

  for (let skill in skills){

    const skill_article = document.createElement('article');
    skill_article.classList = 'skill';
    skill_article.appendChild(addCheckMark());
    skill_article.appendChild(addSkill(skills[skill]));
    skills_div.appendChild(skill_article);
  }

}

function addCheckMark(){
    const checkmark_div = document.createElement('div');
    const cherkmark = document.createElement('img');
    cherkmark.classList = 'icon';
    cherkmark.src = './assets/checkmark.png';
    cherkmark.alt =  'cherkmark';
    checkmark_div.appendChild(cherkmark);
    return checkmark_div;
}

function addSkill(skill){

  const skills = document.createElement('div');
  const skill_name = document.createElement('h3');
  const skill_level = document.createElement('p');
  skill.classList = 'skill';
  skill_name.innerText = skill[0];
  skill_level.innerText = skill[1];
  skills.appendChild(skill_name);
  skills.appendChild(skill_level);

  return skills;
  

}