import React, { useState } from "react"

export default function MockEdit() {

    function printAll() {
        console.log(data)
    }

    const [data, setData] = useState([
        {
          id:   1,
          name: 'john',
          gender: 'm',
          role: 'founder'
        },
        {
          id:   2,
          name: 'mary',
          gender: 'f',
          role: 'HR'
        },
        {
          id:   3,
          name: 'jimeson',
          gender: 't',
          role: "Sales"
        }
      ]);
      
      const getItem = index => {
        console.log(`returning data[${index}]`);
        console.log(data[index]);
      }


      // e is the target input field
      // index is the array item
      const updateFieldChanged = index => e => {
        console.log('index: ' + index);
        //console.log('property name: '+ e.target.name);
        let newArr = [...data]; // copying the old datas array
        // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
        let testArr = data[index];
        console.log(testArr);
        
        const new1 = {
            id:   testArr.id,
            name: e.target.value,
            gender: testArr.gender,
            role: testArr.role
        }
        
        newArr[index] = new1; // replace e.target.value with whatever you want to change it to
      
        setData(newArr);
      }
      
      return (
        <>
            <h1>Mock State Updates</h1>
        
            <button onClick={()=>printAll()}>Print Whole Array</button>
            <br />
            {data.map(
            (item, index) => {
                return (
                    <>
                    <input type="text" name="name" value={item.name} onChange={updateFieldChanged(index)}  />

                    <button onClick={getItem(index)}>Get Item</button>
                    <br />
                    </>
                )
            } 
            )}
           
        </>
      )
}

// <button onClick={printMe()}>Test</button>

// {data.map((datum, index) => {
//     <li key={datum.name}>
//         <h1>22</h1>
//       <input type="text" name="name" value={datum.name} onChange={updateFieldChanged(index)}  />
//     </li>
//   })}

// {data.map(
//     item => <h1>{item.name}</h1>
//     )}