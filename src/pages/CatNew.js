import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return(
    <>
    <h1>Create Cat Account</h1>
    <Form>
      <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
          placeholder="Please enter your name"
          type="text" 
          name="name"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">
          Age
        </Label>
        <Input 
          placeholder="Please enter your age"
          type="text" 
          name="age" 
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">
          Enjoys
        </Label>
        <Input 
          type="text" 
          name="enjoys" 
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">
          Image
        </Label>
        <Input 
          type="text" 
          name="image"
          onChange={handleChange}
        />
      </FormGroup>
    </Form>
    <Button onClick={handleSubmit} name="submit">
      Submit Cat
    </Button>

    </>
  )
}

export default CatNew