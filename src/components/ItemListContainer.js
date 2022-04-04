import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (item) => {
        alert('${item} agregados a tu carrito');
    }

    return (
        <>
            <p className="mensaje">{greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;