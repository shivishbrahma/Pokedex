import React from 'react';
import PokemonCard from '../components/Card/pokemonCard';
import './style.css';
class Detail extends React.Component{

    state = {data:''}
    componentDidMount(){
        this.fetchPokemonDetail();
    }

    fetchPokemonDetail = () =>{
        const url= "https://pokeapi.co/api/v2/pokemon/"+this.props.match.params.id;
        const configuration ={
            method : 'GET',
            headers :{"accept-type" : "application/json"}
        }
        fetch(url,configuration)
        .then((response) => {return response.json()})
        .then((originalData) => {
        console.log(originalData);
        this.setState({data : originalData});
        })


        .catch((error) => {console.log(error)})
    }


    render(){
        console.log(this.state.data);
        return(
            <div>
                <h1 style={{textAlign : "center" , backgroundColor: "Grey", borderStyle: "solid", fontFamily: "Times New Roman", color: "white", padding : "20px", margin : "0px"}}>POKEMON  DETAILS</h1>
                <div className="poke_detail">
                    
                    <div className="poke_image"  >
                    <img src = {`${"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"}${this.props.match.params.id}.png`}   className="poke_card-img1"/>
                    </div>
                    <div className="det">{
                        this.state.data !== ""?
                        <div>
                            <h2 className='modify1'> Name :</h2><h3 className="modify">{this.state.data.name}</h3>
                            <h2 className='modify1'> Height :</h2><h3 className="modify">{(this.state.data.height)*10} cm</h3>
                            <h2 className='modify1'> Weight :</h2><h3 className="modify">{(this.state.data.weight)/10} kg</h3>
                            <h2 className='modify1'>Abilities :</h2>
                            {this.state.data.abilities.map((item) =>{return (<h3><li className="modify">{item.ability.name}</li></h3>)})}
                        </div>
                        :<h1>Loading....</h1>
                    }
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;