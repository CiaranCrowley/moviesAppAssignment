let people;

// Utility functions
const filterByName = (peopleList, string) =>
peopleList.filter((t) => t.name.toLowerCase().search(string) !== -1);

describe("Tv Page ", () => {
    before(() => {
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
  
    beforeEach(() => {
      cy.visit("/");
      cy.get(".dropdown").contains("Actors Menu").click().get('.dropdown-menu').get(".dropdown-item").contains("Popular").click();
      cy.wait(200);
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Popular Actors");
        cy.get(".badge").contains(20);
      });
    });
    
    describe("Filtering", () => {
      describe("By show name" ,() => {
        it("should display shows with 'p ' in the name", () => {
          const searchString = 'p'
          const matchingPeople = filterByName(people, searchString );
          cy.get("input").clear().type(searchString) ;
          cy.get(".card").should("have.length", matchingPeople.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
            .find(".card-name")
            .should("have.text", matchingPeople[index].name);
          });
        });
        it("should display tv shows with 'o' in the name", () => {
          const searchString = "o";
          const matchingPeople = filterByName(people, searchString);
          cy.get("input").clear().type(searchString);
          cy.get(".card").should("have.length", matchingPeople.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card")
              .should("have.text", matchingPeople[index].name);
          });
        });
        it("should display tv shows with 'xyz' in the name", () => {
          const searchString = "xyz";
          const matchingPeople = filterByName(people, searchString);
          cy.get("input").clear().type(searchString) ;
          cy.get(".card").should("have.length", matchingPeople.length);
        });
      });
    });
  });