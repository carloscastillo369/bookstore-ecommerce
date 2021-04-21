import { CategoryProvider } from '../../contexts/CategoryContext';

import Menu from './Menu';

const NavBar = () => {
    return (
        <>
            <CategoryProvider>
                <Menu/>
            </CategoryProvider>
        </>
    )
};

export default NavBar;