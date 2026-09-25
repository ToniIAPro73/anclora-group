# Anclora Ecosystem Architecture Contract

## 1. Propósito

Este contrato define la arquitectura operativa conocida del ecosistema Anclora Group, sus aplicaciones, despliegues, dependencias, restricciones y reglas de actuación para agentes IA.

Todo agente IA que trabaje sobre repos Anclora debe consultar este contrato antes de tomar decisiones de arquitectura, despliegue, ramas, variables de entorno, bases de datos o integración entre productos.

## 2. Arquitectura de capas (actualización FASE 2, 2026-08)

El ecosistema se organiza en capas (decisión D-3, actualizada por el cutover de gobernanza
2026-08). La documentación antigua que usaba "AOS" o "Knowledge layer" para referirse al repo
`anclora-knowledge` (renombrado a `anclora-governance`) está obsoleta:

| Capa | Repo / concepto | Rol |
| :--- | :--- | :--- |
| **AOS** | `anclora-infrastructure` (aos-runtime) | Anclora Operating System — source of truth operacional/runtime |
| **anclora-vault** | `anclora-vault` | Source of truth documental (este contrato vive aquí, `00-governance/contracts/core/`) |
| **anclora-governance** | `anclora-governance` | Constitución, estándares, decisiones maestras — autoridad constitucional (NO es "AOS", NO es el Knowledge layer) |
| **Anclora Knowledge** | `anclora-infrastructure/knowledge` | Capa de conocimiento normalizado derivada |
| **AKG** | grafo derivado | Deriva de Vault + AOS + GitHub + Governance (construcción en FASE 3+, no en este contrato) |

Reglas de la capa documental:
- La vault documenta; AOS consume; Knowledge/AKG derivan.
- Los registries JSON de `00-governance/registry/` son la verdad máquina de repos/contratos.
- **Command Center** (HOLD) se concibe como consumidor/interfaz futura sobre la operativa del
  ecosistema, no como fuente de verdad.
- Los estados de producto (`ACTIVE/HOLD/LEGACY/DEPRECATED`) viven en frontmatter de cada dossier
  y en el portfolio audit (`10-group/corporate/portfolio/`).

## 3. Reglas globales

- No asumir que todos los productos comparten infraestructura.
- No asumir que Vercel cubre frontend y backend de todas las apps.
- No asumir que Neon sustituye a Supabase cuando hay uso de Supabase Auth, Storage, SDK, RLS o service role.
- No proponer migraciones de base de datos sin revisar dependencias reales.
- No crear ramas, entornos o deploys de producción sin comprobar el workflow de cada repo.
- No copiar variables de producción a staging o preview.
- No usar datos reales en staging si no existe aislamiento de datos.
- No prometer cumplimiento legal o regulatorio garantizado.
- No tocar secretos ni credenciales reales.
- No promocionar `development → staging → production` sin revisar frontend, backend, base de datos, auth y variables.

## 4. Workflow Git global

Ramas permanentes recomendadas:

`development → staging → production`

Ramas temporales:

- `feat/<agente>-<descripcion>`
- `fix/<agente>-<descripcion>`
- `chore/<agente>-<descripcion>`
- `hotfix/<agente>-<descripcion>`

Reglas:

- Toni trabaja normalmente sobre `development`.
- Los agentes IA trabajan en ramas temporales.
- Las ramas temporales se integran primero en `development`.
- `staging` solo debe recibir cambios desde `development`.
- `production` solo debe recibir cambios desde `staging`.
- No usar `git push --force`.
- No borrar ramas remotas sin verificar que están mergeadas o archivadas.

## 5. Matriz de aplicaciones

| Producto | Rol | Repo | Frontend | Backend | Datos/Auth |
|---|---|---|---|---|---|
| Anclora Nexus | Router/CRM/operativa ecosistema | `anclora-nexus` | Vercel `/frontend` | Render `/backend` | Supabase |
| Anclora GuestHub | Gestión de huéspedes y alquiler vacacional (capacidad SES.HOSPEDAJES / XML viajeros) | `anclora-guesthub` | Vercel | Según repo/config | DB operativa del producto |
| Anclora Content Generator AI | Worker/Hermes/copy/SEO-GEO | `anclora-content-generator-ai` | Vercel/worker | Vercel worker | Variables propias |
| Anclora EnergyScan | Análisis PDFs energía | `anclora-energyscan` | Por confirmar | Por confirmar | Por confirmar |
| Anclora FileStudio | App de escritorio de gestión documental/archivos | `anclora-filestudio` | App local (runtime Chromium) | Local por confirmar | Local por confirmar |
| Anclora Data Lab | Data/productividad | `anclora-data-lab` | Por confirmar | Por confirmar | Por confirmar |
| Anclora Synergi | Producto separado | `anclora-synergi` | Por confirmar | Por confirmar | Por confirmar |
| Anclora Private Estates | Real estate premium | `anclora-private-estates` | Vercel probable | Por confirmar | Por confirmar |
| Anclora Private Estates Landing | Landing real estate | `anclora-private-estates-landing` | Vercel probable | N/A | N/A |
| Anclora Group | Matriz/holding/repositorio corporativo | `anclora-group` | Por confirmar | Por confirmar | Por confirmar |
| Anclora Advisor AI | Asesoria fiscal/laboral/inmobiliaria asistida | `anclora-advisor-ai` | Vercel probable | Next.js/API route | Supabase |
| Anclora Talent | Producto separado | `anclora-talent` | Por confirmar | Por confirmar | Por confirmar |
| Anclora Impulso | Producto separado | `anclora-impulso` | Por confirmar | Por confirmar | Por confirmar |
| Anclora Linguo Cam | Videollamadas con traduccion en tiempo real | `anclora-linguo-cam` | Vercel probable | Servicios auxiliares por confirmar | Variables propias |
| Anclora Command Center | Consumidor/interfaz futura de la operativa | `anclora-command-center` | Por confirmar | Por confirmar | Por confirmar |

No inventar certezas: usar "por confirmar" donde no haya evidencia local o contractual confirmada.
Estados de producto según portfolio audit 2026-08 (`10-group/corporate/portfolio/`).

## 6. Anclora Nexus

### Arquitectura conocida

- Repositorio: `anclora-nexus`.
- Frontend: Next.js en Vercel.
- Root directory de Vercel: `/frontend`.
- Backend: desplegado en Render desde `/backend`.
- Base de datos y auth: Supabase.
- Nexus usa Supabase SDK/Auth directamente en frontend y backend.
- Nexus no debe migrarse a Neon sin rediseñar auth y acceso a datos.
- Neon puede servir para apps que usen `DATABASE_URL` directamente, pero no sustituye Supabase Auth.

### Restricción actual de Supabase

- No hay Supabase Pro.
- No hay Supabase Branching.
- No se puede crear segundo proyecto Supabase si exige upgrade.
- Staging puede verse obligado a compartir Supabase con producción.
- Si staging comparte Supabase, deben activarse guards y flags de seguridad.

### Vercel

- Proyecto Vercel: `anclora-nexus-frontend`.
- Production Branch: `production`.
- Staging domain: `nexus-staging.anclora.com`.
- Staging domain asociado a branch `staging`.
- Preview usa ramas no asignadas.
- No promocionar a staging sin revisar variables Preview.
- No promocionar a production sin revisar branch `production`.

### Render

- Backend desplegado en Render.
- Antes de validar staging real debe definirse si existe backend staging.
- Si no existe backend staging, staging frontend puede apuntar al backend production solo para pruebas limitadas y no destructivas.
- Preferible crear servicio Render staging desde branch `staging` si el plan/coste lo permite.

### Flags de seguridad recomendados

```env
APP_ENV=staging
NEXT_PUBLIC_APP_ENV=staging
GUESTHUB_ENV=staging
ALLOW_REAL_SUPABASE_WRITE=false
GUESTHUB_PILOT_AUTO_APPROVE=false
USE_SYNTHETIC_DATA_ONLY=true
```

### Regla operativa

Antes de promocionar Nexus a `staging` o `production`, revisar:

1. Vercel frontend.
2. Render backend.
3. Supabase/Auth.
4. Variables por entorno.
5. Flags de seguridad.
6. Datos sintéticos o reales.
7. Riesgo de escrituras sobre datos compartidos.

## 7. Anclora GuestHub

> Renombrado de Anclora SyncXML (2026-08). Las variables `SYNCXML_*` (`SYNCXML_ENV`, `SYNCXML_PILOT_AUTO_APPROVE`) permanecen soportadas como **fallback legacy** durante la transición de alias; los nombres canónicos nuevos son `GUESTHUB_*`.

- Producto de gestión de huéspedes, check-in y operación de alquiler vacacional (Real Estate); incluye la capacidad SES.HOSPEDAJES/XML viajeros en piloto controlado.
- Landing pública orientada a solicitud de piloto controlado.
- No debe exponerse login público salvo decisión explícita.
- Flujo piloto relacionado con Nexus y Hermes.
- Debe evitarse uso de datos reales salvo autorización.
- Deben enviarse datos sintéticos o juegos de prueba a pilotos.
- El entorno staging/preview debe estar separado de producción siempre que sea posible.
- No prometer cumplimiento legal garantizado.

## 8. Anclora Content Generator AI / Hermes

- Repo relacionado con worker Hermes y validaciones de copy/SEO-GEO.
- Puede participar en validación de solicitudes GuestHub.
- Worker Hermes puede estar desplegado en Vercel.
- Variables sensibles: worker API key, OpenRouter/OpenAI, Hermes keys.
- No copiar claves de producción a preview.
- No asumir que Hermes antiguo y nuevo son equivalentes sin revisar integración.

## 9. Anclora EnergyScan

- Producto orientado a análisis de presupuestos energéticos y certificados energéticos.
- MinerU tiene sentido potencial para parsing avanzado de PDFs.
- No usar Docker si el entorno corporativo de Toni lo impide.
- Antes de integrar MinerU revisar parsers existentes y beneficio real.

## 10. Anclora FileStudio

- App de escritorio de gestión documental (ACTIVE, evidence en `20-products/filestudio/`).
- Empaquetado con runtime Chromium local (Chrome for Testing); en Ubuntu requiere `--no-sandbox`
  (AppArmor bloquea userns no privilegiado).
- Detalles de backend/persistencia: por confirmar en dossier de producto.
- La auditoría técnica 2026-08-09 vive en `20-products/filestudio/evidence/`.

## 11. Productos con arquitectura pendiente de confirmar o detallar

### Anclora Data Lab

- Arquitectura pendiente de confirmar (frontend/backend/hosting).
- Auth (2026-09-12, ver `anclora-governance` D-2026-0037/D-2026-0038/D-2026-0040): piloto de `anclora-identity` (OIDC vía `node-oidc-provider`, propietario de la identidad transversal del ecosistema) integrado como relying party detrás del flag `ANCLORA_IDENTITY_ENABLED` (fail-closed; desactivado por defecto, la auth legacy en `src/lib/datalab-auth.ts` sigue intacta). No desplegado a ningún entorno; solo local. Base de datos de Data Lab en sí sigue siendo Neon directo (`@neondatabase/serverless`), sin cambios.

### Anclora Synergi

- Arquitectura pendiente de confirmar.

### Anclora Private Estates

- Arquitectura pendiente de confirmar.

### Anclora Private Estates Landing

- Arquitectura pendiente de confirmar.

### Anclora Group matriz

- Rol matriz confirmado; arquitectura tecnica pendiente de confirmar.

### Anclora Advisor AI

- Producto confirmado; arquitectura detallada y despliegue final pendientes de confirmar.

### Anclora Talent

- Producto confirmado; arquitectura pendiente de confirmar.

### Anclora Impulso

- Producto confirmado; arquitectura pendiente de confirmar.

### Anclora Linguo Cam

- Producto confirmado; arquitectura detallada y despliegue final pendientes de confirmar.

### Anclora Command Center

- Producto HOLD; rol de consumidor/interfaz futura; arquitectura pendiente de confirmar.

## 12. Reglas para agentes IA

Antes de tocar cualquier repo Anclora, el agente debe:

1. Leer este contrato.
2. Leer `.anclora/global/ANCLORA_ECOSYSTEM_CONTEXT.md` si existe.
3. Leer `.anclora/AGENT_PROJECT_CONTEXT.md`.
4. Leer `AGENTS.md`.
5. Leer `MEMORY.md`.
6. Comprobar rama actual.
7. Comprobar infraestructura real del producto.
8. No asumir que una solución válida para un repo aplica a otro.
9. Consultar la vault documental (`anclora-vault`) para contratos, censo de repos (registry JSON) y decisiones (CHG).

## 13. Token Reduction Architecture

El ecosistema adopta una capa de enrutamiento inteligente de modelos para reducir el coste de
tokens un 80-90%. Esta arquitectura aplica a todos los workers del ecosistema (agency-agents,
Hermes, Codex/Claude Code).

**Documento canónico**: [token-reduction](../../../30-technology/infrastructure/token-reduction.md)

Principios:

- La complejidad se determina por semántica (dominio, operación, alcance, criticidad), no
  por longitud del prompt
- El agente orquestador construye el `analysis` dict autónomamente — el usuario nunca lo toca
- Si existe `PLAN.md` en el repo activo, el analizador lo lee para mayor precisión
- Modelo simple → Ollama (local, $0) / Medium → OpenRouter / Complex → OpenAI o Anthropic

---

## 14. Mantenimiento

- Propietario: Toni.
- Tipo: contrato canónico estable.
- No incluir secretos.
- No incluir logs temporales.
- Actualizar cuando cambie arquitectura real de una app.
- Referenciado por `.anclora-agents/ANCLORA_ECOSYSTEM_CONTEXT.md` en repos de producto.