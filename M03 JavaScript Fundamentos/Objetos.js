var deportes = {conBalon : ["football", "basketball" , "rugby"],
                sinBalon : ["trekking","boxeo"]}
 
var personas = {nombre:"lucas", edad:26, estudios:{siEsProgramador : true}}

personas.nombre = ("martin")
personas.edad= (55)
console.log(personas.nombre)
console.log(personas.edad)

var autos = {}
autos.marcas = ["ford", "audi"]

delete autos.marcas

console.log(autos)

var MisFunciones = {saludar : function() {console.log ("hola!");}
}

MisFunciones.saludar();


//dotNotation

var atuendos = {Manos:["anillos", "guantes"],
pies:["zapatos","medias"]};

//BracketNotation

atuendos["piernas"]=["bermudas", "pantalones"];
console.log(atuendos); 

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('autor');

console.log(tienePropiedad);
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);
var mundo= {continentes: [7], paises: [195], oceanos:[5]};
for (var prop in mundo) {
   console.log('Esta es la propiedad: ' + prop);
   console.log('Este es el valor: ' + mundo[prop]);
}
//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: function () {
      console.log('Mi perro es un  ' + this.raza);
   },
};

mascota.info();
