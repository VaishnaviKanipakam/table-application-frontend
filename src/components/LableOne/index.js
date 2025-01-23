import React, { Component } from 'react'

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

export class LableOne extends Component {
    state = {
        countrieslist: "nigeria"
    }

    onChangeOption = event => {
        this.setState({countrieslist: event.target.value})
    }
  render() {
    const {onButtonClicked} = this.props
    return (
        <div className='lable-container'>
            <h1 className='lable-heading'>Lable 1</h1>
            <hr className='horizontal-line'/>
            <select className='select-container' onChange={this.onChangeOption}>
                <option value="nigeria">Nigeria</option>
                <option value="norway">Norway</option>
                <option value="pakistan">Pakistan</option>
                <option value="peru">Peru</option>
                <option value="colombia">Colombia</option>
            </select>
            {onButtonClicked ? (
                <>
            <hr className='horizontal-line'/>
            <select className='select-container' onChange={this.onChangeOption}>
                <option value="nigeria">Nigeria</option>
                <option value="norway">Norway</option>
                <option value="pakistan">Pakistan</option>
                <option value="peru">Peru</option>
                <option value="colombia">Colombia</option>
            </select>
                </>
            ) : ('')}
        </div>
    )
  }
}

export default LableOne


































