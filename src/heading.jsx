
const headingStyle = {
    background: 'black',
    color: 'red',
    fontFamily: 'Creepster'
}

export default function Heading(props) {
    return (
        <>
        <h1 style = {headingStyle}>{props.myText} </h1>
        </>
    )
}