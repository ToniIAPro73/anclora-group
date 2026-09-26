# SecureFlow ecosystem synchronization — Spec v1

Status: draft
Scope: `anclora-group` registry and the coordinated public landing catalog.

## Objective

Introduce `secureflow` as a shared strategic line and synchronize the four
SecureFlow applications between the public landing and the Anclora Group portal
without duplicating FileStudio or weakening role-based access control.

## Canonical model

| ID | Display name | Capability | Canonical description |
| --- | --- | --- | --- |
| `filestudio` | Anclora FileStudio | Prepare | conversión, tratamiento y preparación privada de archivos. |
| `purgedoc` | Anclora PurgeDoc | Protect | detección y eliminación verificable de información sensible. |
| `tableextract` | Anclora TableExtract | Extract | extracción de tablas y datos estructurados desde documentos complejos. |
| `cleansheet` | Anclora CleanSheet | Automate | limpieza, transformación e integración de datos en sistemas de negocio. |

The shared strategic line ID is `secureflow`, with display name `SecureFlow`.

## Decisions

- FileStudio remains one registry entry (`filestudio`); no alias or duplicate is created.
- FileStudio keeps its existing Group URL and role list. PurgeDoc, TableExtract and
  CleanSheet inherit the same internal SecureFlow role policy because they are the
  same document/data processing product family.
- Registry URL fallbacks use only documented HTTPS endpoints. CleanSheet has no
  separately documented frontend URL in the available sources, so its documented
  API URL is used as a safe fallback and remains overridable by
  `NEXT_PUBLIC_CLEANSHEET_URL`.
- Existing applications with an unambiguous public-line mapping receive a
  `lineId`; VisionFlow is mapped to `operational-automation`. Linguo Cam and
  Impulso remain without a strategic line because the audited sources do not
  establish one. They remain available in Group and are not removed or exposed
  through a fabricated public line.
- The landing adds SecureFlow and its four public catalog entries in every
  supported locale, reusing canonical local logos.

## Acceptance criteria

1. Both repositories represent exactly one `secureflow` line.
2. Both repositories represent exactly the four IDs `filestudio`, `purgedoc`,
   `tableextract`, and `cleansheet` under that line.
3. FileStudio is not duplicated.
4. Names and essential descriptions match the canonical table above.
5. Group registry URLs are environment-overridable, absolute HTTPS fallbacks and
   preserve fail-closed role filtering.
6. Group catalog can filter and label SecureFlow as a line without showing
   unauthorized applications.
7. All supported landing locales contain line and product copy.
8. Tests cover line presence, exact product membership, no duplicates, URLs,
   logos, grouping, and RBAC isolation.

## Non-goals and gaps

- No deployment, promotion, database, auth, or infrastructure changes.
- No classification is invented for Linguo Cam or Impulso.
- No frontend URL is invented for CleanSheet; the documented API fallback is a
  temporary operational link until an owner supplies a dedicated frontend URL.

## Validation

- `npm run lint`, targeted tests, `npm run build`, and `git diff --check` in both
  repositories.
- Browser QA of the landing ecosystem/products and Group apps catalog at desktop
  and mobile sizes using the shared Anclora visual QA runtime.
