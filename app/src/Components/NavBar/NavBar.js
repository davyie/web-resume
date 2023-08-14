import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return <Navbar className='justify-content-end'>
      <Nav.Link href={`/`}>Home</Nav.Link>
      <Nav.Link href={`/contact`}>Contact</Nav.Link>
      <Nav.Link href={`/portfolio`}>Portfolio</Nav.Link>
      <Nav.Link href={`/cv`}>Curriculum Vitae</Nav.Link>
    </Navbar>
}