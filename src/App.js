import { useState } from 'react';

import LableOne from './components/LableOne';
import LableTwo from './components/LableTwo'

import './App.css';

const App = () =>  {
const [buttonClick, setButtonClick] = useState(false)

const onButtonClicked = () => {
  setButtonClick((prevState) => !prevState)
}

  return (
    <div className="App">
        <div className='second-container'>
            <div className='lable-one-container'>
                <LableOne onButtonClicked={buttonClick}/>
            </div>
            <div className='lable-two-container'>
                <LableTwo onButtonClicked={buttonClick}/>
            </div>
        </div>

     <div className='button-container'>
          <button className='button' type='button' onClick={onButtonClicked}>
            + Add New Row
          </button>
     </div>
    </div>
  )
}

export default App
