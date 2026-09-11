# BG Remove

A premium HUD-style Astro interface for browser-side AI background removal.

## Stack

- Astro
- `@imgly/background-removal`
- ONNX Runtime Web
- Browser-side processing

Images are processed in the browser. The first run downloads and caches the AI model; subsequent runs can reuse the browser cache.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
