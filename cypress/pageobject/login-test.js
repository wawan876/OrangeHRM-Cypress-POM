const loginpage = {
    // Fungsi untuk mengunjungi halaman login
    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    },
    
    InputUsername(username) {
        cy.get("[name='username']").wait(1000).type(username);
    },
    
    InputPassword(password) {
        cy.get("[name='password']").wait(1000).type(password);
    },
    
    submit() {
        cy.get(".oxd-button").wait(1000).click();
    },
    
    verifyLoginSuccess() {
        cy.url().should('include', '/index');
    },
    
    verifyusernameerror() {
        cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should('contain', 'Invalid credentials');
    },
    verifypassworderror() {
        cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should('contain', 'Invalid credentials');
    },
    
    verifypasswordrequired() {
        cy.get(".oxd-text--span").should('contain.text', 'Required');
    },
    
    verifyusernamerequired() {
        cy.get(".oxd-text--span").should('contain.text', 'Required');
    },
    verifyusernameandpassrequired(){
        cy.get(".oxd-form > div:nth-of-type(1) .oxd-text").should('contain.text', 'Required');
        cy.get(".oxd-form > div:nth-of-type(2) .oxd-text").should('contain.text', 'Required');
    },
    
    forgot_password() {
        cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click();
    },
    
    reset_password() {
        cy.xpath("//input[@name='username']").type("wawampras@gmail.com");
    },
    
    btn_reset() {
        cy.get(".oxd-button--secondary").click();
    },
    intercept(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest');
    }
};

export default loginpage;