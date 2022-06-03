import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
	const handelUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert('Converted to Uppercase ','success')
	}
	const handelLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert('Converted to Lowercase ','success')
	}

	const handelClearClick = () => {
		let newText = "";
		setText(newText);
		props.showAlert('Text Cleared!','success')
	}
	const handelCopyClick = () => {
		const text = document.getElementById('exampleFormControlTextarea1')
		text.select()
		navigator.clipboard.writeText(text.value)
		props.showAlert('Copied!','success')
	}

	const handelOnChange = (e) => {
		setText(e.target.value)
	}
	const wordsNumber = (arr1)=>{
		if(arr1[arr1.length-1]===''){
			return arr1.length-1;
		}
		else{
			return arr1.length
		}
	}

	const [text, setText] = useState("")
	return (
		<>
			<h1>{props.heading}</h1>
			<div className="mb-3 container ">
				<textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" onChange={handelOnChange} rows="8" value={text}></textarea>
				<button className="btn btn-primary my-3 mx-1" onClick={handelUpClick} >Convert To Uppercase</button>
				<button className="btn btn-primary my-3 mx-1" onClick={handelLowClick} >Convert To Lowercase</button>
				<button className="btn btn-primary my-3 mx-1" onClick={handelClearClick} >Clear</button>
				<button className="btn btn-primary my-3 mx-1" onClick={handelCopyClick} >Copy Text</button>
			</div>
			<div className="container my3">
				<h2>Your Text Summary</h2>
				<p>{text.split(' ').filter((t)=>t!='').length} words; {text.length} char;</p>
				<p>{text.split(' ').filter((t)=>t!='').length *0.008} Minutes read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	)
}
TextForm.propTypes = { heading: PropTypes.string.isRequired }