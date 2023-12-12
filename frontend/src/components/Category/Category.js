import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import Img from '../Img/Img';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Category = () => {
    return (
        <div className="container mt-5">
            <h1 className={cx('text_name')}>Popular category</h1>
            <div className="row">
                <div class="col-2">
                    <div className={cx('item')}>
                        <Link to='/' className={cx('text')}>
                            <Img src={''} className={cx('image')}/>
                            <p>Mobile</p>
                        </Link>
                    </div>
                </div>
                <div class="col-2">
                    <div className={cx('item')} >
                        <Link to='/' className={cx('text')}>
                            <Img src={''} className={cx('image')}/>
                            <p>Mobile</p>
                        </Link>
                    </div>
                </div>
                <div class="col-2">
                    <div className={cx('item')}>
                        <Link to='/' className={cx('text')}>
                            <Img src={''} className={cx('image')}/>
                            <p>Mobile</p>
                        </Link>
                    </div>
                </div>
                <div class="col-2">
                    <div className={cx('item')}>
                        <Link to='/' className={cx('text')}>
                            <Img src={''} className={cx('image')}/>
                            <p>Mobile</p>
                        </Link>
                    </div>
                </div><div class="col-2">
                    <div className={cx('item')}>
                        <Link to='/' className={cx('text')}>
                            <Img src={''} className={cx('image')}/>
                            <p>Mobile</p>
                        </Link>
                    </div>
                </div>

                <div class="col-2">
                    <div className={cx('item')}>
                        <Link to='/' className={cx('text')}>
                            <Img src={''} className={cx('image')}/>
                            <p>Mobile</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;
