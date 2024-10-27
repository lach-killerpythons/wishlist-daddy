import ListDelete from './listdelete'
import styles from './style/itemcard.module.css'

export default function ItemCard(props) {
    return (
        <div className={styles.box}>
        <ListDelete id={props.id}/>
        <img src={props.img} alt={props.id} height='300' width='300' />
        <h1 className = {styles.price}>{props.price}</h1>
        <h2 className = {styles.description}>{props.description}</h2>
        </div>
    )

}