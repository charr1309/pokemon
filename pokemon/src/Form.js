import React, { Component } from "react";
import {motion} from 'framer-motion'
import App from './App.jsx'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: "",
      pokeType: "",
      pokeWeakness: "",
      list: "",
      filteredList: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.toLowerCase();
    let temp = list;

    if(name.trim()){
        temp = temp.filter((p) => p.name.toLowerCase().includes(name));

    }
  }
  render() {
    return (
      <motion.div
      initial={{
        opacity: 0,
        x: 0,
        y: 0
    }} 
    animate={{
        opacity: 1,
        x: 90,
        y:150
    }}
    transition={{
        duration: 1
    }}
      >
        <h1>Narrow your search</h1>
        <form className="sideBar" onSubmit={this.handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="pokeName"
            onChange={this.handleChange}
            value={this.state.pokeName}
            placeholder="Name"
          />
          <label htmlFor="Type">Type</label>
          <input
            type="text"
            name="pokeType"
            onChange={this.handleChange}
            value={this.state.pokeType}
            placeholder="Type"
          />
          <label htmlFor="Weakness">Weakness</label>
          <input
            type="text"
            name="pokeWeakness"
            onChange={this.handleChange}
            value={this.state.pokeWeakness}
            placeholder="Weakness"
          />
          <label htmlFor="submit"></label>
          <button
            type='submit'
            onChange={this.handleSubmit}>Submit</button> 
        </form>
      </motion.div>
    );
  }
}
export default Form;
