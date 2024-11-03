import './style/delete_button.css'; 

export default function ListDelete(props) {

    const targetListJson = `http://minime.local:3001/items`


    const handleDelete = async (id) => {
        try {
            const response = await fetch(targetListJson.concat("/") + id, {
              method: "DELETE",
            });
            if (!response.ok) {
              throw new Error("Failed to delete item");
            }
            else {
                console.log("deleted "+ props.id);
                window.location.reload();
            }
          } catch (error) {
            console.log(error.message);
          }
    }

    return (
        <>
        <button className="deleteButton" onClick={() => handleDelete(props.id)}>Delete ❌</button>
        
        </>
    );

}