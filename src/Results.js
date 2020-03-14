import React from "react";
import './Results.css';

//Todo видимость кнопок пролистывания
export default (props)=>{
	if (props.vacancies.length === 0){
		return(
			<div className="results_cont">
				<p>Not find</p>
			</div>
		)
	}
	else return(
		<div className="results_cont">
			<div className='results'>
				{props.vacancies.map(v=>{
					return(
						<div className="container"
							 key={v.id}
						>
							<div className="vacancy">{v.title}</div>
							<div className="location">{v.location}</div>
							<div className="link"><a href={v.url}>LINK</a></div>
							<div className="company">{v.company}</div>
							<div className="date">{v.created_at}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
