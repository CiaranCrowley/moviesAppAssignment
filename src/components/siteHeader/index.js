import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

// const SiteHeader = () => {
//   return (
//     <nav className="navbar  navbar-light fixed-top  bg-dark ">
//       <nav className="navbar-brand text-white">
//         <Link className=" text-white" to="/">
//           TMDB Client
//         </Link>
//       </nav>
//       {/* <FontAwesomeIcon
//         className="navbar-text text-light"
//         icon={["fas", "video"]}
//         size="3x"
//       />
//       <FontAwesomeIcon
//         className="navbar-text text-light"
//         icon={["fas", "film"]}
//         size="3x"
//       /> */}
//       <nav className="navbar navbar-expand ">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/upcoming">
//               Upcoming
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/popular">
//               Popular
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/latest">
//               Latest
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/favorites">
//               Favorites
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/watchList">
//               Watch List
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv">
//               TV Shows
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv/top_rated">
//               Top Rated Shows
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv/favoriteShows">
//               Favorite TV Shows
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/tv/tvWatchlist">
//               Tv Watchlist
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </nav>
//   );
// };


const SiteHeader = () => {

  
  return (
    <html>
      <head>
      </head>
      <body>
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </body>
    </html>
  );
};



export default SiteHeader;