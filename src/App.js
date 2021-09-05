import './App.css';
import './components/appBar.js'
import SimpleMenu from './components/appBar.js';
// import PageCoffee from './modulos/coffee/pages/coffee';
import PageFarm from './modulos/farm/farm';

function App() {
  return (
    <>
      <SimpleMenu />
      <PageFarm />
    </>
  );
}

export default App;
