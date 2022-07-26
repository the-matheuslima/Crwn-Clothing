import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import CartDropdown from '../cart-dropdown';
import CardIcon from '../card-icon'
import "./style.scss"
import { CartContext } from '../../context/CartContext';
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className='navigation'>
                <Link className='navigation__logo' to='/'>
                    <img src="https://raw.githubusercontent.com/ZhangMYihua/crwn-clothing-v2/lesson-21/src/assets/crown.svg" className='logo' alt="" />
                </Link>
                <div className='navigation-links-container'>
                    <Link to='/shop' className='nav-link'>SHOP</Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link to='/auth' className='nav-link'>SIGN IN</Link>

                    )}

                    <CardIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation