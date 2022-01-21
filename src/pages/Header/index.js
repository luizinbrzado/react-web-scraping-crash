import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
    <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/ontem'>Ontem</Link>
    </div>
);

export default Header;