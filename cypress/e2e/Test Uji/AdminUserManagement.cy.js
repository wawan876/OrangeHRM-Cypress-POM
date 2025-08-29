
import AdminUserManagement from "../../pageobject/DataAdminUserManagement";
import loginpage from "../../pageobject/login-test";
import datalogin from "../../fixtures/datalogin.json";

describe("Admin User Management", () => {
    beforeEach(() => {
        loginpage.visit();
        loginpage.InputUsername(datalogin[0].username);
        loginpage.InputPassword(datalogin[0].password);
        loginpage.intercept();
        loginpage.submit();
        loginpage.verifyLoginSuccess();
    });

    it("User Management", () => {
        AdminUserManagement.navigateToUserManagement();
        AdminUserManagement.Username();
        AdminUserManagement.UserRole();
        AdminUserManagement.EmployeeName();
        AdminUserManagement.Status();
        AdminUserManagement.Search();
    });

    it("Add User", () => {
        AdminUserManagement.navigateToUserManagement();
        AdminUserManagement.addUser();
    });
});