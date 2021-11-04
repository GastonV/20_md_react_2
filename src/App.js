import Button from "./components/Button/Button";
import ShopItem from "./components/ShopItem/ShopItem";
import topics from "./components/data/topics";
import shopItems from "./components/data/shopItems";
import './App.css';

function App() {

    const printShopItems = (shopItems) => {
        return shopItems.map(({title, price, imgSrc, type}, index) => (
            <ShopItem
                key={index}
                title={`${title}`}
                price={`${price}`}
                imgSrc={`${imgSrc}`}
                type={`${type}`}
            >
                Var
            </ShopItem>
        ))
    }

    const printTopics = (topics) => {
        return topics.map((topic, index) => (
                <Button
                    key={index}
                    buttonName={`${topic}`}
                >
                </Button>
            )
        )
    }

    return (

        <div className={'container'}>
            <div className={'buttons'}>
                {printTopics(topics)}
            </div>
            <div className={'shopItems'}>
                {printShopItems(shopItems)}
            </div>
        </div>
    );
}

export default App;
