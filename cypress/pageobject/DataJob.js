

const DataJob = {
    NavigateAdmin(){
        cy.xpath("//a[.='Admin']").click();
    },
    HeaderJob(){
        cy.xpath("//span[contains(.,'Job')]").click();
    },
    JobTitle(){
        //add job title
        cy.get(".oxd-dropdown-menu").contains("Job Titles").click();
        cy.get(".oxd-button").click();
        cy.get(".oxd-form .oxd-input").type("QA Quality Assurance & Testing");
        cy.get("[placeholder='Type description here']").type("Pekerjan QA Adalah Testing Aplikasi");
        cy.get(".oxd-file-button").attachFile("API KEY.pdf");
        cy.get("[placeholder='Add note']").type("Contoh Testing");
        cy.get(".oxd-button--secondary").click();
    },
    PayGrade(){
        cy.get(".oxd-dropdown-menu").contains("Pay Grades").click();
        cy.get(".oxd-button").click();
        cy.get(".oxd-input-group .oxd-input").type("Wawan Quality Engineer");
        cy.get(".oxd-button--secondary").click();
    },
    EmploymentStatus(){
         cy.get(".oxd-dropdown-menu").contains("Employment Status").click();
         cy.get(".oxd-button").click();
         cy.get(".oxd-input-group .oxd-input").type("Contract Temporer");
         cy.get(".oxd-button--secondary").click();
    },
    JobCategories(){
        cy.get(".oxd-dropdown-menu").contains("Job Categories").click();
        cy.get(".oxd-button").click();
        cy.get(".oxd-input-group .oxd-input").type("Quality Assurance Testing");
        cy.get(".oxd-button--secondary").click();
    },
    WorkShifts(){
         cy.get(".oxd-dropdown-menu").contains("Work Shifts").click();
         cy.get(".oxd-button").click();
         cy.get(".oxd-form .oxd-grid-2 .oxd-input").type("Quality Assurance Testing");
         //from
         cy.get(".oxd-grid-4 > div:nth-of-type(1) .oxd-time-input > .oxd-icon").click();
         cy.get(".oxd-time-hour-input-text").clear().type("08");
         cy.get(".oxd-time-minute-input-text").clear().type("30");
         cy.get("[name='am']").click(); 

         //to
          cy.get(".oxd-grid-4 > div:nth-of-type(2) .oxd-icon").click();
         cy.get(".oxd-time-hour-input-text").clear().type("05");
         cy.get(".oxd-time-minute-input-text").clear().type("30");
         cy.get("[name='pm']").click(); 
         cy.get(".orangehrm-card-container").click();
         cy.get("[placeholder='Type for hints...']").wait(2000).type("re");
         cy.get(".oxd-autocomplete-dropdown").contains("Rebecca Harmony").click();
         cy.get(".oxd-button--secondary").click();
    }

}
export default DataJob;