# Acceptance Criteria – Zero Bank QA Project

Este documento define los **criterios de aceptación** para las funcionalidades cubiertas en el proyecto de automatización con Cypress. 

1. Autenticación (Auth)
2. Seguridad (Security)
3. Navegación y flujos de negocio (Navigation)

Estos criterios sirven como base para el diseño de **escenarios de prueba** y **casos automatizados**.

---

## 1️⃣ Auth – Autenticación de Usuario

### AC-AUTH-01 – Login exitoso

* **GIVEN** el usuario se encuentra en la página principal de Zero Bank
* **WHEN** hace clic en "signin"
* **AND** ingresa un username y password válidos
* **AND** envía el formulario de login
* **THEN** el sistema permite el acceso
* **AND** redirige al dashboard de la cuenta
* **AND** muestra información del resumen de cuenta

---

### AC-AUTH-02 – Login con credenciales inválidas

* **GIVEN** el usuario está en el formulario de login
* **WHEN** ingresa un username o password incorrecto
* **AND** envía el formulario
* **THEN** el sistema deniega el acceso
* **AND** muestra un mensaje de error claro e informativo
* **AND** el usuario permanece en la página de login

---

### AC-AUTH-03 – Logout exitoso

* **GIVEN** el usuario está autenticado
* **WHEN** selecciona la opción de cerrar sesión
* **THEN** el sistema finaliza la sesión
* **AND** redirige a la página pública
* **AND** no permite volver al dashboard usando el botón "back" del navegador

---

## 2️⃣ Security – Seguridad y Control de Acceso

### AC-SEC-01 – Acceso restringido sin autenticación

* **GIVEN** el usuario no ha iniciado sesión
* **WHEN** intenta acceder directamente a una URL protegida
* **THEN** el sistema bloquea el acceso
* **AND** redirige a la página de login

---

### AC-SEC-02 – Protección de sesión

* **GIVEN** el usuario ha cerrado sesión
* **WHEN** intenta acceder nuevamente a una página interna usando una URL previa
* **THEN** el sistema no permite el acceso
* **AND** solicita autenticación nuevamente

---

## 3️⃣ Navigation – Flujos Funcionales y Negocio

### AC-NAV-01 – Acceso al módulo Transfer Funds

* **GIVEN** el usuario está autenticado
* **WHEN** navega al módulo "Transfer Funds"
* **THEN** el sistema muestra el formulario de transferencia

---

### AC-NAV-02 – Transferencia de fondos exitosa (Happy Path)

* **GIVEN** el usuario está autenticado
* **AND** se encuentra en el módulo Transfer Funds
* **WHEN** selecciona una cuenta origen válida
* **AND** selecciona una cuenta destino válida
* **AND** ingresa un monto válido
* **AND** confirma la transferencia
* **THEN** el sistema procesa la transacción
* **AND** muestra un mensaje de confirmación exitoso

---

### AC-NAV-03 – Validación de datos en transferencia

* **GIVEN** el usuario está en el módulo Transfer Funds
* **WHEN** intenta confirmar la operación con datos inválidos o incompletos
* **THEN** el sistema no procesa la transacción
* **AND** muestra mensajes de validación correspondientes

---

## Notas QA

* Cada criterio de aceptación será cubierto por al menos un test automatizado en Cypress.
* Los criterios están alineados con las User Stories definidas en `user_stories.md`.
* Este documento es clave para mantener trazabilidad y calidad del testing.

---

**Proyecto:** QA Cypress – Zero Bank
**Rol:** QA Engineer Jr (Portfolio Project)
