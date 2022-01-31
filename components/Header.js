import styles from '../styles/Header.module.css'
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <Image src="/assets/header/LOGO.png" layout="fixed" alt="" width={200} height={35} />
            </div>

            <div className={`${styles['search-bar']}`}>
                <div>
                    <Image src="/assets/header/search.png" alt="search icon" height={25} width={25} />
                </div>
                <input
                    className={`${styles['search-input']}`}
                    type="text"
                    placeholder='Collection, item or user'
                />
            </div>

            <nav className={styles.navbar}>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </nav>

            <div className={`${styles['nav-actions']}`}>
                <div className={`${styles['theme-switch']}`}>
                    <Image src="/assets/header/theme-switch.png" alt="" width={25} height={25} />
                </div>
                <div className={styles.login}>
                    <button>GET IN</button>

                </div>
            </div>
        </div>
    )
};

export default Header;