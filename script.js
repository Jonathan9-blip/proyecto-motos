// ===============================
// DATOS DE LAS MOTOS
// ===============================

const datos = {

moto1: `
<h2>Italika 280Z</h2>
<p><strong>Motor:</strong> 280cc</p>
<p><strong>Potencia:</strong> 18 HP aprox.</p>
<p><strong>Velocidad Máxima:</strong> 135 km/h aprox.</p>
<p><strong>Peso:</strong> 167 kg</p>
<p><strong>Tipo:</strong> Deportiva urbana</p>
<p><strong>Precio:</strong> $47,999 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐☆ (4.5/5)</p>

<a href="https://www.youtube.com/results?search_query=italika+280z" target="_blank">
<button>🎥 Ver Video</button>
</a>

<button onclick="cerrarModal()">Cerrar</button>
`,

moto2: `
<h2>Vort-X 300R</h2>
<p><strong>Motor:</strong> 292cc</p>
<p><strong>Potencia:</strong> 25 HP aprox.</p>
<p><strong>Velocidad Máxima:</strong> 150 km/h aprox.</p>
<p><strong>Peso:</strong> 175 kg</p>
<p><strong>Tipo:</strong> Deportiva</p>
<p><strong>Precio:</strong> $79,999 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐☆ (4.3/5)</p>

<a href="https://www.youtube.com/results?search_query=vort+x+300r" target="_blank">
<button>🎥 Ver Video</button>
</a>

<button onclick="cerrarModal()">Cerrar</button>
`,

moto3: `
<h2>KTM Duke 390 ABS</h2>
<p><strong>Motor:</strong> 373cc</p>
<p><strong>Potencia:</strong> 43 HP</p>
<p><strong>Velocidad Máxima:</strong> 170 km/h aprox.</p>
<p><strong>Peso:</strong> 172 kg</p>
<p><strong>Tipo:</strong> Naked deportiva</p>
<p><strong>Precio:</strong> $139,999 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.8/5)</p>

<a href="https://www.youtube.com/results?search_query=ktm+duke+390+abs" target="_blank">
<button>🎥 Ver Video</button>
</a>

<button onclick="cerrarModal()">Cerrar</button>
`,

moto4: `
<h2>Ninja 400 ABS</h2>
<p><strong>Motor:</strong> 399cc</p>
<p><strong>Potencia:</strong> 45 HP</p>
<p><strong>Velocidad Máxima:</strong> 190 km/h aprox.</p>
<p><strong>Peso:</strong> 168 kg</p>
<p><strong>Tipo:</strong> Deportiva</p>
<p><strong>Precio:</strong> $159,999 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐⭐ (4.9/5)</p>

<a href="https://www.youtube.com/results?search_query=ninja+400+abs" target="_blank">
<button>🎥 Ver Video</button>
</a>

<button onclick="cerrarModal()">Cerrar</button>
`,

moto5: `
<h2>Storm 300 2.0</h2>
<p><strong>Motor:</strong> 292cc</p>
<p><strong>Potencia:</strong> 27 HP aprox.</p>
<p><strong>Velocidad Máxima:</strong> 155 km/h aprox.</p>
<p><strong>Peso:</strong> 178 kg</p>
<p><strong>Tipo:</strong> Deportiva</p>
<p><strong>Precio:</strong> $39,999 MXN</p>
<p><strong>Calificación:</strong> ⭐⭐⭐⭐☆ (4.4/5)</p>

<a href="https://www.youtube.com/results?search_query=storm+300+2.0" target="_blank">
<button>🎥 Ver Video</button>
</a>

<button onclick="cerrarModal()">Cerrar</button>
`,

moto6: `
<h2>KTM 250 Duke</h2>
<p><strong>Motor:</strong> 249cc</p>
<p><strong>Potencia:</strong> 30 HP aprox.</p>
<p><strong>Velocidad Máxima:</strong> 150 km/h aprox.</p>
<p><strong>Peso:</strong> 170 kg</p>
<p><strong>Tipo:</strong> Naked deportiva</p>
<p><strong>Precio:</strong> $102,900 MXN</p>

<a href="https://www.youtube.com/results?search_query=ktm+250+duke" target="_blank">
<button>🎥 Ver Video</button>
</a>

<button onclick="cerrarModal()">Cerrar</button>
`,

moto7: `
<h2>CF Moto 250NK</h2>
<p><strong>Motor:</strong> 249cc</p>
<p><strong>Potencia:</strong> 27.5 HP aprox.</p>
<p><strong>Velocidad Máxima:</strong> 145 km/h aprox.</p>
<p><strong>Peso:</strong> 151 kg</p>
<p><strong>Tipo:</strong> Naked deportiva</p>
<p><strong>Precio:</strong> $88,990 MXN</p>

<a href="https://www.youtube.com/results?search_query=cf+moto+250nk" target="_blank">
<button>🎥 Ver Video</button>
</a>

<button onclick="cerrarModal()">Cerrar</button>
`
};

// ===============================
// MODAL
// ===============================

function mostrarInfo(moto){
document.getElementById("contenido-info").innerHTML = datos[moto];
document.getElementById("modal").style.display = "flex";
}

function cerrarModal(){
document.getElementById("modal").style.display = "none";
}

// ===============================
// BUSCADOR
// ===============================

function buscarMoto(){

let input = document.getElementById("buscador").value.toLowerCase();
let motos = document.getElementsByClassName("moto");

for(let i=0;i<motos.length;i++){

let nombre = motos[i].innerText.toLowerCase();

if(nombre.includes(input)){
motos[i].style.display="block";
}else{
motos[i].style.display="none";
}

}

}

// ===============================
// FILTRO DE CILINDRADA
// ===============================

function filtrarCilindrada(){

let filtro = document.getElementById("filtro").value;
let motos = document.getElementsByClassName("moto");

for(let i=0;i<motos.length;i++){

let cc = parseInt(motos[i].getAttribute("data-cc"));

if(filtro=="todas"){
motos[i].style.display="block";
}

else if(filtro=="250" && cc>=200 && cc<=299){
motos[i].style.display="block";
}

else if(filtro=="300" && cc>=300 && cc<=349){
motos[i].style.display="block";
}

else if(filtro=="400" && cc>=350 && cc<=450){
motos[i].style.display="block";
}

else{
motos[i].style.display="none";
}

}

}