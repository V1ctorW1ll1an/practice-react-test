import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should render correctly", () => {
    render(<App />);

    const sut = screen.getByText("Hello World!");

    expect(sut).toBeInTheDocument();
});
