describe("Form test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get('input[name="name"]').should("exist");
  const instructions = () =>
    cy.get('input[name="instructions"]').should("exist");
  const submitBtn = () => cy.get("#submitBtn").should("exist");

  it("can type in the inputs", () => {
    nameInput().type("Justin");
    cy.get("select").select("Large");
    cy.get('[type="checkbox"]').check("onions");
    cy.get('[type="checkbox"]').check("greenPeppers");
    cy.get('[type="checkbox"]').check("pepperoni");
    instructions().type("Leave at door");
    submitBtn().should("not.be.disabled").click();
  });
});
