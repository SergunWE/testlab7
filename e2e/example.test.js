const { test, expect } = require("@playwright/test");

test("Переход в раздел блога HTML", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://htmlacademy.ru/blog/junior");
  await page.getByRole("link", { name: "HTML", exact: true }).nth(1).click();
  await expect(page).toHaveURL("https://htmlacademy.ru/blog/html");
  await expect(page.locator("h1")).toHaveText("HTML");
  await context.close();
});

test("Переход в раздел блога CSS", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://htmlacademy.ru/blog/junior");
  await page.getByRole("link", { name: "CSS", exact: true }).nth(1).click();
  await expect(page).toHaveURL("https://htmlacademy.ru/blog/css");
  await expect(page.locator("h1")).toHaveText("CSS");
  await context.close();
});

test("Переход в раздел блога JS", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://htmlacademy.ru/blog/junior");
  await page.getByRole("link", { name: "JS", exact: true }).click();
  await expect(page).toHaveURL("https://htmlacademy.ru/blog/js");
  await expect(page.locator("h1")).toHaveText("JS");
  await context.close();
});

test("Переход в раздел блога Git", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://htmlacademy.ru/blog/junior");
  await page
    .locator("li")
    .filter({ hasText: /^Git$/ })
    .getByRole("link")
    .click();
  await expect(page).toHaveURL("https://htmlacademy.ru/blog/git");
  await expect(page.locator("h1")).toHaveText("Git");
  await context.close();
});

test("Переход в раздел блога Софт", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://htmlacademy.ru/blog/junior");
  await page.locator("text=Софт").click();
  await expect(page).toHaveURL("https://htmlacademy.ru/blog/soft");
  await expect(page.locator("h1")).toHaveText("Софт");
  await context.close();
});

test("Переход в раздел блога Айти", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://htmlacademy.ru/blog/junior");
  await page.locator("text=Айти").click();
  await expect(page).toHaveURL("https://htmlacademy.ru/blog/it");
  await expect(page.locator("h1")).toHaveText("Айти");
  await context.close();
});

test("Переход в раздел блога доктайп через меню блога", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://htmlacademy.ru/blog/junior");
  await page.getByRole("link", { name: "Доктайп" }).click();
  await expect(page).toHaveURL("https://htmlacademy.ru/blog");
  await expect(page.locator("text=300кк в наносекунду")).toBeVisible();
  await context.close();
});

test('Переход на страницу партнера "Лига А."', async ({ page }) => {
  const context = await page.context();
  await context.newPage();
  await page.goto(
    "https://htmlacademy.ru/profession/frontender#course-program"
  );
  const internshipCard = page.getByRole("heading", {
    name: "Стажировка в «Лиге А.»",
  });
  const section = internshipCard.locator(".. >> ..");
  const moreButton = section.locator("text=Подробнее");
  await moreButton.click();
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    moreButton.click(),
  ]);
  await expect(newPage).toHaveURL("https://ligaa.agency/");
});