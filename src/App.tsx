import React from 'react';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Welcome from './components/Welcome/Welcome';
import EducationSection from "./components/EducationSection/EducationSection";
import OtherProjectsSection from "./components/OtherProjectsSection/OtherProjectsSection";
import Contacts from "./components/Contacts/Contacts";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import Footer from './components/Footer/Footer';
import ScriptsSection from './components/ScriptsSection/ScriptsSection';
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <Welcome/>
      <EducationSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <OtherProjectsSection/>
      <Contacts/>
      <Footer/>
      <ScriptsSection/>
    </>
  );
}

export default App;
