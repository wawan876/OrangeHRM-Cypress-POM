const forgotpassword ={
    
    forgotpassword(){
    cy.get(".orangehrm-login-forgot-header").click();
    },
    usernameresetpass(){
        cy.get("[name='username']").type("Admin")
    },
    btnresetpass(){
        cy.get(".oxd-button--secondary").click();
    },
    assertSuccessResetpass(){
        cy.get(".oxd-text--h6").should("include.text", "Reset Password link sent successfully");
    }
}
export default forgotpassword;