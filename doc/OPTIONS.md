# Default Media Queries Configuration for scss-react

These defaults cover a wide range of media conditions including:

- Mobile-first breakpoints (using `min-width`)
- "Less than" breakpoints (using `max-width`)
- Orientation (portrait, landscape)
- Color scheme preferences (dark, light)
- Motion preferences, inverted colors, print media, resolution (retina)
- Pointer & hover capabilities, contrast preferences, display modes, scripting, scan methods, device shape, update frequency, overflow behavior, grid support, ambient light levels, forced colors, legacy device dimensions, aspect ratios, and color depth/monochrome features

Below is the complete default configuration:

```scss
$defaults_react_breakpoints: (
  // ---------------------------
  // Mobile-First Breakpoints (min-width) using "KEY"
  // ---------------------------
  "xxsmall": (min-width: 280px),  // Extra extra small devices
  "xsmall": (min-width: 360px),     // Extra small devices
  "small": (min-width: 480px),      // Small devices
  "medium": (min-width: 768px),     // Medium devices (e.g., tablets)
  "large": (min-width: 1024px),     // Large devices (e.g., small laptops)
  "xlarge": (min-width: 1280px),    // Extra large devices (desktops)
  "xxlarge": (min-width: 1440px),    // Very large screens
  "xxxlarge": (min-width: 1920px),   // Full HD screens
  "4k": (min-width: 2560px),         // 2K screens
  "5k": (min-width: 3840px),         // 4K screens

  // ---------------------------
  // "Less Than" Breakpoints (max-width) using "<KEY"
  // ---------------------------
  "<xxsmall": (max-width: 279px),      // Below extra extra small devices
  "<xsmall": (max-width: 359px),       // Below extra small devices
  "<small": (max-width: 479px),        // Below small devices
  "<medium": (max-width: 767px),       // Below medium devices
  "<large": (max-width: 1023px),       // Below large devices
  "<xlarge": (max-width: 1279px),      // Below extra large devices
  "<xxlarge": (max-width: 1439px),     // Below very large screens
  "<xxxlarge": (max-width: 1919px),    // Below full HD screens
  "<4k": (max-width: 2559px),          // Below 2K screens
  "<5k": (max-width: 3839px),          // Below 4K screens

  // ---------------------------
  // Orientation
  // ---------------------------
  "portrait": "(orientation: portrait)",  // Device in portrait mode
  "landscape": "(orientation: landscape)",  // Device in landscape mode

  // ---------------------------
  // Color Scheme Preferences
  // ---------------------------
  "dark": "(prefers-color-scheme: dark)",   // User prefers dark mode
  "light": "(prefers-color-scheme: light)",   // User prefers light mode

  // ---------------------------
  // Motion Preferences
  // ---------------------------
  "reduce-motion": "(prefers-reduced-motion: reduce)",   // User prefers reduced motion
  "no-reduce-motion": "(prefers-reduced-motion: no-preference)", // No motion preference

  // ---------------------------
  // Inverted Colors
  // ---------------------------
  "inverted-colors": "(inverted-colors: inverted)", // Inverted colors active
  "no-inverted-colors": "(inverted-colors: none)",    // No inverted colors

  // ---------------------------
  // Print Media
  // ---------------------------
  "print": "print",  // For print output

  // ---------------------------
  // Resolution (e.g., Retina)
  // ---------------------------
  "retina": "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",

  // ---------------------------
  // Pointer & Hover Features
  // ---------------------------
  "pointer": "(pointer: fine)",              // Primary input device is precise (e.g., mouse)
  "no-pointer": "(pointer: none)",            // No primary pointing device available
  "hover": "(hover: hover)",                  // Primary input supports hover
  "no-hover": "(hover: none)",                // Primary input does not support hover
  "any-pointer-fine": "(any-pointer: fine)",    // At least one input device is fine
  "any-pointer-coarse": "(any-pointer: coarse)",// At least one input device is coarse (e.g., touch)
  "any-pointer-none": "(any-pointer: none)",    // No input device supports pointing
  "any-hover-hover": "(any-hover: hover)",      // At least one input device can hover
  "any-hover-none": "(any-hover: none)",        // No input device can hover

  // ---------------------------
  // Contrast Preferences
  // ---------------------------
  "prefers-contrast-more": "(prefers-contrast: more)",      // Higher contrast preferred
  "prefers-contrast-less": "(prefers-contrast: less)",        // Lower contrast preferred
  "prefers-contrast-no-preference": "(prefers-contrast: no-preference)",

  // ---------------------------
  // Display Mode (for PWAs and Fullscreen Apps)
  // ---------------------------
  "display-mode-standalone": "(display-mode: standalone)",
  "display-mode-fullscreen": "(display-mode: fullscreen)",
  "display-mode-minimal-ui": "(display-mode: minimal-ui)",
  "display-mode-browser": "(display-mode: browser)",

  // ---------------------------
  // Scripting Availability (Media Queries Level 5)
  // ---------------------------
  "scripting-enabled": "(scripting: enabled)",
  "scripting-none": "(scripting: none)",

  // ---------------------------
  // Scan Method (Output Method)
  // ---------------------------
  "scan-progressive": "(scan: progressive)",  // Progressive scan output
  "scan-interlace": "(scan: interlace)",        // Interlaced scan output

  // ---------------------------
  // Device Shape
  // ---------------------------
  "shape-rectangular": "(shape: rectangular)",  // Device has a rectangular display
  "shape-round": "(shape: round)",              // Device has a round display

  // ---------------------------
  // Display Update Frequency
  // ---------------------------
  "update-none": "(update: none)",  // No display updates
  "update-slow": "(update: slow)",  // Slow refresh rate
  "update-fast": "(update: fast)",  // Fast refresh rate

  // ---------------------------
  // Overflow Behavior
  // ---------------------------
  "overflow-block-none": "(overflow-block: none)",
  "overflow-block-scroll": "(overflow-block: scroll)",
  "overflow-block-optional-paged": "(overflow-block: optional-paged)",
  "overflow-block-paged": "(overflow-block: paged)",
  "overflow-inline-none": "(overflow-inline: none)",
  "overflow-inline-scroll": "(overflow-inline: scroll)",
  "overflow-inline-optional-paged": "(overflow-inline: optional-paged)",
  "overflow-inline-paged": "(overflow-inline: paged)",

  // ---------------------------
  // Grid Support
  // ---------------------------
  "grid": "(grid: 1)",      // Device supports grid layout (true)
  "no-grid": "(grid: 0)",   // Device does not support grid layout

  // ---------------------------
  // Ambient Light Level
  // ---------------------------
  "light-level-dim": "(light-level: dim)",       // Low ambient light
  "light-level-normal": "(light-level: normal)", // Normal ambient light
  "light-level-washed": "(light-level: washed)", // High ambient light (washed out)

  // ---------------------------
  // Forced Colors (Media Queries Level 5)
  // ---------------------------
  "forced-colors-none": "(forced-colors: none)",
  "forced-colors-active": "(forced-colors: active)",

  // ---------------------------
  // Legacy Device Dimensions (Optional - Legacy Support)
  // ---------------------------
  "device-width": "(device-width: 1024px)",         // Example legacy device width
  "device-height": "(device-height: 768px)",          // Example legacy device height
  "device-aspect-ratio": "(device-aspect-ratio: 4/3)", // Example legacy device aspect ratio

  // ---------------------------
  // Aspect Ratio Examples
  // ---------------------------
  "min-aspect-ratio-16-9": "(min-aspect-ratio: 16/9)", // Minimum aspect ratio example
  "max-aspect-ratio-4-3": "(max-aspect-ratio: 4/3)",   // Maximum aspect ratio example

  // ---------------------------
  // Color Depth and Monochrome Features
  // ---------------------------
  "color-8": "(color: 8)",                 // 8 bits per color component
  "color-10": "(color: 10)",               // 10 bits per color component
  "color-index-256": "(color-index: 256)", // 256 entries in the color lookup table
  "monochrome-0": "(monochrome: 0)",        // Full color (no monochrome)
  "monochrome-1": "(monochrome: 1)"         // 1-bit monochrome output (example)
);
```
