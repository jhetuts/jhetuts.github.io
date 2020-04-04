const httpRequest = new HttpLibrary();
const pokeUi = new PokemonUi();

const url = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_API_IMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let id = 1;

const nextBtn = document.getElementById('next-pokemon');
const prevBtn = document.getElementById('prev-pokemon');

nextBtn.addEventListener('click', function(){
	id++;
	disabledButton(id);
	getPokemon(id);
});

prevBtn.addEventListener('click', function(e){
	id--;
	disabledButton(id);
	getPokemon(id);

});

const padToThree = number => number <= 999 ? `00${number}`.slice(-3) : number;

const getPokemon = id => {
	console.log(id)
	httpRequest.get(url+id)
	.then(data => {
		httpRequest.get(data.forms[0].url)
			.then(image => pokeUi.displayPokemon(data, `${POKE_API_IMG}${padToThree(id)}.png`))
			.catch(error => 'No image found!');
	})
	.catch(() => {
		console.log("No pokemon found. Restart to 1");
		setTimeout(function(){
			id = 1;
			getPokemon(id);
		}, 2000);
	});
}

const disabledButton = id => {
	if(id <= 1){
		id = 1;
		prevBtn.setAttribute('disabled', true);
	} else {
		prevBtn.removeAttribute('disabled');
	}
}

document.addEventListener('DOMContentLoaded', function(){
	disabledButton(id);
	getPokemon(id);
});