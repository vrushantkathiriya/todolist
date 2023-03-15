function Arr() {
    const FruitBasket = ["apple", "pineapple", "orange", "grapes"];
    const renderList =FruitBasket.map((fruit , index) => 
    <div key={index}>{fruit}</div>
    );
    return ( 
        <div className="App">
            <h1>Fruit Basket</h1>
            {renderList}
        </div>
     );
}

export default Arr;