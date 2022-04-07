
const data = [
    {
        id: "Código 001",
        modelo: "Bikini flowers",
        price: "ars 15.000",
        img: "../assets/trajetiroalto.png",
        description: "Corpiño con sosten fijo estampado con tiras elásticas. Breteles regulables y bombacha ajustables con tiras. Las estampas de cada Bikini se hacen una por una, artesanalmente."
    },
    {
        id: "Código 002",
        modelo: "Bikini Pop Woman",
        price: "ars 19.000",
        img: "../assets/popwoman.png",
        description: "Corpiño con breteles gruesos, con relleno. Estampado animal print , hay otro combinaciones de colores como azul, negro, gris."
    },
    {
        id: "Código 003",
        modelo: "Point Woman",
        price: "ars 21.200",
        img: "../assets/pointwoman.png", 
        description: "vienen en varios tonos , ideal para usar de top o con tiras."
    },
    {
        id: "Código 004",
        modelo: "Panter ",
        price: "ars 22.800",
        img:  "../assets/panterbikini.png",
        description: "un modelo donde podes cruzar las tiras , vienen en tonos fluorescentes."
    },
    {
        id: "Código 005",
        modelo: "Blaslady",
        price: "ars 17.600",
        img: "../assets/blaslady.png",
        description: "modelo con tiras gruesas , viene en varios tonos , tambien hay estampados lisos."
    },
    {
        id: "Código 006",
        modelo: "Carribean",
        price: "ars 19.000",
        img: "../assets/bikinrosaynegra.png",
        description: "corpiño traingulo con bombacha adaptable, hay varios estampados y estampados lisos."
    },
    {
        id: "Código 007",
        modelo: "Flower Bordeaux",
        price: "ars 22.600",
        img: "../assets/flowerbordeaux.png",
        description: "Estilo de trikini, con un detalle de una cinta que cruza, este mismo modelo esta en color negro , gris o blando."
    },
    {
        id: "Código 008",
        modelo: "Sheet Green",
        price: "ars 21.900",
        img: "../assets/hojasverdes.png",
        description: "Estilo de trikini, con un detalle de una cinta que cruza, este mismo modelo esta en color negro , gris o blando."
    },
    {
        id: "Código 009",
        modelo: "Night straplees",
        price: "ars 29.000",
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