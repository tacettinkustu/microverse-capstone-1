const speakers = [
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/51737508?v=4',
    name: 'Tacettin Kustu',
    organization: 'Full Stack Developer at Microverse',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image:
      'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg',
    name: 'Elon Musk',
    organization: 'CEO of Tesla',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const featuredSpeakers = document.querySelector('.speakers-list');



function loadSpeakers() {
  speakers.forEach((speaker,index) => {

    const speakerContainer = document.createElement('article');
    speakerContainer.className = index>=1?'flex-row-center':'flex-row-center speakers-display';
    featuredSpeakers.appendChild(speakerContainer);

    const speakerImage = document.createElement('img');
    speakerImage.src = `${speaker.image}`;
    speakerImage.alt = `Image of ${speaker.name}`;
    speakerImage.className = 'speaker-image';
    speakerContainer.appendChild(speakerImage);

    const speakerInfos = document.createElement('div');
    speakerInfos.className = 'speaker-infos';
    speakerContainer.appendChild(speakerInfos);

    const speakerName = document.createElement('h3');
    speakerName.className = 'light-black heading-small';
    speakerName.textContent = `${speaker.name}`;
    speakerInfos.appendChild(speakerName);

    const speakerOrganization = document.createElement('h4');
    speakerOrganization.className = 'dark-orange';
    speakerOrganization.textContent = `${speaker.organization}`;
    speakerInfos.appendChild(speakerOrganization);

    const speakerBackground = document.createElement('h4');
    speakerBackground.className = 'light-black';
    speakerBackground.textContent = `${speaker.background}`;
    speakerInfos.appendChild(speakerBackground);
  });
}

function eventListener() {
  featuredSpeakers.addEventListener('DOMContentLoaded', loadSpeakers());
}
eventListener();

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();
closeNav();
