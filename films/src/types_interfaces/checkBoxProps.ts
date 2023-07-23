export interface CheckBoxInterface {
    options: CheckBoxProps,
    chekedArr: number[],
    checkedHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

type CheckBoxProps = {
    id: number,
    name: string
}[];