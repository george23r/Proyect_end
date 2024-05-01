const driftProducts = [
  {
    name: "Llantas de alto rendimiento",
    category: "Accesorios",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeL5lfYvY3M0aDHmY0Fa_mO6q8VFuwcGzXzzzjBl3BQ&s",
    price: "250.000",
    code: "PrD001Ab",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Suspensión ajustable",
    category: "Reparación",
    image: "https://m.media-amazon.com/images/I/71RgWAyBjBL._AC_UF894,1000_QL80_DpWeblab_.jpg",
    price: "500.000",
    code: "PRd002CD",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Toyota"
  },
  {
    name: "Escape deportivo",
    category: "Accesorios",
    image: "https://bicimex.com/Items_high/0240020320.jpg",
    price: "700.000",
    code: "prd003ef",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Difusor trasero",
    category: "Mantenimiento",
    image: "https://m.media-amazon.com/images/I/61gnh0NzEqL.jpg",
    price: "400.000",
    code: "Prd004Gh",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "BMW"
  },
  {
    name: "Asientos de cubo",
    category: "Accesorios",
    image: "https://i0.wp.com/m.media-amazon.com/images/I/610t8CzTuDL._AC_SL1200_.jpg?fit=%2C&ssl=1",
    price: "300.000",
    code: "prD005IJ",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Volante deportivo desplazado",
    category: "Repuestos",
    image: "https://fullgasgarage.com/cdn/shop/products/xlarge-2a3a5193.jpg?v=1667411960",
    price: "150.000",
    code: "PRD006kL",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Subaru"
  },
  {
    name: "Kit de carrocería",
    category: "Accesorios",
    image: "https://www.autocustomgt.com/95947-home_default/kit-de-carroceria-bmw-f20-5p-12-14-look-m-performance.jpg",
    price: "1.200.000",
    code: "PrD007mn",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Juego de luces LED",
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/81WRS6XLujL._AC_UF894,1000_QL80_.jpg",
    price: "100.000",
    code: "Prd008Op",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Mitsubishi"
  },
  {
    name: "Controlador de freno de mano hidráulico",
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/61+wAWgaDkL.jpg",
    price: "600.000",
    code: "prD009QR",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de refuerzo de chasis",
    category: "Repuestos",
    image: "https://www.bananadrift.com/2627/refuerzo-chasis-nissan-s14-s15-r33-y-r34.jpg",
    price: "800.000",
    code: "PrD010st",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Nissan"
  },
  {
    name: "Sistema de refrigeración mejorado",
    category: "Mantenimiento",
    image: "https://autolab.com.co/wp-content/uploads/2017/11/refrigerante.png",
    price: "900.000",
    code: "PrD011Uv",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Pastillas de freno de alto rendimiento",
    category: "Repuestos",
    image: "https://i0.wp.com/brakepak.com/wp-content/uploads/12337034006522457251a1f.jpg?fit=1000%2C1000&ssl=1",
    price: "150.000",
    code: "Prd012WX",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Ford"
  },
  {
    name: "Kit de control de tracción ajustable",
    category: "Accesorios",
    image: "https://ae01.alicdn.com/kf/S7616ce69040e42c2b5381779fb7b2aa2N.jpg_640x640Q90.jpg_.webp",
    price: "400.000",
    code: "PRD013yz",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de aumento de potencia",
    category: "Repuestos",
    image: "https://m.media-amazon.com/images/I/41DsyLFl2gL._AC_.jpg",
    price: "2.000.000",
    code: "Prd014Ab",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Audi"
  },
  {
    name: "Sistema de extinción de incendios",
    category: "Mantenimiento",
    image: "https://extintoreslaunion.com/assets/images/proteccion/extincion-de-incendios.png",
    price: "1.200.000",
    code: "PRD015Cd",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Frenos de disco perforados",
    category: "Repuestos",
    image: "https://repuesto.co/wp-content/uploads/2023/05/Disco-freno-Chevrolet-Spark-GT-SAIL.jpeg",
    price: "800.000",
    code: "Prd016Ef",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Chevrolet"
  },
  {
    name: "Turbo cargador de alto rendimiento",
    category: "Repuestos",
    image: "https://s.alicdn.com/@sc04/kf/H6a654cc90d894a18abe97c443a0263c5u.jpg_300x300.jpg",
    price: "3.000.000",
    code: "PRD017Gh",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Spoiler delantero",
    category: "Accesorios",
    image: "https://i.ebayimg.com/thumbs/images/g/Pp0AAOSwFWhikKZx/s-l640.jpg",
    price: "500.000",
    code: "PrD018IJ",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "BMW"
  },
  {
    name: "Faldones laterales",
    category: "Accesorios",
    image: "https://atroxcustoms.com/8636-tm_thickbox_default/estribos-faldones-laterales-israel-mazda-3-2014-2018.jpg",
    price: "400.000",
    code: "PRD019kl",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de iluminación interior LED",
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/61vjuZn6K8L.jpg",
    price: "150.000",
    code: "PrD020Mn",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Honda"
  },
  {
    name: "Intercooler de alto rendimiento",
    category: "Repuestos",
    image: "https://m.media-amazon.com/images/I/71mdqami8DL._AC_SL1500_.jpg",
    price: "600.000",
    code: "PRD021OP",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de escape completo",
    category: "Reparación",
    image: "https://noticias.coches.com/wp-content/uploads/2022/09/Sistema-de-Escape-1-700x394.jpg",
    price: "2.000.000",
    code: "PRD022QR",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Volkswagen"
  },
  {
    name: "Juego de pedales deportivos",
    category: "Accesorios",
    image: "https://www.alcarrito.com/media/catalog/product/p/e/pedales_para_carro_lujo_antideslizante_met_lico_deportivo_tuning.jpg?width=600&height=600&canvas=600,600&optimize=medium&bg-color=255,255,255&fit=bounds",
    price: "80.000",
    code: "PrD023St",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Asientos deportivos",
    category: "Accesorios",
    image: "https://lh6.googleusercontent.com/proxy/VvrqkP7_wszl8IAPRV4G-4cfVvLk4hOnZvHxlhtf8AwlVYBhnFmNYTHBPuJvJkWQfiD38vw7kSZO3TMf5gfe_ZJhKQPLYCGXCD-y3TU5mIY2yXX8NQ7S",
    price: "1.200.000",
    code: "PRD024Uv",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Mercedes-Benz"
  },
  {
    name: "Alfombras de piso",
    category: "Accesorios",
    image: "https://www.shutterstock.com/image-photo/clean-car-floor-mats-black-600nw-2238913585.jpg",
    price: "50.000",
    code: "PrD025Wx",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de sonido premium",
    category: "Accesorios",
    image: "https://images1.autocasion.com/actualidad/wp-content/uploads/2013/07/_main_image_136053_51efce3b6e23d-590x300.jpg",
    price: "1.000.000",
    code: "PRD026YZ",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Lexus"
  },
  {
    name: "Kit de carrocería de fibra de carbono",
    category: "Accesorios",
    image: "https://ae01.alicdn.com/kf/H9abd446364484fe39c666d3a5c1506ccX.jpg_640x640Q90.jpg_.webp",
    price: "3.500.000",
    code: "PrD027Ab",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Frenos de disco Brembo",
    category: "Repuestos",
    image: "https://www.brembo.com/it/PublishingImages/company/news/ferrari-challenge-5-cose-da-sapere-sui-freni-brembo/7.jpg",
    price: "2.000.000",
    code: "PRD028CD",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Ferrari"
  },
  {
    name: "Sistema de admisión de aire frío",
    category: "Repuestos",
    image: "https://ae01.alicdn.com/kf/S0ec94552cc8e46309b442973f48ddc2dL.jpg_640x640Q90.jpg_.webp",
    price: "700.000",
    code: "PrD029EF",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Alerón trasero",
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/41aAc+vwENL._AC_UF894,1000_QL80_DpWeblab_.jpg",
    price: "250.000",
    code: "PRD030Gh",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Acura"
  },
  {
    name: "Kit de admisión de alto flujo",
    category: "Repuestos",
    image: "https://http2.mlstatic.com/D_NQ_NP_898250-MCO40481277732_012020-O.webp",
    price: "600.000",
    code: "PrD031IJ",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Faldones delanteros",
    category: "Accesorios",
    image: "https://ae01.alicdn.com/kf/Sc327ce04ff914c43b70d4e36d9f7a723u/Parachoques-delantero-para-coche-kit-de-carrocer-a-para-Mazda-3-Axela-KS-faldones-laterales-de.jpg",
    price: "300.000",
    code: "PRD032KL",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Mazda"
  },
  {
    name: "Sistema de escape deportivo",
    category: "Reparación",
    image: "https://www.iresa-web.com/images/productos/sistemas_escape/217b1abbb2e444219fa1a617bbea2755_HIRes.png",
    price: "900.000",
    code: "PrD033Mn",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Filtros de aire de alto rendimiento",
    category: "Repuestos",
    image: "https://i.ebayimg.com/thumbs/images/g/f~4AAOSwMtJis~1Q/s-l640.jpg",
    price: "100.000",
    code: "PRD034OP",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Porsche"
  },
  {
    name: "Sistema de iluminación exterior LED",
    category: "Accesorios",
    image: "https://img.ws.mms.shopee.com.co/3bb634732dbfa2cfa156a76a1f5a7a29",
    price: "800.000",
    code: "PrD035QR",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Suspensión neumática",
    category: "Reparación",
    image: "https://ae01.alicdn.com/kf/H4552933891dc4e6aa41bfc074c3b4a5c4.jpg_640x640Q90.jpg_.webp",
    price: "1.500.000",
    code: "PRD036St",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Mitsubishi"
  },
  {
    name: "Juego de neblineros LED",
    category: "Accesorios",
    image: "https://images.philips.com/is/image/philipsconsumer/e00470adb0234177ad65afaa006acb6f?$jpglarge$&wid=960",
    price: "400.000",
    code: "PrD037Uv",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de aumento de potencia eléctrico",
    category: "Repuestos",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHi4fVGGAjlIObwMlG8OK9QFePTdyKXtziWqrV4e9eA&s",
    price: "2.500.000",
    code: "PRD038Wx",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Jeep"
  },
  {
    name: "Parachoques deportivo",
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/61Dklh01K1L.jpg",
    price: "600.000",
    code: "PrD039YZ",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Kit de carrocería de poliuretano",
    category: "Accesorios",
    image: "https://m.media-amazon.com/images/I/61iVJg1HiQL._AC_SL1500_.jpg",
    price: "1.800.000",
    code: "PRD040AB",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Land Rover"
  },
  {
    name: "Sistema de sonido para exteriores",
    category: "Accesorios",
    image: "https://hidalgo.es/wp-content/uploads/2018/12/equipo-sonido-1.jpg",
    price: "1.200.000",
    code: "PrD041CD",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Filtros de aceite de alto rendimiento",
    category: "Repuestos",
    image: "https://res.cloudinary.com/knfilters-com/image/upload/c_lpad,dpr_2.0,f_auto,q_auto/v1/media/wysiwyg/oil-filters/hero.jpg?_i=AB",
    price: "80.000",
    code: "PRD042EF",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Jaguar"
  },
  {
    name: "Llantas deportivas",
    category: "Reparación",
    image: "https://lh4.googleusercontent.com/proxy/KTNxhLMwY6otoHjsC3iSIvrTV1MJ5HDWk0tfEOIYeTE4IRJcOvjd5STolb4okw-IssIK4fQsUm6U5RZz2Bz3qGP9gW1Hff1vzuZxRS2shdcYjxMa_4KF1_hFGIIgldo",
    price: "2.500.000",
    code: "PrD043Gh",
    status: "Usado",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Spoiler trasero",
    category: "Accesorios",
    image: "https://resources.claroshop.com/medios-plazavip/mkt/603edf12dd46c_4jpg.jpg?scale=500&qlty=75",
    price: "500.000",
    code: "PRD044IJ",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Infiniti"
  },
  {
    name: "Kit de carrocería de fibra de vidrio",
    category: "Accesorios",
    image: "https://www.kitsdefibra.com/imagenes/varios/kit-carroceria-renault-5-turbo-maxi-fibra-vidrio.jpg",
    price: "3.000.000",
    code: "PrD045KL",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Luces antiniebla LED",
    category: "Accesorios",
    image: "https://http2.mlstatic.com/D_NQ_NP_658296-CBT72072234742_102023-O.webp",
    price: "200.000",
    code: "PRD046Mn",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Kia"
  },
  {
    name: "Radiador de alto flujo",
    category: "Reparación",
    image: "https://siete31.cl/wp-content/uploads/2021/05/731-55.jpg",
    price: "600.000",
    code: "PrD047OP",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de encendido electrónico",
    category: "Repuestos",
    image: "https://i.ebayimg.com/thumbs/images/g/diwAAOSwtYNl5efX/s-l640.jpg",
    price: "700.000",
    code: "PRD048QR",
    status: "Usado",
    nationality: "Importado",
    carBrand: "Volvo"
  },
  {
    name: "Paragolpes delantero de fibra de carbono",
    category: "Accesorios",
    image: "https://http2.mlstatic.com/D_NQ_NP_977016-CBT73950782654_012024-O.webp",
    price: "1.000.000",
    code: "PrD049St",
    status: "Nuevo",
    nationality: "Nacional",
    carBrand: ""
  },
  {
    name: "Sistema de escape catalizado",
    category: "Reparación",
    image: "https://www.celerid.com/cdn/shop/products/Catalizador-Hyundai-Accent-1-min_1024x.png?v=1620862632",
    price: "800.000",
    code: "PRD050Uv",
    status: "Nuevo",
    nationality: "Importado",
    carBrand: "Hyundai"
  }
];

console.log(driftProducts);