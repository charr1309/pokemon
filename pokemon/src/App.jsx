import React, { Component } from "react";
import {motion} from 'framer-motion'
import "./App.css";
// import "./Pokecard.css";
import Pokecard from './Pokecard';
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      num: 0,
      type: "",
      weakness: "",
      list: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.pokemon);
        this.setState({ list: data.pokemon });
      });
  }

  render() {
    
    return (
        <main className="container">
            
            

            <Form />
      <motion.div 
            initial={{
                opacity: 0,
                x: 0
            }} 
            animate={{
                opacity: 1,
                x: 90
            }}
            transition={{
                duration: 1
            }}
      className="Pokecard">
        {this.state.list.map((pokemon) => {
          return (
            <Pokecard
              img={pokemon.img}
              id={pokemon.id}
              name={pokemon.name}
              num={pokemon.num}
              type={pokemon.type}
              weakness={pokemon.weaknesses}
            />
            
          );
        })}
      </motion.div>

        </main>
        
      
    );
  }
}

export default App;
