import { test, expect } from '@playwright/test';

test('页面完整渲染且无横向滚动', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('EXCEPTION', { exact: false }).first()).toBeVisible();

  for (const id of ['collection', 'milestones', 'heritage', 'membership', 'boutiques']) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test('移动端菜单可打开并通过 Escape 关闭', async ({ page }) => {
  await page.goto('/');
  const width = (await page.viewportSize())?.width ?? 0;
  test.skip(width >= 1200, '仅移动端 / 平板端验证菜单');

  await page.getByRole('button', { name: /打开菜单/ }).click();
  await expect(page.getByRole('button', { name: /关闭菜单/ })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: /打开菜单/ })).toBeVisible();
});
