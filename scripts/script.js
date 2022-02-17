function fetchPokemon()
{    
	let id=1
	const getUrlPokemon= id=> `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonPromises=[];
	

	   for (var i = 1; i<=150; i++) 
	   { 
	   	pokemonPromises.push(fetch(getUrlPokemon(i)).then(response =>response.json()))
	   }

	   Promise.all(pokemonPromises).then(pokemons=>{

	   const listPokemon=pokemons.reduce((acumulator,pokemon)=>{
           
           acumulator += `
           
           <div class="card">
	 	<p>${pokemon.id}.${pokemon.name}</p>
	 	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
	 	<div class="card-description">
	 		<span><p>hp:25</p><span>
	 		<span><p>type:${pokemon.types.map(typeInfo=>typeInfo.type.name).join('|')}</p><span>
	 		<span><p>heigth:${pokemon.height}</p><span>
	 		<span><p>weigth:${pokemon.weight}</p><span>
       </div><!--card-descrpition-->
 	   </div><!--card-->`

 	   return acumulator;


	   }, '')

	   const cardColection=document.querySelector('.card-colection');
	   cardColection.innerHTML=listPokemon;
	})
}

fetchPokemon();