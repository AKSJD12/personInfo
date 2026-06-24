import { profile } from './data/profile';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const { name, title, subtitle, bio, stats, skills, projects, contact, footer } = profile;

  return (
    <>
      <Navigation name={name} />
      <Hero name={name} title={title} subtitle={subtitle} />
      <About bio={bio} stats={stats} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact email={contact.email} github={contact.github} />
      <Footer name={name} year={footer.year} tech={footer.tech} />
    </>
  );
}
