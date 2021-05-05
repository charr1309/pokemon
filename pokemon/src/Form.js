import React, {Component} from 'react';

class Form extends Component {
constructor(props){
    super(props);
    this.state = {
        pokeName: "",
        pokeType: "",
        pokeWeakness: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
    this.setState({pokeName: e.target.value});
}
handleSubmit(e) {
    e.preventDefault();
    
}
render() {
    return(
        <div>
            <h1>Narrow your search</h1>
            <form className="sideBar"  onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    onChange={this.handleChange} />
                <input
                    type='text'
                    onChange={this.hangleChange} />
                <input
                    type='text'
                    onChange={this.handleChange} />
                <input
                    type='text'
                    onChange={this.handleChange} /> 
                </form>   
        </div>
    );
}
}
export default Form;