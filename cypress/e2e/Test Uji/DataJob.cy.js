import AdminUserManagement from "../../pageobject/DataAdminUserManagement";
import loginpage from "../../pageobject/login-test";
import DataJob from "../../pageobject/DataJob";
import datalogin from "../../fixtures/datalogin.json";

describe('Data Job', () => {
    beforeEach(() => {
        loginpage.visit();
        loginpage.InputUsername(datalogin[0].username);
        loginpage.InputPassword(datalogin[0].password);
        loginpage.submit();
        loginpage.verifyLoginSuccess();
        
    });

    it('should create a new job', () => {
        DataJob.NavigateAdmin();
        DataJob.HeaderJob();
        DataJob.JobTitle();
    });

    it('should create a new pay grade', () => {
        DataJob.NavigateAdmin();
        DataJob.HeaderJob();
        DataJob.PayGrade();
    });

    it('should create a new employment status', () => {
        DataJob.NavigateAdmin();
        DataJob.HeaderJob();
        DataJob.EmploymentStatus();
    });

    it('should create a new job category', () => {
        DataJob.NavigateAdmin();
        DataJob.HeaderJob();
        DataJob.JobCategories();
    });

    it('should create a new work shift', () => {
        DataJob.NavigateAdmin();
        DataJob.HeaderJob();
        DataJob.WorkShifts();
    });
});