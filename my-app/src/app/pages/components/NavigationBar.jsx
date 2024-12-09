'use client'
import Link from 'next/link';
import styles from '../NavigationBar.module.css';

export default function NavigationBar () {
    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.navItem}>
                <img src="/home-icon.svg" alt="Home" />
            </Link>
            <Link href="/map" className={styles.navItem}>
                <img src="/map-icon.svg" alt="Map" />
            </Link>
            <Link href="/shop" className={styles.navItem}>
                <img src="/shop-icon.svg" alt="Shop" />
            </Link>
        </div>
    );
};
