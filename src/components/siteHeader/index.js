import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
// import Button from 'react-bootstrap/Button'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
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

// const SiteHeader = () => {
//   return (
//     <nav className="navbar fixed-top ">
//       <nav className="navbar-brand text-white">
//         <Link className=" text-white" to="/">
//           TMDB Client
//         </Link>
//       </nav>
//       <FontAwesomeIcon
//         className="navbar-text text-light"
//         icon={["fas", "video"]}
//         size="3x"
//       />
//       <FontAwesomeIcon
//         className="navbar-text text-light"
//         icon={["fas", "film"]}
//         size="3x"
//       />
//       <nav className="navbar navbar-expand ">
//         <ul className="navbar-nav">
//           {/* <li className="nav-item">
            // <Link className="nav-link text-white padding-right: 10px;" to="/">
            //   Home
            // </Link>
//           </li> */}

          // <Button variant="primary">
          //   <Link className="nav-link text-white " to="/">
          //     Home
          //   </Link>
          // </Button>

// {/*        NEW DROP-DOWN MENU TAKEN FROM REACT BOOTSTRAP https://react-bootstrap.github.io/components/dropdowns/ */}
//           <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//             <Dropdown.Item href="/">
//               <Link className="nav-link text-black" to="/">
//                 Home
//               </Link>
//             </Dropdown.Item>
//             <Dropdown.Item href="/movies/upcoming">
//               <Link className="nav-link text-black" to="/movies/upcoming">
//                 Upcoming movies
//               </Link>
//             </Dropdown.Item>
//             <Dropdown.Item href="/movies/latest">
//               <Link className="nav-link text-black" to="/movies/popular">
//                 Popular
//               </Link>
//             </Dropdown.Item>
//             <Dropdown.Item href="/movies/latest">
//               <Link className="nav-link text-black" to="/movies/latest">
//                 Latest
//               </Link>
//             </Dropdown.Item>
//             <Dropdown.Item href="/movies/favorites">
//               <Link className="nav-link text-black" to="/movies/favorites">
//               Your Favourite Movies
//               </Link>
//             </Dropdown.Item>
//           </DropdownButton>

// {/*        HTML DROP-DOWN MENU TAKEN FROM W3 SCHOOLS */}
//           {/* <div class="dropdown">
//             <button class="dropbtn">Movies</button>
//             <div class="dropdown-content">
//             <Link className="nav-link text-white" to="/movies/upcoming">
//               Upcoming Movies
//             </Link>
//             <Link className="nav-link text-white" to="/movies/latest">
//               Latest Movies
//             </Link>
//             <Link className="nav-link text-white" to="/movies/favorites">
//               Your Favourite Movies
//             </Link>
//             <Link className="nav-link text-white" to="/movies/watchList">
//               Your Watch List
//             </Link>
//           </div>
//         </div>

//         <div class="dropdown">
//             <button class="dropbtn">Tv</button>
//             <div class="dropdown-content">
//             <Link className="nav-link text-white" to="/tv">
//               TV Shows
//             </Link>
//             <Link className="nav-link text-white" to="/tv/top_rated">
//               Top Rated Shows
//             </Link>
//             <Link className="nav-link text-white" to="/tv/favoriteShows">
//               Your Favorite Shows
//             </Link>
//             <Link className="nav-link text-white" to="/tv/tvWatchlist">
//               Your Tv Watchlist
//             </Link>
//           </div>
//         </div> */}

// {/*       ORIGINAL SITE HEADER */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/upcoming">
//               Upcoming
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/popular">
//               Popular
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/latest">
//               Latest
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/favorites">
//               Favorites
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/watchList">
//               Watch List
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv">
//               TV Shows
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv/top_rated">
//               Top Rated Shows
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv/favoriteShows">
//               Favorite TV Shows
//             </Link>
//           </li> */}
//           {/* <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv/tvWatchlist">
//               Tv Watchlist
//             </Link>
//           </li> */}
//         </ul>
//       </nav>
//     </nav>
//   );
// };

export default SiteHeader;