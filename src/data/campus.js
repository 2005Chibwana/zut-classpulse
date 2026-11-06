// Campus photos (gallery) and the buildings on the campus map.
// Photos live in src/assets/campus/. Map positions use the map's own grid (800 × 540).
import ictCentre from '../assets/campus/ict-centre.jpg';
import avenue from '../assets/campus/avenue.jpg';
import jacarandaAvenue from '../assets/campus/jacaranda-avenue.jpg';
import courtyard from '../assets/campus/courtyard.jpg';
import betweenClasses from '../assets/campus/between-classes.jpg';
import modernBlock from '../assets/campus/modern-block.jpg';
import redBrickBlock from '../assets/campus/red-brick-block.jpg';
import pavedPath from '../assets/campus/paved-path.jpg';

export const gallery = [
  { src: ictCentre, caption: 'ICT Centre of Excellence', alt: 'The ICT Centre of Excellence, a grey tiled building with red lettering, on a sunny day' },
  { src: avenue, caption: 'The tree-lined avenue', alt: 'A long dirt avenue shaded by tall green trees, with a student standing beside it' },
  { src: betweenClasses, caption: 'Between classes', alt: 'A student in a blue shirt and tie walking along a stone path between red-brick blocks' },
  { src: courtyard, caption: 'Courtyard walkway', alt: 'A paved walkway between neat yellow-green hedges, with red-brick blocks on each side' },
  { src: jacarandaAvenue, caption: 'Jacaranda season', alt: 'Jacaranda trees with purple blossom beside a white building and the main avenue' },
  { src: modernBlock, caption: 'Lawns after the rain', alt: 'A modern white building behind a wide green lawn under a cloudy sky' },
  { src: redBrickBlock, caption: 'Red-brick blocks', alt: 'A long two-storey red-brick building with a blue roof beside a road and lawn' },
  { src: pavedPath, caption: 'Paths across campus', alt: 'A paved path scattered with purple jacaranda petals leading to a white building' },
];

// tone: 'change' (amber), 'clash' (red), 'ok' (green), 'info' (blue)
// side: which side of the avenue the building is on, used for walking directions.
export const buildings = [
  {
    id: 'ict',
    name: 'ICT Centre of Excellence',
    label: 'ICT',
    kind: 'tech',
    x: 170, y: 100, w: 170, h: 130,
    side: 'north',
    photo: ictCentre,
    about: 'Computer labs and software engineering practicals.',
    status: { tone: 'ok', text: 'No changes posted today.' },
  },
  {
    id: 'block-c',
    name: 'Block C',
    label: 'Block C',
    kind: 'teaching',
    x: 380, y: 100, w: 160, h: 130,
    side: 'north',
    about: 'Teaching rooms, including Room 12.',
    status: { tone: 'change', text: 'BSE2201 moved here from LT2: Room 12, 08:00. Verified.' },
  },
  {
    id: 'lt',
    name: 'Lecture Theatres LT1–LT4',
    label: 'LT1–4',
    kind: 'teaching',
    x: 580, y: 100, w: 170, h: 130,
    side: 'north',
    about: 'The large lecture theatres used for first and second-year classes.',
    status: { tone: 'clash', text: 'Clash: MAT2201 and CSC2202 are both booked in LT4 at 14:00.' },
  },
  {
    id: 'hall',
    name: 'Main Hall',
    label: 'Main Hall',
    kind: 'hall',
    x: 170, y: 330, w: 200, h: 130,
    side: 'south',
    about: 'Exams, assemblies and large events.',
    status: { tone: 'change', text: 'Exam venue change: the BSE2201 test is now in the Main Hall, Friday 09:00.' },
  },
  {
    id: 'hostels',
    name: 'Student hostels',
    label: 'Hostels',
    kind: 'hostel',
    x: 570, y: 330, w: 180, h: 130,
    side: 'south',
    about: 'Where most students are when a change alert arrives.',
    status: { tone: 'info', text: 'Alerts reach students here before they leave for class.' },
  },
];

// The map's starting point ("You are here") and the road it follows.
export const gate = { x: 110, y: 515 };
export const avenueY = 280;
