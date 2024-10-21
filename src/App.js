// src/App.js

import './App.css';
import { CartProvider } from './components/CartContext'; // Importer le CartProvider
import Header from './components/Header';
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage"; // Assurez-vous que ce chemin est correct
import CartPage from "./pages/CartPage"; // Assurez-vous que ce chemin est correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<ListPage />} />
                        <Route path="/details/:id" element={<DetailPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
