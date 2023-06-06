import { buttonProps } from "../Types/ButtonType"

export default function Button({handleButton}: buttonProps) {
    return (
        <div>
            <button onClick={handleButton}>Узнайте пол</button>
        </div>
    )
}
