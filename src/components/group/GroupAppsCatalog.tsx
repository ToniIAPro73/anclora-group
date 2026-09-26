'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import type { GroupAppDefinition, GroupStrategicLineId } from '@/lib/group-access'
import { filterGroupApps, getGroupStrategicLines, getStrategicLineLabel } from '@/lib/group-access'
import { getGroupMessages, getKindLabels } from '@/lib/group-ui'
import { GroupAppCta } from '@/components/group/GroupAppCta'

type Props = {
  apps: GroupAppDefinition[]
}

/**
 * Full catalog: search + business-area chips + visibility filter over the
 * user's authorized apps. Receives only role-filtered apps from the server.
 */
export function GroupAppsCatalog({ apps }: Props) {
  const [query, setQuery] = useState('')
  const [line, setLine] = useState<GroupStrategicLineId | 'all'>('all')
  const ui = getGroupMessages()
  const kindLabels = getKindLabels()
  const lines = getGroupStrategicLines()

  const results = filterGroupApps(apps, { query, line })

  return (
    <section className="group-section" aria-label={ui.catalogTitle}>
      <div className="group-search">
        <Search size={18} aria-hidden="true" />
        <label htmlFor="group-catalog-search" className="group-visually-hidden">
          {ui.searchLabel}
        </label>
        <input
          id="group-catalog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={ui.searchPlaceholder}
          autoComplete="off"
        />
      </div>

      <div className="group-filters">
        <div className="group-chip-row" role="group" aria-label={ui.filterLineAll}>
          <button
            type="button"
            aria-pressed={line === 'all'}
            className={`group-chip${line === 'all' ? ' is-active' : ''}`}
            onClick={() => setLine('all')}
          >
            {ui.filterLineAll}
          </button>
          {lines.map((item) => (
            <button
              key={item.key}
              type="button"
              aria-pressed={line === item.key}
              className={`group-chip${line === item.key ? ' is-active' : ''}`}
              onClick={() => setLine(item.key)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <p className="group-empty-note" role="status" aria-live="polite">
        {results.length === 0
          ? ui.searchNoResults
          : `${results.length} ${results.length === 1 ? 'aplicación' : 'aplicaciones'}`}
      </p>

      {results.length === 0 ? null : (
        <div className="group-app-grid">
          {results.map((app) => (
            <article key={app.key} className="group-app-card">
              <div className="group-app-head">
                <span>{app.lineId ? `${getStrategicLineLabel(app.lineId)} · ` : ''}{app.eyebrow}</span>
                <small>
                  {app.visibility === 'internal' ? ui.visibilityInternal : ui.visibilityExternal}
                  {app.status === 'paused' ? ` · ${ui.statusPaused}` : ''}
                </small>
              </div>
              {app.logoSrc ? (
                <div className="group-app-logo-wrap">
                  <Image src={app.logoSrc} alt="" width={112} height={112} className="group-app-logo" />
                </div>
              ) : null}
              <div className="group-app-body">
                <h3>{app.title}</h3>
                <p className="group-app-kind">{kindLabels[app.kind]}</p>
                <p>{app.description}</p>
                <GroupAppCta app={app} label={ui.openAppLabel} />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
