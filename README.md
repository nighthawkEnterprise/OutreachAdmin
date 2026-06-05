# Outreach Admin

Outreach Admin is a React-based administrative companion app for the Outreach Design service-site concept. It extends the broader Outreach project into an admin-style interface for managing or supporting website/service operations.

## Overview

This project belongs with the Outreach Design Website and Outreach Design Server repos. Together, they represent an early full-stack web platform: a public-facing website, an administrative frontend, and a Node/MongoDB backend.

## Product problem

A public service website is only one side of the product. Service businesses also need internal tools to review inbound activity, support users, and eventually manage content or customer interactions.

Outreach Admin explores the admin/frontend side of that product system.

## Key features

- React frontend
- Multi-page routing structure
- Shared visual language with the Outreach Design website
- Support for administrative/service workflows
- Foundation for connecting to backend APIs

## Tech stack

- React 17
- Create React App
- React Router v5
- Bootstrap
- Styled Components
- React Elastic Carousel
- EmailJS
- SweetAlert2

## Portfolio positioning

This project is best shown as part of a broader full-stack system rather than as a standalone flagship project. It demonstrates early thinking around separating public-facing and internal/admin experiences.

## Related repos

- `OutreachDesignWebsite` — public marketing website
- `OutreachDesignServer` — Express/MongoDB backend

## Running locally

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

## Future improvements

- Clarify admin-specific workflows
- Connect live backend data
- Add authentication and role-based access
- Replace placeholder content
- Improve README screenshots
- Modernize React dependencies

## Status

Early React admin/front-office prototype. Portfolio-ready only when presented with the full Outreach system and after cleanup.