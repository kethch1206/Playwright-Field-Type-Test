import { test, expect } from "@playwright/test";
import { IndexPOM } from "./pages/IndexPOM.js";

test.describe("Elements Tests", () => {
  let indexPage;

  test.beforeEach(async ({ page }) => {
    indexPage = new IndexPOM(page);
    await indexPage.goto();
  });

  test("Should find titles", async ({ page }) => {
    await expect(page).toHaveTitle("Automation Testing Practice");
    await expect(page.getByText("GUI Elements", { exact: true })).toBeVisible();
  });

  test("Should find text fields", async ({ page }) => {
    await indexPage.verifyNameUI();
    await indexPage.verifyEmailUI();
    await indexPage.verifyPhoneUI();
  });

  test("Should find textarea field", async ({ page }) => {
    await indexPage.verifyAddressUI();
  });

  test("Should find radio button field", async ({ page }) => {
    await indexPage.verifyRadioButtonUI();
  });

  test("Should find checkbox field", async ({ page }) => {
    await indexPage.verifyCheckBoxUI();
  });
});
