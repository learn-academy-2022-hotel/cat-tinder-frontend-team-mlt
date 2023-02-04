import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

describe("<Header />", () => {
  it("renders with a greeting", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    screen.logTestingPlaygroundURL()
    const header = screen.getByText(/header/i)
    expect(header).toBeInTheDocument()
  })
})