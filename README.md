# Vite Boilerplate Library

A simple utility library built with Vite and TypeScript, using Vite's library
mode capabilities.

## Features

- **double(x)**: Multiplies a number by 2
- **triple(x)**: Multiplies a number by 3
- **quadruple(x)**: Multiplies a number by 4

## Installation

```bash
npm install vite-namuol-boilerplate
```

## Usage

### ES Modules (Recommended)

```javascript
import {double, triple, quadruple} from 'vite-namuol-boilerplate';

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20
```

### CommonJS

```javascript
const {double, triple, quadruple} = require('vite-namuol-boilerplate');

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20
```

### Browser (UMD)

```html
<script src="https://unpkg.com/vite-namuol-boilerplate/dist/vite-boilerplate.umd.cjs"></script>
<script>
  console.log(ViteBoilerplate.double(5)); // 10
  console.log(ViteBoilerplate.triple(5)); // 15
  console.log(ViteBoilerplate.quadruple(5)); // 20
</script>
```

## Development

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This starts a development server with a demo page at `http://localhost:5173`
where you can test the library functions.

### Build

```bash
npm run build
```

This generates the library bundles in the `dist/` folder:

- `vite-boilerplate.js` - ES module bundle
- `vite-boilerplate.umd.cjs` - UMD bundle for browsers
- `vite-boilerplate.css` - CSS bundle (if any styles are imported)

### Testing

```bash
npm test
```

## Library Configuration

This project uses Vite's library mode configuration:

- **Entry point**: `src/main.ts`
- **Library name**: `ViteBoilerplate`
- **Output formats**: ES modules and UMD
- **Build target**: Modern browsers (ES2015+)

## Package Exports

The library provides multiple entry points:

- **Main**: `./dist/vite-boilerplate.umd.cjs` (CommonJS)
- **Module**: `./dist/vite-boilerplate.js` (ES modules)
- **Styles**: `./dist/vite-boilerplate.css` (CSS bundle)

## License

MIT
