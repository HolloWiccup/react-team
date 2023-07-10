import React from 'react'
import Input from "../input/Input"
import Button from "../button/Button"
import "./form.css"


export default function Form(props) {
  return (
    <form>
      <h2 className="formTitle">{props.title}</h2>
        <Input type="login" placeholder="login" />
        <Input type="password" placeholder="password" />
        <Button type="submit" name="login" />
    </form>
  )
}
