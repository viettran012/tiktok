import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
const cx = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <div className={cx('result')}>
            <div className={cx('icon')}>
                <span shape="circle">
                    <img src={data.avatar} alt={`${data.name} avatar`} />
                </span>
            </div>
            <div className={cx('result-name')}>
                <h4>{data.name}</h4>
                <p>{data.username}</p>
            </div>
        </div>
    );
}

export default AccountItem;
