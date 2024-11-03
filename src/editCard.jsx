import { useState } from "react"

export default function EditCard({props}) {

    // props.price props. 

    const [propImg, updateImg] = useState(props.img);
    const [propPrice, updatePrice] = useState(props.price);
    const [propDescription, updateDescription] = useState(props.description);

    //const myArr = [props.id, propImg,propPrice,propDescription];
    const myArr = {id: props.id, image_url: propImg, description: propDescription, price: propPrice};

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:3001/items/" + props.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myArr),
        })
          .then((response) => {
            if (response.ok) {
              window.location.reload();
            } else {
              throw new Error("Network response was not ok");
            }
            return response.json();
            
          })
      };

    function testProp() {
        console.log(myArr)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input 
            placeholder={props.img}
            name="img"
            onChange={(e) => updateImg(e.target.value)}
        >
        </input>
        <br/>
        <input 
            placeholder={props.price}
            name="price"
            onChange={(e) => updatePrice(e.target.value)}
        ></input>
        <br/> 
        <input
            placeholder={props.description}
            name="description"
            onChange={(e) => updateDescription(e.target.value)}
        ></input> 
        <br />
        
        <button type="submit">Submit</button>
        </form>
        <button onClick={()=>testProp()}>Test Button</button>
        
        </>
    )

}