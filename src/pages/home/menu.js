//PRINCIPALES
import plato1 from '../../assets/Ternera-guisada.webp'
import plato2 from '../../assets/milanesa-pollo.webp'
import plato3 from '../../assets/bacalao.webp'
import plato4 from '../../assets/salmon-siciliana.webp'
import plato5 from '../../assets/spaghettis.webp'
import plato6 from '../../assets/arroz-negrol.webp'
import plato7 from '../../assets/pollo-coreano.webp'
import plato8 from '../../assets/ramen.webp'
import plato9 from '../../assets/pollo-salsa-bacon.webp'
import plato10 from '../../assets/cordero-rulo.webp'

//VEGANOS
import plato11 from '../../assets/padthai.webp'
import plato12 from '../../assets/bolony.webp'
import plato13 from '../../assets/guiso-garbanzos.webp'
import plato14 from '../../assets/lasana.webp'
import plato15 from '../../assets/Risotto-de-remolacha.webp'

//POSTRES
import postre1 from '../../assets/arroz-leche.webp'
import postre2 from '../../assets/tarta-queso.webp'
import postre3 from '../../assets/brownie-chocolate.webp'



export let Menu = [
    {
        id:0,
        imagen:plato1,
        titulo:'Ternera guizado con setas y estragon',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:8.15,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'733',
                proteinas:'40',
                carbohidratos:'39',
                grasas:'28'
            }
        ]
    },
    {
        id:1,
        imagen:plato2,
        titulo:'Milanesa de pollo',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:7.25,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'904',
                proteinas:'55',
                carbohidratos:'46',
                grasas:'54'
            }
        ]
    },
    {
        id:2,
        imagen:plato3,
        titulo:'Bacalao en salsa vizcania',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:8.85,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'486',
                proteinas:'41',
                carbohidratos:'38',
                grasas:'18'
            }
        ]
    },
    {
        id:3,
        imagen:plato4,
        titulo:'Salmon a la siciliana con patata, boniato y berenjena',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:8.15,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'670',
                proteinas:'49',
                carbohidratos:'37',
                grasas:'39'
            }
        ]
    },
    {
        id:4,
        imagen:plato5,
        titulo:'Spaghettis con albondingas al pomodoro ',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:7.25,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'729',
                proteinas:'8',
                carbohidratos:'92',
                grasas:'23'
            }
        ]
    },
    {
        id:5,
        imagen:plato6,
        titulo:'Arroz negro de calamar y alcachofa',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:6.95,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'529',
                proteinas:'39',
                carbohidratos:'67',
                grasas:'14'
            }
        ]
    },
    {
        id:6,
        imagen:plato7,
        titulo:'Pollo asado a la coreana',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:7.25,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'670',
                proteinas:'40',
                carbohidratos:'36',
                grasas:'13'
            }
        ]
    },
    {
        id:7,
        imagen:plato8,
        titulo:'Ramen de pollo',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:7.25,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'584',
                proteinas:'22',
                carbohidratos:'91',
                grasas:'14'
            }
        ]
    },
    {
        id:8,
        imagen:plato9,
        titulo:'Pavo en salsa bacon',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:7.25,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'463',
                proteinas:'30',
                carbohidratos:'45',
                grasas:'21'
            }
        ]
    },
    {
        id:9,
        imagen:plato10,
        titulo:'Cordero al horno en su jugo',
        gramos:'450g',
        categoria:'principal',
        iconos:['uno','dos'],
        precio:8.95,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'830',
                proteinas:'48',
                carbohidratos:'33',
                grasas:'56'
            }
        ]
    },

    //CATEGORIA VEGANOS
    {
        id:10,
        imagen:plato11,
        titulo:'Pat thai de tofu',
        gramos:'420g',
        categoria:'veganos',
        iconos:['uno','dos'],
        precio:6.75,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'642',
                proteinas:'20',
                carbohidratos:'83',
                grasas:'16'
            }
        ]
    },
    {
        id:11,
        imagen:plato12,
        titulo:'Spaghetti salsa boloñesa vegetal',
        gramos:'420g',
        categoria:'veganos',
        iconos:['uno','dos'],
        precio:6.95,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'432',
                proteinas:'14',
                carbohidratos:'65',
                grasas:'11'
            }
        ]
    },
    {
        id:12,
        imagen:plato13,
        titulo:'Garbanso con setas y picada de almendra',
        gramos:'420g',
        categoria:'veganos',
        iconos:['uno','dos'],
        precio:6.65,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'396',
                proteinas:'17',
                carbohidratos:'35',
                grasas:'4'
            }
        ]
    },
    {
        id:13,
        imagen:plato14,
        titulo:'Lasaña de verduras',
        gramos:'450g',
        categoria:'veganos',
        iconos:['uno','dos'],
        precio:9.95,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'391',
                proteinas:'8',
                carbohidratos:'58',
                grasas:'13'
            }
        ]
    },
    {
        id:14,
        imagen:plato15,
        titulo:'Risotto de ajetes, anacardo y remolacha',
        gramos:'420g',
        categoria:'veganos',
        iconos:['uno','dos'],
        precio:6.95,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'874',
                proteinas:'15',
                carbohidratos:'138',
                grasas:'28'
            }
        ]
    },

    //CATEGORIA POSTRES
    {
        id:15,
        imagen:postre1,
        titulo:'Arroz con leche de coco y pistacho',
        gramos:'150g',
        categoria:'postres',
        iconos:['uno','dos'],
        precio:3.30,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'213',
                proteinas:'6',
                carbohidratos:'40',
                grasas:'2,7'
            }
        ]
    },
    {
        id:16,
        imagen:postre2,
        titulo:'Tarta de queso',
        gramos:'150g',
        categoria:'postres',
        iconos:['uno','dos'],
        precio:3.30,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'322',
                proteinas:'14',
                carbohidratos:'35',
                grasas:'13'
            }
        ]
    },
    {
        id:17,
        imagen:postre3,
        titulo:'Brawnie de chocolate y franbuesa',
        gramos:'150g',
        categoria:'postres',
        iconos:['uno','dos'],
        precio:3.30,
        cantidad:0,
        agregado:false,
        tabla:[
            {
                calorias:'655',
                proteinas:'7',
                carbohidratos:'61',
                grasas:'42'
            }
        ]
    }
]