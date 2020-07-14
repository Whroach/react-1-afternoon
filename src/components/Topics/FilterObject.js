import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            athletes: [
            { 
                name: 'Lebron James',
                title: 'The King',
                age: 35
            },
            {
                name: 'Tom Brady',
                age: 42,
                team: 'Tampa Bay Buccaneers'
            },
            {
                name: 'Lionel Messi',
                sport: 'Futball',
                netWorth: 309
            }
            ],
            userInput: "",
            filteredAthletes: [],
        };
    }


    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filteredAthletes(prop) {
        let athletes = this.state.athletes;
        let filteredAthletes = [];
    
        for ( let i = 0; i < athletes.length; i++ ) {
          if ( athletes[i].hasOwnProperty(prop) ) {
            filteredAthletes.push(athletes[i]);
          }
        }
    
        this.setState({ filteredAthletes: filteredAthletes });
      }
    
      render() {
        return (
          <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.athletes, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.filteredAthletes(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredAthletes, null, 10) } </span>
          </div>
        )
      }
};

export default FilterObject;