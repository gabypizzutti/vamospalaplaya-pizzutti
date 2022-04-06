import { faClosedCaptioning, faCode } from "@fortawesome/free-solid-svg-icons";

const data = [
    {
        id: "Código 001",
        modelo: "Bikini flowers",
        price: "ars 15.000",
        /* img:require ("../src/assets/bikinirosaynegra,png"),*/
        description: "Corpiño con sosten fijo estampado con tiras elásticas. Breteles regulables y bombacha tiro alto. Las estampas de cada Bikini se hacen una por una, artesanalmente."
    },
    {
        id: "Código 002",
        modelo: "Bikini Pop Woman",
        price: "ars 19.000",
        /* img: require("../src/assets/popwoman.png"),*/
        description: "Corpiño con breteles gruesos, con relleno. Estampado animal print , hay otro combinaciones de colores como azul, negro, gris."
    },
    {
        id: "Código 003",
        modelo: "Point Woman",
        price: "ars 21.200",
        /*img: require ("../assets/pointwoman.png"), */
        description: "vienen en varios tonos , ideal para usar de top o con tiras."
    },
    {
        id: "Código 004",
        modelo: "Panter ",
        price: "ars 22.800",
        /* img: require ("../assets/panterbikini.png"), */
        description: "un modelo donde podes cruzar las tiras , vienen en tonos fluorescentes."
    },
    {
        id: "Código 005",
        modelo: "Blaslady",
        price: "ars 17.600",
        /* img: require ("../assets/minimalist.png"), */
        description: "modelo con tiras gruesas , viene en varios tonos , tambien hay estampados lisos."
    },
    {
        id: "Código 006",
        modelo: "Carribean",
        price: "ars 19.000",
        /* img: require ("../assets/bikinirosaynegra.png"), */
        description: "corpiño traingulo con bombacha adaptable, hay varios estampados y estampados lisos."
    },
]

export const getData = () => {
    return new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
} 