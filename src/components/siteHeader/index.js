import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const SiteHeader = () => {
  return (
  <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          {/* MOVIES DROPDOWN */}
          <Nav.Link className="text-white my-auto" as={Link} to="/">Home</Nav.Link>
          <NavDropdown title={<span className="text-white my-auto">Movies Menu</span>}>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/">Movies</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/movies/upcoming">Upcoming Movies</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/movies/popular">Popular Movies</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/movies/latest">Latest Movies</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/movies/favorites">Your Favourite Movies</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/movies/watchList">Watch List</NavDropdown.Item>
          </NavDropdown>

          {/* TV DORPDOWN */}
          <NavDropdown title={<span className="text-white my-auto">TV Menu</span>}>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/tv">Tv Shows</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/tv/top_rated">Top Rated Shows</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/tv/favoriteShows">Your Favourite Tv Show </NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/tv/tvWatchlist">Watch List</NavDropdown.Item>
          </NavDropdown>

          {/* PEOPLE */}
          <NavDropdown title={<span className="text-white my-auto">Actors Menu</span>}>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/people">Popular Actors</NavDropdown.Item>
            <NavDropdown.Item className="text-black my-auto" as={Link} to="/people/favoriteActors">Your Favourite Actors</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteHeader;