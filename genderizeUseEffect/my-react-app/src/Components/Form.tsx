import Button from './Button'
import { inputProps } from '../Types/TextInputType'

export default function Form({name, inputChange, handleButton}: inputProps) {
    return (
        <div>
            <form onSubmit={handleButton}>
                <div>
                    <p>Type your name and find out the gender</p>
                    <input type="text" value={name} onChange={inputChange}/>
                </div>
                <Button/>
            </form>
        </div>
    )
}
