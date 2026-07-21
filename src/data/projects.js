/**
 * Featured work. Doubles as the offline fallback for the live GitHub list in
 * src/hooks/useGithubRepos.js — `repo` matches the GitHub repository name.
 *
 * Descriptions were drafted from each repository's README, language breakdown
 * and file tree. Correct anything that misrepresents the work.
 */
export const projects = [
  {
    repo: "Hotel",
    title: "Hotel Reservation System",
    subtitle: "“Mondstadt Hotel”",
    blurb:
      "A full hotel booking platform. Guests browse and reserve rooms, amend an existing reservation, pay by credit or debit card through Stripe, and receive an email receipt — registration optional. The admin side manages rooms, promotions, rate configuration, accounts, reservations and booking logs.",
    stack: ["Laravel", "PHP", "Blade", "Bootstrap", "Stripe", "MySQL"],
    url: "https://github.com/devsugoi/Hotel",
  },
  {
    repo: "Ticket-Queen",
    title: "Ticket Queen",
    subtitle: "Ticketing and reservations",
    blurb:
      "A ticket selling, booking and reservation system. The admin side implements full create/read/update/delete and sorting over events and their associated ticket inventory.",
    stack: ["Laravel", "PHP", "Blade", "JavaScript"],
    url: "https://github.com/devsugoi/Ticket-Queen",
  },
  {
    repo: "PLP-Library-Recommender-System-Machine-Learning-",
    title: "PLP Library Recommender",
    subtitle: "Capstone project",
    blurb:
      "A recommendation system for the university library's catalogue, suggesting titles to students from the library's own holdings and borrowing data.",
    stack: ["Laravel", "PHP", "Blade", "SCSS"],
    url: "https://github.com/devsugoi/PLP-Library-Recommender-System-Machine-Learning-",
  },
  {
    repo: "gym-monitoring-system",
    title: "Gym Monitoring System",
    subtitle: "Desktop application",
    blurb:
      "A Windows desktop application giving a fitness business the tools to manage schedules, memberships and facilities.",
    stack: ["Visual Basic .NET", "WinForms"],
    url: "https://github.com/devsugoi/gym-monitoring-system",
  },
  {
    repo: "MiHoyoverse-AutoCheckin",
    title: "MiHoYoverse Auto Check-in",
    subtitle: "Personal automation",
    blurb:
      "A small scheduled script that performs daily check-ins automatically. A side project I keep maintained.",
    stack: ["Python"],
    url: "https://github.com/devsugoi/MiHoyoverse-AutoCheckin",
  },
];

/** Repos never worth surfacing in the live list (forks, course material). */
export const excludedRepos = [
  "magandangusername",
  "FirstRepo",
  "flight",
  "devsugoi.github.io",
];

export default projects;
