import React from 'react';
import "./style.css";
const img_val = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const pokemonCard =(props) =>{
    return(
        <div className = "pokemonCard" onClick={()=>{props.onClick(props.id)}}>
            <img src = {`${img_val}${props.id}.png`} className="poke_card-img"/>
                <h3>{props.name}</h3>
        </div>
    )
}
export default pokemonCard;
