/**
 * DATA.JS
 * Datos mockeados de la corredora de propiedades.
 * Toda la información que se muestra en el template proviene de aquí.
 */

const IMG = (id, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/* =========================================================
   PROPIEDADES
   ========================================================= */
const propiedades = [
  {
    id: 1,
    titulo: "Casa moderna con jardín",
    tipo: "casa",
    operacion: "Venta",
    habitaciones: 4,
    banos: 3,
    m2: 220,
    precio: 185000000,
    ubicacion: "Las Condes, Santiago",
    imagen: IMG("photo-1564013799919-ab600027ffc6"),
    destacada: true,
    descripcion: "Hermosa casa de dos pisos con jardín privado, cocina equipada y amplia iluminación natural."
  },
  {
    id: 2,
    titulo: "Departamento con vista al mar",
    tipo: "departamento",
    operacion: "Venta",
    habitaciones: 3,
    banos: 2,
    m2: 110,
    precio: 145000000,
    ubicacion: "Viña del Mar",
    imagen: IMG("photo-1502672260266-1c1ef2d93688"),
    destacada: true,
    descripcion: "Departamento con terraza panorámica, piscina y acceso directo a la playa."
  },
  {
    id: 3,
    titulo: "Loft industrial remodelado",
    tipo: "departamento",
    operacion: "Arriendo",
    habitaciones: 1,
    banos: 1,
    m2: 75,
    precio: 650000,
    ubicacion: "Providencia, Santiago",
    imagen: IMG("photo-1493809842364-78817add7ffb"),
    destacada: true,
    descripcion: "Loft de estilo industrial con doble altura, ideal para profesionales creativos."
  },
  {
    id: 4,
    titulo: "Oficina corporativa premium",
    tipo: "comercial",
    operacion: "Arriendo",
    habitaciones: 0,
    banos: 2,
    m2: 180,
    precio: 2400000,
    ubicacion: "Las Condes, Santiago",
    imagen: IMG("photo-1497366216548-37526070297c"),
    destacada: false,
    descripcion: "Oficina totalmente equipada con sala de reuniones, kitchenette y estacionamientos."
  },
  {
    id: 5,
    titulo: "Terreno para desarrollo",
    tipo: "terreno",
    operacion: "Venta",
    habitaciones: 0,
    banos: 0,
    m2: 1200,
    precio: 320000000,
    ubicacion: "Lo Barnechea, Santiago",
    imagen: IMG("photo-1500382017468-9049fed747ef"),
    destacada: false,
    descripcion: "Terreno con excelente ubicación y factibilidad para proyecto inmobiliario."
  },
  {
    id: 6,
    titulo: "Casa familiar con piscina",
    tipo: "casa",
    operacion: "Venta",
    habitaciones: 5,
    banos: 4,
    m2: 320,
    precio: 295000000,
    ubicacion: "Vitacura, Santiago",
    imagen: IMG("photo-1600596542815-ffad4c1539a9"),
    destacada: true,
    descripcion: "Casa de tres pisos con piscina, quincho y jardín consolidado."
  },
  {
    id: 7,
    titulo: "Local comercial centro",
    tipo: "comercial",
    operacion: "Venta",
    habitaciones: 0,
    banos: 1,
    m2: 95,
    precio: 78000000,
    ubicacion: "Santiago Centro",
    imagen: IMG("photo-1604328698692-f76ea9498e76"),
    destacada: false,
    descripcion: "Local a pie de calle con gran vitrina y alto tráfico peatonal."
  },
  {
    id: 8,
    titulo: "Penthouse de lujo",
    tipo: "departamento",
    operacion: "Venta",
    habitaciones: 3,
    banos: 3,
    m2: 210,
    precio: 425000000,
    ubicacion: "Las Condes, Santiago",
    imagen: IMG("photo-1512917774080-9991f1c4c750"),
    destacada: true,
    descripcion: "Penthouse con vista panorámica, jacuzzi privado y dos estacionamientos."
  },
  {
    id: 9,
    titulo: "Casa estilo colonial",
    tipo: "casa",
    operacion: "Arriendo",
    habitaciones: 4,
    banos: 3,
    m2: 240,
    precio: 1850000,
    ubicacion: "Ñuñoa, Santiago",
    imagen: IMG("photo-1568605114967-8130f3a36994"),
    destacada: false,
    descripcion: "Casa colonial restaurada con techos altos, patio interior y chimenea."
  },
  {
    id: 10,
    titulo: "Parcela con vista cordillera",
    tipo: "terreno",
    operacion: "Venta",
    habitaciones: 0,
    banos: 0,
    m2: 5000,
    precio: 175000000,
    ubicacion: "Pirque, Cordillera",
    imagen: IMG("photo-1500382017468-9049fed747ef", 1200),
    destacada: false,
    descripcion: "Parcela de 5.000 m² con vista privilegiada a la cordillera de los Andes."
  },
  {
    id: 11,
    titulo: "Departamento nuevo a pasos del metro",
    tipo: "departamento",
    operacion: "Venta",
    habitaciones: 2,
    banos: 2,
    m2: 65,
    precio: 89000000,
    ubicacion: "Ñuñoa, Santiago",
    imagen: IMG("photo-1522708323590-d24dbb6b0267"),
    destacada: false,
    descripcion: "Departamento nuevo, dos dormitorios, cocina americana y balcón."
  },
  {
    id: 12,
    titulo: "Casa mediterránea con quincho",
    tipo: "casa",
    operacion: "Venta",
    habitaciones: 4,
    banos: 3,
    m2: 280,
    precio: 245000000,
    ubicacion: "La Reina, Santiago",
    imagen: IMG("photo-1600585154340-be6161a56a0c"),
    destacada: false,
    descripcion: "Casa de estilo mediterráneo, amplios espacios, quincho y piscina."
  }
];

/* =========================================================
   EQUIPO
   ========================================================= */
const equipo = [
  {
    nombre: "Andrés Morales",
    cargo: "Director & Corredor Senior",
    foto: IMG("photo-1560250097-0b93528c311a", 400),
    bio: "Más de 18 años de experiencia en el mercado inmobiliario de alto estándar. Certificado por la Cámara Chilena de la Construcción."
  },
  {
    nombre: "Carolina Pérez",
    cargo: "Corredora Residencial",
    foto: IMG("photo-1573497019940-1c28c88b4f3e", 400),
    bio: "Especialista en propiedades residenciales y atención personalizada. Idiomas: español e inglés."
  },
  {
    nombre: "Felipe Rojas",
    cargo: "Asesor Comercial",
    foto: IMG("photo-1568602471122-7832951cc4c5", 400),
    bio: "Experto en propiedades comerciales e industriales, con amplia red de contactos corporativos."
  },
  {
    nombre: "Daniela Soto",
    cargo: "Asesora Legal & Títulos",
    foto: IMG("photo-1580489944761-15a19d654956", 400),
    bio: "Abogada especializada en derecho inmobiliario, encarga de los estudios de títulos y escrituración."
  }
];

/* =========================================================
   TESTIMONIOS
   ========================================================= */
const testimonios = [
  {
    nombre: "María José Castillo",
    comentario: "Encontraron la casa de mis sueños en menos de un mes. Atención impecable, transparentes y muy profesionales. Los recomiendo sin dudar.",
    rating: 5,
    fecha: "Marzo 2026"
  },
  {
    nombre: "Rodrigo Fernández",
    comentario: "Vendieron mi departamento en tiempo récord y a un precio excelente. Su asesoría legal me dio total tranquilidad durante todo el proceso.",
    rating: 5,
    fecha: "Febrero 2026"
  },
  {
    nombre: "Patricia Lobos",
    comentario: "Llevo más de 5 años arrendando con ellos y siempre con la misma dedicación. Resolvieron cada imprevisto con rapidez.",
    rating: 5,
    fecha: "Enero 2026"
  }
];

/* =========================================================
   SERVICIOS
   ========================================================= */
const servicios = [
  {
    icono: "home",
    titulo: "Compra de propiedades",
    descripcion: "Te acompañamos a encontrar la propiedad que se ajuste a tu presupuesto, ubicación y estilo de vida. Acceso a cartera no publicada y negociación profesional.",
    imagen: IMG("photo-1560518883-ce09059eeffa", 600)
  },
  {
    icono: "tag",
    titulo: "Venta de propiedades",
    descripcion: "Marketing profesional, fotografía especializada, plan de medios y una red de más de 5.000 clientes activos. Vendemos tu propiedad en el menor tiempo posible.",
    imagen: IMG("photo-1554995207-c18c203602cb", 600)
  },
  {
    icono: "key",
    titulo: "Arriendo residencial y comercial",
    descripcion: "Administración integral de arriendos, selección de arrendatarios, contratos y cobranza. Soluciones para propietarios e inversionistas.",
    imagen: IMG("photo-1560448204-e02f11c3d0e2", 600)
  },
  {
    icono: "chart",
    titulo: "Tasación profesional",
    descripcion: "Valuación técnica de tu propiedad basada en estudios comparativos de mercado, ubicación, estado de conservación y proyecciones.",
    imagen: IMG("photo-1554469384-e58fac16e23a", 600)
  },
  {
    icono: "scales",
    titulo: "Asesoría legal",
    descripcion: "Estudio de títulos, redacción de contratos, acompañamiento notarial y resolución de conflictos. Equipo jurídico propio.",
    imagen: IMG("photo-1450101499163-c8848c66ca85", 600)
  },
  {
    icono: "building",
    titulo: "Administración de edificios",
    descripcion: "Gestión administrativa, financiera y de mantención de comunidades y edificios residenciales. Reportes mensuales y transparencia total.",
    imagen: IMG("photo-1545324418-cc1a3fa10c00", 600)
  }
];

/* =========================================================
   PLANES / PRECIOS
   ========================================================= */
const planes = [
  {
    nombre: "Básico",
    precio: "1,5%",
    periodo: "comisión por venta",
    destacado: false,
    descripcion: "Ideal para propietarios que buscan una gestión esencial con respaldo profesional.",
    caracteristicas: [
      "Tasación profesional",
      "Publicación en portales líderes",
      "Fotografía básica",
      "Gestión de visitas",
      "Reporte mensual"
    ],
    noIncluye: [
      "Marketing digital avanzado",
      "Video profesional",
      "Home staging"
    ]
  },
  {
    nombre: "Profesional",
    precio: "2,5%",
    periodo: "comisión por venta",
    destacado: true,
    descripcion: "El plan más elegido. Estrategia integral para vender más rápido y al mejor precio.",
    caracteristicas: [
      "Todo lo del plan Básico",
      "Fotografía y video profesional",
      "Marketing digital (RRSS, Google)",
      "Home staging virtual",
      "Asesoría legal incluida",
      "Reporte semanal"
    ],
    noIncluye: [
      "Tour virtual 3D"
    ]
  },
  {
    nombre: "Premium",
    precio: "3,5%",
    periodo: "comisión por venta",
    destacado: false,
    descripcion: "Servicio boutique para propiedades de alto valor. Exclusividad y atención dedicada.",
    caracteristicas: [
      "Todo lo del plan Profesional",
      "Tour virtual 3D y dron",
      "Eventos privados en la propiedad",
      "Corredor dedicado 24/7",
      "Home staging físico",
      "Garantía de tiempo de venta"
    ],
    noIncluye: []
  }
];

/* =========================================================
   TALLERES (HORARIO SEMANAL)
   ========================================================= */
const talleres = [
  {
    dia: "Lunes",
    hora: "19:00 - 21:00",
    titulo: "Introducción a la inversión inmobiliaria",
    expositor: "Andrés Morales",
    duracion: "2 horas",
    cupos: 25,
    inscritos: 18,
    modalidad: "Presencial",
    descripcion: "Conceptos fundamentales para comenzar a invertir en propiedades. Rentabilidad, plusvalía y financiamiento."
  },
  {
    dia: "Martes",
    hora: "18:30 - 20:30",
    titulo: "Cómo financiar tu primera propiedad",
    expositor: "Felipe Rojas",
    duracion: "2 horas",
    cupos: 30,
    inscritos: 24,
    modalidad: "Presencial + Online",
    descripcion: "Créditos hipotecarios, pie mínimo, simulaciones y requisitos bancarios. Con invitado del mundo financiero."
  },
  {
    dia: "Miércoles",
    hora: "19:00 - 20:30",
    titulo: "Tasación y valoración de inmuebles",
    expositor: "Carolina Pérez",
    duracion: "1,5 horas",
    cupos: 20,
    inscritos: 12,
    modalidad: "Presencial",
    descripcion: "Aprende a valorizar propiedades como un profesional. Métodos, variables y herramientas del mercado."
  },
  {
    dia: "Jueves",
    hora: "18:00 - 20:00",
    titulo: "Trámites legales y notariales",
    expositor: "Daniela Soto",
    duracion: "2 horas",
    cupos: 25,
    inscritos: 15,
    modalidad: "Online",
    descripcion: "Estudio de títulos, escrituras, impuestos y todo el proceso legal de una compraventa."
  },
  {
    dia: "Viernes",
    hora: "19:00 - 21:00",
    titulo: "Estrategias de venta para propietarios",
    expositor: "Andrés Morales",
    duracion: "2 horas",
    cupos: 30,
    inscritos: 22,
    modalidad: "Presencial",
    descripcion: "Cómo preparar y presentar tu propiedad para vender al mejor precio en el menor tiempo."
  },
  {
    dia: "Sábado",
    hora: "11:00 - 13:00",
    titulo: "Tour por propiedades destacadas",
    expositor: "Equipo completo",
    duracion: "2 horas",
    cupos: 15,
    inscritos: 14,
    modalidad: "Presencial",
    descripcion: "Visita guiada a 3 propiedades seleccionadas del mes. Pregunta en vivo a los corredores."
  }
];

/* =========================================================
   STATS
   ========================================================= */
const stats = [
  { numero: 25, sufijo: "+", label: "Años de experiencia" },
  { numero: 1200, sufijo: "+", label: "Propiedades vendidas" },
  { numero: 4500, sufijo: "+", label: "Clientes felices" },
  { numero: 35, sufijo: "", label: "Ciudades atendidas" }
];

/* =========================================================
   VALORES EMPRESA
   ========================================================= */
const valores = [
  {
    titulo: "Transparencia",
    descripcion: "Información clara y honesta en cada etapa del proceso. Sin sorpresas ni costos ocultos.",
    icono: "eye"
  },
  {
    titulo: "Compromiso",
    descripcion: "Acompañamos a nuestros clientes hasta después de concretada la operación.",
    icono: "handshake"
  },
  {
    titulo: "Excelencia",
    descripcion: "Equipo certificado y en permanente capacitación. Las mejores prácticas del mercado.",
    icono: "star"
  },
  {
    titulo: "Cercanía",
    descripcion: "Atención personalizada, entendiendo que cada propiedad y cada cliente son únicos.",
    icono: "heart"
  }
];

/* =========================================================
   TIMELINE / HISTORIA
   ========================================================= */
const historia = [
  { anio: "2000", titulo: "Fundación", descripcion: "Iniciamos como una oficina familiar en Santiago centro." },
  { anio: "2008", titulo: "Primera expansión", descripcion: "Abrimos oficinas en Viña del Mar y Concepción." },
  { anio: "2015", titulo: "Liderazgo digital", descripcion: "Pioneros en tours virtuales y marketing digital inmobiliario en Chile." },
  { anio: "2020", titulo: "Servicios integrales", descripcion: "Incorporamos asesoría legal propia y administración de propiedades." },
  { anio: "2026", titulo: "Hoy", descripcion: "Más de 4.500 clientes han confiado en nosotros. Seguimos creciendo." }
];
