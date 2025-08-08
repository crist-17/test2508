

function Carstyle(props) {
    return (
        <div className={`car-${props.label}`}>
            {props.name}
        </div>
    )


}export default Carstyle