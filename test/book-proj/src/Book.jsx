function Book(props) {
    return (
    <div>
        <h1>이책의 이름은 {props.name} </h1>
        <h2>이책은 {props.total}p 로 이루어져 있다</h2>
    </div>
)}
export default Book
