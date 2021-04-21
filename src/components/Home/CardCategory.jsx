import { Link } from 'react-router-dom';

import '../../styles/Home/CardCategory.css';

const CardCategory = ({category}) => (
    <>
        <div className="col">
            <Link to={`/category/${category.key}`}>
                <div className="category-card card h-100">
                    <img src={category.image} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>
                        <p className="card-text">{category.text}</p>
                    </div>
                </div>
            </Link>
        </div>
    </>
);

export default CardCategory;