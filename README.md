# ZUT ClassPulse

**The Self-Updating Timetable and Class-Alert Hub**
_Know where your next class really is, before you walk there._

BSE2201 Software Engineering Foundations, group assignment, Zambia University of Technology (ZUT).

**Live site:** FILL_ME (paste the Vercel link here after deploying)

---

## Project overview

At ZUT, students lose time and marks because of timetable clashes, room changes, lecturer
cancellations and exam venue confusion. Updates are scattered across WhatsApp groups,
noticeboards and word of mouth, and class reps and lecturers have no simple way to push a
verified change to the right students.

**ZUT ClassPulse** is our proposed fix:

- A student picks programme, year and group and gets a personal daily timetable.
- Class reps and lecturers post changes (for example "LT2 moved to Block C Room 12").
- A change goes live only after a second rep or lecturer, or several students, confirm it.
- Students see a simple Today screen and get SMS or WhatsApp-style alerts for their group.
- A clash detector flags two classes at the same time or in the same room.
- Coming next (Phase 2): room-code lookup and a "Take me there" campus map link.

**Intended users:** ZUT students, class representatives and lecturers.

This repository contains the project's **landing page** only. The Today screen in the
"Design preview" section is a static picture, not a working app.

## Technologies

| Tool | Why we use it |
|------|---------------|
| [React 18](https://react.dev) | Builds the page from small, reusable components (one per section). |
| [Vite](https://vite.dev) | Runs the local dev server and builds the site for deployment. |
| Plain CSS + CSS variables | Styling, with all colours and fonts defined once in `src/styles/theme.css`. |
| Google Fonts | Plus Jakarta Sans (headings) and Inter (body text). |
| Inline SVG icons | Icons drawn in code, so they never fail to load. |
| Vercel | Free static hosting with a public link and no login. |
| GitHub + Jira | Version control, pull-request reviews and task tracking. |

## Setup instructions

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone https://github.com/emmanuelkasuba/zut-classpulse.git
cd zut-classpulse
npm install        # install dependencies (first time only)
npm run dev        # start the site at http://localhost:5173
```

Other commands:

```bash
npm run build      # build the production site into dist/
npm run preview    # preview the built site locally
npm run check      # fail if any placeholder text is still left
```

## Team responsibilities

| # | Name | Student number | GitHub | Jira key | Responsibility |
|---|------|----------------|--------|----------|----------------|
| 1 | Chiyamiko Chibwana | FILL_ME | FILL_ME | SCH-1 | Project setup, README and deployment |
| 2 | FILL_ME | FILL_ME | FILL_ME | SCH-2 | Navigation bar and footer |
| 3 | Barach Khosa | FILL_ME | FILL_ME | SCH-3 | Hero section and visual identity |
| 4 | FILL_ME | FILL_ME | FILL_ME | SCH-4 | Identified problem section |
| 5 | FILL_ME | FILL_ME | FILL_ME | SCH-5 | Proposed system section |
| 6 | FILL_ME | FILL_ME | FILL_ME | SCH-6 | How it works section |
| 7 | FILL_ME | FILL_ME | FILL_ME | SCH-7 | Features and benefits section |
| 8 | FILL_ME | FILL_ME | FILL_ME | SCH-8 | Today-screen design preview |
| 9 | FILL_ME | FILL_ME | FILL_ME | SCH-9 | Team section |
| 10 | FILL_ME | FILL_ME | FILL_ME | SCH-10 | Contact section and responsive QA |

## Project structure (one sentence per file)

```
zut-classpulse/
├── index.html                  Page shell: title, description, favicon and Google Fonts.
├── package.json                Project name, dependencies and npm commands.
├── vite.config.js              Turns on React support in Vite.
├── public/
│   ├── favicon.png             Small ZUT logo shown in the browser tab.
│   └── apple-touch-icon.png    ZUT logo used when the site is saved to a phone home screen.
├── scripts/
│   └── check-placeholders.js   `npm run check`: lists any placeholder text still left.
└── src/
    ├── main.jsx                Starts React and loads the global styles.
    ├── App.jsx                 Puts every section on the page in order.
    ├── assets/zut-logo.jpg     The ZUT logo used in the nav bar, hero and footer.
    ├── assets/team/            Square team photos, imported in team.js.
    ├── data/
    │   ├── site.js             Team name, tagline, course details and contact links (edit here).
    │   └── team.js             The 10 team members: name, GitHub, Jira key, role (edit here).
    ├── styles/
    │   ├── theme.css           Every colour, font, radius and shadow, defined once.
    │   └── global.css          Page reset, layout helpers, headings and button styles.
    └── components/
        ├── Icon.jsx            All inline SVG icons used on the page.
        ├── Navbar.jsx/.css     SCH-2: sticky top bar with section links and a mobile menu.
        ├── Hero.jsx/.css       SCH-3: team name, system name, tagline and the two main buttons.
        ├── Problem.jsx/.css    SCH-4: the timetable problem, who it affects and why it matters.
        ├── Solution.jsx/.css   SCH-5: system name, purpose, users and how it fixes the problem.
        ├── HowItWorks.jsx/.css SCH-6: the five-step flow and the Phase 2 "Coming next" card.
        ├── Features.jsx/.css   SCH-7: eight feature cards, each with its benefit.
        ├── DesignPreview.jsx/.css SCH-8: static phone picture of the Today screen.
        ├── Team.jsx/.css       SCH-9: cards for all 10 members, read from team.js.
        ├── Contact.jsx/.css    SCH-10: email and WhatsApp buttons, read from site.js.
        └── Footer.jsx/.css     SCH-2: team name, ZUT, BSE2201, year and contact link.
```

## Git workflow

- Each member works on their own branch named after their Jira key, e.g. `SCH-4-problem-section`.
- Commit messages start with the key: `SCH-4: add problem section content`.
- Pull request titles start with the key too: `SCH-4: Problem section`.
- A teammate reviews every pull request before it is merged into `main`.
- After pushing, check that the branch, commits and pull request show under **Development** on
  the Jira ticket.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import `zut-classpulse`.
4. Vercel detects **Vite** automatically (build command `npm run build`, output folder `dist`).
   Click **Deploy**.
5. When it finishes, copy the production link (e.g. `https://zut-classpulse.vercel.app`).
6. Open it in a private/incognito window to confirm it loads **without a login**. If it asks
   you to log in, go to **Project → Settings → Deployment Protection** and turn off
   Vercel Authentication.
7. Paste the link into the **Live site** line at the top of this README and commit it.

Every push to `main` redeploys the site automatically.

## Final checklist

- [ ] `npm run check` passes (no placeholder text left).
- [ ] Live link opens without a login, on phone and desktop.
- [ ] Every nav link scrolls to its section; the mobile menu opens and closes.
- [ ] All 10 members, names and GitHub links appear and work.
- [ ] Contact link (email and/or WhatsApp) works on the live site.
- [ ] Logo and icons load; no broken images.
- [ ] Checked at phone, tablet and desktop widths with no sideways scrolling.
- [ ] README has overview, technologies, setup, live link and team responsibilities.
