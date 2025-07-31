import { expect } from "@playwright/test";
export class IndexPOM {
  constructor(page) {
    this.page = page;

    // Form fields
    this.nameLabel = page.getByText("Name:");
    this.nameTextbox = page.locator("#name");
    this.namePlaceholder = page.getByPlaceholder("Enter Name");

    this.emailLabel = page.getByText("Email:");
    this.emailTextbox = page.locator("#email");
    this.emailPlaceholder = page.getByPlaceholder("Enter EMail");

    this.phoneLabel = page.getByText("Phone:");
    this.phoneTextbox = page.locator("#phone");
    this.phonePlaceholder = page.getByPlaceholder("Enter Phone");

    this.addressLabel = page.getByText("Address:");
    this.addressTextArea = page.locator("#textarea");

    this.radioButtonLabel = page.getByText("Gender:");
    this.maleLabel = page.locator('label[for="male"]');
    this.femaleLabel = page.locator('label[for="female"]');
    this.maleRadio = page.locator("#male");
    this.femaleRadio = page.locator("#female");

    this.checkboxLabel = page.getByText("Days:");
    this.sundayLabel = page.locator('label[for="sunday"]');
    this.mondayLabel = page.locator('label[for="monday"]');
    this.tuesdayLabel = page.locator('label[for="tuesday"]');
    this.wednesdayLabel = page.locator('label[for="wednesday"]');
    this.thursdayLabel = page.locator('label[for="thursday"]');
    this.fridayLabel = page.locator('label[for="friday"]');
    this.saturdayLabel = page.locator('label[for="saturday"]');
    this.sundayCheckbox = page.locator("#sunday");
    this.mondayCheckbox = page.locator("#monday");
    this.tuesdayCheckbox = page.locator("#tuesday");
    this.wednesdayCheckbox = page.locator("#wednesday");
    this.thursdayCheckbox = page.locator("#thursday");
    this.fridayCheckbox = page.locator("#friday");
    this.saturdayCheckbox = page.locator("#saturday");
  }

  async goto() {
    await this.page.goto("/");
  }

  async verifyNameUI() {
    await expect(this.nameLabel).toBeVisible();
    await expect(this.nameTextbox).toBeVisible();
    await expect(this.namePlaceholder).toBeVisible();
    // check if it is text field
    await expect(this.nameTextbox).toHaveAttribute("type", "text");
  }

  async verifyEmailUI() {
    await expect(this.emailLabel).toBeVisible();
    await expect(this.emailTextbox).toBeVisible();
    await expect(this.emailPlaceholder).toBeVisible();
    // check if it is text field
    await expect(this.emailTextbox).toHaveAttribute("type", "text");
  }

  async verifyPhoneUI() {
    await expect(this.phoneLabel).toBeVisible();
    await expect(this.phoneTextbox).toBeVisible();
    await expect(this.phonePlaceholder).toBeVisible();
    // check if it is text field
    await expect(this.phoneTextbox).toHaveAttribute("type", "text");
  }

  async verifyAddressUI() {
    await expect(this.addressLabel).toBeVisible();
    await expect(this.addressTextArea).toBeVisible();
    // check if it is textarea field
    const tagName = await this.addressTextArea.evaluate((el) =>
      el.tagName.toLowerCase()
    );
    expect(tagName).toBe("textarea");
  }

  async verifyRadioButtonUI() {
    await expect(this.radioButtonLabel).toBeVisible();
    await expect(this.maleLabel).toBeVisible();
    await expect(this.femaleLabel).toBeVisible();

    await expect(this.maleRadio).toHaveAttribute("type", "radio");
    await expect(this.femaleRadio).toHaveAttribute("type", "radio");
  }

  async verifyCheckBoxUI() {
    await expect(this.checkboxLabel).toBeVisible();

    await expect(this.sundayLabel).toBeVisible();
    await expect(this.mondayLabel).toBeVisible();
    await expect(this.tuesdayLabel).toBeVisible();
    await expect(this.wednesdayLabel).toBeVisible();
    await expect(this.thursdayLabel).toBeVisible();
    await expect(this.fridayLabel).toBeVisible();
    await expect(this.saturdayLabel).toBeVisible();

    await expect(this.sundayCheckbox).toHaveAttribute("type", "checkbox");
    await expect(this.mondayCheckbox).toHaveAttribute("type", "checkbox");
    await expect(this.tuesdayCheckbox).toHaveAttribute("type", "checkbox");
    await expect(this.wednesdayCheckbox).toHaveAttribute("type", "checkbox");
    await expect(this.thursdayCheckbox).toHaveAttribute("type", "checkbox");
    await expect(this.fridayCheckbox).toHaveAttribute("type", "checkbox");
    await expect(this.saturdayCheckbox).toHaveAttribute("type", "checkbox");
  }
}
