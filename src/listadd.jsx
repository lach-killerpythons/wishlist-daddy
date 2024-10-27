
import { useState } from "react";
import axios from "axios";

export default function Listadd() { // props = imagelink, price, description
    
    const [itemProps, addItemProp]  = useState({});

    const handleChange = ({target}) => {
        const {name, value} = target;
        addItemProp((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
    
    
        axios.post(`http://localhost:3001/items`, { image_url: itemProps.image_url, description: itemProps.description, price: itemProps.price })
        .then(res => {
            console.log(res);
            console.log(res.data);
            window.location.reload();
        })
    }
    
    return (
        <div style={{backgroundColor:'black'}}>
        <h1 style={{color:'white'}}>add item </h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="image_url"
                    placeholder="image_url"
                    value={itemProps.image_url || ''}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="decription"
                    name="description"
                    value={itemProps.description || ''}
                    onChange={handleChange}
                />
                <input 
                    placeholder="price"
                    name="price"
                    type="text"
                    value={itemProps.price || ''}
                    onChange={handleChange}
                />

            <button type="submit">Add ➕</button>
            </form>
        </div>
    );

}