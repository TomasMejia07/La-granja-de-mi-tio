var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};


var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false,
	x : [],//Creo una variable X y Y para vaca y pollo en arreglo y la de cerdo la inicializo en cero
	y : []
};


var cerdo = {
	url: "cerdo.png",
	cargaOK: false,
	x : 0,
	y : 0
};

var pollo = {
	url: "pollo.png",
	cargaOK: false,
	x : [],
	y : []
};
 
var perro = {
	url: "perro.png",
	cargaOK: false,

};
 
var cantidad = aleatorio(1,5);

fondo.imagen = new Image();//creamos objeto
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);//escuchamos el evento de carga del navegador

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

perro.imagen = new Image();
perro.imagen.src = perro.url;
perro.imagen.addEventListener("load", cargarPerro);

function cargarFondo ()//cuando ocurre el evento, se llama a estas funciones para que a su vez llamen la funcion de dibujar
{
	fondo.cargaOK = true;
	dibujar();
}
 
 function cargarVaca ()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarCerdo ()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollo ()
{
	pollo.cargaOK = true;
	dibujar();
}

function cargarPerro()
{
	perro.cargaOK = true;
	dibujar();
}

function dibujar()//aqui se evalua cual imagen ha cargado, para que siga el orden de carga que queremos
{

	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	if(vaca.cargaOK)//si el objeto de la vaca ya cargo se ejecuta el ciclo en donde se colocan cantidades y posiciones aleatorias
		//tambien se guardan en el arreglo las posiciones aleatorias que se generaron para posteriormente saber redibujar el objeto cuando
	//movamos el cerdo en el teclado
	{
		for( var v = 0; v < cantidad; v++)
		{
			var x = (aleatorio (0,7)*60);
			var y = (aleatorio (0,7)*60);
			vaca.x[v] = x;
			vaca.y[v] = y;
			papel.drawImage(vaca.imagen , x , y);
			console.log(cantidad);
		}
		
	}
	if(cerdo.cargaOK)
	{	
		var x = (aleatorio (0,7)*60);
		var y = (aleatorio (0,7)*60);
		cerdo.x = x;
		cerdo.y = y;
		papel.drawImage(cerdo.imagen , x , y);
		
	}
	if(pollo.cargaOK)
	{
		for(var p =0; p <cantidad ; p++)
		{
			var x = (aleatorio (0,7)*60);
			var y = (aleatorio (0,7)*60);
			pollo.x [p] = x;
			pollo.y [p] = y;
			papel.drawImage(pollo.imagen , x , y);
			console.log(cantidad);
		}
		
	}

    if(perro.cargaOK)
    {
        papel.drawImage(perro.imagen , 440 , 440);
        
    }

}


function aleatorio(min , maxi)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

function moverCerdo(x,y)
{
	papel.drawImage(cerdo.imagen,x,y);
}

function dibujarOtraVez()//redibujamos los objetos, solo que sin el ciclo y utilizando los numero aleatorios de la funcion dibujar
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	 if(vaca.cargaOK)
	 {
	 	for( var v = 0; v < cantidad; v++)
		{
			papel.drawImage(vaca.imagen , vaca.x[v] , vaca.y[v]);
			console.log(cantidad);
		}
	 }
	 if(pollo.cargaOK)
	 {
	 	for( var p = 0; p < cantidad; p++)
		{
			papel.drawImage(pollo.imagen , pollo.x[p] , pollo.y[p]);
			console.log(cantidad);
		}
	 }

     if(perro.cargaOK)
	 {
	 	
		
		papel.drawImage(perro.imagen , 440, 440);

		
	 }
}

document.addEventListener("keydown", moverTecla);//identificamos el evento del teclado y restamos o sumamos posicion, segun la tecla 
	function moverTecla(evento)
	{
			var movimiento = 5;
			switch (evento.keyCode)
		{
			case teclas.UP:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.y = cerdo.y - movimiento;
			break;
			case teclas.DOWN:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.y = cerdo.y + movimiento;				
			break;
			case teclas.LEFT:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.x = cerdo.x - movimiento;				
			break;
			case teclas.RIGHT:
				dibujarOtraVez();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.x = cerdo.x + movimiento;				
			break;
			default:
				console.log("Otra tecla");
			break;
		}	
	}	