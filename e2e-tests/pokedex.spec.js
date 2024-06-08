const { test, describe, expect } = require('@playwright/test')
describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('kakuna page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('kakuna')).toBeVisible()
    await page.getByRole('link', { name: 'kakuna' }).click()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
    const link = await page.locator('a:has-text("Next")')
    const href = await link.getAttribute('href')
    expect(href).toBe('/pokemon/beedrill')
  })
})