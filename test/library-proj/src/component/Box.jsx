

function Box(props) {
    return (
        <div className={`size-${props.size}`}>
            {props.name}
        </div>
    )

}export default Box