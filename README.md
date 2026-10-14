
# scss-react — Charme media queries manager for Sass/SCSS
## Manage media queries in a clean, consistent, and readable way with a Sass/SCSS mixin.

**scss-react** is a Sass mixin for media queries. You name each breakpoint and media feature once, then you write `@include react("medium")` instead of repeating `@media (min-width: 768px)` in every file. It ships with mobile-first breakpoints and the media features you use every day: hover and pointer, reduced motion, dark mode, print.

It has nothing to do with React.js: it is plain Sass and works with any stack (Vite, Nuxt, Vue, Next.js, Astro, Angular, plain Sass).

### Table of content:
- [Install](#install)
- [Options](#options)
- [Usage](#usage)
- [Development](#development)
- [Adopted by E-commerce Platforms, Apps, and Websites](#adopted-by-e-commerce-platforms-apps-and-websites)

# Install

``` bash
npm i scss-react
# pnpm add scss-react
```

Load it with `@use`:

``` scss
@use 'scss-react' as *;
```

In a design system, forward it once from your toolbox file and load the toolbox everywhere:

``` scss
// _core.scss
@forward 'scss-react';

// component.scss
@use 'core' as *;
```

The old `@import 'scss-react';` still works, but Dart Sass 3.0 will remove `@import`. With Dart Sass 1.71 or newer you can also write `@use 'pkg:scss-react' as *;`.

scss-react needs Dart Sass (`sass` or `sass-embedded`). LibSass and node-sass are not supported.

# Options
First of all, we set up the media queries and features **we'll use throughout the application**.

The library comes with a list of [default queries and features](src/options.scss), ensuring compatibility with the most commonly used media features as defined in the [MDN media query specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/@media).  
These include breakpoints for responsive design, orientation detection, color scheme preferences, and input methods such as pointer and hover capabilities.


``` scss
$defaults_react_breakpoints: (
  // Mobile-first breakpoints (min-width)
  "xxsmall": (min-width: 280px),
  "xsmall":  (min-width: 360px),
  "small":   (min-width: 480px),
  "medium":  (min-width: 768px),
  "large":   (min-width: 1024px),
  // [...] additional breakpoints like "xlarge", "xxlarge", etc.

  // "Less than" breakpoints (max-width)
  "<small":    (max-width: 479px),
  "<medium":   (max-width: 767px),
  "<large":    (max-width: 1023px),
  // [...] additional breakpoints like "<xlarge", "<xxlarge", etc.

  // Orientation
  "portrait":  "(orientation: portrait)",
  "landscape": "(orientation: landscape)",

  // Color Scheme
  "dark":  "(prefers-color-scheme: dark)",
  "light": "(prefers-color-scheme: light)",

  // Motion
  "reduce-motion": "(prefers-reduced-motion: reduce)",

  // Pointer & Hover
  "pointer": "(pointer: fine)",
  "pointer-and-hover": "(pointer: fine) and (hover: hover)",
  "touch":   "(pointer: coarse) and (hover: none)",

  // [...]
);
```

To **extend and override** the defaults, configure `$react_breakpoints` when you load the library. Your keys are merged with the defaults, and a key with the same name replaces the default one. Keep a **consistent naming convention**:

``` scss
@use 'scss-react' as * with (
  $react_breakpoints: (
    "<medium": (max-width: 749px),
    "xlarge-retina": "(-webkit-min-device-pixel-ratio: 2) and (min-width: 1300px)"
  )
);
```

`@forward 'scss-react' with (...)` takes the same map. With the old `@import`, assign `$react_breakpoints` after the import.

❗ Combined rules, such as `(min-width: 768px) and (max-width: 1024px)`, must be a **quoted string** `"(min-width: 768px) and (max-width: 1024px)"`.
If they are not, only the right side of the operator will be considered `(max-width: 1024px)`

# Usage

``` scss
@include react('medium') {
  body {
    background: black;
  }
}

a {
  @include react('pointer-and-hover') {
    &:hover {
      color: red;
    }
  }
}

/*
  Will generate

  @media (min-width: 768px) {
    body {
      background: black;
    }
  }
  @media (pointer: fine) and (hover: hover) {
    a:hover {
      color: red;
    }
  }
*/
```

Put `:hover` styles inside `react('pointer-and-hover')`: on touch screens they don't stick after a tap.

A key that doesn't exist prints a warning with the list of available keys and outputs nothing.

# Development

``` bash
npm install
npm run build   # writes dist/index.scss from src/
npm test        # compares the CSS of test/fixtures with test/snapshots
```

A release must not change the CSS of the sites that use the library: a failing snapshot means the output changed. After an intended change, update the snapshots with `UPDATE_SNAPSHOTS=1 npm test` and write it in the [changelog](CHANGELOG.md).

### **Adopted by E-commerce Platforms, Apps, and Websites**

This library is trusted and used by several high-profile websites and applications, including:

- [Zavaluce](https://zavaluce.it/)
- [Airdom](https://airdom.com/)
- [Custom Airdom](https://custom.airdom.com/)
- [Ale Bikewear](https://www.alebikewear.com/)
- [Pixartprinting Blog](https://www.pixartprinting.it/blog/) *(and 20+ localized versions)*
- [Gopleyers](https://gopleyers.com/)
- [Emblema Bike](https://www.emblema.bike/)
- [La Mia Cantina](https://www.lamiacantina.it/)
- [BlueMotion 3D](https://www.bluemotion3d.com/)

...and many others.
