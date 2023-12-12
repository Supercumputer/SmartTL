import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Img from '../Img/Img';

const cx = classNames.bind(styles);

const Product = () => {
    return (
        <div className={cx('item')}>
            <div className={cx('box_img')}>
                <Img src="" />
            </div>
            <h2>Tai nghe khong day</h2>
            <div className={cx('box_star', 'd-flex', 'gap-1')}>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p className={cx('price')}>1230 VND</p>
        </div>
    );
};

export default Product;
