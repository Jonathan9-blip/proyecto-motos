// ===================================
// DATOS DE LAS MOTOS
// ===================================

const datos = {

moto1: `
<h2>Italika 280Z</h2>
<p><strong>Motor:</strong> 280cc</p>
<p><strong>Potencia:</strong> 18 HP aprox.</p>
<p><strong>Velocidad Máxima:</strong> 135 km/h</p>
<p><strong>Peso:</strong> 167 kg</p>
<p><strong>Tipo:</strong> Deportiva urbana</p>
<p><strong>Precio:</strong> $47,999 MXN</p>

<button onclick="toggleFavorito('Italika 280Z')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=italika+280z" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto2: `
<h2>Vort-X 300R</h2>
<p><strong>Motor:</strong> 292cc</p>
<p><strong>Potencia:</strong> 25 HP</p>
<p><strong>Velocidad Máxima:</strong> 150 km/h</p>
<p><strong>Precio:</strong> $79,999 MXN</p>

<button onclick="toggleFavorito('Vort-X 300R')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=vort+x+300r" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto3: `
<h2>KTM Duke 390 ABS</h2>
<p><strong>Motor:</strong> 373cc</p>
<p><strong>Potencia:</strong> 43 HP</p>
<p><strong>Velocidad Máxima:</strong> 170 km/h</p>
<p><strong>Precio:</strong> $139,999 MXN</p>

<button onclick="toggleFavorito('KTM Duke 390 ABS')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=ktm+390" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto4: `
<h2>Ninja 400 ABS</h2>
<p><strong>Motor:</strong> 399cc</p>
<p><strong>Potencia:</strong> 45 HP</p>
<p><strong>Velocidad Máxima:</strong> 190 km/h</p>
<p><strong>Precio:</strong> $159,999 MXN</p>

<button onclick="toggleFavorito('Ninja 400 ABS')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=ninja+400" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto5: `
<h2>Storm 300 2.0</h2>
<p><strong>Motor:</strong> 292cc</p>
<p><strong>Potencia:</strong> 27 HP</p>
<p><strong>Velocidad Máxima:</strong> 155 km/h</p>
<p><strong>Precio:</strong> $39,999 MXN</p>

<button onclick="toggleFavorito('Storm 300 2.0')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=storm+300" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto6: `
<h2>KTM 250 Duke</h2>
<p><strong>Motor:</strong> 249cc</p>
<p><strong>Potencia:</strong> 30 HP</p>
<p><strong>Velocidad Máxima:</strong> 150 km/h</p>
<p><strong>Precio:</strong> $102,900 MXN</p>

<button onclick="toggleFavorito('KTM 250 Duke')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=ktm+250+duke" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto7: `
<h2>CF Moto 250NK</h2>
<p><strong>Motor:</strong> 249cc</p>
<p><strong>Potencia:</strong> 27 HP</p>
<p><strong>Velocidad Máxima:</strong> 145 km/h</p>
<p><strong>Precio:</strong> $88,990 MXN</p>

<button onclick="toggleFavorito('CF Moto 250NK')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=cfmoto+250nk" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,
moto8: `
<h2>KTM RC 390</h2>
<p><strong>Motor:</strong> 373cc</p>
<p><strong>Potencia:</strong> 43 HP</p>
<p><strong>Velocidad Máxima:</strong> 170 km/h aprox.</p>
<p><strong>Peso:</strong> 172 kg</p>
<p><strong>Tipo:</strong> Deportiva</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $145,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.9/5)</p>

<button onclick="toggleFavorito('KTM RC 390')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=ktm+rc+390" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto9: `
<h2>Kawasaki Z400</h2>
<p><strong>Motor:</strong> 399cc</p>
<p><strong>Potencia:</strong> 45 HP</p>
<p><strong>Velocidad Máxima:</strong> 190 km/h aprox.</p>
<p><strong>Peso:</strong> 167 kg</p>
<p><strong>Tipo:</strong> Naked deportiva</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $155,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.8/5)</p>

<button onclick="toggleFavorito('Kawasaki Z400')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=kawasaki+z400" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto10: `
<h2>CF Moto 300NK</h2>
<p><strong>Motor:</strong> 292cc</p>
<p><strong>Potencia:</strong> 29 HP</p>
<p><strong>Velocidad Máxima:</strong> 140 km/h aprox.</p>
<p><strong>Peso:</strong> 151 kg</p>
<p><strong>Tipo:</strong> Naked</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $95,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐☆ (4.5/5)</p>

<button onclick="toggleFavorito('CF Moto 300NK')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=cfmoto+300nk" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto11: `
<h2>Vort-X 200</h2>
<p><strong>Motor:</strong> 200cc</p>
<p><strong>Potencia:</strong> 18 HP</p>
<p><strong>Velocidad Máxima:</strong> 125 km/h aprox.</p>
<p><strong>Peso:</strong> 160 kg</p>
<p><strong>Tipo:</strong> Deportiva urbana</p>
<p><strong>ABS:</strong> No</p>
<p><strong>Precio:</strong> $42,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐☆ (4.2/5)</p>

<button onclick="toggleFavorito('Vort-X 200')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=vort+x+200" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto12: `
<h2>KTM RC 200</h2>
<p><strong>Motor:</strong> 199cc</p>
<p><strong>Potencia:</strong> 25 HP</p>
<p><strong>Velocidad Máxima:</strong> 140 km/h aprox.</p>
<p><strong>Peso:</strong> 160 kg</p>
<p><strong>Tipo:</strong> Deportiva</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $118,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.7/5)</p>

<button onclick="toggleFavorito('KTM RC 200')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=ktm+rc+200" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto13: `
<h2>Yamaha R3</h2>
<p><strong>Motor:</strong> 321cc</p>
<p><strong>Potencia:</strong> 42 HP</p>
<p><strong>Velocidad Máxima:</strong> 180 km/h aprox.</p>
<p><strong>Peso:</strong> 169 kg</p>
<p><strong>Tipo:</strong> Deportiva</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $145,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.8/5)</p>

<button onclick="toggleFavorito('Yamaha R3')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=yamaha+r3" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto14: `
<h2>Yamaha MT-03</h2>
<p><strong>Motor:</strong> 321cc</p>
<p><strong>Potencia:</strong> 42 HP</p>
<p><strong>Velocidad Máxima:</strong> 175 km/h aprox.</p>
<p><strong>Peso:</strong> 168 kg</p>
<p><strong>Tipo:</strong> Naked deportiva</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $139,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.7/5)</p>

<button onclick="toggleFavorito('Yamaha MT-03')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=yamaha+mt+03" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto15: `
<h2>Suzuki GSX-R150</h2>
<p><strong>Motor:</strong> 150cc</p>
<p><strong>Potencia:</strong> 19 HP</p>
<p><strong>Velocidad Máxima:</strong> 140 km/h aprox.</p>
<p><strong>Peso:</strong> 131 kg</p>
<p><strong>Tipo:</strong> Deportiva ligera</p>
<p><strong>ABS:</strong> No</p>
<p><strong>Precio:</strong> $85,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐☆ (4.4/5)</p>

<button onclick="toggleFavorito('Suzuki GSX-R150')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=suzuki+gsxr150" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto16: `
<h2>Honda CBR500R</h2>
<p><strong>Motor:</strong> 471cc</p>
<p><strong>Potencia:</strong> 47 HP</p>
<p><strong>Velocidad Máxima:</strong> 190 km/h aprox.</p>
<p><strong>Peso:</strong> 192 kg</p>
<p><strong>Tipo:</strong> Deportiva touring</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $189,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.9/5)</p>

<button onclick="toggleFavorito('Honda CBR500R')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=honda+cbr500r" target="_blank">
<button>🎥 Ver Video</button>
</a>
`,

moto17: `
<h2>Bajaj Pulsar RS200</h2>
<p><strong>Motor:</strong> 199cc</p>
<p><strong>Potencia:</strong> 24 HP</p>
<p><strong>Velocidad Máxima:</strong> 145 km/h aprox.</p>
<p><strong>Peso:</strong> 166 kg</p>
<p><strong>Tipo:</strong> Deportiva</p>
<p><strong>ABS:</strong> Sí</p>
<p><strong>Precio:</strong> $79,000 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐☆ (4.5/5)</p>

<button onclick="toggleFavorito('Bajaj Pulsar RS200')">
❤️ Favorito
</button>

<a href="https://www.youtube.com/results?search_query=bajaj+rs200" target="_blank">
<button>🎥 Ver Video</button>
</a>
`
};

// ===================================
// MODAL
// ===================================

function mostrarInfo(moto){

document.getElementById("contenido-info").innerHTML =
datos[moto];

document.getElementById("modal").style.display =
"flex";

}

function cerrarModal(){

document.getElementById("modal").style.display =
"none";

}

// ===================================
// BUSCADOR + FILTROS
// ===================================

function aplicarFiltros(){

let texto =
document.getElementById("buscador")
.value.toLowerCase();

let marca =
document.getElementById("filtroMarca")
.value;

let cilindrada =
document.getElementById("filtroCilindrada")
.value;

let motos =
document.getElementsByClassName("moto");

for(let i=0;i<motos.length;i++){

let nombre =
motos[i].innerText.toLowerCase();

let marcaMoto =
motos[i].getAttribute("data-marca");

let cc =
parseInt(
motos[i].getAttribute("data-cc")
);

let coincideBusqueda =
nombre.includes(texto);

let coincideMarca =
marca=="todas" || marcaMoto==marca;

let coincideCC =

cilindrada=="todas" ||

(cilindrada=="200" && cc>=150 && cc<=199) ||

(cilindrada=="250" && cc>=200 && cc<=299) ||

(cilindrada=="300" && cc>=300 && cc<=349) ||

(cilindrada=="400" && cc>=350 && cc<=450) ||

(cilindrada=="500" && cc>=451 && cc<=599);

if(
coincideBusqueda &&
coincideMarca &&
coincideCC
){

motos[i].style.display = "block";

}else{

motos[i].style.display = "none";

}

}

}

// ===================================
// BUSCADOR
// ===================================

function buscarMoto(){

aplicarFiltros();

}

// ===================================
// FAVORITOS
// ===================================

function toggleFavorito(nombreMoto){                  //aqui lee fav existentes

let favoritos =
JSON.parse(
localStorage.getItem("favoritos")
) || [];

if(favoritos.includes(nombreMoto)){

favoritos =
favoritos.filter(
moto => moto !== nombreMoto
);

alert("❌ Eliminado de favoritos");

}else{

favoritos.push(nombreMoto);

alert("❤️ Agregado a favoritos");

}

//aqui se guarda la información de los fav en el localstorage//

localStorage.setItem(
"favoritos",
JSON.stringify(favoritos)                           //aqui guarda fav nuevos
);

mostrarFavoritos();

}

// ===================================
// MOSTRAR FAVORITOS
// ===================================

function mostrarFavoritos(){

let favoritos =
JSON.parse(
localStorage.getItem("favoritos")                 //aqui se leen los fav guardados para mostrar en pantalla 
) || [];

let contenedor =
document.getElementById("listaFavoritos");

let titulo =
document.getElementById("tituloFavoritos");

contenedor.innerHTML = "";

titulo.innerHTML =
`❤️ Motos Favoritas (${favoritos.length})`;

if(favoritos.length === 0){

contenedor.innerHTML =
"<p>No tienes motos favoritas ❤️</p>";

return;

}

favoritos.forEach(moto => {

contenedor.innerHTML += `

<div class="favorito-item">

<h3>${moto}</h3>

<button onclick="eliminarFavorito('${moto}')">
❌ Quitar
</button>

</div>

`;

});

}

// ===================================
// ELIMINAR FAVORITO
// ===================================

function eliminarFavorito(nombreMoto){

let favoritos =
JSON.parse(
localStorage.getItem("favoritos")
) || [];

favoritos =
favoritos.filter(
moto => moto !== nombreMoto
);

localStorage.setItem(
"favoritos",
JSON.stringify(favoritos)                     // aqui vuelve a guardar la lista , pero ya sin la moto eliminada 
);

mostrarFavoritos();

}

// ===================================
// SCROLL A FAVORITOS
// ===================================

function scrollFavoritos(){

document
.getElementById("tituloFavoritos")
.scrollIntoView({
behavior:"smooth"
});

}

// ===================================
// INICIAR
// ===================================

mostrarFavoritos();