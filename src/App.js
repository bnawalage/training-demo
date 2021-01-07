import logo from './logo.svg';
import './App.css';
 
function App(props) {
  return (
    <div className="App"> 
        {props.user.lastName}
    </div>
  );
}

export default App;
