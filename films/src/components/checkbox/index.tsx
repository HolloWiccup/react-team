import "./style.css"
import { CheckBoxInterface } from '../../types_interfaces/checkBoxProps'

export default function CheckBox({options, chekedArr, checkedHandler} : CheckBoxInterface) {
    return (
    <>
        {options.map((option)=> (
            <label className='label' key={option.id}>
                <input
                    type="checkbox" 
                    value={option.id} 
                    checked={chekedArr.includes(option.id)} 
                    onChange={(event)=> checkedHandler(event)}
                />
            {option.name}
        </label>
        ))}
    </>
    )
}

