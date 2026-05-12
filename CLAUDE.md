# PointCloudArShop - Plant Geometry Visualizer & AR Shopping

## Project Vision
Cross-platform app (iOS first, then web/Android) that visualizes plant geometry from scanned data, provides AR visualization, and includes e-commerce functionality.

## Architecture
- **iOS**: SwiftUI + RealityKit (ARKit 4.0+)
- **Backend**: Node.js + Express + GraphQL + Prisma
- **Database**: PostgreSQL + PostGIS
- **Payment**: Stripe/PayPal service abstraction layer

## Key Files
- `CLAUDE.md` - This plan document
- `.claude/plans/okay-dann-lass-uns-cheerful-sedgewick.md` - Detailed plan
- `.claude/settings.local.json` - Local settings (sensitive, not committed)

## Testing Requirements
Each feature must include:
1. Unit tests for core logic
2. Integration tests for API endpoints
3. Preview tools for UI components (Xcode Previews)
4. AR testing checklist before marking complete

## Git Workflow
- Commits in English, descriptive messages
- No sensitive files committed (.env, api keys, tokens)
- Regular pushes to private GitHub repo
- Feature branches for major changes

## Tech Stack
- SwiftUI, RealityKit, ARKit (iOS)
- Node.js, Express, GraphQL, Prisma (Backend)
- PostgreSQL + PostGIS (Database)
- All free tools for development
