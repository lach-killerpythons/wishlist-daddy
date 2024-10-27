import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './itemCard';
import styles from './style/itemcard.module.css'

const targetList = `http://minime.local:3001/items`

export default function Listbuild(props) {

    const [mylist, updateMylist] = useState([]);

    
    function addToList(newItem) {
        updateMylist(prev => [...prev, newItem])
        // updateMylist([
        //     ...mylist,
        //     newItem
        // ]);
    }

    function itemGetter() {
        axios.get({targetList})
            .then(res => {
              return res.data;
            })          
    }

    function testGetter() {
        axios.get(`http://minime.local:3001/items`)
        .then(res => {
          const json_items = res.data;

          json_items.map(
            item => {
                //console.log(item);
                //console.log(item.id);
                addToList( <ItemCard
                    id={item.id}
                    img={item.image_url}
                    description={item.description}
                    price={item.price}
                />
                );


                // id, price, description, image_url
            }
          )
        })

    }

    // only run once
    useEffect(()=>{
        testGetter();
    }, []);

    


    return (
        
        <>
        <h1 style = {{color: 'white'}}>Item Tier {props.tier}</h1>
        <div className={styles.itemgrid} style={{ gridTemplateColumns: `repeat(3, 1fr)` }}>
        {
            mylist.map(
            //comment => <Card commentObject={comment} />)
            item => <h1>{item}</h1>
            )
        }
        </div>
        
        </>
    )
}