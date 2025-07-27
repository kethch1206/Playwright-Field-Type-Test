class FormPOM {
  constructor(page) {
    this.page = page;
    // Page title
    this.guiElementsTitle = page.locator("text=GUI Elements");

    // // Form fields
    // this.nameField = page.locator("#name");
    // this.emailField = page.locator("#email");
    // this.phoneField = page.locator("#phone");
    // this.addressField = page.locator("#textarea");

    // // Gender radio buttons
    // this.maleRadio = page.locator("#male");
    // this.femaleRadio = page.locator("#female");

    // // Day checkboxes
    // this.sundayCheckbox = page.locator("#sunday");
    // this.mondayCheckbox = page.locator("#monday");
    // this.tuesdayCheckbox = page.locator("#tuesday");
    // this.wednesdayCheckbox = page.locator("#wednesday");
    // this.thursdayCheckbox = page.locator("#thursday");
    // this.fridayCheckbox = page.locator("#friday");
    // this.saturdayCheckbox = page.locator("#saturday");

    // // Field labels
    // this.nameLabel = page.locator("text=Name:");
    // this.emailLabel = page.locator("text=Email:");
    // this.phoneLabel = page.locator("text=Phone:");
    // this.addressLabel = page.locator("text=Address:");
    // this.genderLabel = page.locator("text=Gender:");
    // this.daysLabel = page.locator("text=Days:");
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { FormPOM };