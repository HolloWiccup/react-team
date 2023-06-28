export interface CheckBoxInterface {
    options: CheckBoxProps,
    chekedArr: string[],
    checkedHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type CheckBoxProps = {
    id: string,
    name: string
}[];