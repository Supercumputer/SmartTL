import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import AdsBanner from '../../components/AdsBanner/AdsBanner';
import Products from '../../components/Products/Products';
import AdsBanner2 from '../../components/AdsBanner2/AdsBanner2';
const cx = classNames.bind(styles);

const HomeLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Banner/>
            <Category/>
            <AdsBanner/>
            <Products/>
            <AdsBanner2/>
        </div>
    );
};

export default HomeLayout;
