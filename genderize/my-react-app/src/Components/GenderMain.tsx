import { GenderProps } from "../types/GenderShowType"

export default function GenderShow(props: GenderProps) {
    const {resultName, gender, probability, isShown} = props
    return (
        <div>
            {isShown ? 
            <p>Name {resultName} is {gender} with {probability} probability</p>
        : 'Here will be your result'}
        </div>
    )
}
