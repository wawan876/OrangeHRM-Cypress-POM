const AdminUserManagement = {

    navigateToUserManagement(){
        cy.xpath("//a[.='Admin']").click();
        cy.get(".--visited .oxd-icon").click();
        cy.get(".oxd-dropdown-menu").contains("Users").click();
    },
    Username(){
        cy.get(".oxd-input.oxd-input--active").eq(1).type("wawan");
    },  
    UserRole(){
        cy.get(".oxd-select-text-input").eq(0).click();
        cy.get(".oxd-select-dropdown").contains("Admin").click();
    },

    EmployeeName(username){
        cy.get("[placeholder='Type for hints...']").wait(1000).type("aish");
        cy.get(".oxd-autocomplete-dropdown").contains("Aish Prakash").click();
    },
    Status(){
        cy.get(".oxd-select-text-input").eq(1).click();
        cy.get(".oxd-select-dropdown").contains("Enabled").click();
    },
    Search(){
        cy.get(".oxd-button--secondary").eq(0).click();
        cy.get(".oxd-text[data-v-5a621acd]").should("contain.text", "No Records Found");
    },

    addUser(){
        cy.get(".oxd-button--secondary[type='button']").click();
        cy.get(".oxd-select-text--arrow").eq(0).click();
        cy.get(".oxd-select-dropdown").contains("Admin").click();
        cy.get("[placeholder='Type for hints...']").wait(1000).type("ais");
        cy.get(".oxd-autocomplete-dropdown").contains("Aish Prakash").click();
        cy.get(".oxd-select-text--arrow").eq(1).click();
        cy.get(".oxd-select-dropdown").contains("Enabled").click();
        cy.get(".oxd-input.oxd-input--active").eq(1).type("WAWAN TES QA");
        cy.get(".user-password-cell .oxd-input").type("Wawan123@");
        cy.xpath("//div[@class='oxd-form-row user-password-row']//div[@class='oxd-grid-item oxd-grid-item--gutters']//input[@class='oxd-input oxd-input--active']").type("Wawan123@");
        cy.get(".oxd-button--secondary").click();
        cy.wait(3000);
        cy.get(".oxd-topbar-header-breadcrumb-module").should("contain.text", "Admin");
    }
}
export default AdminUserManagement;