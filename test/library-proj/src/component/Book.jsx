
function Book(props) {
    return(
    <div>
        <h1>책이름 {props.name}</h1>
        <h3>책페이지 {props.numP}</h3>
    </div>
    )
}

export default Book