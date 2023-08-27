import { BrowserRouter, Route, Routes } from "react-router-dom";
import {App} from './App'
import { BasketContents } from "./components/basket/BasketContents";

export function Navigate () {
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Basket" element={<BasketContents/>} />
    </Routes>
    </BrowserRouter>
}