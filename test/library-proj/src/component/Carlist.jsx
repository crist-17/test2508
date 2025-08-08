import Carstyle from './Carstyle'
import './css/car.css'

function Carlist() {
    return (
        <div className='gap'>
            <Carstyle label="a" name="bmw"></Carstyle>
            <Carstyle label="b" name="audi"></Carstyle>
            <Carstyle label="c" name="jeep"></Carstyle>
            <Carstyle label="d" name="kia"></Carstyle>
        </div>
    )
}

export default Carlist
