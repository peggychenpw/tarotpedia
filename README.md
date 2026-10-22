# Tarotpedia

Tarotpedia is a responsive tarot card guide built with React. Browse all 78 cards, search by name or keyword, filter by arcana and suit, or draw a three-card reading.

## Run locally

Use Node.js 20, install the locked dependencies, then start the development server:

```sh
yarn install --frozen-lockfile
PORT=8003 NODE_OPTIONS=--openssl-legacy-provider yarn start
```

The app opens at <http://localhost:8003>.

## Features

- Dark and light themes, with your preference saved in the browser
- Search and filter the full card library
- Three-card reading with connected keywords, card meanings, and reflection prompts
- Keyboard-accessible theme, filters, search, and card reveal controls
- Responsive card grid for desktop, tablet, and mobile screens
