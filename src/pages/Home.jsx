import Hero from "../components/shell/Hero";
import About from "../components/shell/About";
import Skills from "../components/shell/Skills";
import Services from "../components/shell/Services";
import Projects from "../components/shell/Projects";
import EducationExperience from "../components/shell/EducationExperience";
import GithubRepos from "../components/shell/GithubRepos";
import Certifications from "../components/shell/Certifications";
import Freelancing from "../components/shell/Freelancing";
import Freelance from "../components/shell/Freelance";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <EducationExperience />
      <GithubRepos />
      <Certifications />
      <Freelancing />
      <Freelance />
    </>
  );
}

export default Home;