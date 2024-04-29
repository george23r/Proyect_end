const driftProducts = [
  {
    name: "Llantas de alto rendimiento",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "250000",
    code: "PrD001Ab",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Suspensión ajustable",
    category: "Reparación",
    image: "No se ha seleccionado ningún archivo",
    price: "500000",
    code: "PRd002CD",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Toyota"
  },
  {
    name: "Escape deportivo",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "700000",
    code: "prd003ef",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Difusor trasero",
    category: "Mantenimiento",
    image: "No se ha seleccionado ningún archivo",
    price: "400000",
    code: "Prd004Gh",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "BMW"
  },
  {
    name: "Asientos de cubo",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "300000",
    code: "prD005IJ",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Volante deportivo desplazado",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "150000",
    code: "PRD006kL",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Subaru"
  },
  {
    name: "Kit de carrocería",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "1200000",
    code: "PrD007mn",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Juego de luces LED",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "100000",
    code: "Prd008Op",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Mitsubishi"
  },
  {
    name: "Controlador de freno de mano hidráulico",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "600000",
    code: "prD009QR",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de refuerzo de chasis",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "800000",
    code: "PrD010st",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Nissan"
  },
  {
    name: "Sistema de refrigeración mejorado",
    category: "Mantenimiento",
    image: "No se ha seleccionado ningún archivo",
    price: "900000",
    code: "PrD011Uv",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Pastillas de freno de alto rendimiento",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "150000",
    code: "Prd012WX",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Ford"
  },
  {
    name: "Kit de control de tracción ajustable",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "400000",
    code: "PRD013yz",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de aumento de potencia",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "2000000",
    code: "Prd014Ab",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Audi"
  },
  {
    name: "Sistema de extinción de incendios",
    category: "Mantenimiento",
    image: "No se ha seleccionado ningún archivo",
    price: "1200000",
    code: "PRD015Cd",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Frenos de disco perforados",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "800000",
    code: "Prd016Ef",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Chevrolet"
  },
  {
    name: "Turbo cargador de alto rendimiento",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "3000000",
    code: "PRD017Gh",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Spoiler delantero",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "500000",
    code: "PrD018IJ",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "BMW"
  },
  {
    name: "Faldones laterales",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "400000",
    code: "PRD019kl",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de iluminación interior LED",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "150000",
    code: "PrD020Mn",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Honda"
  },
  {
    name: "Intercooler de alto rendimiento",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "600000",
    code: "PRD021OP",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de escape completo",
    category: "Reparación",
    image: "No se ha seleccionado ningún archivo",
    price: "2000000",
    code: "PRD022QR",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Volkswagen"
  },
  {
    name: "Juego de pedales deportivos",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "80000",
    code: "PrD023St",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Asientos deportivos",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "1200000",
    code: "PRD024Uv",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Mercedes-Benz"
  },
  {
    name: "Alfombras de piso",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "50000",
    code: "PrD025Wx",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de sonido premium",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "1000000",
    code: "PRD026YZ",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Lexus"
  },
  {
    name: "Kit de carrocería de fibra de carbono",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "3500000",
    code: "PrD027Ab",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Frenos de disco Brembo",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "2000000",
    code: "PRD028CD",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Ferrari"
  },
  {
    name: "Sistema de admisión de aire frío",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "700000",
    code: "PrD029EF",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Alerón trasero",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "250000",
    code: "PRD030Gh",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Acura"
  },
  {
    name: "Kit de admisión de alto flujo",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "600000",
    code: "PrD031IJ",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Faldones delanteros",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "300000",
    code: "PRD032KL",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Mazda"
  },
  {
    name: "Sistema de escape deportivo",
    category: "Reparación",
    image: "No se ha seleccionado ningún archivo",
    price: "900000",
    code: "PrD033Mn",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Filtros de aire de alto rendimiento",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "100000",
    code: "PRD034OP",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Porsche"
  },
  {
    name: "Sistema de iluminación exterior LED",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "800000",
    code: "PrD035QR",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Suspensión neumática",
    category: "Reparación",
    image: "No se ha seleccionado ningún archivo",
    price: "1500000",
    code: "PRD036St",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Tesla"
  },
  {
    name: "Juego de neblineros LED",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "400000",
    code: "PrD037Uv",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de aumento de potencia eléctrico",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "2500000",
    code: "PRD038Wx",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Jeep"
  },
  {
    name: "Parachoques deportivo",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "600000",
    code: "PrD039YZ",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de carrocería de poliuretano",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "1800000",
    code: "PRD040AB",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Land Rover"
  },
  {
    name: "Sistema de sonido para exteriores",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "1200000",
    code: "PrD041CD",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Filtros de aceite de alto rendimiento",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "80000",
    code: "PRD042EF",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Jaguar"
  },
  {
    name: "Llantas deportivas",
    category: "Reparación",
    image: "No se ha seleccionado ningún archivo",
    price: "2500000",
    code: "PrD043Gh",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Spoiler trasero",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "500000",
    code: "PRD044IJ",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Infiniti"
  },
  {
    name: "Kit de carrocería de fibra de vidrio",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "3000000",
    code: "PrD045KL",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Luces antiniebla LED",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "200000",
    code: "PRD046Mn",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Kia"
  },
  {
    name: "Radiador de alto flujo",
    category: "Reparación",
    image: "No se ha seleccionado ningún archivo",
    price: "600000",
    code: "PrD047OP",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de encendido electrónico",
    category: "Repuestos",
    image: "No se ha seleccionado ningún archivo",
    price: "700000",
    code: "PRD048QR",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Volvo"
  },
  {
    name: "Paragolpes delantero de fibra de carbono",
    category: "Accesorios",
    image: "No se ha seleccionado ningún archivo",
    price: "1000000",
    code: "PrD049St",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de escape catalizado",
    category: "Reparación",
    image: "No se ha seleccionado ningún archivo",
    price: "800000",
    code: "PRD050Uv",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Hyundai"
  }
];

console.log(driftProducts);