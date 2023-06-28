export interface SelectProps {
    options: MyArrayType,
    value: string,
    defaultValue: string,
    handleChange: (e: string)=> void
}

type MyArrayType = {
    value: string,
    label: string
}[];

export type Option = {
    value: string,
    label: string
}