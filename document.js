function Pokemon ( n, v, a ) {
    this.grito  = "Pika!";
    this.nombre = n;
    this.vida   = v;
    this.ataque = a;
    this.gritar = function () {
        alert( this.grito );
    }
}

function inicio(){
  var rattata       = new Pokemon('Rattata', 20, 4),
      nombrePokemon = document.getElementById('nombrePokemon');
  rattata.vida     -= 13;
  nombrePokemon.innerHTML = rattata.nombre;
  rattata.grito = "Rattata!!!!";
  rattata.gritar();
}

inicio();
