import {Link, NavLink} from 'react-router-dom';
import './index.scss'
import Name from '../../assets/images/Name.png'
import Harsh from '../../assets/images/Harsh.png'

const Sidebar = () => (
  <div className = 'nav-bar'>
    <Link className = 'logo' to='/'>
        <img src={Name} alt="logo" />
        <img className = "sub-logo"src={Harsh} alt="harshkhub" />
    </Link>
  </div>
)

export default Sidebar