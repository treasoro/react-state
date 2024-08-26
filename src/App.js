import { useState } from 'react';
import './App.css';

function App() {

  // This demonstrates that props are immutable
  // Beginning ReactJS Foundations book, pg 127

  const [theNumber,setTheNumber] = useState(0)

  const [firstName, setFirstName] = useState("")

  const handleChange = (e) => {
    setFirstName(e.target.value);
  }

  return (
    <>
      <h1>React State Demo</h1>

      <PropsMutator theNumber={theNumber} setTheNumber={setTheNumber} />

      <br/>
      <form className='mt-4'>
        <label htmlFor='first-name'>First Name</label>
        <input name='first-name' type='text' value={firstName} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

function PropsMutator(props) {
  let myNumber = props.theNumber;

  const changeProp = () => {
    myNumber = myNumber + 1;
    console.log("My number is: " + myNumber);
  }

  return (
    <>
      <h1>My number is: {myNumber}</h1>
      <h1>props.theNumber is: {props.theNumber}</h1>
      <button onClick={changeProp}>change myNumber</button><br/>
      <button onClick={() => {props.setTheNumber(props.theNumber + 1)}}>
        use setTheNumber
      </button>
    </>
  )
}

export default App;
