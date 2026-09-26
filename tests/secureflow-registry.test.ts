import test from 'node:test'
import assert from 'node:assert/strict'
import {
  getGroupAppDefinitions,
  getGroupStrategicLines,
  isAppAccessAllowed,
} from '../src/lib/group-access'

const secureFlowKeys = ['filestudio', 'purgedoc', 'tableextract', 'cleansheet'] as const

test('SecureFlow is one strategic line with exactly four registry apps', () => {
  const secureFlow = getGroupStrategicLines().find((line) => line.key === 'secureflow')
  assert.ok(secureFlow)
  assert.equal(secureFlow.name, 'SecureFlow')
  const apps = getGroupAppDefinitions().filter((app) => app.lineId === 'secureflow')
  assert.deepEqual(apps.map((app) => app.key).sort(), [...secureFlowKeys].sort())
  assert.equal(new Set(getGroupAppDefinitions().map((app) => app.key)).size, getGroupAppDefinitions().length)
})

test('SecureFlow registry entries match canonical identity, descriptions, logos and safe URLs', () => {
  const apps = getGroupAppDefinitions().filter((app) => app.lineId === 'secureflow')
  const expected = {
    filestudio: ['Anclora FileStudio', 'Conversión, tratamiento y preparación privada de archivos.'],
    purgedoc: ['Anclora PurgeDoc', 'Detección y eliminación verificable de información sensible.'],
    tableextract: ['Anclora TableExtract', 'Extracción de tablas y datos estructurados desde documentos complejos.'],
    cleansheet: ['Anclora CleanSheet', 'Limpieza, transformación e integración de datos en sistemas de negocio.'],
  } as const
  for (const app of apps) {
    assert.equal(app.title, expected[app.key][0])
    assert.equal(app.description, expected[app.key][1])
    assert.match(app.logoSrc ?? '', /^\/brand\/anclora-/)
    assert.match(app.url, /^https:\/\//)
  }
})

test('SecureFlow role policy is isolated and does not broaden existing access', () => {
  for (const key of secureFlowKeys) {
    assert.equal(isAppAccessAllowed('group-admin', key), true)
    assert.equal(isAppAccessAllowed('private-estates-ops', key), true)
    assert.equal(isAppAccessAllowed('advisory', key), true)
    assert.equal(isAppAccessAllowed('content-ops', key), true)
    assert.equal(isAppAccessAllowed('partner-ops', key), false)
    assert.equal(isAppAccessAllowed('data-ops', key), false)
    assert.equal(isAppAccessAllowed('growth-ops', key), false)
  }
})
