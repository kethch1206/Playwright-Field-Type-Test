const { test, expect } = require("@playwright/test");
const { FormPOM } = require("../pages/FormPOM.js");

test.describe("Elements Tests", () => {
  let formPage;

  test.beforeEach(async ({ page }) => {
    formPage = new FormPOM(page);
    await formPage.goto();
  });

  test("Should find Name field", async ({ page }) => {});
});
