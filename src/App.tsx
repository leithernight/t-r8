import React, { FC, useEffect, useState } from "react";
// import AddPizzaForm from "./components/AddPizzaForm";
// import DisplayPizzas from "./components/DisplayPizza";
// import Pizza from "./models/Pizza";
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PizzaPage from "./pages/PizzaPage";

const App: FC = () => {
    // const [pizzasList, setPizzasList] = useState<Pizza[]>([]);
    // const addPizza = (newPizza: Pizza) => {
    //     const newPizzasList = [...pizzasList, newPizza]
    //     setPizzasList(newPizzasList);
    //     localStorage.setItem('pizzasState', JSON.stringify(newPizzasList));
    // }
    // const updatePizza = (newPizza: Pizza) => {
    //     const newPizzasList = pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    //     setPizzasList(newPizzasList);
    //     localStorage.setItem('pizzasState',JSON.stringify(newPizzasList));
    // }
    // const deletePizza = (id: number) => {
    //     const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
    //     setPizzasList(newPizzasList);
    //     localStorage.setItem('pizzasState',JSON.stringify(newPizzasList));
    // }
    // useEffect(() => {
    //     const pizzasState = localStorage.getItem('pizzasState');
    //     if (pizzasState) {
    //         setPizzasList(JSON.parse(pizzasState));
    //     }
    // }, [])
    return (
        <div className="App">
            <div className="wrap">
                {/* <span className="heading">pizza</span>
                <AddPizzaForm addPizza={addPizza} />
                <DisplayPizzas
                    pizzasList={pizzasList}
                    deletePizza={deletePizza}
                    updatePizza={updatePizza}
                />     */}
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/pizza/:id' element={<PizzaPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;