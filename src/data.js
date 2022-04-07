
const data = [
    {
        id: "Código 001",
        modelo: "Flowers",
        price: "AR$ 15.000",
        img: "../assets/trajetiroalto.png",
        description: "Corpiño con sosten fijo estampado con tiras elásticas. Breteles regulables y bombacha ajustables con tiras. Las estampas de cada Bikini se hacen una por una, artesanalmente."
    },
    {
        id: "Código 002",
        modelo: "Pop Woman",
        price: "AR$ 19.000",
        img: "../assets/popwoman.png",
        description: "Corpiño con breteles gruesos, con relleno. Estampado animal print , hay otro combinaciones de colores como azul, negro, gris."
    },
    {
        id: "Código 003",
        modelo: "Point Woman",
        price: "AR$ 21.200",
        img: "../assets/pointwoman.png", 
        description: "Bikini color coral , con corpiño con push-up , la bombacha tiene detalle de hojas . Vienen en varios tonos y colores."
    },
    {
        id: "Código 004",
        modelo: "Panter ",
        price: "AR$ 22.800",
        img:  "../assets/panterbikini.png",
        description: "Un modelo de bikini que viene con short, hay que diferentes colores , las tiras del corpiño son desmontrables."
    },
    {
        id: "Código 005",
        modelo: "Blaslady",
        price: "AR$ 17.600",
        img: "../assets/blaslady.png",
        description: "Modelo con tiras finas tipo trikini , viene en varios tonos , tambien hay estampados lisos, la bombacha puede ser floreada o con estampado liso."
    },
    {
        id: "Código 006",
        modelo: "Carribean",
        price: "AR$ 19.000",
        img: "../assets/bikinrosaynegra.png",
        description: "Corpiño bordo con bombacha floreada de tres tiras, hay varios estampados de bombacha y también estampados de corpiño lisos."
    },
    {
        id: "Código 007",
        modelo: "Flower Bordeaux",
        price: "AR$ 22.600",
        img: "../assets/flowerbordeaux.png",
        description: "Estilo de trikini, con un detalle de una cinta que cruza, este mismo modelo esta en color negro , gris o blando."
    },
    {
        id: "Código 008",
        modelo: "Sheet Green",
        price: "AR$ 21.900",
        img: "../assets/hojasverdes.png",
        description: "Bikini de dos piezas, con un bombacha con hojas , este mismo modelo esta en color negro , gris o azul."
    },
    {
        id: "Código 009",
        modelo: "Night straplees",
        price: "AR$ 29.000",
        img: "../assets/straplessblack.png",
        description: "Estilo de trikini, con un detalle de una cinta que cruza, este mismo modelo esta en color negro , gris o blando."
    },
]

export const getData = () => {
    return new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
} 