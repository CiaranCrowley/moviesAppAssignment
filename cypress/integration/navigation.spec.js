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
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("include", `/upcoming`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
    });
  });

  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });

    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Full Review").click();
      cy.url().should("include", `/reviews/${reviewId}`);
    
    });
  });

  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });

  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");
      cy.get(".card").eq(0).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
      cy.get("h2").contains("Favorite Movies");
    });
  });

  describe("From the Tv Shows page", () => {
    beforeEach(() => {
      cy.visit("/tv");
    });
    it("should navigate to the show details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/tv/${tvShows[1].id}`);
      cy.get("h2").contains(tvShows[1].name);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(7).find("a").click();
      cy.url().should("include", `/top_rated`);
      cy.get("h2").contains("Top rated Shows");
      cy.get("nav").find("li").eq(8).find("a").click();
      cy.url().should("not.include", `/top_rated`);
      cy.get("h2").contains("Favorite Tv Shows");
      cy.get("nav").find("li").eq(7).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
    });
  });

  describe("From the Tv Show Details page ", () => {
    beforeEach(() => {
      cy.visit(`/tv/${showId}`);
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

  // describe("From the Favorites page", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //     cy.get(".card").eq(0).find("button").click();
  //     cy.get("nav").find("li").eq(2).find("a").click();
  //   });
  //   it("should navigate to the movies detail page and change the browser URL", () => {
  //     cy.get(".card").eq(0).find("img").click();
  //     cy.url().should("include", `/movies/${movies[0].id}`);
  //     cy.get("h2").contains(movies[0].title);
  //   });
  // });

  // describe("The Go Back button", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //   });
  //   it("should navigate from home page to movie details and back", () => {
  //     cy.get(".card").eq(0).find("img").click();
  //     cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
  //     cy.url().should("not.include", `/movies`);
  //     cy.get("h2").contains("No. Movies");
  //   });
  //   it("should navigate from favorites page to movie details and back", () => {
  //     cy.get(".card").eq(0).find("button").click();
  //     cy.get("nav").find("li").eq(4).find("a").click();
  //     cy.get("nav").find("li").eq(4).find("a").click();
  //     cy.url().should("include", `/favorites`);
  //     cy.get("h2").contains("Favorite Movies");
  //     cy.get(".card").eq(0).find("img").click();
  //     cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
  //     cy.get("h2").contains("Favorite Movies");
  //   });
  // });


});