import { Cities } from "../../components/Cities";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("<Cities />", () => {
  test("initializeCityDataBase() initializes cities", () => {
    render(<Cities />);

    const createButton = screen.getByText("Create Cities");

    fireEvent.click(createButton);

    const city = screen.queryByText("Vienna");

    expect(city).toBeInTheDocument();
  });

  test("snapshot from <Cities />", () => {
    const component = renderer.create(<Cities />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
