import classNames from 'classnames/bind';
import styles from './AdsBanner.module.scss';
import { Banner1, Banner2 } from '../../assets/image';
import Img from '../Img/Img';

const cx = classNames.bind(styles);

const AdsBanner = () => {
    return (
        <div className={cx('container', 'mt-4')}>
            <div className="row">
                <div className="col col-6">
                    <div className={cx('ads')}>
                        <Img src={Banner1} />
                    </div>
                </div>

                <div className="col col-6">
                    <div className={cx('ads')}>
                        <Img src={Banner1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdsBanner;
