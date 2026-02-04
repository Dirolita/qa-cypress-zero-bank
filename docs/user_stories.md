# User Stories – Zero Bank (QA Project)

Este documento define historias de usuario realistas para el sitio **Zero Bank** ([http://zero.webappsecurity.com](http://zero.webappsecurity.com)), utilizadas como base para el diseño de pruebas manuales y automatizadas con Cypress.

El objetivo es asegurar **trazabilidad** entre requerimientos, criterios de aceptación y casos de prueba.

---

## US-001 – Autenticación de usuario (Login exitoso)

**Como** cliente registrado del banco
**Quiero** iniciar sesión en la aplicación web
**Para** acceder de forma segura a mis productos financieros

**Prioridad:** Alta
**Tipo:** Funcional / Seguridad

---

## US-002 – Validación de credenciales inválidas

**Como** usuario del sistema
**Quiero** recibir un mensaje de error claro cuando ingreso credenciales incorrectas
**Para** entender por qué no puedo acceder a mi cuenta

**Prioridad:** Alta
**Tipo:** Negativa / Seguridad

---

## US-003 – Visualización del dashboard de cuenta

**Como** cliente autenticado
**Quiero** visualizar el resumen de mi cuenta bancaria
**Para** consultar saldos y opciones disponibles

**Prioridad:** Media
**Tipo:** Funcional

---

## US-004 – Navegación a funcionalidades principales

**Como** cliente del banco
**Quiero** navegar entre las diferentes secciones del portal (Account Summary, Activity, Transfer Funds)
**Para** realizar operaciones bancarias sin errores

**Prioridad:** Media
**Tipo:** Usabilidad / Funcional

---
## US-005 - Transaccion de fondos entre cuentas
**Como:** Cliente
**Quiero:** Realizar tranferencias de fondos entre mis propias cuentas
**Para:** pasar dinero de una cuenta a otra
**Tipo:** Funcional

## US-006 – Seguridad de acceso sin autenticación

**Como** sistema bancario
**Quiero** restringir el acceso a páginas internas sin login
**Para** proteger la información sensible del cliente

**Prioridad:** Alta
**Tipo:** Seguridad

---

## US-007 – Cierre de sesión (Logout)

**Como** usuario autenticado
**Quiero** cerrar sesión de manera segura
**Para** proteger mi cuenta cuando termino de usar la aplicación

**Prioridad:** Media
**Tipo:** Seguridad / Funcional

---

## Notas QA

* Estas historias serán usadas para:

  * Definir **criterios de aceptación**
  * Diseñar **escenarios de prueba**
  * Implementar **tests automatizados en Cypress**
* Cada User Story tendrá al menos:

  * 1 Smoke Test
  * 1 Happy Path
  * 1 o más escenarios negativos



