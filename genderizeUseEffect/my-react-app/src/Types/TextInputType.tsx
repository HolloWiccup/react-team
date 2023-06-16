export type inputProps = {
    name: string,
    inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleButton:  (event: React.FormEvent<HTMLFormElement>) => void
}