# Shadow Monarch

A 2D game inspired by Solo Leveling, built with Phaser.js. Raid gates, grow your stats, build bonds with allies, and extract shadows to build your army.

## Overview

You play as an awakened hunter climbing the ranks. Every gate you raid strengthens your stats and grows your Shadow Army. Training with allies builds bonds that unlock new interactions over time.

## Features

- **Stat progression** — Strength, Agility, and Intelligence grow as you play
- **Gate raids** — clear gates to gain stats and extract shadows
- **Bond system** — train with allies to build relationships
- **Shadow Army tracker** — keep count of extracted shadows
- **Live HUD** — stats and progress update in real time

## Controls

| Key | Action |
|-----|--------|
| Arrow keys | Move |
| `1` | Raid the current gate |
| `2` | Train with an ally |
| `3` | Check your Shadow Army |

## Tech stack

- [Phaser.js](https://phaser.io/) — 2D game framework
- [Vite](https://vitejs.dev/) — dev server and build tool
- Vanilla JavaScript

## Running locally

```bash
npm install
npx vite
```

## Status

Early prototype. Player and enemies are placeholder shapes — sprite art, more gates, and additional characters are planned next.

## Roadmap

- [ ] Replace placeholder shapes with character sprites
- [ ] Add more gates with increasing difficulty
- [ ] Add more allies to build bonds with
- [ ] Add a proper Shadow Army roster/inventory screen
- [ ] Deploy a live playable version via GitHub Pages
