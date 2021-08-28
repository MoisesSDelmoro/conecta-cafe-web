import './App.css';
import './components/appBar.js'
import SimpleMenu from './components/appBar.js';
import PageCoffee from './modulos/coffee/coffee';
// import ButtonAppBar from './components/appBar.js';

function App() {
  return (
    <>
      <SimpleMenu />
      <PageCoffee />
    </>
  );
}

export default App;
