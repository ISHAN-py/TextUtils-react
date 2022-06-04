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
		document.getSelection().removeAllRanges();
		props.showAlert('Copied!','success')
	}

	const handelOnChange = (e) => {
		setText(e.target.value)
	}
	const handelExtraSpaces = ()=>{
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "))
		props.showAlert('Removed extra spaces','success')
	}
	const handelRemoveSpaces = () => {
		let newText = text.split(' ');
		newText.filter((e)=>{
			if(e !==""){
				return e
			}
		})
		setText(newText.join(''))
		props.showAlert('Removed all spaces ','success')
	}

	const [text, setText] = useState("")
	return (
		<>
			<h1 className="mb-3">{props.heading}</h1>
			<div className="mb-3 container ">
				<textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="exampleFormControlTextarea1" onChange={handelOnChange} rows="8" value={text}></textarea>
				<button disabled = {text.length===0}className="btn btn-primary my-2 mx-1" onClick={handelUpClick} >Convert To Uppercase</button>
				<button disabled = {text.length===0}className="btn btn-primary my-2 mx-1" onClick={handelLowClick} >Convert To Lowercase</button>
				<button disabled = {text.length===0} className="btn btn-primary my-2 mx-1" onClick={handelClearClick} >Clear</button>
				<button disabled = {text.length===0} className="btn btn-primary my-2 mx-1" onClick={handelCopyClick} >Copy Text</button>
				<button  disabled = {text.length===0}className="btn btn-primary my-2 mx-1" onClick={handelExtraSpaces} >Remove Extra Spaces</button>
				<button  disabled = {text.length===0}className="btn btn-primary my-2 mx-1" onClick={handelRemoveSpaces} >Compress (Remove all spaces)</button>
			</div>
			<div className="container my3">
				<h2>Your Text Summary</h2>
				<p>{text.split(' ').filter((element)=>{
					if(element.length !== 0){
						return element
					}
				}).length} words; {text.length} char;</p>
				<p>{text.split(' ').filter((element)=>{
					if(element.length !== 0){
						return element
					}
				}).length *0.008} Minutes read</p>
				<h2>Preview</h2>
				<p>{text.length>0?text:"Nothing To Preview!"}</p>
			</div>
		</>
	)
}
TextForm.propTypes = { heading: PropTypes.string.isRequired }