import Image from "next/image";
import styles from '../styles/CollectionCard.module.css'

const CollectionCard = ({ id, name, traits, image }) => {

    return (
        <div className={`${styles['collection-card']}`}>
            <img src={image} alt="" height={300} width={50} />
            
            <div className={styles.details}>
                <div className={styles.name}>
                    <h4>{name} </h4>
                    <p className={styles.id}>·#{id}</p>
                </div>
                
                <div className={`${styles['price-container']}`}>
                    <Image src="/assets/eth.png" alt="" className={`${styles['weth-image']}`} height={15} width={15}/>
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
};

export default CollectionCard;
