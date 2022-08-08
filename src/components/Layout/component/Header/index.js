import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import Menu from '~/components/Popper/Menu';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { AccountItem as Account } from '~/components/AccountItem';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import image from '~/assets/images';

const MENU_ITEM = [
    {
        id: 1,
        icon: image.profile,
        title: 'Xem hồ sơ',
        to: '/profile',
    },
    {
        id: 2,
        icon: image.coin,
        title: 'Nhận xu',
        to: '/getcoin',
    },
    {
        id: 3,
        icon: image.setting,
        title: 'Cài đặt',
        to: '/setting',
    },
    {
        id: 4,
        icon: image.language,
        title: 'Tiếng Việt',
    },
    {
        id: 5,
        icon: image.help,
        title: 'Phản hồi và trợ giúp',
        to: '/help',
    },
    {
        id: 6,
        icon: image.keyboard,
        title: 'Phím tắt trên bàn phím',
        to: '/keyboardsetting',
    },
    {
        id: 7,
        icon: image.logout,
        title: 'Đăng xuất',
        to: '/logout',
    },
];

const cx = classNames.bind(style);
const datauser = [
    {
        id: 1,
        name: 'Trần Việt',
        username: 'vitcon05',
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1671260539131906.jpeg?x-expires=1660136400&x-signature=UQmM4dors%2BetRR4Fzk%2F1hzYTdFw%3D',
    },
    {
        id: 2,
        name: 'Đạt Villa',
        username: 'datvilla94',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3fda2cca3e9257c62e6fb3b8e9710184~c5_100x100.jpeg?x-expires=1660136400&x-signature=tY5LnJyw%2BWpMZnyXzyR2kSXnIl4%3D',
    },
    {
        id: 3,
        name: 'Anh Nhiên Boi',
        username: 'annhien_boiboi',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1660136400&x-signature=X0ac%2FK1ofQQiPKXrT3vy9bduvRs%3D',
    },
    {
        id: 4,
        name: 'Theanh28 Entertainment',
        username: 'theanh28entertainment',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660136400&x-signature=GsMwCJw%2FaVZxYmecQRMZwbF3o1I%3D',
    },
];

function Search() {
    const [searchResuilt, setSearchResuilt] = useState([]);
    const [action, setAction] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);

    useEffect(() => {}, []);

    const handleInput = (e) => {
        if (e.value) {
            setSearchResuilt(datauser);
            e.style.width = '252px';
            setAction(true);
        } else {
            e.style.width = '292px';
            setAction(false);
            setSearchResuilt([]);
        }
    };

    const handleDelete = (e) => {
        const target = e.target.closest('.' + cx('delete-wrapper'));
        target.previousSibling.value = null;
        target.previousSibling.focus();
        handleInput(target.previousSibling);
    };
    return (
        <Tippy
            placement="bottom"
            interactive
            visible={searchResuilt.length > 0 && inputFocus}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <p className={cx('name')}>Account</p>
                        {searchResuilt.map((datauser) => {
                            return <Account key={datauser.id} data={datauser} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <form action="/search" className={cx('form-search')}>
                <input
                    className={cx('search-input')}
                    type="text"
                    placeholder="Tìm kiếm tài khoản và video"
                    name="q"
                    autoComplete="off"
                    onChange={(e) => handleInput(e.target)}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(true)}
                />

                {action && (
                    <div className={cx('delete-wrapper')} onClick={(e) => handleDelete(e)}>
                        <img
                            width="16px"
                            height="16px"
                            src={image.delete}
                            alt="delete"
                            style={{ margin: '0px 12px' }}
                        />
                    </div>
                )}
                <span className={cx('kc')}></span>
                <Link to="/search">
                    <button className={cx('search-button')} type="submit">
                        <svg
                            className={cx('search-button-svg')}
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                            fill="rgba(22, 24, 35, 0.34)"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                            ></path>
                        </svg>
                    </button>
                </Link>

                <div></div>
            </form>
        </Tippy>
    );
}

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img height="42" width="118" src={image.logo} alt="tiktok-logo" />

                <Search />

                <div className={cx('header-option')}>
                    <div className={cx('wrapper-upload')}>
                        <Link to="/upload">
                            <div className={cx('upload')}>
                                <img width="20px" height="20px" src={image.upload} alt="upload" />
                                <span>Tải lên </span>
                            </div>
                        </Link>
                    </div>

                    <div className={cx('option')}>
                        <Link to="/messages">
                            <img width="26px" height="26px" src={image.messages} alt="messages" />
                        </Link>
                    </div>

                    <div className={cx('option')}>
                        <img width="32px" height="32px" src={image.inbox} alt="messages" />
                    </div>
                    <Menu menuItem={MENU_ITEM.filter((e) => e.id > 3)}>
                        <div className={cx('profile', 'option')}></div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
