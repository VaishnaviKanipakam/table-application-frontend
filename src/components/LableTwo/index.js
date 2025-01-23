import React, { Component } from 'react'
// import Select from "react-select";

import './index.css'


const initialCountrieslist = [
	{
		"country": "Nigeria"
	},
	{
		"country": "Norway"
	},
	{
		"country": "Pakistan"
	},
	{
		"country": "Peru"
	},
	{
		"country": "Colombia"
	}
]


// {newOptionsList.map(eachOption => {
//   return (<option value={eachOption.country}>{eachOption.country}</option>)
// })}

export class LableTwo extends Component {
constructor(props) {
  super(props)
  this.state = {
    newOptionsList: initialCountrieslist,
    addOption: ''
  }
  this.handleMultiChange = this.handleMultiChange.bind(this);
}

oChangeOption = event => {
  this.setState({addOption: event.target.value})
}

handleMultiChange = (event) => {
  this.setState({newOptionsList: event.target.value})
}

onSubmitForm = event => {
  event.preventDefault()
  const {addOption} = this.state
 const newOption = {
  value: addOption,
  option: addOption
 }

this.setState(prevState => ({
  newOptionsList: [...prevState.newOptionsList, newOption]
}))
console.log("59newoptionlist", newOption)
}

  render() {
    const {addOption, newOptionsList}  = this.state
    console.log("62newOptionsList", newOptionsList)
    const {onButtonClicked} = this.props
    return (
      <form className='labletwo-container' onSubmit={this.onSubmitForm}>
       <h1 className='lable-two-heading'>Lable 2</h1>
       <hr className='line'/>
        <select className="select-options-container" onChange={this.handleMultiChange} multi>
        {newOptionsList.map((eachOption) => (
           <option value={eachOption.value}>{eachOption.country}</option>
          ))}
        </select>
        {onButtonClicked ? (
          <>
          <hr className='line'/>
          <select className="select-options-container" onChange={this.handleMultiChange} multi>
              {newOptionsList.map((eachOption) => (
                  <option value={eachOption.value}>{eachOption.country}</option>
                ))}
        </select>
          </>
        ) : (null)}
      

        <div className='add-button-container'>
          <input className='option-input' value={addOption} type='text' onChange={this.oChangeOption}/>
          <button className='add-button' type='submit'>+ Add</button>
        </div>
      </form>
    )
  }
}

export default LableTwo
