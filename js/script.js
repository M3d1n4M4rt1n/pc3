$(document).ready(function() {
    $.getJSON('api.json', function(data) {
        var entrenadoresContainer = $('#entrenadores-container');
        data.forEach(function(entrenador) {
            var entrenadorDiv = $('<div>').addClass('entrenador');
            var entrenadorName = $('<h2>').text(entrenador.entrenador);
            entrenadorDiv.append(entrenadorName);
            entrenador.pokemons.forEach(function(pokemon) {
                var pokemonDiv = $('<div>').addClass('pokemon ' + pokemon.tipo);
                var pokemonImg = $('<img>').attr('src', pokemon.foto);
                var pokemonName = $('<span>').text(pokemon.nombre);
                pokemonDiv.append(pokemonImg).append(pokemonName);
                entrenadorDiv.append(pokemonDiv);
            });
            entrenadoresContainer.append(entrenadorDiv);
        });
    }).fail(function(error) {
        console.log('Error al consumir el API:', error);
    });
});
