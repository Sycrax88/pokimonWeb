var imagenes=[];
imagenes["Cauchin"] = "./Assets/vaca.png";
imagenes["Pokacho"] = "./Assets/pollo.png";
imagenes["Tocinauro"] = "./Assets/cerdo.png";
console.log(imagenes);

var coleccion =[];
coleccion.push(cauchin = new Pokimon("Cauchin","Agua", 50, 40)); 
coleccion.push(pokacho = new Pokimon("Pokacho", "Electrico",60,35));
coleccion.push(tocinauro = new Pokimon("Tocinauro", "Tierra",45,60));

for(i in coleccion){
    console.log(coleccion[i]);
    coleccion[i].mostrar();
}
// for(var i of coleccion){
//     i.mostrar();
// }