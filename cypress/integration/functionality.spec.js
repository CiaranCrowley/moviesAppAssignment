let movies;
let tvShows;
let reviews;
let people;
const reviewAutor = "TEST AUTHOR";
const reviewText = "Test Review";

describe("Button functionality", () => {
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
        `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
      .its("body")
      .then((response) => {
        tvShows = response.results;
      });
      cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
      .its("body")
      .then((response) => {
        people = response.results;
      });
   });

   //  ********************    FUNCTIONALITY TESTS    ********************
   describe("Functionality Tests", () => {
      beforeEach(() => {
         cy.visit("/");
         cy.wait(200);
      });
      it("For Movies: Should add card 0, 1, & 2 to Favourite Movies", () => {
         cy.get(".card").eq(0).find("button").contains("Add to Favorites").click();
         cy.get(".card").eq(1).find("button").contains("Add to Favorites").click();
         cy.get(".card").eq(2).find("button").contains("Add to Favorites").click();
         cy.get(".dropdown").contains("Movies Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Favourite").click();
         cy.wait(200);
         cy.get(".badge").contains(3);
      });
      it("For Movies: Should click the write a review button and write a review for card 0 and should check that the review has been written", () => {
         cy.get(".card").eq(0).find("button").contains("Add to Favorites").click();
         cy.get(".dropdown").contains("Movies Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Favourite").click();
         cy.get(".card").eq(0).find(".btn").contains("Review").click();
         cy.wait(200);
         cy.get("input").type(`${reviewAutor}`).get("textarea").type(`${reviewText}`).get(".btn").contains("Submit").click();
         cy.get(".card").eq(0).find(".btn").contains("Review").click();
         cy.wait(200);
         cy.get("input").invoke("val").get("textarea").contains("Test Review");  //  https://stackoverflow.com/questions/51793521/how-to-get-the-text-input-field-value-to-a-const-and-log-that-value-in-cypress-i#52021501
      });
      it("For Movies: Should go to popular movies and write a review", () => {
         cy.get(".dropdown").contains("Movies Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Popular").click();
         cy.get(".card").eq(0).find(".btn").contains("Review").click();
         cy.wait(200);
         cy.get("input").type(`${reviewAutor}`).get("textarea").type(`${reviewText}`).get(".btn").contains("Submit").click();
         });
      it("For Movies: Should go to upcoming movies and add card 0, 1, & 2 to the watch list", () => {
         cy.get(".dropdown").contains("Movies Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Upcoming").click();
         cy.wait(200);
         cy.get(".card").eq(0).find("button").contains("Watch").click();
         cy.get(".card").eq(1).find("button").contains("Watch").click();
         cy.get(".card").eq(2).find("button").contains("Watch").click();
         cy.get(".dropdown").contains("Movies Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Watch").click();
         cy.wait(200);
         cy.get(".badge").contains(3);
      });
      it("For Tv Shows: Should navigate to Tv Shows Page and add card 0, 1, & 2 to Favourite Tv Shows", () => {
         cy.get(".dropdown").contains("TV Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Tv Shows").click();
         cy.get(".card").eq(0).find("button").contains("Add to Favorites").click();
         cy.get(".card").eq(1).find("button").contains("Add to Favorites").click();
         cy.get(".card").eq(2).find("button").contains("Add to Favorites").click();
         cy.get(".dropdown").contains("TV Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Favourite").click();
         cy.wait(200);
         cy.get(".badge").contains(3);
      });
      it("For Tv Shows: Should click the write a review button and write a review for card 0 and should check that the review has been written", () => {
         cy.get(".dropdown").contains("TV Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Tv Shows").click();
         cy.get(".card").eq(0).find("button").contains("Add to Favorites").click();
         cy.get(".dropdown").contains("TV Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Favourite").click();
         cy.get(".card").eq(0).find(".btn").contains("Review").click();
         cy.wait(200);
         cy.get("input").type(`${reviewAutor}`).get("textarea").type(`${reviewText}`).get(".btn").contains("Submit").click();
         cy.get(".card").eq(0).find(".btn").contains("Review").click();
         cy.wait(200);
         cy.get("input").invoke("val").get("textarea").contains("Test Review");  //  https://stackoverflow.com/questions/51793521/how-to-get-the-text-input-field-value-to-a-const-and-log-that-value-in-cypress-i#52021501
      });
      it("For Tv Shows: Should navigate to Top Rated Shows Page and add card 0, 1, & 2 to the watch list", () => {
         cy.get(".dropdown").contains("TV Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Top Rated").click();
         cy.wait(200);
         cy.get(".card").eq(0).find("button").contains("Watch").click();
         cy.get(".card").eq(1).find("button").contains("Watch").click();
         cy.get(".card").eq(2).find("button").contains("Watch").click();
         cy.get(".dropdown").contains("TV Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Watch").click();
         cy.wait(200);
         cy.get(".badge").contains(3);
      });
      it("For People: Should navigate to Poular Actors Page and add card 0, 1, & 2 to the favorite actors list", () => {
         cy.get(".dropdown").contains("Actors Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Popular").click();
         cy.wait(200);
         cy.get(".card").eq(0).find("button").contains("Actors").click();
         cy.get(".card").eq(1).find("button").contains("Actors").click();
         cy.get(".card").eq(2).find("button").contains("Actors").click();
         cy.get(".dropdown").contains("Actors Menu").click().get(".dropdown-menu").get(".dropdown-item").contains("Favourite").click();
         cy.wait(200);
         cy.get(".badge").contains(3);
      });
   });
});