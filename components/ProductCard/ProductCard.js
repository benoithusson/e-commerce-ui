import styles from './ProductCard.module.scss';
import Image from 'next/image';

export default function ProductCard({name, price, path}) {
  console.log(path);
  return (
    <div className={styles['product-card-container']}>
      <div className={styles['image-container']}>
        <Image 
          src={`/images/products/${path}`} 
          style={{ width: '100%', height: 'auto' }}
          width={200}
          height={300}
          alt="" 
        />
      </div>
      <div className={styles['product-details-container']}>
        <div className={styles['name-and-price']}>
          <p>{name}</p>
          <p>€ {price}</p>
        </div>
        <div className={styles['add-to-cart-icon']}>
          <icon>icon</icon>
        </div>
      </div>
    </div>
  );
};
