let movies;
let tvShows;
const movieId = 497582; // Enola Holmes movie id
const showId = 82856; //Mandalorian Id
const reviewId = "5f69e4d0cee2f6003633becf" //Enola Holmes first full review
const showReviewId = "5e01a5f5d236e6001692b040" //Mandalorian full review

let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
    .its("body")
    .then((response) => {
      movies = response.results;
    });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
    .its("body")
    .then((response) => {
      console.log(response);
      reviews = response.results;
    });
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
    .its("body")
    .then((response) => {
      tvShows = response.results;
    });
    cy.request(
      `https://api.themoviedb.org/3/movie/${showId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
    .its("body")
    .then((response) => {
      console.log(response);
      reviews = response.results;
    });
  });


  //  ********************    MOVIE NAVIGATION TESTS    ********************
  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.wait(200);  //This is here to give the page time to load (200 miliseconds)
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Movies").click();
      cy.url().should("include", `/`);
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Upcoming Movies").click();
      cy.url().should("include", `/upcoming`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular Movies").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Popular Movies");
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Latest Movies").click();
      cy.url().should("include", `/latest`);
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").first().click();
      cy.url().should("include", `/`).get("h2").contains("No. Movies");
    });
  });

  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.wait(200);
      cy.get(".card").eq(0).find("button").click();
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Your Favourite Movies").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });

  describe("From the Upcoming page", () => {
    it("should navigate to the upcoming movie details page and change browser URL", () => {
      cy.wait(200);
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Upcoming Movies").click();
      cy.url().should("include", `/movies/upcoming`);
      cy.get("h2").contains("Upcoming Movies");
    });
    it("should add movie to watch list", () => {
      cy.wait(200);
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Upcoming Movies").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Watch List").click();
      cy.url().should("include", `/movies/watchList`);
      cy.get(".card").eq(0).find("img").click();
      cy.get("h2");
    });
  });

  describe("From the Popular page", () => {
    beforeEach(() => {
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular Movies").click();
    });
    it("should click write a review button and go back", () => {
      cy.wait(200);
      cy.get(".card").eq(0).contains("Write a Review").click();
      cy.url().should("include", `/reviews/form`);
      cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
      cy.url().should("not.include", `/reviews`);
    });
  });

  describe("To Latest page", () => {
    beforeEach(() => {
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Latest Movies").click();
    });
    it("should click the show reviews button, hide it, and return to home ", () => {
      cy.wait(200);
      cy.url().should("include", `/movies/latest`);
      cy.url().should("not.include", `/reviews`);
      cy.contains("Show Reviews").click();
      cy.get(".table").contains("Author");
      cy.contains("Hide Reviews").click();
    });
  });

  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back using the back button", () => {
      cy.wait(200);
      cy.get(".card").eq(0).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
    it("should navigate from favorites page to movie details and back using the back button", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.get(".dropdown").contains("Movies Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Favourite").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
      cy.get(".card").eq(0).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
      cy.get("h2").contains("Favorite Movies");
    });
  });

  //  ********************    END OF MOVIE TESTS ********************

  //  ********************    TV  NAVIGATION  TESTS    ********************
  describe("From the Tv Shows page", () => {
    it("should navigate to the show details page and change browser URL", () => {
      cy.wait(200);
      cy.get(".dropdown").contains("TV Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Tv Shows").click();
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/tv/${tvShows[1].id}`);
      cy.get("h2").contains(tvShows[1].name);
    });
    it("should allow navigation from site header", () => {
      cy.get(".dropdown").contains("TV Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Rated").click();
      cy.url().should("include", `/top_rated`);
      cy.get("h2").contains("Top rated Shows");
      cy.get(".dropdown").contains("TV Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Your Favourite Tv Shows").click();
      cy.url().should("not.include", `/top_rated`);
      cy.get("h2").contains("Favorite Tv Shows");
    });
  });

  describe("From the Tv Show Details page ", () => {
    beforeEach(() => {
      cy.get(".dropdown").contains("TV Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Tv Shows").click();
      cy.wait(200);
      cy.get(".card").eq(0).find("img").click();
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/tv/${showId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/tv/${showId}/reviews`);
    });
    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/tv/${showId}/reviews`);
      cy.contains("Full Review").click();
      cy.url().should("include", `/tvReviews/${showReviewId}`);
    });
  });

  describe("From Top Rated Shows Page", () => {
    beforeEach(() => { cy.visit("/");
      cy.get(".dropdown").contains("TV Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Rated").click();
      cy.wait(200);
    });
    it("should navigate to the Tv Show's detail page and change the browser URL", () => {
      cy.url().should("include", `/tv/top_rated`)
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/tv/`);
    });
    it("should navigate to the Top Rated page, find card 0 and click the add to show watch list button and go to the watch list", () => {
      cy.url().should("include", `/tv/top_rated`)
      cy.get(".card").eq(0).find("button").click();
      cy.get(".dropdown").contains("TV Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Watch List").click();
      cy.get(".card").eq(0).find("img").click();
      cy.get("h2");
    });
  });
});