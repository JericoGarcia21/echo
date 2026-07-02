import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Smartphone,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { certifications, experience, profile, projects, skills } from '../data/portfolio';
import './AppV2.css';

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

const engineeringPrinciples = [
  'Start with what the user needs.',
  'Keep the code organized and easy to update.',
  'Build features that are simple to use.',
];

const deliverySignals = [
  { label: 'Main Focus', value: 'Web + Mobile' },
  { label: 'Work Style', value: 'Simple and practical' },
  { label: 'Strength', value: 'Frontend, backend, and mobile' },
];

function AppV2() {
  return (
    <main className="v2-shell">
      <nav className="v2-nav" aria-label="Main navigation">
        <a className="v2-brand" href="/">
          <span className="v2-brand-mark">E</span>
          <span>
            {profile.handle}
            <small>Portfolio V2</small>
          </span>
        </a>
        <div className="v2-nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a className="v2-version-link" href={profile.links.v1}>V1</a>
        </div>
      </nav>

      <section className="v2-hero">
        <div className="v2-hero-copy">
          <div className="v2-kicker">
            <Sparkles size={16} />
            Portfolio V2
          </div>
          <h1>{profile.name}</h1>
          <div className="v2-hero-title">
            <span>{profile.title}</span>
            <strong>Web <i aria-hidden="true" /> Mobile</strong>
          </div>
          <p className="v2-hero-summary">
            I build websites and mobile apps with clean layouts, useful features,
            and code that is easy to maintain.
          </p>
          <div className="v2-hero-actions">
            <a className="v2-button primary" href="#projects">
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a className="v2-button secondary" href={profile.links.email}>
              Contact Me
              <Mail size={18} />
            </a>
          </div>
          <p className="v2-v1-callout">
            If you want to see the Version 1 portfolio, <a href={profile.links.v1}>click here</a>.
          </p>
          <div className="v2-meta-row" aria-label="Profile highlights">
            <span><MapPin size={15} />{profile.location}</span>
            <span><BriefcaseBusiness size={15} />{profile.availability}</span>
            <span><GraduationCap size={15} />MIT Candidate</span>
          </div>

          <div className="v2-build-modes" aria-label="Development focus">
            <article>
              <Globe2 size={20} />
              <span>Websites</span>
              <strong>React pages, dashboards, portfolios, and web apps</strong>
            </article>
            <article>
              <Smartphone size={20} />
              <span>Mobile Apps</span>
              <strong>Flutter apps connected with Firebase and APIs</strong>
            </article>
            <article>
              <Cpu size={20} />
              <span>Backend</span>
              <strong>APIs, databases, and simple backend features</strong>
            </article>
          </div>
        </div>

        <aside className="v2-workbench" aria-label="Developer profile workbench">
          <div className="v2-profile-panel">
            <div className="v2-photo-wrap">
              <img src={profile.image} alt={profile.name} />
            </div>
            <div>
              <p className="v2-panel-eyebrow">Currently</p>
              <h2>{profile.subtitle}</h2>
              <p>Building web and mobile projects, plus tools for learning and teaching.</p>
            </div>
            <div className="v2-socials">
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
              <a href={profile.links.email} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="v2-console-card">
            <div className="v2-console-bar">
              <span />
              <span />
              <span />
              <strong>echo://profile</strong>
            </div>
            <div className="v2-console-body">
              <p><span>$</span> load portfolio</p>
              <p>website + mobile project showcase</p>
              <p><span>$</span> current mode</p>
              <p className="success">open for selected projects</p>
            </div>
          </div>

          <div className="v2-stack-rail" aria-label="Core stack snapshot">
            <span>React</span>
            <span>Flutter</span>
            <span>Laravel</span>
            <span>Node</span>
            <span>Firebase</span>
            <span>MongoDB</span>
          </div>
        </aside>
      </section>

      <section className="v2-section v2-engineering-overview" aria-label="Engineering overview">
        <div className="v2-lead-panel">
          <span><Terminal size={16} /> Profile</span>
          <h2>I build practical web and mobile projects.</h2>
          <p>
            This portfolio shows the projects I have built, the tools I use,
            and the kind of work I enjoy doing.
          </p>
        </div>
        <div className="v2-signal-grid">
          {deliverySignals.map((signal) => (
            <article key={signal.label}>
              <small>{signal.label}</small>
              <strong>{signal.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-stats" aria-label="Portfolio metrics">
        <div>
          <strong>{projects.length}+</strong>
          <span>Portfolio projects</span>
        </div>
        <div>
          <strong>{skills.reduce((total, group) => total + group.items.length, 0)}+</strong>
          <span>Technologies and tools</span>
        </div>
        <div>
          <strong>{certifications.length}</strong>
          <span>Certifications</span>
        </div>
      </section>

      <section className="v2-section v2-focus-strip" aria-label="Core services">
        <article>
          <MonitorSmartphone size={22} />
          <h3>Web Interfaces</h3>
          <p>Responsive pages and app screens that are clean and easy to use.</p>
        </article>
        <article>
          <Database size={22} />
          <h3>Web Apps</h3>
          <p>Apps with frontend, backend, database, and API features.</p>
        </article>
        <article>
          <Terminal size={22} />
          <h3>Learning Tools</h3>
          <p>Projects that help with teaching, practice, and everyday tasks.</p>
        </article>
      </section>

      <section className="v2-section" id="projects">
        <div className="v2-section-heading">
          <span><Rocket size={16} /> Projects</span>
          <h2>Some projects I have worked on.</h2>
        </div>

        <div className="v2-featured-grid">
          {featuredProjects.map((project, index) => (
            <article className="v2-project-card featured" key={project.title}>
              <div className="v2-project-index">0{index + 1}</div>
              <div className="v2-project-meter" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="v2-card-topline">
                <span>{project.type}</span>
                <Code2 size={18} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="v2-tags">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <ul className="v2-project-points">
                <li><CheckCircle2 size={15} /> Useful features</li>
                <li><CheckCircle2 size={15} /> Clean project structure</li>
              </ul>
              <div className="v2-card-links">
                {project.links.map((link) => (
                  <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                    {link.label}
                    <ExternalLink size={15} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="v2-project-list">
          {otherProjects.map((project) => (
            <article className="v2-project-row" key={project.title}>
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="v2-tags compact">
                {project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-principles" aria-label="Engineering principles">
        <div className="v2-section-heading">
          <span><Cpu size={16} /> Work Approach</span>
          <h2>How I like to build projects.</h2>
        </div>
        <div className="v2-principle-grid">
          {engineeringPrinciples.map((principle, index) => (
            <article key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-two-column" id="skills">
        <div className="v2-section-heading">
          <span><Code2 size={16} /> Skills</span>
          <h2>Technologies I use for web, mobile, and support work.</h2>
        </div>
        <div className="v2-skill-grid">
          {skills.map((group) => (
            <article className="v2-skill-card" key={group.group}>
              <h3>{group.group}</h3>
              <div className="v2-tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-two-column" id="experience">
        <div className="v2-section-heading">
          <span><BriefcaseBusiness size={16} /> Experience</span>
          <h2>Experience in teaching and building projects.</h2>
        </div>
        <div className="v2-timeline">
          {experience.map((item) => (
            <article className="v2-timeline-item" key={`${item.role}-${item.company}`}>
              <div className="v2-timeline-date">{item.period}</div>
              <h3>{item.role}</h3>
              <p className="v2-company">{item.company}</p>
              <p>{item.description}</p>
              <div className="v2-tags compact">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section" id="certifications">
        <div className="v2-section-heading">
          <span><Award size={16} /> Certifications</span>
          <h2>Certificates and test results.</h2>
        </div>
        <div className="v2-cert-grid">
          {certifications.map((cert) => (
            <article className="v2-cert-card" key={cert.title}>
              <img src={cert.image} alt={`${cert.title} certificate`} />
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.subtitle}</p>
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-contact" id="contact">
        <div>
          <span className="v2-contact-label">Want to work together?</span>
          <h2>Open to web, mobile, portfolio, and teaching-related projects.</h2>
        </div>
        <div className="v2-contact-actions">
          <a className="v2-button primary" href={profile.links.email}>
            Send Email
            <Mail size={18} />
          </a>
          <a className="v2-button secondary" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
            <Github size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default AppV2;
