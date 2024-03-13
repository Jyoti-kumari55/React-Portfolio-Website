import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
    const {activeLink, setActiveLink } = useState("home");
    const { scrolled, setScrolled } = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll" , onScroll);
    }, [])
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="special-icon">
                    <a href="a"><img src={} alt="" /></a>
                    <a href="a"><img src={} alt="" /></a>
                    <a href="a"><img src={} alt="" /></a>
                </div>
                <button className="button" onClick={() => console.log("connect")}>
                    <span>Let's Connect</span>
                </button>
            </span>
        </Navbar.Collapse>

        </Container>
    </Navbar>
    )
}
