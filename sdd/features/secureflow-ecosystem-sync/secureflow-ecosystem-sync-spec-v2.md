# SecureFlow ecosystem synchronization — Spec v2

Status: draft
Scope: `anclora-group` registry and the coordinated public landing catalog.

## Change from v1

This revision records the canonical CleanSheet frontend URL supplied by the
current product contract and removes an unsupported strategic-line assignment
for VisionFlow. The audit found no authoritative source that maps VisionFlow
to `operational-automation`.

## Canonical model

The shared strategic line is `secureflow`, with exactly these four products:

| ID | Display name | Capability | Canonical description |
| --- | --- | --- | --- |
| `filestudio` | Anclora FileStudio | Prepare | conversión, tratamiento y preparación privada de archivos. |
| `purgedoc` | Anclora PurgeDoc | Protect | detección y eliminación verificable de información sensible. |
| `tableextract` | Anclora TableExtract | Extract | extracción de tablas y datos estructurados desde documentos complejos. |
| `cleansheet` | Anclora CleanSheet | Automate | limpieza, transformación e integración de datos en sistemas de negocio. |

CleanSheet's canonical URL is `https://cleansheet.anclora.com/` and may still
be overridden by `NEXT_PUBLIC_CLEANSHEET_URL` for an explicitly configured
environment.

## Decisions

- FileStudio remains one registry entry (`filestudio`); no alias or duplicate
  is created.
- The four SecureFlow entries retain the existing Group role policy.
- VisionFlow remains an internal Group application without a strategic
  `lineId` until Vault or Governance records an authoritative mapping.
- No public line or URL is invented for Linguo Cam or Impulso.
- The landing keeps one SecureFlow line and exactly the four catalog entries.

## Acceptance criteria

1. Group and landing represent exactly one `secureflow` line.
2. Exactly `filestudio`, `purgedoc`, `tableextract`, and `cleansheet` belong to
   that line in both repositories.
3. FileStudio is not duplicated.
4. CleanSheet resolves to `https://cleansheet.anclora.com/` by default.
5. VisionFlow has no strategic line assignment without canonical evidence.
6. SecureFlow role filtering remains unchanged and fail-closed.
7. No landing catalog entry exposes an internal endpoint.

## Validation

- Targeted Group registry tests and landing ecosystem tests.
- Lint, build and `git diff --check` for both repositories.
- Browser QA using the shared Anclora visual QA runtime.

## Governance resolution

The requested classification of Command Center as `internal` was reconciled
with the canonical Vault registration by `CHG-0019` (2026-09-27), approved by
the Bóveda Maintainer. Command Center is now `internal`/ACTIVE, runs on
AOS/VPS via `aos up/down command-center`, has no Vercel project, and remains
excluded from the public product catalogue.
