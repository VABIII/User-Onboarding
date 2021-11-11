describe("user-onboarding", () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3000/`);
    })

    const first_nameInput = () => cy.get("input[name=first_name]");
    const last_nameInput = () => cy.get("input[name=last_name]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const tos = () => cy.get("input[name=termsOfService]");
    const submit = () => cy.get("button[name=submit]");

    it("Sanity check to make sure tests work", () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it("The proper elements are showing", () => {
        first_nameInput().should("exist");
        last_nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        tos().should("exist");

        cy.contains("Welcome To My Users Page!").should("exist");
    })

    describe("Filling out the inputs", () => {
        it("Can type in the inputs", () => {
            first_nameInput()
                .should("have.value", "")
                .type("Vern")
                .should("have.value", "Vern");
            last_nameInput()
                .should("have.value", "")
                .type("Bengtson")
                .should("have.value", "Bengtson");
            emailInput()
                .should("have.value", "")
                .type("tbengtson82@gmail.com")
                .should("have.value", "tbengtson82@gmail.com");
            passwordInput()
                .should("have.value", "")
                .type("marley81")
                .should("have.value", "marley81");
            tos()
                .check();
            submit()
                .click();
        })
    })

    describe("Form Validation")

})






















































