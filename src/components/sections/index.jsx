import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import profile from "../../data/profile";
import education from "../../data/education";
import skillGroups from "../../data/skills";
import experience from "../../data/experience";
import useGithubRepos from "../../hooks/useGithubRepos";

/* ---------------------------------------------------------------- About -- */

export const About = ({ index }) => (
  <SectionShell id="about" index={index} title="About">
    <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      {profile.about.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </div>

    <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-rule pt-8 sm:grid-cols-2 dark:border-rule/10">
      <div>
        <dt className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Education
        </dt>
        <dd className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
          {education.degree}
        </dd>
        <dd className="text-sm text-slate-600 dark:text-slate-400">
          {education.school}
        </dd>
      </div>
      <div>
        <dt className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Honours
        </dt>
        {education.achievements.map((achievement) => (
          <dd
            key={achievement}
            className="mt-2 text-sm text-slate-700 dark:text-slate-300"
          >
            {achievement}
          </dd>
        ))}
      </div>
    </dl>
  </SectionShell>
);

/* --------------------------------------------------------------- Skills -- */

export const Skills = ({ index }) => (
  <SectionShell id="skills" index={index} title="Skills">
    <div className="divide-y divide-rule dark:divide-rule/10">
      {skillGroups.map((group, i) => (
        <Reveal key={group.id} delay={i * 60}>
          <div className="grid gap-4 py-7 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {group.label}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {group.caption}
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-x-6 gap-y-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 text-base text-slate-700 dark:text-slate-200"
                  >
                    <Icon
                      aria-hidden="true"
                      size={20}
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);

/* ----------------------------------------------------------- Experience -- */

export const Experience = ({ index }) => (
  <SectionShell id="experience" index={index} title="Experience">
    <ol className="divide-y divide-rule dark:divide-rule/10">
      {experience.map((role, i) => (
        <Reveal
          as="li"
          key={role.company}
          delay={i * 80}
          className="block py-8 first:pt-0"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {role.company}
            </h3>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              {role.start} — {role.end ?? "Present"}
            </p>
          </div>

          <p className="mt-1 flex items-center gap-2 text-base text-accent">
            {role.title}
            {role.current ? (
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            ) : null}
          </p>

          {role.highlights.length > 0 ? (
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              {role.highlights.map((highlight) => (
                <li key={highlight.slice(0, 40)} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-4 shrink-0 bg-rule-strong"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {role.tags.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
              {role.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      ))}
    </ol>
  </SectionShell>
);

/* ------------------------------------------------------------- Projects -- */

export const Projects = ({ index }) => {
  const { repos, status } = useGithubRepos(profile.githubUser);

  return (
    <SectionShell id="projects" index={index} title="Selected work">
      <ul className="divide-y divide-rule dark:divide-rule/10">
        {repos.map((project, i) => (
          <Reveal
            as="li"
            key={project.repo}
            delay={Math.min(i, 4) * 50}
            className="block"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-7 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl font-bold capitalize text-slate-900 transition-colors group-hover:text-accent dark:text-white">
                  {project.title}
                </h3>
                {project.stars > 0 ? (
                  <span className="flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <FaStar aria-hidden="true" className="text-amber-400" />
                    <span className="sr-only">Stars:</span>
                    {project.stars}
                  </span>
                ) : null}
                <FaArrowRight
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>

              {project.blurb ? (
                <p className="max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.blurb}
                </p>
              ) : null}

              {project.stack?.length ? (
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {project.stack.join(" · ")}
                </p>
              ) : project.language ? (
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {project.language}
                </p>
              ) : null}
            </a>
          </Reveal>
        ))}
      </ul>

      {status === "fallback" ? (
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          Showing a saved copy — GitHub could not be reached.
        </p>
      ) : null}
    </SectionShell>
  );
};

/* -------------------------------------------------------------- Contact -- */

export const Contact = ({ index }) => (
  <SectionShell id="contact" index={index} title="Get in touch">
    <p className="max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      Open to interesting problems and good teams. Email is the quickest way to
      reach me.
    </p>

    <a
      href={`mailto:${profile.email}`}
      className="mt-8 inline-flex items-center gap-3 border-b-2 border-accent pb-1 text-xl font-semibold text-slate-900 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-white sm:text-2xl"
    >
      <FaEnvelope aria-hidden="true" className="text-accent" />
      {profile.email}
    </a>

    <div className="mt-10 flex flex-wrap gap-8">
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-slate-300"
      >
        <FaLinkedin aria-hidden="true" size={18} />
        LinkedIn
      </a>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-slate-300"
      >
        <FaGithub aria-hidden="true" size={18} />
        GitHub
      </a>
    </div>
  </SectionShell>
);
