# BUG-TRF-002 – El sistema permite continuar una transferencia con monto inválido

- Módulo: Transfer Funds
- Severidad: Alta
- Prioridad: Alta
- Tipo: Funcional / Validación de datos

## Descripción

El sistema permite avanzar en el flujo de transferencia de fondos cuando el campo Amount contiene valores inválidos como números negativos o caracteres alfabéticos, lo cual debería ser bloqueado por validaciones de negocio.

### Precondiciones

- Usuario autenticado
- Usuario ubicado en el módulo Transfer Funds
- Pasos para reproducir
- Iniciar sesión con un usuario válido
- Navegar al módulo Transfer Funds
- Seleccionar una cuenta origen y una cuenta destino

### Steps

1. Ingresar un valor inválido en el campo Amount
2. Ejemplo 1: -100
3. Completar el resto del formulario
4. Hacer clic en Continue


### Resultado esperado

- El sistema bloquea la operación
- Se muestra un mensaje de validación
- No se permite avanzar a la pantalla de confirmación

### Resultado actual

El sistema permite continuar al paso de verificación
No se muestra ningún mensaje de error
El flujo de negocio no valida correctamente el monto

### Impacto
Riesgo funcional en operaciones financieras
Riesgo de integridad de datos
Posible vulnerabilidad de seguridad
