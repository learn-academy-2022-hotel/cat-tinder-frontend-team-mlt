import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import CatEdit from './CatEdit'


describe("<CatEdit />", () => {
  render(
    <BrowserRouter>
      <CatEdit />
    </BrowserRouter>
  )
  it("allows profile updates", () => {
    screen.debug()
    const edit = screen.getByText(/cat edit/i)
    expect(edit).toBeInTheDocument()
  })
})