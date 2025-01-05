import styles from './Nav.module.scss';
import Link from 'next/link';
import Icon from '../../public/icons/brand.svg';

export default function Nav(props) {
    return (
        <nav className={styles['nav-container']}>
            <ul className={styles['main-nav']}>
                <li>
                    <Link href=''>
                        <img src="../../icons/brand.svg" width={50} height={50} />
                    </Link>
                </li>
                <li>
                    <Link href=''>Categories</Link>
                </li>
                <li>
                    <Link href=''>Collections</Link>
                </li>
                <li>
                    <Link href=''>Store</Link>
                </li>
                <li>
                    <Link href=''>Blog</Link>
                </li>
                <li>
                    <Link href=''>Find store</Link>
                </li>
            </ul>
            <ul className={styles['secondary-nav']}>
                <li>
                    <span>Icon</span>
                    <span>Label</span>
                </li>
                <li>
                    <span>Icon</span>
                    <span>Label</span>
                </li>
                <li>
                    <span>Icon</span>
                    <span>Label</span>
                </li>
            </ul>
        </nav>
    );
}