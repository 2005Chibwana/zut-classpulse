// The two developers shown in the "Meet the team" section.
// Edit the details here, then run `npm run check` to make sure no placeholder is left.
//   github           – GitHub username only (not the full link). The link is hidden until filled in.
//   responsibilities – what this person built
//   tasks            – the Jira keys this person owns
import chiyamikoPhoto from '../assets/team/chiyamiko-chibwana.jpg';
import barachPhoto from '../assets/team/barach-khosa.jpg';

export const team = [
  {
    name: 'Chiyamiko Chibwana',
    title: 'Lead developer',
    github: 'FILL_ME',
    photo: chiyamikoPhoto,
    responsibilities: [
      'Project setup, architecture and deployment',
      'Problem, solution and how-it-works content',
      'Contact section and responsive testing',
    ],
    tasks: ['SCH-1', 'SCH-4', 'SCH-5', 'SCH-6', 'SCH-10'],
    bio: 'Chiyamiko Chibwana is a Zambian software engineer and founder working between Lusaka and Ndola. He is the CEO and Co-Founder of SHDAI (Smart Health Digital AI), which builds clinical AI for healthcare, and the founder of Chiyamiko Bionics Holdings. He studies Software Engineering at Zambia University of Technology, where he is Lead Class Representative and Vice President of the A+ Coding Club. He is also a WCC Ecumenical Voices of Youth Ambassador, an AACC Youth Network member, and has served on the St. Peter’s Anglican Church media team since 2018.',
  },
  {
    name: 'Barach Khosa',
    title: 'UI designer and front-end developer',
    github: 'FILL_ME',
    photo: barachPhoto,
    responsibilities: [
      'Visual identity, hero and navigation',
      'Features, Today-screen preview and campus map',
      'Team section and photo gallery',
    ],
    tasks: ['SCH-2', 'SCH-3', 'SCH-7', 'SCH-8', 'SCH-9', 'SCH-11'],
    bio: 'Barach Khosa is a Software Engineering student based in Ndola, known for graphic design and web development. He holds a Grade 12 certificate, a certificate in ethical hacking, and a Cisco Ethical Hacking certificate.',
  },
];

// "Chiyamiko & Barach", used in the hero and footer.
export const teamFirstNames = team.map((member) => member.name.split(' ')[0]).join(' & ');
export const teamFullNames = team.map((member) => member.name).join(' and ');
