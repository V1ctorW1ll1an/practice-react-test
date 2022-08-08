import HelloWorld from "../components/HelloWorld";
import { render, screen } from "@testing-library/react";

test("Should render correctly", () => {
    render(<HelloWorld />);

    const sut = screen.getByText("Hello World!");

    expect(sut).toBeInTheDocument();
});
