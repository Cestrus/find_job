import React from 'react';
import './App.css';
import Inputs from "./Inputs";
import BtnSearch from "./BtnSearch";
import Results from "./Results";


class App extends React.Component{
  state = {
      textDescription: '',
      textLocation: '',
      vacancies: [],
      isStartSearch: false,
  };
  clickSearchHandler(page){
      console.log(page);
      fetch(`https://github-jobs-proxy.appspot.com/positions?utf8=%E2%9C%93&description=${this.state.textDescription}&location=${this.state.textLocation}`).
           then(res => res.json()).
           then(answer => this.setState({vacancies: answer})).
           then(()=>{
               if(!this.state.isStartSearch){
                   let isStartSearch = true;
                   this.setState({isStartSearch});
               }
           });
  }
  render(){
    return (
      <div className="App">
        <h3>Find job now!</h3>
        <Inputs inpDescription = {ev=>this.setState({textDescription: ev.target.value})}
                inpLocation = {ev=>this.setState({textLocation: ev.target.value})}
        />
        <BtnSearch clickSearch = {()=>this.clickSearchHandler(this.state.page)}/>
        <hr/>
        {(this.state.isStartSearch)
            ? (<Results vacancies = {this.state.vacancies}/>)
            : null
        }
      </div>
    );
  }
}

export default App;
