const Directory = {

    navigateToDirectory(){
        cy.get(".oxd-main-menu-item").contains("Directory").click();
    },

    searchEmployee(employeeName){
        cy.get("[placeholder='Type for hints...']").type("Ameli");
        cy.get(".oxd-autocomplete-option").contains("Amelia Brown").click();
    },
    JobTitle(){
        cy.get(".oxd-select-text").eq(0).click();
        cy.get(".oxd-select-dropdown").contains("Account Assistant").click();
    },
    Location(){
        cy.get(".oxd-select-text").eq(1).click();
        cy.get(".oxd-select-dropdown").contains("Canadian Regional HQ").click();
    }
}
export default Directory;