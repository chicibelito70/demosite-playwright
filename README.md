# Automatización de Pruebas - DemoQA

## Descripción del Proyecto

Este proyecto es una práctica completa de **automatización de pruebas funcionales** utilizando **Playwright** con **TypeScript**. El objetivo principal es aprender y aplicar las mejores prácticas de testing automatizado en aplicaciones web modernas, específicamente en la plataforma de pruebas [demoqa.com](https://demoqa.com/).

**Playwright** es un framework de automatización de pruebas desarrollado por Microsoft que permite controlar navegadores web (Chromium, Firefox, WebKit) para simular interacciones de usuario. **TypeScript** añade tipado estático a JavaScript, mejorando la robustez y mantenibilidad del código.

## Página de Pruebas

- **URL:** [https://demoqa.com/](https://demoqa.com/)
- **Tipo:** Plataforma gratuita de práctica para automatización de pruebas
- **Características:** Contiene módulos interactivos con formularios, checkboxes, botones, tablas, alertas y más componentes UI
- **Propósito:** Proporciona escenarios reales para practicar testing automatizado sin necesidad de credenciales o datos sensibles

## Tests

- **QA-AUT-001:** Validar formulario Text Box (Elements)
- **QA-AUT-002:** Validar formulario Text Box con validaciones (Elements)
- **QA-AUT-003:** Validar selección de Checkbox (Elements)

## Generación de Tickets

Los tickets de los test cases fueron generados utilizando un prompt en ChatGPT. El prompt me ayudó a estructurar cada caso de prueba con:
- Título del ticket
- Descripción detallada
- Pasos a seguir
- Resultado esperado
- Prioridad y tipo de prueba

Esto permitió crear una base organizada para desarrollar los tests automatizados.

## Estructura del Proyecto

```
demosite-playwright/
├── tests/                          # Archivos de test cases
│   ├── QA-AUT-001.ts              # Test básico del formulario
│   ├── QA-AUT-002.ts              # Test avanzado con validaciones
│   └── QA-AUT-003.ts              # Test de checkbox
├── playwright.config.ts            # Configuración de Playwright
├── package.json                    # Dependencias y scripts
├── playwright-report/              # Reportes HTML de ejecución
├── test-results/                   # Resultados detallados de pruebas
└── README.md                       # Esta documentación
```

## Aprendizajes Clave

### Selectores y Locators
- **Evitar ambigüedad:** Selectores como `#item-0` pueden coincidir con múltiples elementos
- **Selectores específicos:** Usar `:has-text()`, combinaciones de clases y atributos
- **Modo estricto:** Playwright falla si un locator coincide con más de un elemento
- **Componentes complejos:** Árboles (rc-tree) requieren selectores jerárquicos

### Aserciones y Validaciones
- `toBeVisible()`: Verificar que elementos estén visibles
- `toBeChecked()`: Validar estado de checkboxes
- `toHaveText()`: Comparar texto exacto
- `toContainText()`: Validar contenido parcial

### Debugging y Resolución de Problemas
- Analizar estructura HTML de la página
- Usar DevTools para inspeccionar elementos
- Ejecutar scripts de inspección para verificar cambios en el DOM
- Corregir selectores basados en errores de timeout

### Mejores Prácticas Aplicadas
- Esperar a que elementos sean visibles antes de interactuar
- Usar timeouts apropiados (5000ms por defecto)
- Estructura clara y legible del código
- Documentación de test cases con tickets y descripciones

## Cómo Ejecutar las Pruebas

### Requisitos Previos
- Node.js instalado
- npm o yarn

### Instalación
```bash
npm install
```

### Ejecutar Todos los Tests
```bash
npx playwright test
```

### Ejecutar un Test Específico
```bash
npx playwright test tests/QA-AUT-002.ts
```

### Ejecutar con Navegador Visible
```bash
npx playwright test --headed
```

### Ver Reporte HTML
```bash
npx playwright show-report
```

### Ejecutar en Navegadores Específicos
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Resultados y Validación

Los tests están configurados para ejecutarse en los 3 navegadores principales (Chromium, Firefox, WebKit) para asegurar compatibilidad cross-browser. Cada test incluye:

- Navegación y setup
- Interacciones con elementos
- Aserciones de validación
- Limpieza automática
---

**Proyecto creado:** Abril 2026  
**Framework:** Playwright + TypeScript  
**Plataforma:** demoqa.com  
**Propósito:** Aprendizaje práctico de automatización de pruebas
