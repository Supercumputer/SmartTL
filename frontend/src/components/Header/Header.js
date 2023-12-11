import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { logo } from '../../assets/image';
import { NavLink } from 'react-router-dom';
import StringContent from '../TippyTitle/Tippy';
import { useState } from 'react';
const cx = classNames.bind(styles);

const Header = () => {
    const [check, setcheck] = useState(false);

    const handlerMenu = () => {
        setcheck(!check);
    };

    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="container d-flex text-white justify-content-between align-items-center">
                    <p className="mb-0">Wellcome to SmartTL store</p>
                    <div className="box_icon_header d-flex justify-content-between align-items-center gap-3 py-1">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <p className={cx('language', 'mb-0')}>English</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-2 ">
                <div className="container d-flex justify-content-between align-items-center gap-3">
                    <div className={cx('logo')}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={cx('box_search')}>
                        <i class="fa-solid fa-magnifying-glass d-md-block d-none"></i>
                        <input type="text" className="d-md-block d-none" name="search" placeholder="Tìm kiếm tại đây" />
                        <button className="d-md-block d-none" type="button">
                            Search
                        </button>
                    </div>
                    <div className={cx('hotline', 'd-flex', 'align-items-center', 'gap-2')}>
                        <i class="fa-solid fa-headphones-simple d-none d-xl-block"></i>
                        <div className={cx('phone_number', 'd-none', 'd-xl-block')}>
                            <p className="mb-0">Free hotline</p>
                            <p className="mb-0">0338973258</p>
                        </div>
                    </div>
                    <div className={cx('box_acount_cart', 'd-flex', 'align-items-center', 'gap-3')}>
                        <i onClick={handlerMenu} className={cx('fa-solid', 'fa-bars', 'icon_menu')}></i>

                        <div className="account d-flex flex-md-column flex-row align-items-center gap-2 gap-lg-0">
                            <i class="fa-solid fa-user"></i>
                            <p className="mb-0 d-none d-lg-block">My Acount</p>
                        </div>
                        <div className="cart d-flex flex-md-column flex-row align-items-center gap-2 gap-lg-0">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p className="mb-0 d-none d-lg-block">My Cart</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('container-fluid', 'border-top', 'border-bottom')}>
                <div className="container d-flex justify-content-between">
                    <div className="box_menu d-flex justify-content-xl-between justify-content-center align-items-center">
                        <div className="box d-none d-md-block">
                            <div className={cx('box_category', 'd-flex', 'align-items-center', 'gap-5')}>
                                <div className={cx('category', 'd-flex', 'align-items-center', 'gap-2')}>
                                    <i class="fa-solid fa-bars"></i>
                                    <p className="mb-0 me-5 me-md-0">CATEGORY</p>
                                </div>
                                <i class="fa-solid fa-caret-down ms-lg-5"></i>
                            </div>
                        </div>

                        <div className={cx('menu')}>
                            <ul className={cx({ check: check })}>
                                <li>
                                    <StringContent title="HOME">
                                        <NavLink
                                            to="/home"
                                            className={(isActive) => cx('text_menu', { active: isActive.isActive })}
                                        >
                                            HOME
                                        </NavLink>
                                    </StringContent>
                                </li>
                                <li>
                                    <StringContent title="SHOP">
                                        <NavLink
                                            to="/shop"
                                            className={(isActive) => cx('text_menu', { active: isActive.isActive })}
                                        >
                                            SHOP
                                        </NavLink>
                                    </StringContent>
                                </li>
                                <li>
                                    <StringContent title="CONTAC US">
                                        <NavLink
                                            to="/contac"
                                            className={(isActive) => cx('text_menu', { active: isActive.isActive })}
                                        >
                                            CONTACT US
                                        </NavLink>
                                    </StringContent>
                                </li>
                                <li>
                                    <StringContent title="ABOUT US">
                                        <NavLink
                                            to="/about"
                                            className={(isActive) => cx('text_menu', { active: isActive.isActive })}
                                        >
                                            ABOUT US
                                        </NavLink>
                                    </StringContent>
                                </li>
                                <li>
                                    <StringContent title="BLOG">
                                        <NavLink
                                            to="/blog"
                                            className={(isActive) => cx('text_menu', { active: isActive.isActive })}
                                        >
                                            BLOG
                                        </NavLink>
                                    </StringContent>
                                </li>
                                <li>
                                    <div className={cx('container-input')}>
                                        <input type="text" placeholder="Search" name="text" class={cx('input')} />
                                        <i className={cx('fa-solid', 'fa-magnifying-glass')}></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx('text_sale', 'd-flex', 'gap-2', 'align-items-center')}>
                        <i class="fa-regular fa-lightbulb d-none d-xl-block"></i>
                        <span className="d-none d-xl-block">Iphon 15 sale off 30% duy nhất hôm nay</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
