// 1. Tu lista oficial de proyectos
const proyectos = [
    { titulo: "Could A Giant Sticky Hand Save A Falling Person ", archivo: "Could A Giant Sticky Hand .jpg", link: "https://jaimeph7.artstation.com/projects/QKdBq8" },
    { titulo: "Organ Theft (Zack D. Films Style)", archivo: "Organ Theft | Zack D. Films Style 3D Animation.jpg", link: "https://jaimeph7.artstation.com/projects/WXRba3" },
    { titulo: "El Hueco (Short Film)", archivo: "El Hueco (Short Film).jpg", link: "https://jaimeph7.artstation.com/projects/rlDX2O" },
    { titulo: "Nike Air CGI Ad", archivo: "Nike Air CGI Ad.jpg", link: "https://jaimeph7.artstation.com/projects/P6bJ6o" },
    { titulo: "Tarro de Percarbonato de Sodio", archivo: "Tarro de Percarbonato de Sodio.jpg", link: "https://jaimeph7.artstation.com/projects/nJNXVE" },
    { titulo: "Beetle Bot", archivo: "Beetle-Bot.jpg", link: "https://jaimeph7.artstation.com/projects/lGozLo" },
    { titulo: "Hotel Yerbabuena CGI Ad", archivo: "Hotel Yerbabuena CGI Ad.jpg", link: "https://jaimeph7.artstation.com/projects/8BzOXQ" },
    { titulo: "2064 New York's World Fair", archivo: "2064 New York's World Fair - Submission for Worlds Next Door Blender Challenge!.jpg" },
    { titulo: "Transformer Table | Black & White Animatic", archivo: "Transformer Table | Black and White 1 | Animatic.jpg" },
    { titulo: "Apartamento Tipo", archivo: "Apartamento Tipo.jpg" },
    { titulo: "Air Purifier", archivo: "Air Purifier.jpg" },
    { titulo: "Transformer Table 4.0", archivo: "Transformer Table 4.0 - Animatic.jpg", link: "https://www.artstation.com/artwork/3o0v8d" },
    { titulo: "Liquid Chrome", archivo: "Liquid Chrome Portrait.jpg" },
    { titulo: "Lobster and Spring Ring Locks", archivo: "Lobster and Spring Ring Locks.webp" },
    { titulo: "Transformer Table Round Table", archivo: "Transformer Table Round Table Commercial - Animatic.jpg" },
    { titulo: "Bath Fitter Animatic", archivo: "Bath Fitter Animatic.jpg" },
    { titulo: "FAAH Ventana al Mundo", archivo: "FAAH Ventana al Mundo.jpg" },
    { titulo: "Bath Fitter Tax Season", archivo: "Bath Fitter Tax Season Animatic.jpg" },
    { titulo: "FOOH Paella Voladora", archivo: "FOOH Paella Voladora.jpg" },
    { titulo: "Pepsi Commercial", archivo: "Pepsi Commercial.jpg" },
    { titulo: "Elegant 3D Product – Premium Wine Bottle", archivo: "Elegant 3D Product Animation – Premium Wine Bottle.jpg" },
    { titulo: "Spaceship Approaching the Moon", archivo: "Spaceship Approaching the Moon.jpg" },
    { titulo: "Wassily Kandinsky, Violet Green", archivo: "Wassily Kandinsky, Violet Green, 1926.jpg" },
    { titulo: "Transformer Table - Marie Kondo", archivo: "Transformer Table - Marie Kondo Tips Commercial.jpg" },
    { titulo: "Transformer Table - Influencer", archivo: "Transformer Table - Influencer Commercial.jpg" },
    { titulo: "Transformer Table - Spark Joy", archivo: "Transformer Table - Spark Joy Commercial.jpg" },
    { titulo: "Transformer Table Black Friday", archivo: "Transformer Table 2024 Black Friday Commercial Animatic.jpg" },
    { titulo: "Transformer Table | Outdoor Table", archivo: "Transformer Table | Outdoor Table Commercial | Animatic.jpg" },
    { titulo: "Brightside Lunar Residences", archivo: "Brightside Lunar Residences.jpg" },
    { titulo: "CeraVe Moisturizing Cream", archivo: "CeraVe Moisturizing Cream Turnaround.jpg" },
    { titulo: "Heart-Shaped Earring from Ogna", archivo: "Heart-Shaped Earring from Ogna.jpg" }
];

// 2. Función para renderizar las tarjetas de forma segura
const grid = document.getElementById('artstation-grid');
const btnMas = document.getElementById('load-more-btn');
const btnMenos = document.getElementById('load-less-btn');

let itemsVisibles = 6; // Cantidad inicial

function renderProyectos() {
    grid.innerHTML = "";

    // Mostramos solo la cantidad actual de items
    proyectos.slice(0, itemsVisibles).forEach(proyecto => {
        const card = document.createElement('a');
        card.className = 'art-card';

        card.href = proyecto.link || '#';

        if (proyecto.link) {
            card.target = "_blank";
        }

        const rutaLimpia = `assets/project-images/${proyecto.archivo}`.split(' ').join('%20');

        card.innerHTML = `
        <div class="art-thumbnail">
            <img src="${rutaLimpia}" alt="${proyecto.titulo}">
        </div>
        <div class="art-title">${proyecto.titulo}</div>
    `;
        grid.appendChild(card);
    });
    // Lógica para mostrar/ocultar botones
    btnMas.style.display = itemsVisibles >= proyectos.length ? 'none' : 'inline-block';
    btnMenos.style.display = itemsVisibles > 6 ? 'inline-block' : 'none';
}

btnMas.addEventListener('click', () => {
    itemsVisibles += 6;
    renderProyectos();
});

btnMenos.addEventListener('click', () => {
    itemsVisibles = 6;
    renderProyectos();
});

window.addEventListener('DOMContentLoaded', renderProyectos);
