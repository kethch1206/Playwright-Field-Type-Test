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
      await input.fill(user.name);

      await expect(input).toHaveCSS("border-color", "rgb(128, 189, 255)");
      await expect(input).toHaveAttribute("maxlength", "15");
      await expect(input).toHaveAttribute("type", "text");
      await expect(input).toHaveValue(user.name);
    });
    test(`Should enter email: ${user.name}:${user.email}`, async () => {
      await page.goto("https://testautomationpractice.blogspot.com/");
      await expect(page.getByPlaceholder("Enter EMail")).toBeVisible();

      const input = page.getByRole("textbox", { name: "Enter EMail" });
      await input.fill(user.email);
      await expect(input).toHaveAttribute("maxlength", "25");
      await expect(input).toHaveAttribute("type", "text");
      await expect(input).toHaveValue(user.email);
    });
    test(`Should enter phone: ${user.name}:${user.phone}`, async () => {
      await page.goto("https://testautomationpractice.blogspot.com/");
      await expect(page.getByPlaceholder("Enter Phone")).toBeVisible();

      const input = page.getByRole("textbox", { name: "Enter Phone" });
      await input.fill(user.phone);
      await expect(input).toHaveAttribute("maxlength", "10");
      await expect(input).toHaveAttribute("type", "text");
      await expect(input).toHaveValue(user.phone);
    });
    test(`Should enter address: ${user.name}:${user.address}`, async () => {
      await page.goto("https://testautomationpractice.blogspot.com/");
      await expect(page.getByPlaceholder("Enter Phone")).toBeVisible();

      const input = page.locator("#textarea");
      await input.fill(user.address);

      const tagName = await input.evaluate((el) => el.tagName);
      expect(tagName).toBe("TEXTAREA");

      await expect(input).toHaveValue(user.address);
    });
  }
});
