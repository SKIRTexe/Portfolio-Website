import './App.css';
import ProjectCard from './ProjectCard';
import Header from './Header';
import ProjectTitle from './ProjectTitle';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProjectTitle/>
      <ProjectCard description="Automatic Door Lock" img="automatic-door-lock-render.png"/>
      <ProjectCard description="External Power Button" img="External-power-button-render.png"/>
    </div>
  );
}

export default App;
