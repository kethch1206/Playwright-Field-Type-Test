import { test, expect } from "@playwright/test";
import { userList } from "../Fixtures/UserData";

let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("SignUp Fields Tests - shared page", () => {
  for (const user of userList) {
    test(`Should enter name: ${user.name}`, async () => {
      await page.goto("https://testautomationpractice.blogspot.com/");
      await expect(page.getByPlaceholder("Enter Name")).toBeVisible();

      const input = page.getByRole("textbox", { name: "Enter Name" });
      await input.click();
      await input.fill(user.name);

      await expect(input).toHaveCSS("border-color", "rgb(128, 189, 255)");
      await expect(input).toHaveValue(user.name);
    });
  }
});
