import logo from './logo.svg';
import './App.css';
 
function App(props) {
  return (
    <div className="App"> 
       {props.match.params.lastname}
    </div>
  );
}

export default App;
