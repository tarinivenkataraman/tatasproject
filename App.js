import './App.css';
import Heading from './Heading';
import Main from './Main';
import Inserting from './Inserting';
import About from './About';
import View from "./View";
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Heading/>
     <Main />
     <About/>
     <Inserting/>
     <Contact/>
    </div>
  );
}

export default App;
