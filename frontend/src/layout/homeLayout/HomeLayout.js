import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
const cx = classNames.bind(styles);

const HomeLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Banner/>
        </div>
    );
};

export default HomeLayout;
