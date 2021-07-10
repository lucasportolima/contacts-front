//Gerador de dados aleatórios.

var faker = require("faker-br");

const number = "5561984832244";

const name = faker.name.firstName();

describe("New contact", () => {
    it("authentication/newMacapaContact", () => {
        cy.login();
        cy.contains("Novo Contato").click();
        cy.get("#nomeContactMacapa").type(name);
        cy.get("#celularContactMacapa").type(number);
        cy.get(".ma-0").click();
    });
});
