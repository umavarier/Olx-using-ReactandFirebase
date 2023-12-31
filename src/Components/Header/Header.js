import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../store/FirebaseContext';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import firebase from 'firebase';

function Header() {
  const {user} = useContext(AuthContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome, ${user.displayName}` : 'Login'}</span>
          <hr />
          {user && <span onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>Logout</span> }
        </div>

        <div className="sellMenu">
        <Link to="/create"> 
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
