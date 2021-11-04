import './ShopItem.css'
const ShopItem = (item) => {
    return(
        <div className={`itemList`}
             itemType={`${item.type}`}
        >

            <img className={'itemListImg'}
                src={`${item.imgSrc}`}
                alt={`Random`}
            />
            <div className={`itemFooter`}>
            <h1>{`${item.title}`}</h1>
            <p>{`${item.price}`}</p>
            </div>
        </div>
    )
}
export default ShopItem;