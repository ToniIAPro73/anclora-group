# Contract Compliance Matrix

## Objetivo

Servir de checklist maestra de cumplimiento por aplicación, agrupada por familia, contrato y nivel de evidencia.

Estados permitidos:
- `OK`
- `PARTIAL`
- `NO`
- `N/A`

Interpretación operativa:
- `OK`: auditado y sin gaps abiertos relevantes en el alcance revisado
- `PARTIAL`: auditado de forma parcial o con gaps todavía abiertos
- `NO`: incumplimiento confirmado o cobertura todavía insuficiente para aceptar el contrato
- `N/A`: el contrato o condición no aplica a esa app

La referencia de condiciones es:
- `00-governance/registry/CONTRACT_CONDITION_CATALOG.md`

La adopción específica de titularidad, copyright y marca derivada se registra en:
- `00-governance/registry/BRAND_IP_ADOPTION_MATRIX.md`

Contrato transversal asociado:
- `00-governance/contracts/core/ANCLORA_GROUP_BRAND_IP_CONTRACT.md`

## Vista resumida por aplicación

| Aplicación | Familia | Universal Motion | Universal Modal | Universal Localization | Family Contract | Overrides locales | Cobertura auditada | Estado global | Gaps abiertos | Última auditoría |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anclora-group` | Entidad Matriz | PARTIAL | PARTIAL | PARTIAL | N/A | PARTIAL | Footer corporativo, legales y cookies implementados 2026-05-17; auditoría branding 2026-08-01 en `main`: acento plata `#A8AEB8` conforme (`--group-silver`), Georgia conforme, icono conforme; CORREGIDO: paquete favicon `group_` completo generado y `docs/standards` sincronizados (13 archivos = masters); lint y build OK (commit `e34f751`) | PARTIAL | Sin gaps de branding abiertos; falta QA visual final | 2026-08-01 |
| `anclora-advisor-ai` | Internal | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Footer, legales y cookies implementados 2026-05-17; auditoría branding 2026-08-01 en `main`: acento `#1DAB89` conforme, icono conforme; CORREGIDO: tipografía migrada de Cormorant Garamond + Source Sans 3 → Inter + JetBrains Mono (cambio visible serif→sans), paquete favicon `advisor_` completo (ICO multi-res), `docs/standards` 12/12; lint y build OK (commit `df63b4a`) | PARTIAL | Cambio visible serif→sans: si se quiere conservar la serif display hace falta excepción formal (precedente ADR fiscal) | 2026-08-01 |
| `anclora-filestudio` | Internal | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Auditoría branding 2026-08-01 en `main`: acento neutro shadcn deliberado CONFIRMADO (no se inyectó `#4FB3BF` — pendiente decisión de cliente); Inter añadida, icono normalizado a 1024×1024, paquete favicon `filestudio_` completo, `docs/standards` creado (11 contratos); lint y build OK (commit `ec27a1b`). Cierre técnico/QA 2026-08-12: repo canónico `ToniIAPro73/anclora-filestudio`, repo ID `1327385115`, commit validado `15d7a80`, Web production operativa, Windows portable RC4 PASS, branding canónico verificado visualmente y por asset, 47/47 PASS, remaining QA risks none | PARTIAL | (a) Acento wayfinding `#4FB3BF` pendiente decisión de cliente; (b) `themeColor #14b8a6` en `filestudio-brand.ts` no documentado en ninguna fuente; (c) JetBrains Mono no añadido como `--font-mono`; (d) discrepancia ICON_SYSTEM: la tabla documenta interior `#0D0F12` pero el asset real tiene interior dorado/ámbar — requiere corrección de la tabla por humano; (e) retención/PII, scopes adicionales, AI System Card y compliance externos al QA siguen abiertos | 2026-08-12 |
| `anclora-fiscal` | Internal | — | — | — | — | — | Auditoría branding 2026-08-01 (alcance: color/tipografía/icono/favicon/docs-standards): acento `#D7A957` conforme (`--fiscal-gold`); paquete favicon añadido (`favicon.ico` multi-res 16-256 + `apple-icon.png` 180); 11 contratos copiados a `docs/standards`; lint 7/7 y build OK (commit `04d9a95`) | PARTIAL | Tipografía no conforme con TYPOGRAPHY (Playfair/Garamond/Montserrat, sin Inter/JetBrains Mono) — excepción ya formalizada en `10-group/brand/ANCLORA_BRANDING_TYPOGRAPHY.md` (sección Interna, fila `anclora-fiscal`, "Excepción formal 2026-08"), respaldada por ADR-003/004 de `docs/decision-log.md` del propio repo; borde de icono dorado vs plata cromada de tier; doble dorado CSS RESUELTO 2026-08-01 (tokens unificados a `--fiscal-gold`, commit `01912a7`; ver cierre en `BACKLOG-2026-08-GOLD-UNIFICATION`); auditoría motion/modal/localization pendiente; re-confirmación de no-regresión 2026-08-01 (cero cambios) | 2026-08-01 |
| `anclora-nexus` | Internal | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Footer, legales y cookies ES/EN/DE+RU implementados 2026-05-17; auditoría branding 2026-08-01 en `main`: acento `#D4AF37` conforme (naming `--brand-highlight`), Inter + JetBrains Mono (Playfair ya eliminada del frontend), paquete favicon `nexus_*` completo generado desde el icono real, `docs/standards` sincronizados a v2026-08; lint y build OK (commit `a094ee7`) | PARTIAL | Icono corregido y redesplegado 2026-08-01 (`2a231b6`, cierra `BACKLOG-2026-08-ICON-BORDERS`); QA visual completa | 2026-08-01 |
| `anclora-content-generator-ai` | Internal | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Auditoría branding 2026-08-01 en `main`: tipografía conforme (Inter + JetBrains Mono; no existe Bricolage en código); CORREGIDO: tema dark reescrito de navy+oro de nexus a carbón cálido + coral `#E06848` según COLOR_TOKENS, icono sustituido por canónico (el anterior era dorado), paquete favicon `contentgen_` completo, `docs/standards` creado (11 contratos); lint y build OK (commit `649bb3e`) | PARTIAL | Sin gaps de branding abiertos; falta auditoría visual real de shell, toggles, modales y responsive | 2026-08-01 |
| `anclora-visionflow` | Internal | — | — | — | — | — | Auditoría branding 2026-08-01 en `main` (primera evidencia): acento dark `#5C70D8` conforme, tipografía Inter + JetBrains Mono conforme, icono conforme; CORREGIDO: paquete favicon `visionflow_` completo y `docs/standards` creado (11 contratos); lint y build OK (commit `2fe1fc6`) | PARTIAL | Light accent `#4A5CC0` real en código sin confirmación contractual — pendiente registrar en contrato | 2026-08-01 |
| `anclora-impulso` | Premium | PARTIAL | OK | PARTIAL | PARTIAL | N/A | Footer/legales/cookies ES/EN implementados 2026-05-17; auditoría branding 2026-08-01 sobre rama `master`: acento `#FF6A00` conforme (cableado vía `--primary`, semántica shadcn), DM Sans conforme + JetBrains Mono añadido a `--font-mono`, paquete favicon completo (ICO multi-res 16-256 + apple-touch-icon 180), `docs/standards` sincronizados a v2026-08; lint y build OK (commit `aabdd86`) | PARTIAL | Mapeo de tokens shadcn vs hex literales del contrato (RESUELTO 2026-08-01: nota de mapeo en el contrato); borde de icono renderiza naranja/dorado vs cobre rosado (en `BACKLOG-2026-08-ICON-BORDERS`); QA visual responsive | 2026-08-01 |
| `anclora-command-center` | Premium | PARTIAL | N/A | PARTIAL | PARTIAL | N/A | Auditoría branding 2026-08-01 en `main` (repo anidado `dashboard/` en la bóveda): acentos `#6C63FF`/`#5FA8FF` conformes sin regresión (coinciden con COLOR_TOKENS, incl. light `#2F8BEF`); CORREGIDO: DM Sans + JetBrains Mono ahora se cargan de verdad (antes solo declaradas), `favicon.ico` regenerado multi-res 16-256, `docs/standards` 12/12; lint y build OK (commit `a3b2e8e`) | PARTIAL | `public/icons.svg` y `public/favicon.svg` huérfanos sin referenciar (icons.svg con colores ajenos a contrato) — decidir limpieza; falta auditoría completa de las dos vistas del app unificado y cierre fino de coherencia premium | 2026-08-01 |
| `anclora-data-lab` | Premium | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Auditoría branding 2026-08-01 en `main`: acento `#2DA078` conforme; CORREGIDO: Georgia → DM Sans en renderer de documentos, icono sustituido por canónico cobre (el anterior tenía borde teal), favicon completo (el anterior era el triángulo por defecto de Vercel), `docs/standards` sincronizados; lint y build OK (commit `7a44f09`) | PARTIAL | (a) PDFs de `public/docs/` no regenerados (toolchain HTML→PDF no está en el repo); (b) renderer de docs usa paleta aqua `#5fd9e2` no contractual — pendiente decisión | 2026-08-01 |
| `anclora-energyscan` | Premium | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Auditoría branding 2026-08-01 en `main`: acento `#00DC82` conforme (625+ usos; light `#008F5A` variante deliberada de accesibilidad, no tocada); icono conforme (idéntico a design-system); CORREGIDO: DM Sans ahora se carga de verdad (next/font/local), favicon regenerado desde canónico (el anterior era triángulo Vercel por defecto), `docs/standards` creado (11 contratos); lint y build OK (commit `be3321f`) | PARTIAL | Gaps de contrato que requieren edición humana de la bóveda: sin prefijo en FAVICON_SPEC, sin fila en mapa de ICON_SYSTEM, sin fila en tabla de TYPOGRAPHY; `.font-heading` declara Space Grotesk no cargada ni permitida — pendiente decisión (migrar a DM Sans 600-700 o excepción) | 2026-08-01 |
| `anclora-guesthub` | Premium | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Auditoría branding 2026-08-01 en `main`: acentos `#BFA46A` dark + `#94783E` light conformes (ambos sancionados en COLOR_TOKENS); icono conforme (idéntico a design-system; 1217×1217 y borde dorado en vez de cobre rosado — requiere asset nuevo, no tocado); CORREGIDO: paquete favicon `syncxml_` completo (antes solo favicon.svg), `docs/standards` creado (11 contratos); lint y build OK (commit `a288c69`) | PARTIAL | Tipografía Inter+Sora deliberada vs DM Sans contractual — no tocada, requiere decisión humana (migrar o excepción formal tipo ADR fiscal); borde de icono dorado vs cobre rosado (misma categoría que `BACKLOG-2026-08-ICON-BORDERS`, requiere asset nuevo); riesgo alto por datos sensibles (RGPD) sigue vigente | 2026-08-01 |
| `anclora-synergi` | Premium | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Auditoría branding 2026-08-01 en `main`: acento `#8C5AB4` conforme (dark), tipografía DM Sans ya conforme; CORREGIDO: icono sustituido por canónico cobre (el anterior tenía borde púrpura), paquete favicon `synergi_` completo (antes ausente), `docs/standards` 12/12; lint y build OK (commit `3deb95c`) | PARTIAL | Light accent real `#7d49c5` vs `#7648A0` sancionado en COLOR_TOKENS — no tocado, pendiente decisión | 2026-08-01 |
| `anclora-talent` | Premium | PARTIAL | N/A | PARTIAL | PARTIAL | N/A | Clasificada como premium en bóveda; landing, auth y workspace con contrato dark-first e i18n es/en en progreso de cierre | PARTIAL | Falta auditoría visual completa y cierre de persistencia de tema/idioma en toda la app | 2026-04-02 |
| `anclora-private-estates` | Ultra Premium | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Auditoría branding 2026-08-01 en `main`: acento `#D4AF37` / navy `#07252F` conforme, icono conforme; CORREGIDO: carga de fuentes Cardo/Inter/Fraunces (declaradas pero nunca cargadas), paquete favicon `pe_` completo + `manifest.json`, `docs/standards` 12/12; lint y build OK (commit `ccbd3fe`) | PARTIAL | Sin gaps de branding abiertos; falta auditoría visual detallada y validación de overrides ultra premium | 2026-08-01 |
| `anclora-private-estates-landing` | Ultra Premium | PARTIAL | N/A | OK | PARTIAL | OK | Landing publicada en producción (dark-only, ES/EN/DE); auditoría branding 2026-08-01 en `main`: acento, tipografía Cardo+Inter+Fraunces e icono conformes; CORREGIDO: paquete favicon `pe_` copiado desde PE (compartido según spec) y enlazado en `index.html`, `docs/standards` creado (12 contratos); lint y build OK (commit `580cf37`) | PARTIAL | Variables tipográficas con prefijo `--pe-` vs nombres canónicos (reportado, no renombrado); repo soporta locales es/ca/de/en/fr vs es/en/de registrado en matriz — gobernanza de localización pendiente (no tocado); falta auditoría visual completa en desktop y mobile; copy FR pendiente para cierre de cobertura plena | 2026-08-01 |
| `anclora-portfolio` | Portfolio / Showcase | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Footer normalizado, legales y cookies implementados 2026-05-17; auditoría branding 2026-08-01 en `main`: acento propio `#C5A059` conforme ("por proyecto", sin contaminación PE), tipografía custom deliberada (Cormorant+Montserrat+Allura) no tocada, lockup PE intencional no tocado; CORREGIDO: paquete favicon App Router (antes ausente del todo), `docs/standards` sincronizados (12, usando `ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT`); lint y build OK (commit `ba47034`) | PARTIAL | Sin prefijo favicon asignado en FAVICON_SPEC para apps Portfolio; sin manifest PWA; gap de nomenclatura: el nombre "PORTFOLIO_SHOWCASE_APP_CONTRACT" no existe (el real es `ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT`); QA visual desktop/mobile | 2026-08-01 |
| `anclora-azure-bay-landing` | Portfolio / Showcase | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Footer/legales/cookies implementados 2026-05-17 en rama `development`; auditoría branding 2026-08-01 en `development` (repo `anclora-azure-bay-landing-page`): acento propio `#a29060` conforme, tipografía custom deliberada no tocada, lockup PE intencional; CORREGIDO: paquete favicon App Router desde icono real (antes todo apuntaba a icon.svg y el apple-touch-icon era un placeholder "V0" de otra marca), `docs/standards` creado (11 contratos); lint y build OK (commit `a6e7f6d`) | PARTIAL | Sin prefijo en FAVICON_SPEC para apps Portfolio; leftovers del template Playa Viva sin referenciar (no tocados); QA visual | 2026-08-01 |
| `anclora-playa-viva-uniestate` | Portfolio / Showcase | PARTIAL | PARTIAL | PARTIAL | PARTIAL | N/A | Footer/legales/cookies implementados 2026-05-17 en rama `development`; validación bloqueada por node_modules/eslint ausente | PARTIAL | Instalar dependencias y QA visual | 2026-05-17 |
| `anclora-group-landing` | Portfolio / Showcase (excepción) | — | — | — | — | — | Auditoría branding 2026-08-01 en `main`: excepción de identidad brand book verificada conforme en código (`--anchor-navy` `#0A1F3D`, `--signal-blue` `#5FA8FF`, `--command-purple` `#6C63FF`, DM Sans + JetBrains Mono, dark-only; NO tema portfolio genérico); paquete favicon presente y cableado; `docs/standards` propagados (11 docs); lint y build OK (commit `891c371`) | PARTIAL | Prefijo favicon resuelto 2026-08-01 (`grouplanding_`); entrada en mapa de iconos pendiente (en backlog); locales pendientes de auditoría; drift de registro corregido 2026-08-01 (remoto activo) | 2026-08-01 |
| `anclora-advisor-ai-showcase` | Portfolio / Showcase | — | — | — | — | — | Alta en registro 2026-09-25 (CHG-0015); logo heredado de `anclora-advisor-ai` (CHG-0014) verificado; auditoría de contratos pendiente | PARTIAL | Auditoría branding, legales y QA visual | 2026-09-25 |
| `anclora-guesthub-showcase` | Portfolio / Showcase | — | — | — | — | — | Alta en registro 2026-09-25 (CHG-0015); logo heredado de `anclora-guesthub` (CHG-0014) verificado; auditoría de contratos pendiente | PARTIAL | Auditoría branding, legales y QA visual | 2026-09-25 |
| `anclora-shiftimport-showcase` | Portfolio / Showcase | — | — | — | — | — | Alta en registro 2026-09-25 (CHG-0015); logo heredado de `anclora-shiftimport` (CHG-0014) verificado; auditoría de contratos pendiente | PARTIAL | Auditoría branding, legales y QA visual | 2026-09-25 |

> [!note] Renombre de producto (registrado 2026-09-01)
> `anclora-syncxml` (Anclora SyncXML) pasa a `anclora-guesthub` (Anclora GuestHub) por decisión del owner (2026-08): nuevo posicionamiento Inteligencia Inmobiliaria / Real Estate — gestión de huéspedes, check-in y operación de alquiler vacacional. Las claves de fila de esta matriz se migraron; la evidencia de auditoría fechada 2026-08-01 (commit `a288c69`, paquete favicon `syncxml_`, `docs/standards` 11 contratos) se conserva verbatim como registro histórico. El prefijo favicon canónico pasa a `guesthub_`; el paquete `syncxml_` ya desplegado queda como legacy hasta regeneración de assets. Verificación del renombre en esta matriz: filas actualizadas en vista resumida, evidencia Premium y tabla AI Act. Pendiente de owner: renombre del showcase `anclora-syncxml-showcase` (fuera de alcance) y nueva auditoría visual post-renombre.

> [!note] Regularización de tiers de logo (CHG-0014, registrado 2026-09-25)
> `anclora-azure-bay-landing` y `anclora-portfolio` pasan a tier **Ultra Premium** (aplicaciones de muestra; logo dorado). `anclora-portfolio-showcase` hereda Ultra Premium de `anclora-portfolio`. Las showcases usan el logo de su aplicación de origen. Las evidencias fechadas anteriores de estas filas se conservan verbatim como registro histórico.

## Evidencia resumida por familia

### Entidad Matriz

| Aplicación | Evidencia actual | Riesgo principal | Próxima acción |
| --- | --- | --- | --- |
| `anclora-group` | Branding verificado 2026-08-01 en `main`: acento plata `#A8AEB8` (`--group-silver`), Georgia e icono conformes; paquete favicon `group_` completo generado y `docs/standards` sincronizados (13 archivos = masters); lint y build OK (commit `e34f751`) | Sin gaps de branding abiertos; pendiente QA visual final del portal | Ejecutar QA visual final |

### Premium

| Aplicación | Evidencia actual | Riesgo principal | Próxima acción |
| --- | --- | --- | --- |
| `anclora-impulso` | Branding premium verificado 2026-08-01 en `master`: DM Sans + JetBrains Mono, wiring centralizado (`lib/impulso-brand.ts`), paleta naranja/cobre `#FF6A00` conforme vía `--primary`, paquete favicon `impulso_*` completo (ICO multi-res + apple-touch 180), `docs/standards` a v2026-08; lint y build OK | La semántica shadcn (`--primary` vs `--accent`) no casa 1:1 con los hex literales del contrato; el borde del icono renderiza naranja/dorado vs cobre rosado | Decidir enmienda del contrato al mapeo shadcn o ajuste de tokens; sustituir borde del icono cuando lleguen assets finales; QA visual responsive |
| `anclora-command-center` | Branding verificado 2026-08-01 en `main`: acentos `#6C63FF`/`#5FA8FF` conformes (incl. light `#2F8BEF`), DM Sans + JetBrains Mono ahora cargadas de verdad, `favicon.ico` multi-res 16-256 regenerado, `docs/standards` 12/12; lint y build OK (commit `a3b2e8e`) | `public/icons.svg` y `public/favicon.svg` huérfanos sin referenciar (icons.svg con colores ajenos a contrato); falta pass contractual completo de ambas vistas | Decidir limpieza de los SVG huérfanos; auditar el app unificado completo y cerrar criterios premium de ambas vistas |
| `anclora-data-lab` | Branding verificado 2026-08-01 en `main`: acento `#2DA078` conforme, Georgia → DM Sans en renderer de documentos, icono canónico cobre, favicon completo (sustituye al triángulo Vercel por defecto), `docs/standards` sincronizados; lint y build OK (commit `7a44f09`) | Renderer de docs con paleta aqua `#5fd9e2` no contractual; PDFs de `public/docs/` sin regenerar | Decidir paleta del renderer de docs; regenerar PDFs cuando haya toolchain; QA visual completa del workspace |
| `anclora-energyscan` | Branding verificado 2026-08-01 en `main`: acento `#00DC82` conforme (light `#008F5A` variante deliberada de accesibilidad), icono idéntico a design-system, DM Sans cargada de verdad (next/font/local), favicon regenerado desde canónico, `docs/standards` creado (11 contratos); lint y build OK (commit `be3321f`) | Gaps de contrato: sin prefijo en FAVICON_SPEC, sin fila en ICON_SYSTEM, sin fila en TYPOGRAPHY; `.font-heading` declara Space Grotesk no cargada ni permitida | Edición humana de la bóveda para los 3 gaps de contrato; decidir migración de `.font-heading` a DM Sans 600-700 o excepción; QA visual por superficie |
| `anclora-synergi` | Branding verificado 2026-08-01 en `main`: acento `#8C5AB4` conforme (dark), DM Sans conforme, icono canónico cobre, paquete favicon `synergi_` completo (antes ausente), `docs/standards` 12/12; lint y build OK (commit `3deb95c`) | Light accent real `#7d49c5` vs `#7648A0` sancionado en COLOR_TOKENS — pendiente decisión | Decidir light accent (ajustar código o enmendar contrato); auditoría visual completa del backoffice |
| `anclora-talent` | Clasificada como premium en la bóveda; cuenta con shell, auth y dashboard definidos | Falta cierre visual y validación completa de dark default, theme toggle y locale toggle | Completar auditoría y cerrar contrato de preferencias e i18n en toda la app |
| `anclora-guesthub` | Branding verificado 2026-08-01 en `main`: acentos `#BFA46A` dark + `#94783E` light conformes (ambos sancionados en COLOR_TOKENS), icono idéntico a design-system, paquete favicon `syncxml_` completo (antes solo favicon.svg), `docs/standards` creado (11 contratos); lint y build OK (commit `a288c69`) | Tipografía Inter+Sora deliberada vs DM Sans contractual — requiere decisión humana (migrar o excepción formal tipo ADR fiscal); icono 1217×1217 con borde dorado vs cobre rosado (requiere asset nuevo); riesgo RGPD sigue vigente | Decisión de tipografía; nuevo asset de icono con borde cobre rosado; hardening legal/RGPD y auditoría visual operativa |

### Internal

| Aplicación | Evidencia actual | Riesgo principal | Próxima acción |
| --- | --- | --- | --- |
| `anclora-advisor-ai` | Branding verificado 2026-08-01 en `main`: acento `#1DAB89` conforme, icono conforme; tipografía migrada de Cormorant Garamond + Source Sans 3 → Inter + JetBrains Mono, paquete favicon `advisor_` completo (ICO multi-res), `docs/standards` 12/12; lint y build OK (commit `df63b4a`) | El cambio serif→sans es visible: conservar la serif display requeriría excepción formal (precedente ADR fiscal) | Decidir si se acepta la migración a sans o se registra excepción formal de tipografía; auditoría visual completa del shell y pantallas principales |
| `anclora-filestudio` | Branding verificado 2026-08-01 en `main`: acento neutro shadcn deliberado confirmado; Inter añadida, icono normalizado a 1024×1024, paquete favicon `filestudio_` completo, `docs/standards` creado (11 contratos); lint y build OK (commit `ec27a1b`). QA final 2026-08-12 confirma asset canónico `public/brand/anclora-filestudio.png`, HTTP asset 200, PNG 1254×1254, Web/Desktop usando asset canónico y confirmación visual del usuario | Acento wayfinding `#4FB3BF` pendiente decisión de cliente; `themeColor #14b8a6` no documentado; JetBrains Mono no añadido como `--font-mono`; discrepancia tabla ICON_SYSTEM (interior `#0D0F12` documentado vs asset real dorado/ámbar); retención/PII, scopes adicionales y AI System Card siguen abiertos | Decisión de cliente sobre acento wayfinding; documentar `themeColor`; añadir `--font-mono`; corrección humana de la tabla ICON_SYSTEM; cerrar retención/PII/scopes/AI System Card por gobierno |
| `anclora-nexus` | Excepción multilenguaje documentada; branding verificado 2026-08-01 en `main`: oro `#D4AF37` conforme, Inter + JetBrains Mono (Playfair eliminada del frontend), paquete favicon `nexus_*` completo desde el icono real, `docs/standards` a v2026-08; lint y build OK. Icono corregido y redesplegado 2026-08-01 (commit `2a231b6`): borde plata, interior navy `#192350`, ondas doradas `#D4AF37` — esquema ya alineado con ICON_SYSTEM | Naming de variables permutado (`--brand-highlight` vs `--accent`) con valores correctos — cubierto por la nota de mapeo shadcn del contrato | Ejecutar auditoría visual completa |
| `anclora-fiscal` | Branding auditado 2026-08-01 en `main`: dorado `#D7A957` conforme (`--fiscal-gold` en `styles.css`), paquete favicon añadido (`favicon.ico` multi-res + apple-icon 180), 11 contratos copiados a `docs/standards`; lint 7/7 y build OK; doble dorado unificado 2026-08-01 por Toni (commit `01912a7`, `--fiscal-gold: #d7a957` en `apps/web/app/styles.css:1169` con 15+ usos); re-confirmación de no-regresión 2026-08-01 | Tipografía deliberadamente no conforme (Playfair/Garamond/Montserrat vía ADR-003/004) vs stack Inter de tier Interna; borde de icono dorado vs plata cromada | Decisión de negocio: excepción formal de tipografía/icono o migración a Inter; auditoría visual completa |
| `anclora-content-generator-ai` | Branding verificado 2026-08-01 en `main`: tipografía Inter + JetBrains Mono conforme; tema dark reescrito de navy+oro de nexus a carbón cálido + coral `#E06848` según COLOR_TOKENS, icono canónico, paquete favicon `contentgen_` completo, `docs/standards` creado (11 contratos); lint y build OK (commit `649bb3e`) | Sin gaps de branding abiertos; sin evidencia de auditoría visual end-to-end | Auditoría end-to-end de shell y pantallas principales |
| `anclora-visionflow` | Branding verificado 2026-08-01 en `main` (primera evidencia): acento dark `#5C70D8` conforme, Inter + JetBrains Mono conforme, icono conforme; paquete favicon `visionflow_` completo y `docs/standards` creado (11 contratos); lint y build OK (commit `2fe1fc6`) | Light accent `#4A5CC0` real en código sin confirmación contractual | Registrar el light accent `#4A5CC0` en el contrato o ajustar el código; auditoría visual completa |

### Ultra Premium

| Aplicación | Evidencia actual | Riesgo principal | Próxima acción |
| --- | --- | --- | --- |
| `anclora-private-estates` | Branding verificado 2026-08-01 en `main`: acento `#D4AF37` / navy `#07252F` conforme, icono conforme; carga de fuentes Cardo/Inter/Fraunces corregida (declaradas pero nunca cargadas), paquete favicon `pe_` completo + `manifest.json`, `docs/standards` 12/12; lint y build OK (commit `ccbd3fe`) | Sin gaps de branding abiertos; overrides no validados y falta de auditoría editorial | Auditoría ultra premium pantalla por pantalla |
| `anclora-private-estates-landing` | Landing publicada en producción (dark-only, Vercel); branding verificado 2026-08-01 en `main`: acento, tipografía Cardo+Inter+Fraunces e icono conformes; paquete favicon `pe_` compartido desde PE enlazado en `index.html`, `docs/standards` creado (12 contratos); lint y build OK (commit `580cf37`) | Variables tipográficas con prefijo `--pe-` vs nombres canónicos (reportado, no renombrado); locales en código es/ca/de/en/fr vs es/en/de registrado — gobernanza de localización pendiente; falta auditoría visual completa desktop/mobile; FR aplazado | Decidir gobernanza de localización (registrar ca/fr o retirarlos); auditoría visual ultra premium de landing pública en desktop/mobile y revisión editorial del copy |

### Portfolio / Showcase

| Aplicación | Evidencia actual | Riesgo principal | Próxima acción |
| --- | --- | --- | --- |
| `anclora-portfolio` | Branding verificado 2026-08-01 en `main`: acento propio `#C5A059` conforme (sin contaminación PE), tipografía custom deliberada (Cormorant+Montserrat+Allura) no tocada, lockup PE intencional; paquete favicon App Router completo (antes ausente), `docs/standards` sincronizados (12, vía `ANCLORA_PORTFOLIO_SHOWCASE_CONTRACT`); lint y build OK (commit `ba47034`) | Sin prefijo favicon en FAVICON_SPEC para apps Portfolio; sin manifest PWA; gap de nomenclatura del contrato de familia ("PORTFOLIO_SHOWCASE_APP_CONTRACT" no existe) | Asignar prefijo favicon Portfolio en la spec; decidir manifest PWA; corregir nomenclatura del contrato de familia; auditoría de narrativa, CTA, responsive y conversión |
| `anclora-azure-bay-landing` | Branding verificado 2026-08-01 en rama `development` (repo `anclora-azure-bay-landing-page`): acento propio `#a29060` conforme, tipografía custom deliberada no tocada, lockup PE intencional; paquete favicon App Router desde icono real (el apple-touch-icon anterior era un placeholder "V0" de otra marca), `docs/standards` creado (11 contratos); lint y build OK (commit `a6e7f6d`) | Sin prefijo en FAVICON_SPEC; leftovers del template Playa Viva sin referenciar | Asignar prefijo favicon Portfolio en la spec; decidir limpieza de leftovers del template; auditoría de narrativa, CTA, responsive y conversión |
| `anclora-playa-viva-uniestate` | Sólo sincronización contractual | Sin evidencia visual real | Auditoría de narrativa, CTA, responsive y conversión |
| `anclora-group-landing` | Excepción brand book verificada 2026-08-01 en `main`: tokens navy/signal-blue/command-purple y DM Sans + JetBrains Mono conformes en `src/styles/tokens.css`; paquete favicon presente; `docs/standards` propagados; lint y build OK. `--anclora-gold` `#C5A059` revisado 2026-08-01 y **confirmado conforme** (acento legítimo del brand book v2, uso `--text-eyebrow`) — no es una duda abierta | Prefijo favicon resuelto 2026-08-01 (`grouplanding_`, commit `9d79d26`); sin fila en mapa de iconos (cubierto en `BACKLOG-2026-08-ICON-BORDERS`); app en pre-mvp | Documentar icono propio en los contratos; auditoría de locales; QA visual al salir de pre-mvp |

## Vista detallada por contrato

### Universal · Brand/IP Ownership

La vista detallada de `BIP1` a `BIP5` vive en [[Brand IP Adoption Matrix]] para no mezclar QA visual con titularidad legal. Estado resumido actual:

| Aplicación | Brand/IP Ownership | Nota |
| --- | --- | --- |
| `anclora-private-estates-landing` | PARTIAL | Hay footer/config legal, pero quedan docs antiguos y decisión FR |
| `anclora-private-estates` | PARTIAL | Footer, legales y locales contienen Anclora Group; falta normalizar fórmula y docs/exportables |
| `anclora-data-lab` | PARTIAL | Footer workspace y marca derivada detectados; faltan locales/docs completos |
| `anclora-synergi` | PARTIAL | Manual y brand copy detectados; falta footer/i18n legal completo |
| `anclora-nexus` | PARTIAL | Hay referencias a Anclora Group, pero existen copyrights antiguos en manuales/exportables |
| `anclora-content-generator-ai` | PARTIAL | Hermes existe y hay referencias a Anclora Group; falta contrato local y revisión legal surfaces |
| `anclora-design-system` | PARTIAL | Fuente de marca documentada; falta paquete Brand/IP consumible |
| `anclora-energyscan` | PARTIAL | README alineado; docs legacy requieren revisión |
| `anclora-impulso` | NO | Sin evidencia en auditoría ligera |
| `anclora-talent` | PARTIAL | README menciona Anclora Group; falta auditoría real |
| `anclora-command-center` | NO | Ruta confirmada `dashboard/`; sin evidencia de footer/legal Brand/IP |
| `anclora-portfolio` | PARTIAL | Metadata usa Anclora Group; existen titulares antiguos |
| `calculadora-fiscal-183` | PARTIAL | Producto independiente; no hereda Brand/IP salvo decisión explícita |

### Universal · AI Act / IA

Estado preliminar de adopción de los contratos [[ANCLORA_AI_ACT_COMPLIANCE_BASELINE]], [[ANCLORA_AI_RISK_CLASSIFICATION_MATRIX]], [[ANCLORA_AI_HUMAN_OVERSIGHT_POLICY]], [[ANCLORA_AI_TRANSPARENCY_AND_DISCLOSURE_RULES]] y [[ANCLORA_MODEL_PROVIDER_REGISTER]].

| Aplicación | AI1 Documentación feature | AI2 Transparencia | AI3 Supervisión humana | AI4 Registro proveedor | AI5 Escalado sensible | AI6 Claims prudentes | Estado | Próxima acción |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `anclora-group` | PARTIAL | PARTIAL | N/A | PARTIAL | N/A | PARTIAL | PARTIAL | Confirmar si existe asistente IA público o interno |
| `anclora-advisor-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Revisar dominios profesional/fiscal/laboral/financiero |
| `anclora-filestudio` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Confirmar si OCR/background removal/extracción documental requieren tarjeta AI Act propia y registro de proveedor/modelo |
| `anclora-nexus` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Documentar usos permitidos y bloquear scoring sensible |
| `anclora-content-generator-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Aplicar AI System Card y reglas Hermes |
| `anclora-impulso` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Delimitar wellness frente a consejo médico/nutricional |
| `anclora-command-center` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Confirmar agentes o automatizaciones activas |
| `anclora-data-lab` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Documentar no PII, agregación y reidentificación |
| `anclora-energyscan` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Añadir disclaimers IA/orientativo en resultados y PDF |
| `anclora-guesthub` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | DPIA/RGPD, revisión humana obligatoria y proveedor/parser |
| `anclora-synergi` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Documentar handoff y consentimiento |
| `anclora-talent` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | NO | PARTIAL | PARTIAL | Revisión legal reforzada por empleo antes de ranking/scoring |
| `anclora-private-estates` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Confirmar IA activa en recomendaciones o copy |
| `anclora-private-estates-landing` | PARTIAL | PARTIAL | N/A | PARTIAL | N/A | PARTIAL | PARTIAL | Añadir disclosure si se incorpora chat o personalización IA |
| `anclora-portfolio` | PARTIAL | PARTIAL | N/A | PARTIAL | N/A | PARTIAL | PARTIAL | Revisar contenido asistido y claims |
| `anclora-azure-bay-landing` | PARTIAL | PARTIAL | N/A | PARTIAL | N/A | PARTIAL | PARTIAL | Revisar contenido asistido y claims |
| `anclora-playa-viva-uniestate` | PARTIAL | PARTIAL | N/A | PARTIAL | N/A | PARTIAL | PARTIAL | Revisar contenido asistido y claims |
| `anclora-linguo-cam` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | Revisar OCR/visión, imágenes, retención y PII |

### Universal · UI Motion

| Aplicación | M1 | M2 | M3 | M4 | M5 | M6 |
| --- | --- | --- | --- | --- | --- | --- |
| `anclora-advisor-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-filestudio` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-nexus` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-content-generator-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-impulso` | PARTIAL | PARTIAL | OK | PARTIAL | PARTIAL | OK |
| `anclora-command-center` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-data-lab` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-energyscan` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-synergi` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-talent` | PARTIAL | N/A | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-private-estates` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-private-estates-landing` | PARTIAL | PARTIAL | OK | OK | PARTIAL | PARTIAL |
| `anclora-portfolio` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-azure-bay-landing` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-playa-viva-uniestate` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |

### Universal · Modal

| Aplicación | D1 | D2 | D3 | D4 | D5 | D6 |
| --- | --- | --- | --- | --- | --- | --- |
| `anclora-advisor-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-filestudio` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-nexus` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-content-generator-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-impulso` | OK | OK | PARTIAL | OK | OK | OK |
| `anclora-command-center` | N/A | N/A | N/A | N/A | N/A | N/A |
| `anclora-data-lab` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-energyscan` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-synergi` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-talent` | N/A | N/A | N/A | N/A | N/A | N/A |
| `anclora-private-estates` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-private-estates-landing` | N/A | N/A | N/A | N/A | N/A | N/A |
| `anclora-portfolio` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-azure-bay-landing` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-playa-viva-uniestate` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |

### Universal · Localization

| Aplicación | L1 | L2 | L3 | L4 | L5 |
| --- | --- | --- | --- | --- | --- |
| `anclora-advisor-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-filestudio` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-nexus` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-content-generator-ai` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-impulso` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-command-center` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-data-lab` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-energyscan` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-synergi` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-talent` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-private-estates` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-private-estates-landing` | OK | OK | OK | OK | PARTIAL |
| `anclora-portfolio` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-azure-bay-landing` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-playa-viva-uniestate` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |

### Family · Internal

| Aplicación | I1 | I2 | I3 |
| --- | --- | --- | --- |
| `anclora-advisor-ai` | PARTIAL | PARTIAL | PARTIAL |
| `anclora-filestudio` | PARTIAL | PARTIAL | PARTIAL |
| `anclora-nexus` | PARTIAL | PARTIAL | PARTIAL |
| `anclora-content-generator-ai` | PARTIAL | PARTIAL | PARTIAL |

### Family · Premium

| Aplicación | P1 | P2 | P3 | P4 | P5 |
| --- | --- | --- | --- | --- | --- |
| `anclora-impulso` | PARTIAL | OK | PARTIAL | PARTIAL | PARTIAL |
| `anclora-command-center` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-data-lab` | PARTIAL | OK | PARTIAL | PARTIAL | PARTIAL |
| `anclora-energyscan` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |
| `anclora-synergi` | PARTIAL | OK | PARTIAL | PARTIAL | PARTIAL |
| `anclora-talent` | PARTIAL | PARTIAL | PARTIAL | PARTIAL | PARTIAL |

### Family · Ultra Premium

| Aplicación | U1 | U2 | U3 |
| --- | --- | --- | --- |
| `anclora-private-estates` | PARTIAL | PARTIAL | PARTIAL |
| `anclora-private-estates-landing` | OK | OK | PARTIAL |

### Family · Portfolio / Showcase

| Aplicación | S1 | S2 | S3 |
| --- | --- | --- | --- |
| `anclora-portfolio` | PARTIAL | PARTIAL | PARTIAL |
| `anclora-azure-bay-landing` | PARTIAL | PARTIAL | PARTIAL |
| `anclora-playa-viva-uniestate` | PARTIAL | PARTIAL | PARTIAL |

## Gaps confirmados que ya están registrados

| ID | Ámbito | Aplicaciones | Gap |
| --- | --- | --- | --- |
| `CHG-0003` | `PREMIUM` | `anclora-impulso`, `anclora-data-lab`, `anclora-synergi`, `anclora-command-center` | Falta decidir si la coherencia visual de cards premium debe pasar a contrato de familia o resolverse como ajustes locales por app |
| `PILOTO-2026-08-A` | `BRANDING` | `anclora-fiscal` | RESUELTO 2026-08-01 — excepción formal de tipografía registrada en `ANCLORA_BRANDING_TYPOGRAPHY.md` (Montserrat/Playfair/Garamond vía ADR-003/004; no migrar a Inter) |
| `PILOTO-2026-08-B` | `BRANDING` | `anclora-fiscal`, `anclora-nexus`, `anclora-impulso` | RESUELTO 2026-08-01 — ver cierre en `BACKLOG-2026-08-ICON-BORDERS` (iconos corregidos y desplegados: fiscal `9811842`, nexus `2a231b6`, impulso `275840a`) |
| `PILOTO-2026-08-C` | `BRANDING` | `anclora-impulso`, `anclora-nexus` | RESUELTO 2026-08-01 — nota de mapeo shadcn añadida a `ANCLORA_BRANDING_MASTER_CONTRACT.md`: el valor hex manda, el nombre de variable puede seguir convención shadcn |
| `PILOTO-2026-08-D` | `BRANDING` | `anclora-group-landing` | RESUELTO 2026-08-01 — prefijo oficial `grouplanding_` asignado en FAVICON_SPEC y aplicado en el repo (commit `9d79d26`); entrada en ICON_SYSTEM sigue pendiente dentro de `BACKLOG-2026-08-ICON-BORDERS` |
| `BACKLOG-2026-08-GOLD-UNIFICATION` | `BRANDING` | `anclora-fiscal` | RESUELTO 2026-08-01 por Toni (commit `01912a7`) — tokens unificados a `--fiscal-gold` en `apps/web/app/styles.css`; verificado 2026-08-01: `--fiscal-gold: #d7a957` en `apps/web/app/styles.css:1169` con 15+ usos. Contexto original: `#e7b766`/`#c7964c` (secciones antiguas + `--ai-gold`) convivían con el `#d7a957` contractual en ~100 usos; requería sesión de diseño dedicada con revisión visual — no ejecutar sin validación humana del resultado |
| `BACKLOG-2026-08-ICON-BORDERS` | `BRANDING` | `anclora-fiscal`, `anclora-nexus`, `anclora-impulso` | RESUELTO 2026-08-01 — iconos corregidos entregados en `anclora-design-system/assets/logos/` y paquetes de favicon regenerados desde ellos: fiscal `9811842`, nexus `2a231b6`, impulso `275840a`. Contexto original: bordes de icono vs tier (fiscal: dorado vs plata cromada esperada; nexus: esquema interior/ondas invertido; impulso: naranja vs cobre rosado esperado). Nota: `anclora-fiscal-showcase` comparte ya el icono corregido (sincronizado manualmente en `anclora-design-system`), pero su favicon queda pendiente hasta que el repo tenga checkout local — no se ha resuelto, solo el logo base. La entrada de `anclora-group-landing` en el mapa de iconos del ICON_SYSTEM NO forma parte de este cierre y sigue pendiente |

## Uso

Cuando se cierre una auditoría o una propagación contractual:

1. actualizar la fila resumida de la app
2. actualizar el bloque detallado del contrato afectado
3. actualizar `Cobertura auditada` y `Gaps abiertos`
4. actualizar `Última auditoría`

La matriz mide cumplimiento. No sustituye a los contratos.
