const faker = require("faker-br");

const name = faker.name.firstName();

describe("Edit contact", () => {
    it("authentication/editContactMacapa", () => {
        cy.login();
        cy.get(
            "div.v-data-table.theme--light > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > div > button"
        ).click({ force: true });
        cy.contains("Editar contato").click();
        cy.get("#nomeContactMacapa")
            .click()
            .focused()
            .clear()
            .type(name);
        cy.get(".ma-0").click();
    });
});
