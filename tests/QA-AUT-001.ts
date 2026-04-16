/*
TICKET: QA-AUT-001
TÍTULO: Validar navegación a módulo "Elements"

TIPO:
Prueba funcional / Navegación

PRIORIDAD:
Alta

DESCRIPCIÓN:
Validar que el usuario pueda acceder correctamente al módulo "Elements"
desde la página principal.

PRECONDICIONES:
- Usuario accede a la página principal

PASOS:
1. Navegar a la página principal
2. Localizar tarjeta "Elements"
3. Hacer clic en "Elements"

RESULTADO ESPERADO:
- Redirige a la página de Elements
- URL contiene "/elements"
- El título "Elements" es visible

AUTOMATIZACIÓN:
Playwright + TypeScript
*/

import { test, expect } from '@playwright/test';

test('QA-AUT-001 Validar navegación a módulo "Elements', async ({ page }) => {
  await page.goto('https://demoqa.com/');  
  await expect(page).toHaveURL('https://demoqa.com/');
  
  await expect(page.locator('h5', { hasText: 'Elements' })).toBeVisible();
  await page.click('.avatar.mx-auto.white');
  await expect(page).toHaveURL(/\/elements/);
  
});

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.ts',
});
