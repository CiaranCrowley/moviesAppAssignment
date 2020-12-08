let showId = null
let tv;
let reviews;
describe("tv Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryShowIdignored) => {
        showId = arbitraryShowIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/tv/${showId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((tvDetails) => {
        tv = tvDetails;
        return tvDetails.id;
      })
  });

  beforeEach(() => {
    cy.visit(`/`);
    cy.get("nav").find("li").eq(6).click();
  });

  it("should display tv title in the page header", () => {
    cy.get("h2").contains("No. Shows");
  });

  it("should display the tv's details", () => {
    cy.get(".card").eq(2).find("img").click();
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(tv.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Average Score");
        cy.get("li").eq(1).contains(tv.vote_average);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(tv.first_air_date);
      });
  });

  it("should display the Home icon with the correct URL value", () => {
    cy.get(".card").eq(2).find("img").click();
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", tv.homepage);
  });

  it("should display the poster has the a src attribute", () => {
    cy.get(".card").eq(2).find("img").click();
    cy.get(".tv")
      .should("have.attr", "src");
  });
});