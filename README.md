# Operations Command Center Prototype

An archived, browser-only operations dashboard prototype. It demonstrates a compact review surface for approvals, decisions, work queues, and operating metrics using fictional sample data.

## What is included

- Three local dashboard views: growth, planning, and operations
- Synthetic work items and metrics, clearly labelled in the interface
- A selectable item-detail panel
- Responsive React and TypeScript UI
- Small tests that protect the synthetic-data boundary

## Privacy and operating boundary

This repository is a clean extraction with a new Git history. It does not contain the private application's history, environment files, accounting material, customer or company records, credentials, backend code, LLM agents, Google Sheets integration, databases, Redis, API endpoints, or deployment configuration.

The prototype makes no network requests and has no persistence. All displayed content comes from fictional data committed in `src/data/sampleData.ts`.

## Run locally

Use Node.js 22 or newer:

```bash
npm ci
npm run dev
```

Then open the local address printed by Vite.

## Verify

```bash
npm test
npm run lint
npm run build
npm audit --audit-level=high
```

## Status

This is an archived portfolio prototype, not a live operations product. No open-source licence has been selected, so the default copyright rules apply.
