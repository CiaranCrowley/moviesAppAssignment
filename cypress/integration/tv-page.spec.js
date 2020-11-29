let tvShows;    // List of movies from TMDB

// Utility functions
const filterByName = (tvList, string) =>
tvList.filter((t) => t.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
tvList.filter((t) => t.genre_ids.includes(genreId));

describe("Tv Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        tvShows = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/tv")
  });

  describe("Tv Page", () => {
      beforeEach(() => {
        cy.visit("/tv");
      });
    
      describe("Base test", () => {
        it("displays page header", () => {
          // cy.get("h2").contains("No. Movies");
          cy.get("h2").contains("No. Shows");
          cy.get(".badge").contains(20);
        });
      })
    })

    describe("Filtering", () => {
      describe("By show name" ,() => {
        it("should display shows with 'p ' in the name", () => {
          const searchString = 'p'
          const matchingShows = filterByName(tvShows, searchString );
          cy.get("input").clear().type(searchString) ;
          cy.get(".card").should("have.length", matchingShows.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
            .find(".card-name")
            .should("have.text", matchingShows[index].name);
          });
        });
        it("should display movies with 'o' in the name", () => {
          const searchString = "o";
          const matchingShows = filterByName(tvShows, searchString);
          cy.get("input").clear().type(searchString);
          cy.get(".card").should("have.length", matchingShows.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
            .find(".card-name")
            .should("have.text", matchingShows[index].name);
          });
        });
      
        it("should display movies with 'xyz' in the name", () => {
          const searchString = "xyz";
          const matchingShows = filterByName(tvShows, searchString);
          cy.get("input").clear().type(searchString) ;
          cy.get(".card").should("have.length", matchingShows.length);
        });
      });
      describe("By movie genre", () => {
        it("should display movies with the specified genre only", () => {
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const matchingShows = filterByGenre(tvShows, selectedGenreId);
          cy.get("select").select(selectedGenreText); 
          cy.get(".card").should("have.length", matchingShows.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-name")
              .should("have.text", matchingShows[index].name);
          });      
        });
      });

      describe("by genre and name", () => {
        it("should display movies with the specified genre and name only", () => {g
          const searchString = "t";
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const matchingShows = filterByName(tvShows, searchString) && filterByGenre(tvShows, selectedGenreId);
          cy.get("input").clear().type(searchString);
          cy.get("select").select(selectedGenreText);
          cy.get(".card").should("have.length", matchingShows.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-name")
              .should("have.text", matchingShows[index].name);
          }); 
        });
      });

    });
  });