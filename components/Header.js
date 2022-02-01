import { useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';
import Image from 'next/image';
import styles from '../styles/Header.module.css'

const Header = () => {
    const { activate, active, deactivate, account, error, chainId } = useWeb3React();

    const connect = useCallback(() => {
        activate(connector)
        localStorage.setItem('previouslyConnected', true)
    }, [activate])

    const disconnect = () => {
        deactivate();
        localStorage.removeItem('previouslyConnected')
    }

    useEffect(() => {
        if (localStorage.getItem('previouslyConnected') === 'true')
            connect()
    }, [connect]);

    return (
        <div className={styles.header}>
            <div>
                <Image src="/assets/header/LOGO.png" layout="fixed" alt="" width={200} height={35} />
            </div>

            <div className={`${styles['search-bar']}`}>
                <div>
                    <Image src="/assets/header/search.png" alt="search icon" height={25} width={25} layout="fixed" />
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
                    <Image src="/assets/header/theme-switch.png" alt="" width={25} height={25} layout="fixed" />
                </div>

                <div className={styles.login}>
                    {
                        active
                            ? <button onClick={disconnect}>{account}</button>
                            : <button onClick={connect}>CONNECT WALLET</button>
                    }
                </div>
            </div>
        </div>
    )
};

export default Header;