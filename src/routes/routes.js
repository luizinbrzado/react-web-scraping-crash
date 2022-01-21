import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hoje from '../pages/Hoje';
import Ontem from '../pages/Ontem';
import Header from '../pages/Header';

const RouteList = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Hoje />} />
            <Route path="/ontem" element={<Ontem />} />
        </Routes>
    </BrowserRouter>
);

export default RouteList;