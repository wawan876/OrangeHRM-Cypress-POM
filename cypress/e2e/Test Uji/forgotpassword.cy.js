import forgotpassword from "../../pageobject/forgot-password";
import loginpage from "../../pageobject/login-test";

describe ('Forgot Password',() => {  
    it('should navigate to forgot password page', () => {
        loginpage.visit();
        forgotpassword.forgotpassword();
        forgotpassword.usernameresetpass();
        forgotpassword.btnresetpass();
        forgotpassword.assertSuccessResetpass();
    });
})