# Checklist de validación — espejo local de contratos (2026-10-30)

> Se sobrescribe en cada entrega; el historial queda en Git.

**Repositorio:** anclora-group
**Rama:** development
**Datos:** no se usaron ni modificaron datos de aplicación.

## 1. Qué cambia
- El espejo local `contracts/` (12 contratos Markdown) se refresca desde Vault y se retiran 24 ids de repositorios retirados e históricos de `contracts/governance/contracts-registry.json` (sus rutas internas no cambian).
- Solo documentación contractual; sin código, dependencias ni despliegue.

## 2. Ya comprobado por el agente
| Comprobación | Resultado |
| --- | --- |
| Contenido de cada contrato Markdown idéntico al de Vault; JSON del registry válido | PASS |
| Sin referencias activas a los repositorios retirados en `contracts/` | PASS |

## 3. NOT_RUN
Tests, lint, build y E2E de la aplicación: el diff es solo documentación contractual.

## 4. Para Toni
Sin pasos manuales. Bloqueante: no.
