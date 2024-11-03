import styles from './style/itemcard.module.css'

export default function ItemDisplay({props}) {
    return (
        <>
        <h1 className = {styles.price}> {props.price} </h1>
        <h2 className = {styles.description}> {props.description} </h2>
        </>

    )
}