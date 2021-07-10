describe("Delete contact", () => {
    it("authentication/deleteContactMacapa", () => {
        cy.login();
        cy.get(
            "div.v-data-table.theme--light > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > div > button"
        ).click();
        cy.contains("Excluir contato").click();
        cy.get(".next-step-button").click();
    });
});
