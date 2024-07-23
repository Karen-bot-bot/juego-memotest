const URL = "http://192.168.100.8:8081"; // Asegúrate de usar "http://" o "https://"
const NUMERO_CUADROS = 16;

context("Memotest", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("se asegura que haya un tablero con cuadros", () => {
    // Espera a que el tablero esté completamente cargado
    cy.get("#tablero", { timeout: 10000 }).should("be.visible");
    cy.get("#tablero").find(".cuadro").should("have.length", NUMERO_CUADROS);
  });
});
