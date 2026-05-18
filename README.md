# DEVQUIZ

A browser-based quiz/flashcard game for developers, with a matrix terminal aesthetic. Learn developer fundamentals through 4 tracks of progressively harder questions — all inside a glowing green terminal.

## File Structure

```
devquiz/
├── index.html      — All 7 screens (splash, track select, level select, gameplay,
│                     feedback, level complete, game over)
├── style.css       — Matrix terminal styles (scanlines, glow, phosphor green palette)
├── game.js         — Full game state and logic (no frameworks, no dependencies)
├── questions.js    — 48+ questions across 4 tracks × 3 levels
└── README.md       — This file
```

## Tracks

| Track | Description |
|---|---|
| Terminal & Git | Shell navigation, git workflow, branching, rebase, advanced git internals |
| VS Code & Claude Code | Editor shortcuts, CLAUDE.md, MCP, agentic AI, LSP, hooks |
| Building & Shipping | CI/CD, Docker, deployments, scaling, IaC, DORA metrics |
| History of Programming | Ada Lovelace → cloud computing — foundational context for every developer |

## How to Play

Open `index.html` in any modern browser. No server, no install, no dependencies.

- Each track has 3 levels (Beginner / Intermediate / Advanced)
- Answer 5 questions correctly to complete a level and unlock the next
- Wrong answers cost a life — 3 lives total
- Each answer shows an explanation; expand "Learn More" for deeper context
- Points: Level 1 = 10pts, Level 2 = 20pts, Level 3 = 30pts per correct answer

## Roadmap

- [ ] Payment integration for premium question packs (planned for a future phase)
- [ ] Additional tracks (Security, Databases, System Design)
- [ ] Leaderboard and persistent progress via backend
- [ ] Timed mode variant
