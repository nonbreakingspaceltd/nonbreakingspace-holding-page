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

test('above-the-fold reveals resolve to fully visible (no stuck-hidden content)', async ({
  page,
}) => {
  await page.goto('/');
  // The reveal now relies solely on IntersectionObserver (no getBoundingClientRect
  // fold test). Confirm the hero still transitions in: the headline must gain
  // .is-revealed and settle at full opacity rather than staying hidden.
  const headline = page.locator('.hero__headline');
  await expect(headline).toHaveClass(/is-revealed/);
  await expect(headline).toHaveCSS('opacity', '1');
  await expect(page.locator('.hero__wordmark')).toHaveClass(/is-revealed/);
});

test('trusted-by logos carry role=img on a valid host, not the <li>', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.trusted-by__logo').first()).not.toHaveAttribute('role', 'img');
  await expect(page.getByRole('img', { name: 'Equal Experts' })).toBeAttached();
});
