# ZUT ClassPulse

**The Self-Updating Timetable and Class-Alert Hub**
_Know where your next class really is, before you walk there._

BSE2201 Software Engineering Foundations, group assignment, Zambia University of Technology (ZUT).

**Live site:** https://zut-classpulse.vercel.app

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

This repository contains the project's **landing page** only. It includes an interactive
walkthrough of the five steps, a static picture of the planned Today screen, a simple
"digital twin" campus map (tap a building, then "Take me there") and a campus photo gallery.
None of it is a working timetable system: there is no login, database or backend.

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

| Name | Role | Student number | GitHub | Jira keys | Built |
|------|------|----------------|--------|-----------|-------|
| Chiyamiko Chibwana | Lead developer | FILL_ME | FILL_ME | SCH-1, SCH-4, SCH-5, SCH-6, SCH-10 | Project setup, architecture and deployment; problem, solution and how-it-works sections; contact section and responsive testing |
| Barach Khosa | UI designer and front-end developer | FILL_ME | FILL_ME | SCH-2, SCH-3, SCH-7, SCH-8, SCH-9, SCH-11 | Visual identity, hero and navigation; features, Today-screen preview and campus map; team section and photo gallery |

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
    ├── assets/team/            Square photos of the two developers, imported in team.js.
    ├── assets/campus/          Campus photos for the hero, gallery, map and team banners.
    ├── assets/covers/          16:10 photo covers for the problem and feature cards.
    ├── data/
    │   ├── site.js             Tagline, course details, repo link and contact links (edit here).
    │   ├── team.js             The two developers: name, role, bio, photo, GitHub, Jira keys (edit here).
    │   └── campus.js           Gallery photos and the buildings on the campus map (edit here).
    ├── styles/
    │   ├── theme.css           Every colour, font, radius and shadow, defined once.
    │   └── global.css          Page reset, layout helpers, headings and button styles.
    └── components/
        ├── Icon.jsx            All inline SVG icons used on the page.
        ├── Navbar.jsx/.css     SCH-2: sticky top bar; highlights the current section; full-width phone menu.
        ├── Hero.jsx/.css       SCH-3: team name, system name, tagline and the two main buttons.
        ├── Problem.jsx/.css    SCH-4: the timetable problem, who it affects and why it matters.
        ├── Solution.jsx/.css   SCH-5: system name, purpose, users and how it fixes the problem.
        ├── HowItWorks.jsx/.css SCH-6: interactive five-step walkthrough (auto-plays) and the Phase 2 card.
        ├── Features.jsx/.css   SCH-7: eight feature cards with benefits (swipeable on phones).
        ├── DesignPreview.jsx/.css SCH-8: static phone picture of the Today screen.
        ├── CampusMap.jsx/.css  SCH-11: clickable campus map with live status and "Take me there" routes.
        ├── Gallery.jsx/.css    SCH-11: campus photo grid (swipe row on phones) with a full-size viewer.
        ├── Team.jsx/.css       SCH-9: profile cards for the two developers, read from team.js.
        ├── BackToTop.jsx/.css  Round "back to top" button that appears after scrolling.
        ├── Contact.jsx/.css    SCH-10: email, WhatsApp and GitHub contact buttons, read from site.js.
        └── Footer.jsx/.css     SCH-2: team name, ZUT, BSE2201, year and contact link.
```

## Project management with Jira

We (Chiyamiko Chibwana and Barach Khosa) used **Jira** as our project management and
collaboration tool.

- **We created a project.** All our work lives in the Jira project **ZUT class pulse (ZCP)**,
  with one epic for the landing page.
- **We divided the work into smaller tasks.** The epic is split into one story per part of the
  site (setup and deployment, navigation and footer, hero, problem, solution, how it works,
  features, Today-screen preview, team, contact, campus map and gallery).
- **We assigned tasks to team members.** Each story has an owner. Chiyamiko took setup,
  deployment and the content sections; Barach took the visual design and the interactive
  sections. The *Team responsibilities* table above shows who owned what.
- **We tracked progress on a Kanban board.** Our board has three columns: **To Do**,
  **In Progress** and **Done**. We moved each card across the board as the work moved forward,
  so we could both see the state of the project at a glance.
- **We set deadlines and priorities.** Each task has a due date and a priority, so we always
  knew what to work on first and what was due next.
- **We communicated through comments.** Questions, review notes and decisions about a task were
  written as comments on its Jira card, so the discussion stayed next to the work.
- **We linked Jira to GitHub.** Branches, commits and pull requests start with the Jira key, so
  each card shows its code under **Development** (see *Git workflow* below).

**What it gave us:** clear responsibilities, an easy way to monitor progress, and better
teamwork, because each of us always knew what the other was doing and what was left.

## Git workflow

- Each developer works on their own branch named after their Jira key, e.g. `SCH-4-problem-section`.
- Commit messages start with the key: `SCH-4: add problem section content`.
- Pull request titles start with the key too: `SCH-4: Problem section`.
- The other developer reviews every pull request before it is merged into `main`.
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
- [ ] Both developers' names, photos and GitHub links appear and work.
- [ ] Contact link (email and/or WhatsApp) works on the live site.
- [ ] Logo and icons load; no broken images.
- [ ] Checked at phone, tablet and desktop widths with no sideways scrolling.
- [ ] README has overview, technologies, setup, live link and team responsibilities.
