import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import CatNew from "./CatNew"
import { Button } from "reactstrap";

describe("<CatNew />", () => {
  render(
    <BrowserRouter>
      <CatNew />
    </BrowserRouter>
    )
    it("can see the title of the page", () => {
      const element = screen.getByText(/create cat account/i)
      expect(element).toBeInTheDocument()
    }
  )
    // it("can see the form on the page", () => {
    //   const element = screen.getByPlaceholderText("Please enter your name")
    //   expect(element).toBeInTheDocument()
    //   })
    })