// Variables globales
let displayedObras = 8;
let currentFilter = 'all';

// Datos embebidos
const sapecoData = {
    "empresa": {
        "nombre": "Sapeco S.A.",
        "slogan": "Obras Publicas - Montajes Industriales",
        "fundacion": 1994,
        "descripcion": "Somos una empresa familiar dedicada a las redes de infraestructuras",
        "experiencia": "Obras públicas y privadas, siendo estas últimas fundamentalmente su ámbito natural de trabajo.",
        "logo": "",
        "servicios": [
            "Obras de Infraestructura",
            "Agua",
            "Cloaca",
            "Gas",
            "Telefonía",
            "Electricidad"
        ],
        "comitentes": [
            "Organismos públicos",
            "Consorcios vecinales con supervisión de organismos públicos"
        ],
        "tipos_obras": [
            "Construcciones civiles",
            "Desagües cloacales",
            "Extensión de agua corriente",
            "Gasoductos",
            "Redes de gas natural",
            "Plantas reguladoras de presión",
            "Tendido eléctrico de media y baja tensión"
        ],
        "imagenes_generales": []
    },
    "contacto": {
        "presidente": "Pablo Javier Perez",
        "direccion": "Vucetich 968 – Wilde",
        "telefono_oficina": "4227-6401",
        "telefono_celular": "+54 11 52284318",
        "email": "sapecosa@gmail.com"
    },
    "clientes": [
        { "nombre": "AySA", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AySA_logo.svg/2560px-AySA_logo.svg.png" },
        { "nombre": "Metrogas", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Metrogas_Argentina_logo.svg/1200px-Metrogas_Argentina_logo.svg.png" },
        { "nombre": "Municipalidad de Berazategui", "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Escudo_del_Partido_de_Berazategui.png" },
        { "nombre": "Eidico", "logo": "https://pbs.twimg.com/profile_images/1131922765366472705/1qf9n2lX_400x400.png" },
        { "nombre": "Grupo Monarca", "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sJz_w2kH0E6M-x4guG3u4qjC0a2e_-xXFg&s" },
        { "nombre": "YPF", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/YPF_logo_2012.svg/1200px-YPF_logo_2012.svg.png" },
        { "nombre": "Las Golondrinas", "logo": "" },
        { "nombre": "Dorrego Reserva Urbana", "logo": "" },
        { "nombre": "Nuevo Quilmes", "logo": "" },
        { "nombre": "Los Troncos", "logo": "" },
        { "nombre": "Hudson Park", "logo": "" },
        { "nombre": "Edesur", "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Edesur_Logo.svg/1200px-Edesur_Logo.svg.png" },
        { "nombre": "Barrancas de Iraola", "logo": "" },
        { "nombre": "Barrancas de Guido", "logo": "" },
        { "nombre": "Greenville", "logo": "" },
        { "nombre": "Lagoon Hudson", "logo": "" },
        { "nombre": "Puerto Nizuc", "logo": "" }
    ],
    "obras_realizadas": [
        {
            "id": "puerto-nizuc-etapa-dos",
            "nombre": "Puerto Nizuc - Ejecución Etapa Dos",
            "slug": "puerto-nizuc-etapa-dos",
            "ubicacion": "Hudson",
            "periodo": "2024-Actualidad",
            "año_inicio": 2024,
            "año_fin": null,
            "en_curso": true,
            "imagen_principal": "images/proyectos/puerto_nizuc.jpg",
            "imagenes": [],
            "trabajos": [
                {
                    "tipo": "Red de Agua",
                    "cantidad": "4.600,00 Mts Aprox",
                    "detalle": ["3.500,00 Mts cañería de polietileno Ø75", "1.200,00 Mts cañería de polietileno Ø160", "3.500,00 Mts cañería de polietileno Ø63", "Todos unidos por electrofusión"]
                }
            ]
        },
        {
            "id": "azurra-tortugas",
            "nombre": "Azurra Tortugas",
            "slug": "azurra-tortugas",
            "ubicacion": "Tortugas",
            "periodo": "2021-Actualidad",
            "año_inicio": 2021,
            "año_fin": null,
            "en_curso": true,
            "imagen_principal": "images/proyectos/azurra_tortugas.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Red de Agua", "cantidad": "9.490,00 Mts", "detalle": ["Cañería de polietileno unido por electrofusión"] },
                { "tipo": "Red de Cloaca", "cantidad": "9.490,00 Mts", "detalle": ["Cañería de PVC junta segura", "Bocas de registro premoldeadas"] },
                { "tipo": "Red Eléctrica - Iluminación", "cantidad": null, "detalle": ["Cables de 3*240/120", "Buzones", "Empalmes"] },
                { "tipo": "Red de Tritubo", "cantidad": null, "detalle": ["Tritubos", "Cajas premoldeadas", "Hilo guía"] }
            ]
        },
        {
            "id": "fincas-don-victor",
            "nombre": "Fincas Don Victor",
            "slug": "fincas-don-victor",
            "ubicacion": "Villa Elisa",
            "periodo": "2021-2022",
            "año_inicio": 2021,
            "año_fin": 2022,
            "en_curso": false,
            "imagen_principal": "images/proyectos/fincas_donvictor.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Movimiento de suelo y calles", "cantidad": null, "detalle": ["Apertura de calles y entoscado", "Hormigón de base", "Cunetas e intertrabado"] },
                { "tipo": "Red de Agua", "cantidad": null, "detalle": ["Cañería de polietileno unido por electrofusión"] },
                { "tipo": "Red de Cloaca", "cantidad": null, "detalle": ["Cañería de PVC junta segura", "Bocas de registro premoldeadas"] },
                { "tipo": "Red de Pluvial", "cantidad": null, "detalle": ["Cañería de PVC junta segura", "Bocas de registro premoldeadas"] },
                { "tipo": "Red Eléctrica", "cantidad": null, "detalle": ["Cables de 3*240/120", "Buzones de 3 y 4 vías", "Empalmes"] },
                { "tipo": "Red de Tritubo", "cantidad": null, "detalle": ["Tritubos", "Cajas premoldeadas", "Hilo guía"] }
            ]
        },
        {
            "id": "parque-de-la-innovacion",
            "nombre": "Parque de la Innovación",
            "slug": "parque-de-la-innovacion",
            "ubicacion": "CABA",
            "periodo": "2021-2022",
            "año_inicio": 2021,
            "año_fin": 2022,
            "en_curso": false,
            "imagen_principal": "images/proyectos/parque_innovacion.jpg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Movimiento de suelo y calles", "cantidad": null, "detalle": ["Apertura de calles y entoscado", "Hormigón de base", "Cunetas e intertrabado"] },
                { "tipo": "Red de Cloaca", "cantidad": null, "detalle": ["Cañería de PVC junta segura", "Bocas de registro premoldeadas"] },
                { "tipo": "Red de Agua", "cantidad": null, "detalle": ["Cañería de polietileno unido por electrofusión"] }
            ]
        },
        {
            "id": "poligono-21",
            "nombre": "Polígono 21",
            "slug": "poligono-21",
            "ubicacion": "Berazategui",
            "periodo": "2020-2021",
            "año_inicio": 2020,
            "año_fin": 2021,
            "en_curso": false,
            "imagen_principal": "https://lh3.googleusercontent.com/aida-public/AB6AXuDc5mxW-wi2QFLeP3EbV3yKTbRlnJtWG9f70OlFGS-PZMbpy0yaAiV96CUIqQBZ7eX-jd2Z6jHSxaik0jkHzl_f1i68X5AGC4wOi7KW5BwFR1Q4W38P1qFI6SVTNjYv7_sBnjAjXHGHg7cZAwuklMtsNMD30VRf1icjAfF_rzsNFKgcoHwcTq2L-LXdEgRQI8ow5_y6AK_-fQ05vu6JbpY1JC8tZfaLQqV9dos0pdwFOGMrt3Q20nPBj5o2iUxodcZAg_iYahZJXiS2",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Movimiento de suelo y calles", "cantidad": null, "detalle": ["Apertura de calles y entoscado", "Hormigón de base", "Cunetas e intertrabado"] },
                { "tipo": "Red Eléctrica", "cantidad": null, "detalle": ["Cables de 3*240/120", "Buzones y empalmes"] },
                { "tipo": "Red de Agua", "cantidad": null, "detalle": ["Cañería de polietileno unido por electrofusión"] },
                { "tipo": "Red de Cloaca", "cantidad": null, "detalle": ["Cañería de PVC junta segura", "Bocas de registro premoldeadas"] }
            ]
        },
        {
            "id": "barrio-iby-ypf",
            "nombre": "Barrio IBY (YPF)",
            "slug": "barrio-iby-ypf",
            "ubicacion": "Villa 31 Buenos Aires",
            "periodo": "2019-2020",
            "año_inicio": 2019,
            "año_fin": 2020,
            "en_curso": false,
            "imagen_principal": "images/proyectos/barrio_iby.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Red de Agua", "cantidad": null, "detalle": ["Cañería de polietileno unido por electrofusión"] },
                { "tipo": "Red de Cloaca", "cantidad": null, "detalle": ["Cañería de PVC junta segura", "Bocas de registro premoldeadas"] },
                { "tipo": "Red de Pluvial", "cantidad": null, "detalle": ["Cañería de PVC junta segura", "Bocas de registro premoldeadas"] },
                { "tipo": "Red Eléctrica", "cantidad": null, "detalle": ["Cables de 3*240/120", "Buzones de 3 y 4 vías", "Empalmes"] },
                { "tipo": "Red de Tritubo", "cantidad": null, "detalle": ["Tritubos", "Cajas premoldeadas", "Hilo guía"] }
            ]
        },
        {
            "id": "puerto-nizuc-etapa-comercial",
            "nombre": "Puerto Nizuc - Ejecución Etapa Comercial",
            "slug": "puerto-nizuc-etapa-comercial",
            "ubicacion": "Hudson",
            "periodo": "2022-2023",
            "año_inicio": 2022,
            "año_fin": 2023,
            "en_curso": false,
            "imagen_principal": "images/proyectos/puerto_nizuc.jpg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Red de Agua", "cantidad": "4.600,00 Mts Aprox", "detalle": ["Cañería de polietileno Ø160 unido por electrofusión"] }
            ]
        },
        {
            "id": "greenville-media-tension",
            "nombre": "Greenville - Media Tensión",
            "slug": "greenville-media-tension",
            "ubicacion": "Berazategui",
            "periodo": "2019-2020",
            "año_inicio": 2019,
            "año_fin": 2020,
            "en_curso": false,
            "imagen_principal": "images/proyectos/greenville.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Red Eléctrica y Telefonía", "cantidad": null, "detalle": ["Ejecución en Hotel", "Ejecución e instalación de cámaras transformadoras"] }
            ]
        },
        {
            "id": "barrio-santa-clara",
            "nombre": "Barrio Santa Clara",
            "slug": "barrio-santa-clara",
            "ubicacion": "Canning",
            "periodo": "2016-2017",
            "año_inicio": 2016,
            "año_fin": 2017,
            "en_curso": false,
            "imagen_principal": "images/proyectos/santa_clara.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Red de Cloacas", "cantidad": "11.750,00 mts", "detalle": ["Zanjeo", "Provisión de Materiales", "Bocas de Registro premoldeadas", "Tapas Reglamentarias"] },
                { "tipo": "Red de Agua", "cantidad": "11.750 mts", "detalle": ["Zanjeo", "Provisión de Materiales", "Polietileno clase 10 unido por electrofusión", "Válvulas"] }
            ]
        },

        {
            "id": "barrio-las-golondrinas",
            "nombre": "Barrio Las Golondrinas",
            "slug": "barrio-las-golondrinas",
            "ubicacion": "Berazategui",
            "periodo": "2013-2015",
            "año_inicio": 2013,
            "año_fin": 2015,
            "en_curso": false,
            "imagen_principal": "images/proyectos/las_golondrinas.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Red de Cloacas", "cantidad": "4.200,00 mts", "detalle": ["Zanjeo", "Provisión de Materiales", "Bocas de Registro PREMOLDEADAS", "Tapas Reglamentarias hierro fundido"] },
                { "tipo": "Red de Agua", "cantidad": "4.200,00 mts", "detalle": ["Zanjeo", "Provisión de Materiales", "Polietileno clase 10 junta segura", "Válvulas", "Servicios", "Medidores"] },
                { "tipo": "Red de Gas Natural", "cantidad": "7.200,00 mts", "detalle": ["Zanjeo", "Provisión de Materiales", "Accesorios", "Malla de advertencia"] },
                { "tipo": "Red Eléctrica de media y baja tensión", "cantidad": "7.000,00 mts", "detalle": ["Tendido de tritubo"] }
            ]
        },
        {
            "id": "nuevo-quilmes",
            "nombre": "Nuevo Quilmes",
            "slug": "nuevo-quilmes",
            "ubicacion": "Quilmes",
            "periodo": "2010-2012",
            "año_inicio": 2010,
            "año_fin": 2012,
            "en_curso": false,
            "imagen_principal": "images/proyectos/nuevo_quilmes.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Red de Cloacas", "cantidad": "11.000,00 mts", "detalle": ["Zanjeo", "Provisión de Materiales", "Bocas de Registro PREMOLDEADAS", "Tapas Reglamentarias hierro fundido"] },
                { "tipo": "Red de Agua", "cantidad": "11.000,00 mts", "detalle": ["Zanjeo", "Provisión de Materiales", "P.V.C. clase 10 junta segura", "Válvulas", "Servicios", "Medidores"] }
            ]
        },
        {
            "id": "nuevo-quilmes-2",
            "nombre": "Nuevo Quilmes 2",
            "slug": "nuevo-quilmes-2",
            "ubicacion": "Quilmes",
            "periodo": "2025-Actualidad",
            "año_inicio": 2025,
            "año_fin": null,
            "en_curso": true,
            "imagen_principal": "images/proyectos/nuevo_quilmes_2.jpeg",
            "imagenes": [],
            "trabajos": [
                { "tipo": "Agua Potable", "cantidad": null, "detalle": [] },
                { "tipo": "Red de Cloaca", "cantidad": null, "detalle": [] }
            ]
        }
    ],
    "equipamiento": {
        "equipo_zanjeo": [
            { "nombre": "Excavadora John Deere", "imagen": "images/excavadora.jpeg" },
            { "nombre": "Mini Cargadora", "imagen": "images/miniexcavadora.jpeg" },
            { "nombre": "Camión de Obra", "imagen": "images/camion.jpeg" },
            { "nombre": "Equipamiento en Obra", "imagen": "images/rollo.jpeg" }
        ],
        "equipo_pruebas": [
            { "nombre": "Tanque aguatero de 3000 litros", "imagen": "" },
            { "nombre": "Nivel óptico marca Petax completo", "imagen": "" },
            { "nombre": "Generadores trifásicos y monofásicos", "imagen": "" },
            { "nombre": "Bombas Flygt", "imagen": "" }
        ],
        "imagenes_galeria": []
    },
    "referencias": {
        "proveedores": [
            { "nombre": "Plastiferro S.A.", "direccion": "Av. General Paz Nº 8950 CABA", "telefono": "1569955409" },
            { "nombre": "Celec S.A.", "direccion": "Gdor. Oliden Nº 1669 Valentín Alsina", "telefono": "42185500" },
            { "nombre": "Ital-Vinil S.A.", "direccion": "Av. Otto Bermberg 1885 Parque Ind. Hudson", "telefono": "32202791" },
            { "nombre": "SMG Art", "direccion": "Av. Mitre 1325 CABA", "telefono": "8103333013" },
            { "nombre": "General Plastics", "direccion": "Roberto Wernicke N° 573", "telefono": "47633370" }
        ],
        "bancarias": {
            "banco": "Banco Francés",
            "sucursal": "Quilmes - 109",
            "cuenta_corriente": "109 - 1645-8",
            "moneda": "Pesos"
        }
    },
    "estadisticas": {
        "total_obras": 2536,
        "años_experiencia": 30,
        "metros_agua_aprox": 85000,
        "metros_cloaca_aprox": 75000,
        "metros_gas_aprox": 75000,
        "zonas_trabajo": ["Berazategui", "Quilmes", "Hudson", "Tortugas", "Villa Elisa", "CABA", "Villa 31", "Canning", "Moreno", "Ituzaingó", "Martínez", "Claypole", "Magdalena", "Luján"]
    },
    "clientes": [
        { "nombre": "AySA", "logo": "images/aysa.jpg" },
        { "nombre": "Metrogas", "logo": "images/metrogas.png" },
        { "nombre": "Edesur", "logo": "images/edesur.png" },
        { "nombre": "Edenor", "logo": "images/edenor.webp" },
        { "nombre": "Edelap", "logo": "images/edelap.png" },
        { "nombre": "Naturgy", "logo": "images/naturgy.jpg" },
        { "nombre": "YPF", "logo": "images/ypf.jpg" },
        { "nombre": "Telecom", "logo": "images/telecom.png" },
        { "nombre": "Municipalidad de Berazategui", "logo": "images/berazategui.png" },
        { "nombre": "Las Golondrinas", "logo": "images/las_golondrinas.png" },
        { "nombre": "Los Troncos", "logo": "images/los_troncos.png" },
        { "nombre": "Hudson Park", "logo": "images/hudson_pak.png" },
        { "nombre": "Parque Innovacion", "logo": "images/parque_innovacion.png" },
        { "nombre": "Puerto Nizuc", "logo": "images/puerto_nizuc.png" },
        { "nombre": "Azurra Tortugas", "logo": "images/azurra_tortugas.jpg" },
        { "nombre": "Nuevo Quilmes", "logo": "images/nuevo_quilmes.jpg" },
        { "nombre": "Greenville", "logo": "images/greenville.png" },
        { "nombre": "Fincas Don Victor", "logo": "images/fincas_don_victor.png" }
    ]
};

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    setupScrollAnimations();
    setupMobileMenu();
    setupHeaderScroll();
    setupParallax();
});

function initializeApp() {
    renderStats();
    renderEmpresa();
    renderServicios();
    renderEquipamiento();
    renderObras();
    renderClientes();
    renderFooter();
    setupFilters();

    // Actualizar año actual
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Renderizar estadísticas con animación de contador
function renderStats() {
    const container = document.getElementById('stats-container');
    if (!container) return;

    const stats = [
        { icon: 'engineering', value: sapecoData.estadisticas.años_experiencia, suffix: '+', label: 'Años de Experiencia' },
        { icon: 'construction', value: sapecoData.estadisticas.total_obras, suffix: '+', label: 'Proyectos Completados' },
        { icon: 'verified', value: 100, suffix: '%', label: 'Calidad Garantizada' }
    ];

    container.innerHTML = stats.map((stat, index) => `
        <div class="stat-item ${index > 1 ? 'bordered' : ''}">
            <span class="material-symbols-outlined stat-icon">${stat.icon}</span>
            <p class="stat-value">
                <span class="counter" data-target="${stat.value}">${stat.value}</span>${stat.suffix}
            </p>
            <p class="stat-label">${stat.label}</p>
        </div>
    `).join('');
}

// Renderizar información de empresa
function renderEmpresa() {
    const nombreEl = document.getElementById('empresa-nombre');
    if (nombreEl) nombreEl.textContent = sapecoData.empresa.nombre;

    const descEl = document.getElementById('empresa-descripcion');
    if (descEl) descEl.textContent = sapecoData.empresa.descripcion;

    const fundacionEl = document.getElementById('año-fundacion');
    if (fundacionEl) fundacionEl.textContent = sapecoData.empresa.fundacion;

    const expTextEl = document.getElementById('años-experiencia-text');
    if (expTextEl) expTextEl.textContent = `Más de ${sapecoData.estadisticas.años_experiencia} años de experiencia`;

    // Renderizar servicios destacados
    const serviciosContainer = document.getElementById('empresa-servicios');
    if (serviciosContainer) {
        const serviciosDestacados = [
            {
                icon: 'engineering',
                title: 'ING DE PRESICION',
                desc: 'Nuestro equipo se especializa en la ejecución de proyectos de infraestructura, tanto tecnicamente en la ejecución de proyectos desde 0, resolviendo las inquietudes o problematicas de nuestros clientes y la ejecución de los mismos'
            },
            {
                icon: 'safety_check',
                title: 'SEGURIDAD CERTIFICADA',
                desc: 'Contamos con mas de 30 años en el rubro, con obras en actual funcionamiento que respaldan nuestro desempeño'
            },
            {
                icon: 'verified',
                title: 'PROYECTOS Y APROBACIONES',
                desc: 'Tenemos la capacidad de realizar proyectos y aprobarlos en los distintos entes tales como:',
                logos: [
                    'images/edesur.png',
                    'images/edenor.webp',
                    'images/edelap.png',
                    'images/aysa.jpg',
                    'images/metrogas.png',
                    'images/naturgy.jpg'
                ]
            }
        ];

        serviciosContainer.innerHTML = serviciosDestacados.map(s => `
            <div class="servicio-destacado">
                <div class="servicio-icon">
                    <span class="material-symbols-outlined">${s.icon}</span>
                </div>
                <div class="servicio-text">
                    <h4>${s.title}</h4>
                    <p>${s.desc}</p>
                    ${s.logos ? `
                        <div class="servicio-logos">
                            ${s.logos.map(logo => `<img class="logo-ente" src="${logo}" alt="Ente regulador">`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }
}

// Renderizar servicios
function renderServicios() {
    const container = document.getElementById('servicios-container');
    if (!container) return;

    const serviciosData = [
        { icon: 'water_drop', title: 'Redes de Agua Potable', desc: 'Instalación de redes de agua potable con cañería de polietileno unido por electrofusión y fusión a tope.', items: ['Polietileno clase 10', 'Electrofusión', 'Fusión a tope'] },
        { icon: 'delete', title: 'Redes Cloacales', desc: 'Ejecución de redes de cloacas con cañería de PVC junta segura. Especialistas en pozos de bombeo.', items: ['PVC junta segura', 'Pozos de bombeo'] },
        { icon: 'local_fire_department', title: 'Redes de Gas', desc: 'Gasoductos y redes de gas natural con provisión de materiales y accesorios.', items: ['Gas natural', 'Plantas reguladoras'] },
        { icon: 'bolt', title: 'Redes Eléctricas', desc: 'Tendido eléctrico de media y baja tensión aprobados por los entes reguladores.', items: ['Media y Baja Tensión', 'Aprobado por Entes'] },
        { icon: 'water', title: 'Redes Pluviales', desc: 'Desagües pluviales con cañerías de PVC o premoldeadas segun proyecto.', items: ['Cañerías PVC', 'Premoldeados'] },
        { icon: 'construction', title: 'Movimiento de Suelo', desc: 'Apertura de calles, entoscado, hormigón de base y cunetas.', items: ['Calles', 'Hormigón'] }
    ];

    container.innerHTML = serviciosData.map((s, i) => `
        <div class="card observe-animation" data-animation="animate-fade-in-up" style="animation-delay: ${i * 0.1}s">
            <div class="card-icon">
                <span class="material-symbols-outlined" style="font-size: 1.875rem;">${s.icon}</span>
            </div>
            <h3 class="card-title">${s.title}</h3>
            <p class="card-description">${s.desc}</p>
            <ul class="card-list">
                ${s.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Renderizar equipamiento
function renderEquipamiento() {
    const container = document.getElementById('equipamiento-container');
    if (!container) return;

    const equipos = sapecoData.equipamiento.equipo_zanjeo.filter(e => e.imagen);

    container.innerHTML = equipos.map((equipo, i) => `
        <div class="equipo-item observe-animation" data-animation="animate-scale-in" style="animation-delay: ${i * 0.1}s">
            <img src="${equipo.imagen}" alt="${equipo.nombre}" title="${equipo.nombre}"/>
        </div>
    `).join('');
}

// Renderizar obras
function renderObras(filter = 'all') {
    const container = document.getElementById('obras-container');
    if (!container) return;

    let obras = sapecoData.obras_realizadas;

    if (filter !== 'all') {
        obras = obras.filter(o => o.ubicacion.toLowerCase().includes(filter.toLowerCase()));
    }

    const obrasToShow = obras.slice(0, displayedObras);

    container.innerHTML = obrasToShow.map((obra, i) => `
        <div class="obra-card observe-animation"
             data-animation="animate-fade-in-up"
             style="animation-delay: ${i * 0.1}s"
             onclick="openObraModal('${obra.id}')">
            <div class="obra-image-container">
                <img class="obra-image" src="${obra.imagen_principal}" alt="${obra.nombre}"/>
            </div>
            <div class="obra-overlay">
                ${obra.en_curso ? '<span class="obra-badge">En Curso</span>' : ''}
                <span class="obra-location">${obra.ubicacion}</span>
                <h3 class="obra-title">${obra.nombre}</h3>
                <p class="obra-period">${obra.periodo}</p>
                <p class="obra-description">
                    ${obra.trabajos.map(t => t.tipo).slice(0, 2).join(' • ')}
                </p>
            </div>
        </div>
    `).join('');

    // Actualizar contador
    const countEl = document.getElementById('obras-count');
    if (countEl) countEl.textContent = `${obras.length} proyectos`;

    // Mostrar/ocultar botón de cargar más
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        if (displayedObras >= obras.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    // Re-observar elementos
    observeElements();
}

// Renderizar clientes (Carousel infinito)
function renderClientes() {
    const section = document.getElementById('clientes-carousel');
    if (!section) return;

    // Filtrar solo clientes con logo
    const clientes = sapecoData.clientes.filter(c => c.logo);

    // Duplicamos los clientes para asegurar el loop suave
    // Necesitamos suficientes elementos para cubrir el ancho de pantalla + un poco más
    const tripleClientes = [...clientes, ...clientes, ...clientes];

    section.innerHTML = `
        <div class="carousel-track">
            ${tripleClientes.map((cliente, i) => `
                <div class="cliente-slide">
                    <div class="cliente-logo-container">
                         <img src="${cliente.logo}" alt="${cliente.nombre}" class="cliente-logo">
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Renderizar footer
function renderFooter() {
    const nombreEl = document.getElementById('footer-nombre');
    if (nombreEl) nombreEl.textContent = sapecoData.empresa.nombre;

    const copyEl = document.getElementById('copyright-nombre');
    if (copyEl) copyEl.textContent = sapecoData.empresa.nombre;

    // Servicios en footer
    const footerServicios = document.getElementById('footer-servicios');
    if (footerServicios) {
        footerServicios.innerHTML = sapecoData.empresa.servicios.slice(0, 5).map(s => `
            <li><a href="index.html#servicios">${s}</a></li>
        `).join(''); // Fixed link to point to index.html
    }

    // Contacto en footer
    const footerContacto = document.getElementById('footer-contacto');
    if (footerContacto) {
        footerContacto.innerHTML = `
            <li>
                <span class="material-symbols-outlined">location_on</span>
                <span>${sapecoData.contacto.direccion}</span>
            </li>
            <li>
                <span class="material-symbols-outlined">mail</span>
                <a href="mailto:${sapecoData.contacto.email}">${sapecoData.contacto.email}</a>
            </li>
            <li>
                <span class="material-symbols-outlined">call</span>
                <a href="tel:${sapecoData.contacto.telefono_celular}">${sapecoData.contacto.telefono_celular}</a>
            </li>
            <li>
                <span class="material-symbols-outlined">phone</span>
                <span>${sapecoData.contacto.telefono_oficina} (Oficina)</span>
            </li>
        `;
    }

    // Referencias bancarias
    const footerBancarias = document.getElementById('footer-bancarias');
    if (footerBancarias) {
        footerBancarias.innerHTML = `
            <p><strong>Banco:</strong> ${sapecoData.referencias.bancarias.banco}</p>
            <p><strong>Sucursal:</strong> ${sapecoData.referencias.bancarias.sucursal}</p>
            <p><strong>Cuenta:</strong> ${sapecoData.referencias.bancarias.cuenta_corriente}</p>
        `;
    }
}

// Configurar filtros
function setupFilters() {
    const container = document.getElementById('filtros-container');
    if (!container) return; // Exit if filters container doesn't exist

    const ubicaciones = [...new Set(sapecoData.obras_realizadas.map(o => o.ubicacion))];

    // Filter "All" button listener
    const allBtn = container.querySelector('[data-filter="all"]');
    if (allBtn) {
        allBtn.onclick = () => applyFilter('all');
    }

    ubicaciones.slice(0, 5).forEach(ub => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = ub;
        btn.textContent = ub;
        btn.onclick = () => applyFilter(ub);
        container.appendChild(btn);
    });
}

function applyFilter(filter) {
    currentFilter = filter;
    displayedObras = 8;

    // Actualizar estado activo de botones
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    renderObras(filter);
}

// Cargar más obras
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
            displayedObras += 4;
            renderObras(currentFilter);
        });
    }
});

// Modal de obra
function openObraModal(obraId) {
    const obra = sapecoData.obras_realizadas.find(o => o.id === obraId);
    if (!obra) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="modal-image">
            <img src="${obra.imagen_principal}" alt="${obra.nombre}" style="image-rendering: auto;"/>
            <div class="modal-image-gradient"></div>
        </div>
        <div class="modal-body">
            <div class="modal-meta">
                ${obra.en_curso ? '<span class="obra-badge">En Curso</span>' : ''}
                <span class="obra-location">${obra.ubicacion}</span>
                <span class="obra-period">${obra.periodo}</span>
            </div>
            <h2 class="modal-title">${obra.nombre}</h2>

            <h3 class="modal-section-title">Trabajos Realizados</h3>
            <div class="trabajos-list">
                ${obra.trabajos.map(t => `
                    <div class="trabajo-item">
                        <div class="trabajo-header">
                            <h4 class="trabajo-tipo">${t.tipo}</h4>
                            ${t.cantidad ? `<span class="trabajo-cantidad">${t.cantidad}</span>` : ''}
                        </div>
                        <ul class="trabajo-detalles">
                            ${t.detalle.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('obra-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('obra-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// Cerrar modal con Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// Animaciones al scroll
function setupScrollAnimations() {
    observeElements();
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.dataset.animation;
                entry.target.classList.add('animated', animation);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.observe-animation:not(.animated)').forEach(el => {
        observer.observe(el);
    });
}

// Mobile menu
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuCloseBtn = document.getElementById('mobile-menu-close');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // Forzar estilos para ocupar toda la pantalla (sobrepasa cualquier contenedor)
            mobileMenu.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                max-width: none !important;
                max-height: none !important;
                margin: 0 !important;
                padding: 0 !important;
                border-radius: 0 !important;
                z-index: 99999 !important;
            `;

            mobileMenu.classList.add('show');
            document.body.classList.add('menu-open');
            document.documentElement.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
        });

        // Función para cerrar el menú
        const closeMenu = () => {
            mobileMenu.classList.remove('show');
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
        };

        // Cerrar con botón X
        if (menuCloseBtn) {
            menuCloseBtn.addEventListener('click', closeMenu);
        }

        // Cerrar al hacer click en un enlace
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Cerrar al hacer click en el botón del menú
        mobileMenu.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', closeMenu);
        });
    }
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.getElementById('header');

    // Mostrar header siempre
    header.classList.add('visible');
}

// Parallax effect
function setupParallax() {
    const heroBg = document.getElementById('hero-bg');

    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
