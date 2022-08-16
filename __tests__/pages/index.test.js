import { screen, render } from "@testing-library/react";
import Home from "../../pages/index";

describe( "Home Page",()=>{
 it("should  render the list of asas", async ()=>{
    render(<Home />);
   const asa = await screen.findByTestId("asa-item-0");
   expect(asa).toBeInTheDocument();
 })
})