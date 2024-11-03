import { useState } from 'react'
import ListDelete from './listdelete'
import styles from './style/itemcard.module.css'
import Heading from './heading';
import './style/delete_button.css'; 
import EditCard from './editCard';
import ItemDisplay from './itemDisplay';


export default function ItemCard(props) {

    const [isEditing, toggleEditing] = useState(false);

    function myOutput() {
        if (isEditing) {
            return <Heading myText="lala" />
        } 
        else {
            return <h1>aa</h1>
        }
    }
     

    return (
        <div className={styles.box}>
        <ListDelete id={props.id}/>
        <button className={isEditing ? "editButtonOn" : "editButtonOff"} onClick={()=> toggleEditing(!isEditing)}>Edit 📝</button>
       
        <img src={props.img} alt={props.id} height='300' width='300' />


        {isEditing ?  <EditCard props={props}/> : <ItemDisplay props={props}/>}

        </div>
    )

}

//        <button onClick={()=> toggleEditing(!isEditing)}>{isEditing ? "True" : "False"}</button>