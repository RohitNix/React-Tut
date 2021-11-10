import { Link } from 'react-router-dom';
import PrototypeHome from './PrototypeHome';
function PrototypeNav() {
    return (
        <div>
            <Link to="/home">Home</Link><br/>
            <Link to="/about">About</Link>
            
        </div>
    );
}
export default PrototypeNav;