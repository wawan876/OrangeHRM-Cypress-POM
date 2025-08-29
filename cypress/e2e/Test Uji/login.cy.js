import loginpage from "../../pageobject/login-test";
import datalogin from "../../fixtures/datalogin.json";

describe('', () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    });
    it('username valid & password valid', () => {
        loginpage.InputUsername(datalogin[0].username)
        loginpage.InputPassword(datalogin[0].password)
        loginpage.intercept();
        loginpage.submit()
        loginpage.verifyLoginSuccess()
        
    });

   it('username invalid & password valid', () => {

        loginpage.InputUsername(datalogin[1].username1)
        loginpage.InputPassword(datalogin[1].password1)
        loginpage.submit()
        loginpage.verifyusernameerror()
    });

    it('username valid & password invalid', () => {

        loginpage.InputUsername(datalogin[2].username2)
        loginpage.InputPassword(datalogin[2].password2)
        loginpage.submit()
        loginpage.verifypassworderror()
    });

    it('username invalid & password valid', () => {
        loginpage.InputUsername(datalogin[3].username3)
        loginpage.InputPassword(datalogin[3].password3)
        loginpage.submit()
        loginpage.verifyusernameerror()
    });

    it('username valid & withoutpassword', () => {
        loginpage.InputUsername(datalogin[4].username4)
        loginpage.submit()
        loginpage.verifypasswordrequired()

    });

    it('withoutusername & password valid', () => {
        loginpage.InputPassword(datalogin[5].password5)
        loginpage.submit()
        loginpage.verifyusernamerequired

    });

    it('without username & withoutpassword', () => {
        loginpage.submit()
        loginpage.verifyusernameandpassrequired()

    });

});