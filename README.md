
# react()
A useful scss mixin to manage your media queries with charme :tophat:

### Table of content:
- [Options](#options)
- [Usage](#usage)
- [Adopted by E-commerce Platforms, Apps, and Websites](#adopted-by-e-commerce-platforms-apps-and-websites)

Install the package:

``` bash
npm i scss-react
/// pnpm i scss-react
// Others
```

And include it using an **@import**, **@use**, or **@forward** statement, depending on your setup:

``` scss
@import 'scss-react';

/// @import 'node_modules/scss-slamp/dist/index.scss';
/// @use 'scss-react' as *;
/// @forward 'scss-react';

```

# Options
First of all, we set up the media queries and features **we'll use throughout the application**.

The library comes with a list of [default queries and features](doc/OPTIONS.md), ensuring compatibility with the most commonly used media features as defined in the [MDN media query specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/@media).  
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

  // Pointer & Hover
  "pointer": "(pointer: fine)",
  "touch":   "(pointer: coarse) and (hover: none)",

  // [...]
);
```

Using `$react_breakpoints` variable in your scss stylesheet you can **easily extend and override** the default values adopting **consistent naming convention**:

``` scss
$react_breakpoints: (
  "xlarge-retina": "(-webkit-min-device-pixel-ratio: 2) and (min-width: 1300px)"
  /// [ ...other rules ]
);
```

❗ Combined rules, such as `(min-width: 768px) and (max-width: 1024px)`, must be a a **quoted string** `"(min-width: 768px) and (max-width: 1024px)"`.
If they are not, only the right side of the operator will be considered `(max-width: 1024px)`

❗ If you use `@use` or `@forward`, the override of the `$react_breakpoints` variable must be done directly within the component (or in a subsequently imported file) depending on your SCSS build system. Ensure that the import order allows the default values to be properly overridden.

# Usage

``` scss
@include react('>=medium'){
  body{
    background: black;
  }
}
a{
  @include react('pointer'){
    &:hover{
      color: red;
    }
  }
}

/*
  Will generate 

  @media (min-width: 768px)
    body {
      background: black;
    }
  }
  @media (hover: hover)
    a:hover {
      color: red;
    }
  }
*/
```

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
