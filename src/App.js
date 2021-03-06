
import './App.css';
import {atom, useRecoilState, useResetRecoilState} from "recoil";

const counterState = atom({
  key: "counterState",
  default:0,
});

function App() {

  const[counter,setCounter] = useRecoilState(counterState);
  const resetCounter = useResetRecoilState(counterState);
  return (                                     
    <>
      <div className="container">
        <div className="card">
            <h1>counter</h1>
            <h1><span className="value" id="value">{counter}</span></h1>
            <div className="btn-container">
                <button className="btn decrease" onClick={()=> setCounter(counter - 1)}><i className="fas fa-minus"></i></button>
                <button className="btn reset" onClick={resetCounter}><i className="fas fa-times"></i></button>
                <button className="btn increase" onClick={()=> setCounter(counter + 1)}><i className="fas fa-plus"></i></button>
            </div>
        </div>
        
      </div>
</>
  );
}

export default App;
