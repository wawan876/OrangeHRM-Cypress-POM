import loginpage from "../../pageobject/login-test";
import Directory from "../../pageobject/Directory";
import datalogin from "../../fixtures/datalogin.json";

describe('Menu Directory', () => {
    it('should navigate to the menu directory', () => {
        loginpage.visit();
        loginpage.InputUsername(datalogin[0].username)
        loginpage.InputPassword(datalogin[0].password)
        loginpage.submit();
        loginpage.verifyLoginSuccess();
        // Intercept the GET request for login validation
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
        Directory.navigateToDirectory();
        Directory.searchEmployee();
        Directory.JobTitle();
        Directory.Location();
    });
});
