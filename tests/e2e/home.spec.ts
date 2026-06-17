import { expect, test } from '@playwright/test';

test('home page loads with the main landmark', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/nonbreakingspace/i);
  await expect(page.locator('main#index')).toBeVisible();
});

test('skip link points at the main content', async ({ page }) => {
  await page.goto('/');
  const skipLink = page.getByRole('link', { name: /skip to content/i });
  await expect(skipLink).toHaveAttribute('href', '#index');
});
