import { CategoryProvider } from '../../contexts/CategoryContext';

import Categorys from './Categorys';

const CategorysList = () => {
    return (
        <>
            <CategoryProvider>
                <Categorys/>
            </CategoryProvider>
        </>
    )
}

export default CategorysList
