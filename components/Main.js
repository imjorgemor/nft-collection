import Image from "next/image";
import styles from "../styles/Main.module.css"


const Main = ({ yuppie }) => {
    const { image_preview_url, name, token_id, owner } = yuppie
    console.log(yuppie)

    return (
        <section className={styles.main}>
            <div className={`${styles['main-content']}`}>

                <div className={`${styles['yuppie-highlight']}`}>
                    <div className={`${styles['yuppie-container']}`}>
                        <img className={`${styles['selected-yuppie']}`}src={image_preview_url} alt="" />
                    </div>
                </div>

                <div className={`${styles['yuppie-details']}`}>
                    <div className={styles.details}>
                        <h2 className={styles.title}>{name} <span className={`${styles['item-number']}`}>·#{token_id}</span></h2>
                    </div>
                    <div className={styles.owner}>
                        <div className={`${styles['owner-image-container']}`}>
                            <img className={`${styles['owner-image']}`} src={owner.profile_img_url} alt="" />
                        </div>
                        <div className={`${styles['owner-details']}`}>
                            <div className={`${styles['owner-name-handle']}`}>
                                <p>{owner.address}</p>
                                <p className={`${styles['owner-handle']}`}>Owner: <span>@90s yuppie</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.social}>
                    <div>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/owner/instagram.png" alt="" width={105} height={105} layout="fixed"/>
                        </a>
                    </div>
                    <div>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/owner/more.png" alt="" width={105} height={105} layout="fixed"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Main;