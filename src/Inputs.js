import React from "react";
import './Inputs.css';

export default (props)=>{
	return(
		<div className='inputs'>
			<div>
				<label>Job Description:</label>
				<input type='text'
				       id='inpDescription'
				       className='inpDescription'
				       onInput={props.inpDescription}
				/>
			</div>
			<div>
				<label>Location:</label>
				<input type='text'
				       id='inpLocation'
				       className='inpLocation'
				       onInput={props.inpLocation}
				/>
			</div>
		</div>
	)
}