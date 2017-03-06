var fuManChu = [
	0, 1, 2,
	3, 4, 5,
	6, 7, 8
];

var turn = "X";
var hayGanador = false;
var empate = false;

function marcar(el, pos){
	if(hayGanador)
	{
		var iniciar = confirm("Acabó el juego. Ganó " + turn + "\n¿Desean iniciar un nuevo juego?");
		if(iniciar){
			nuevo();
		}
		return false;
	}

	if(empate)
	{
		var iniciar = confirm("Empataron.\n¿Desean iniciar un nuevo juego?");
		if(iniciar){
			nuevo();
		}
		return false;
	}

	var value = el.innerHTML.trim();

	if(puedoMarcar(value)){
		el.innerHTML = turn;
		fuManChu[pos] = turn;
	} else {
		alert("Esta posición ya está marcada por " + value);
		return false;
	}

	if(tenemosGanador()){
		hayGanador = true;
		alert("El ganador fue " + turn);
		return false;
	}

	if(esEmpate()){
		empate = true;
		var iniciar = confirm("Es Empate.\n¿Desea iniciar un nuevo juego?");
		if(iniciar){
			nuevo();
		}
		return false;
	}

	cambiarTurno();
}

/**
* Se cambia de turno dependiendo de quien ha marcado por última vez
**/
function cambiarTurno()
{
	if(turn == "X"){
		turn = "O";
	} else {
		turn = "X"
	}

	document.getElementById("turno").innerHTML = "Es turno de " + turn;
} 

/**
* Se verifica si es válido marcar esa casilla, en todo caso se dispara
* una alerta indicando que ya está marcada.
**/
function puedoMarcar(v)
{
	return v == null || v == "";
}

/**
* Como se conocen las respuestas correctas para ganar
* se verifica que luego del click alguna de las combinaciones
* haya logrado ganar
**/
function tenemosGanador(){
	if(fuManChu[0] == fuManChu[1] && fuManChu[0] == fuManChu[2])
	{
		return true;
	}
	else if(fuManChu[0] == fuManChu[3] && fuManChu[0] == fuManChu[6])
	{
		return true;
	}
	else if(fuManChu[0] == fuManChu[4] && fuManChu[0] == fuManChu[8])
	{
		return true;
	}
	else if(fuManChu[2] == fuManChu[5] && fuManChu[2] == fuManChu[8])
	{
		return true;
	}
	else if(fuManChu[6] == fuManChu[7] && fuManChu[6] == fuManChu[8])
	{
		return true;
	}
	else if(fuManChu[3] == fuManChu[4] && fuManChu[3] == fuManChu[5])
	{
		return true;
	}
	else if(fuManChu[2] == fuManChu[4] && fuManChu[2] == fuManChu[6])
	{
		return true;
	}
	else if(fuManChu[1] == fuManChu[4] && fuManChu[1] == fuManChu[7])
	{
		return true;
	}

	return false;
}

/**
* Si todas las posiciones del arreglo son letras, quiere decir
* que ya todas las casillas están ocupadas
**/
function esEmpate(){
	var respuesta = true;

	fuManChu.forEach(function(e, i){
		if( ! isNaN(e))
		{
			respuesta = false;
		}
	});

	return respuesta;
}

/**
* Se reinicia todo a como estaba originalmente
**/
function nuevo()
{
	hayGanador = false;
	empate = false;
	turn = "X";
	document.getElementById("turno").innerHTML = "Es turno de " + turn;

	fuManChu = [
		0, 1, 2,
		3, 4, 5,
		6, 7, 8
	];
	var positions = document.getElementsByClassName("position");
	for(var i = 0; i < positions.length; ++i){
		positions[i].innerHTML = "";
	}

	alert("Ha iniciado un nuevo juego");
}