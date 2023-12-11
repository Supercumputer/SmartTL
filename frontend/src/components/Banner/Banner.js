import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { Link } from 'react-router-dom';
import { Banner1, Banner2 } from '../../assets/image';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx("container", "d-flex", "gap-2", "col-12")}>
            <div className={cx('category', 'd-flex', 'flex-column', 'd-none', 'd-lg-block')}>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-solid fa-display"></i>
                    <Link to={'/'}>Destop computer</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <Link to={'/'}>Smart Phone</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-solid fa-laptop"></i>
                    <Link to={'/'}>Laptop computer</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-solid fa-headphones"></i>
                    <Link to={'/'}>Earphone</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-solid fa-volume-high"></i>
                    <Link to={'/'}>Loudspeaker</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-solid fa-camera-retro"></i>
                    <Link to={'/'}>Camera</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-solid fa-tablet-screen-button"></i>
                    <Link to={'/'}>Tablet</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-regular fa-clock"></i>
                    <Link to={'/'}>Smart watch</Link>
                </div>
                <div className={cx('item', 'd-flex', 'align-items-center')}>
                    <i class="fa-regular fa-keyboard"></i>
                    <Link to={'/'}>Keyboard</Link>
                </div>
            </div>
            <div className={cx('banners', 'd-flex', 'pt-2', 'gap-2', 'col-lg-9', 'col-12')}>
                <div className={cx('Banner_c', 'col-xl-10','col-12')}>
                    <img src={Banner1} alt="" />
                </div>
                <div className="d-none d-xl-block">
                    <div className={cx('Banner_p', 'd-flex', 'flex-column', 'gap-2')}>
                        <div className={cx('Banner_p1')}>
                            <img src={Banner2} alt="" />
                        </div>
                        <div className={cx('Banner_p1')}>
                            <img src={Banner2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
