import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function MenuItem({ item }) {
    if (item.id !== 7) {
        if (item.to) {
            return (
                <Link to={item.to}>
                    <div className={cx('item')}>
                        <img src={item.icon} alt="menu-item" />
                        <h4>{item.title}</h4>
                    </div>
                </Link>
            );
        } else {
            return (
                <div className={cx('item')}>
                    <img src={item.icon} alt="menu-item" />
                    <h4>{item.title}</h4>
                </div>
            );
        }
    } else {
        return (
            <Link to={item.to}>
                <div className={cx('item-logout')}>
                    <img src={item.icon} alt="menu-item" />
                    <h4>{item.title}</h4>
                </div>
            </Link>
        );
    }
}

export default MenuItem;
