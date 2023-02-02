import { render, screen } from "@testing-library/react"
import CatIndex from "./CatIndex"
import mockCats from "../mockCats"

describe("<CatIndex />", () => {
    it("renders cat cards", () => {
        const div = document.createElement("div")
        render(<CatIndex cats={mockCats} />, div)
        screen.debug()
        mockCats.forEach((cat) => {
          const catName = screen.getByText(cat.name)
          expect(catName).toBeInTheDocument()
        })
    })
})