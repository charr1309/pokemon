import React, { Component } from "react";
import './Pokecard.css'

// const PokeApi = 'https//assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { img, id, name, num, type, weakness } = this.props;
    // console.log(`${PokeApi}${parseInt(img)}.png`);
    let imgSrc = img;
    return (
            
      
        <div className="cardSize">
          <div>
            <img className="imgPosition"src={imgSrc}  />
            <hr></hr>
             {name} {num} {type.map( item => <li>{item}</li>)} {weakness.map( item => <li>{item}</li>)}
          </div>
        </div>

        
            
    );
  }
}

export default Pokecard;
