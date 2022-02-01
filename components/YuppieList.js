import CollectionCard from "./CollectionCard";
import styles from "../styles/YuppieList.module.css"


const YuppieList = ({ yuppieData, setMainYuppie }) => {

    return (
        <div className={styles.list}>
            {yuppieData.map(yuppie => (
                <div 
                onClick={()=>setMainYuppie(yuppie)}
                key={yuppie.token_id} >
                    <CollectionCard
                        id={yuppie.token_id}
                        name={yuppie.name}
                        traits={yuppie.traits}
                        image={yuppie.image_url}
                    />
                </div>
            ))}
        </div>
    )
};

export default YuppieList;
