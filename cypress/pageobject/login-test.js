const loginpage = {
    // Fungsi untuk mengunjungi halaman login
    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    },
    
    InputUsername(username) {
        cy.xpath("//input[@name='username']").type(username);
    },
    
    InputPassword(password) {
        cy.xpath("//input[@name='password']").type(password);
    },
    
    submit() {
        cy.get(".oxd-button").click();
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
        cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']']").should('contain text', 'Required');
    },
    
    verifyusernamerequired() {
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain text', 'Required');
    },
    
    forgot_password() {
        cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click();
    },
    
    reset_password() {
        cy.xpath("//input[@name='username']").type("wawampras@gmail.com");
    },
    
    btn_reset() {
        cy.get(".oxd-button--secondary").click();
    }
};

export default loginpage;