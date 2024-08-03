
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Home from '../components/Home';

describe('Home Component', () => {
  test("renders the h1 with the text 'Name is a Web Developer from City'", () => {

    render(<Home />);

    const h1 = screen.getByText(/Name is a Web Developer from City/i);

    expect(h1).toBeInTheDocument();

   
    expect(h1).toHaveStyle("color: firebrick");
  });
});


