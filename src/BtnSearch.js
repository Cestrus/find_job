import React from "react";
import './BtnSearch.css';

export default (props) => {
	return(
		<button className='btnSearch'
				onClick={props.clickSearch}
		>
			Search
		</button>
	)
}