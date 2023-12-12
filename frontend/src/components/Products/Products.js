import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Img from '../Img/Img';
import Product from '../Product/Product';

const cx = classNames.bind(styles);

const Products = () => {
    return (
        <div className="container mt-5">
            <h1 className={cx('text_name')}>New arival</h1>
            <div className="row">
                <div className="col-2">
                    <Product/>
                </div>
                <div className="col-2">
                    <Product/>
                </div>
                <div className="col-2">
                    <Product/>
                </div>
                <div className="col-2">
                    <Product/>
                </div>
                <div className="col-2">
                    <Product/>
                </div>
                <div className="col-2">
                    <Product/>
                </div>
                
            </div>
            {/* <Img src='https://southteam.vn/wp-content/uploads/2020/06/smartech.png'/> */}
        </div>
    );
};

export default Products;
