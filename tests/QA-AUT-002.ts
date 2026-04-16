/**
TICKET: QA-AUT-002
TÍTULO: Validar funcionalidad del formulario "Text Box" en Elements

TIPO:
Prueba funcional / Formularios UI

PRIORIDAD:
Alta

DESCRIPCIÓN:
Validar el funcionamiento del formulario "Text Box" dentro del módulo Elements en https://demoqa.com/.
Se verifica llenado de datos, envío del formulario y visualización del output.

PRECONDICIONES:
- Usuario está en la página principal
- Usuario accede al módulo Elements

PASOS:
1. Navegar a "Elements"
2. Hacer clic en "Text Box"
3. Llenar campos:
   - Full Name
   - Email
   - Current Address
   - Permanent Address
4. Hacer clic en "Submit"

RESULTADO ESPERADO:
- El formulario se envía correctamente
- Se muestra sección de output con los datos ingresados
- Los valores mostrados coinciden con los ingresados
- Email inválido debe ser rechazado

AUTOMATIZACIÓN:
Playwright + TypeScript (Page Object Model) 
*/

import { test, expect } from '@playwright/test';

test('QA-AUT-002 Validar funcionalidad del formulario "Text Box" en Elements', async ({ page }) => {
  await page.goto('https://demoqa.com/');  
  await expect(page).toHaveURL('https://demoqa.com/');
  
  await expect(page.locator('h5', { hasText: 'Elements' })).toBeVisible();
  await page.click('.avatar.mx-auto.white');
  await expect(page).toHaveURL(/\/elements/);
  
  
  const textBoxItem = page.locator('li#item-0', { hasText: 'Text Box' });
  await expect(textBoxItem).toBeVisible();
  await page.click('li#item-0');

  const fullNameInput = page.locator('#userName');
  const emailInput = page.locator('#userEmail');
  const currentAddressInput = page.locator('#currentAddress');    
  const permanentAddressInput = page.locator('#permanentAddress');
  await fullNameInput.fill('John Doe');
  await emailInput.fill('john.doe@gmail.com');
  await currentAddressInput.fill('123 Main St');
  await permanentAddressInput.fill('456 Oak Ave');

  await expect(page.locator('#submit')).toBeVisible();
  await page.click('#submit');

  await expect(page.locator('#output')).toBeVisible();
  const output = page.locator('#output');
  await expect(output.locator('#name')).toContainText('John Doe');
  await expect(output.locator('#email')).toContainText('john.doe@gmail.com');
  await expect(output.locator('#currentAddress')).toHaveText('Current Address :123 Main St');
  await expect(output.locator('#permanentAddress')).toHaveText('Permananet Address :456 Oak Ave');


});

