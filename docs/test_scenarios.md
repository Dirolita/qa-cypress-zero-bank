# Zero Bank QA Project – Test Scenarios

## 1. Información General

**Proyecto:** Zero Bank QA
**Tipo de pruebas:** Manuales y Automatizadas
**Herramientas:** Cypress (automatización), Navegador Web
**Objetivo:** Validar funcionalidades críticas de autenticación, seguridad y navegación del portal bancario Zero Bank.

---

## 2. Convenciones

* **TS**: Test Scenario
* **SM**: Smoke Test
* **HP**: Happy Path
* **NG**: Negative
* **SEC**: Security
* **NAV**: Navigation

---

## 3. Escenarios por Funcionalidad

* AUTH (Autenticación / Login)
* SECURITY (Seguridad)
* NAVIGATION (Navegación y Transferencias)

---

# 4. Escenarios – AUTH (Login)

---

## TS-AUTH-001-SM – Login exitoso (Smoke Test)

**User Story:** US-001
**Acceptance Criteria:** AC-AUTH-01
**Tipo:** Smoke / Funcional
**Automatizado:** Sí – `auth/login_smoke.cy.js`

### Escenario

Validar que un usuario con credenciales válidas pueda iniciar sesión correctamente.

### Precondiciones

* El usuario se encuentra en la página de login

### Pasos

1. El usuario accede a la página principal
2. Hace clic en **Signin**
3. Ingresa username y password válidos
4. Envía el formulario de login

### Resultado esperado

* El usuario accede al sistema
* Es redirigido al dashboard
* Se visualiza el resumen de cuenta

---

## TS-AUTH-002-HP – Login exitoso (Happy Path)

**User Story:** US-001
**Acceptance Criteria:** AC-AUTH-01
**Tipo:** Happy Path
**Automatizado:** Sí – `auth/login_happy_path.cy.js`

### Escenario

El usuario ingresa credenciales válidas desde la página principal y accede al portal bancario.

### Precondiciones

* El usuario se encuentra en la página de login

### Pasos

1. El usuario ingresa username válido
2. El usuario ingresa password válido
3. El usuario envía el formulario

### Resultado esperado

* Login exitoso
* Dashboard visible
* Menú de navegación disponible

---

## TS-AUTH-003-NG – Login con credenciales inválidas

**User Story:** US-002
**Acceptance Criteria:** AC-AUTH-02
**Tipo:** Negativo / Seguridad
**Automatizado:** Sí – `auth/login_negative.cy.js`

### Escenario

El usuario intenta iniciar sesión con username o password incorrecto.

### Precondiciones

* El usuario se encuentra en la página de login

### Pasos

1. El usuario accede a la página principal
2. Hace clic en **Signin**
3. Ingresa un username inválido o password incorrecto
4. Envía el formulario de login

### Resultado esperado

* Acceso denegado
* Mensaje de error visible
* El usuario permanece en la pantalla de login

---

# 5. Escenarios – SECURITY

---

## TS-SEC-001 – Acceso directo a URL protegida sin login

**User Story:** US-005
**Acceptance Criteria:** AC-SEC-01
**Tipo:** Seguridad
**Automatizado:** Sí – `security/direct_url_access.cy.js`

### Escenario

El usuario intenta acceder directamente a una URL interna sin autenticarse.

### Precondiciones

* El usuario NO ha iniciado sesión

### Pasos

1. El usuario abre el navegador
2. Intenta acceder directamente a una URL protegida (ej: `/bank/account-summary.html`)
3. Observa el comportamiento del sistema

### Resultado esperado

* Acceso bloqueado
* Redirección a la página de login

---

## TS-SEC-002 – Acceso a URL protegida tras logout

**User Story:** US-006
**Acceptance Criteria:** AC-SEC-02
**Tipo:** Seguridad
**Automatizado:** Sí – `security/session_timeout.cy.js`

### Escenario

El usuario cierra sesión y luego intenta acceder a una URL protegida previamente visitada.

### Precondiciones

* El usuario está autenticado
* El usuario cierra sesión correctamente

### Pasos

1. El usuario inicia sesión con credenciales válidas
2. El usuario cierra sesión
3. Intenta acceder a una URL interna guardada (ej: `/bank/account-summary.html`)
4. Observa el comportamiento del sistema

### Resultado esperado

* El sistema solicita autenticación
* No se muestra información sensible

---

## TS-SEC-003 – Expiración de sesión por inactividad (Session Timeout)

**User Story:** US-005
**Acceptance Criteria:** AC-SEC-02
**Tipo:** Seguridad
**Automatizado:** Sí – `security/session_timeout.cy.js`

### Escenario

El usuario permanece inactivo durante un período prolongado y luego intenta acceder a una URL protegida.

### Precondiciones

* El usuario está autenticado en el sistema

### Pasos

1. El usuario inicia sesión con credenciales válidas
2. El usuario permanece inactivo durante un período determinado
3. La sesión expira por inactividad
4. El usuario intenta interactuar nuevamente con el sistema

### Resultado esperado

* El sistema solicita autenticación nuevamente
* El acceso a la URL protegida es bloqueado
* No se muestra información sensible

### Nota QA

Debido a que Zero Bank es una aplicación demo sin control real de expiración de sesión por backend, este escenario se valida mediante la simulación de expiración de sesión (limpieza de cookies y almacenamiento) durante la automatización con Cypress.

---

# 6. Escenarios – NAVIGATION

---

## TS-NAV-001 – Navegación entre secciones principales

**User Story:** US-004
**Acceptance Criteria:** AC-NAV-01
**Tipo:** Funcional / Usabilidad
**Automatizado:** Sí – `navigation/main_navigation.cy.js`

### Escenario

El usuario navega entre las principales secciones del portal bancario usando el menú.

### Precondiciones

* El usuario está autenticado en el sistema

### Pasos

1. El usuario inicia sesión con credenciales válidas
2. Accede a **Account Summary**
3. Navega a **Account Activity**
4. Navega a **Transfer Funds**
5. Observa el comportamiento del sistema

### Resultado esperado

* Cada sección se carga correctamente
* El contenido correspondiente es visible
* No hay redirecciones inesperadas
* La sesión permanece activa

---

## TS-TRF-001-HP – Transferencia de fondos exitosa

**User Story:** US-004
**Acceptance Criteria:** AC-NAV-02
**Tipo:** Happy Path
**Automatizado:** Sí – `navigation/transfer_funds.cy.js`

### Escenario

El usuario completa una transferencia con datos válidos.

### Precondiciones

* El usuario está autenticado
* Existen cuentas origen y destino disponibles

### Pasos

1. El usuario accede a **Transfer Funds**
2. Selecciona cuenta origen y destino
3. Ingresa un monto válido
4. Confirma la transferencia

### Resultado esperado

* Transferencia procesada correctamente
* Mensaje de confirmación visible

---

## TS-TRF-003-NG – Transferencia con datos inválidos

**User Story:** US-004
**Acceptance Criteria:** AC-NAV-03
**Tipo:** Negativo
**Automatizado:** Sí – `navigation/transfer_funds.cy.js`

### Escenario

El usuario intenta confirmar una transferencia con datos incompletos o inválidos.

### Precondiciones

* El usuario está autenticado

### Pasos

1. El usuario accede a **Transfer Funds**
2. Omite campos obligatorios o ingresa datos inválidos
3. Intenta confirmar la transferencia

### Resultado esperado

* Operación rechazada
* Mensajes de validación visibles
