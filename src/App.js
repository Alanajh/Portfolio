
import './App.css';
import ButtonAppBar from './Components/navbar_main'
import Expansions from './Components/Sub_Components/expansion';
import MainBody from './Components/main_body'


function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Expansions/>
    </div>
  );
}

export default App;
