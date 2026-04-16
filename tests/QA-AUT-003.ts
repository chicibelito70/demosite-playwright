/*
TICKET: QA-AUT-003
TÍTULO: Validar selección de Check Box en módulo "Elements"

TIPO:
Prueba funcional / Interacción UI

PRIORIDAD:
Alta

DESCRIPCIÓN:
Validar la funcionalidad del componente "Check Box" dentro del módulo Elements en https://demoqa.com/.
Se verifica selección de opciones, expansión del árbol y visualización de resultados.

PRECONDICIONES:
- Usuario está en la página principal
- Usuario accede al módulo Elements

PASOS:
1. Navegar a "Elements"
2. Hacer clic en "Check Box"
3. Expandir el árbol de opciones (si aplica)
4. Seleccionar una o varias opciones (Home, Desktop, Documents, etc.)

RESULTADO ESPERADO:
- Las opciones seleccionadas se marcan correctamente
- Se muestra mensaje de confirmación con los items seleccionados
- El estado del checkbox refleja la selección (checked/unchecked)

AUTOMATIZACIÓN:
Playwright + TypeScript (Page Object Model)
*/
 
 import { test, expect } from '@playwright/test';
 
 test('QA-AUT-003 Validar selección de Check Box en módulo "Elements"', async ({ page }) => {
    await page.goto('https://demoqa.com/');  
    await expect(page).toHaveURL('https://demoqa.com/');
    
    await expect(page.locator('h5', { hasText: 'Elements' })).toBeVisible();
    await page.click('.avatar.mx-auto.white');
    await expect(page).toHaveURL(/\/elements/);


    const textBoxItem = page.locator('li#item-1', { hasText: 'Check Box' });
    await expect(textBoxItem).toBeVisible();
    await page.click('li#item-1');

    const expan = page.locator('.rc-tree-switcher.rc-tree-switcher_close')
    await expect(expan).toBeVisible();
    await expan.click();

  
    await page.click('div:has(span.rc-tree-title:has-text("Home")) span.rc-tree-checkbox');
    
 });
