import "./style.css"
import { Option, SelectProps } from '../../types_interfaces/selectProps'

export default function Select({options, value, defaultValue, handleChange} : SelectProps) {
    return (
        <>
            <select
                value={value} 
                className='select'
                onChange={(e)=> handleChange(e.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {options.map((option: Option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    )
}

