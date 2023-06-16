import { inputProps } from '../types/TextInputType'

export default function TextInput({name, inputChange}: inputProps) {
    return (
        <div>
            <p>Type your name and find out the gender</p>
            <input type="text" value={name} onChange={inputChange}/>
        </div>
    )
    }
