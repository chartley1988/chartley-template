# Configure Theme

-   [Configure Theme](#configure-theme)
    -   [Theme (theme.css)](#theme-themecss)
        -   [UI Colors](#ui-colors)
        -   [Theme Variables](#theme-variables)
            -   [Fonts](#fonts)
            -   [Spacing](#spacing)
            -   [Drop Shadows](#drop-shadows)
            -   [Corner Radius](#corner-radius)
            -   [Button Settings](#button-settings)
            -   [Layout Variables](#layout-variables)

There are **four** main style sheets intended to be edited to configure this template:

1. [Theme](../src/styles/theme.css) - Main source of site-wide custom properties.
2. [Colors](../src/styles/colors.css) - All color palettes for light and dark themes.
3. [Main](../src/styles/main.css) - Main settings for default HTML elements.
4. [Utilities](../src/styles/utilities.css) - Reusable classes for things like containers and flex boxes.

## Theme (theme.css)

### UI Colors

The most central location to get up and running with the look and feel of the site is the [Theme Style Sheet](../src/styles/theme.css). Located at `src/styles/theme.css`. The first section section outlines the default UI theme colors for both light and dark mode:

```css
.light-theme,
.dark-theme {
	--ui-bg: var(--nickel-1);
	--ui-bg-subtle: var(--nickel-2);
	--ui-element-bg: var(--nickel-3);
	--ui-element-bg-hovered: var(--nickel-4);
	--ui-element-bg-active: var(--nickel-5);
	--ui-border-subtle: var(--nickel-6);
	--ui-border: var(--nickel-7);
	--ui-border-hovered: var(--nickel-8);
	--ui-bg-solid: var(--nickel-9);
	--ui-bg-solid-hovered: var(--nickel-10);
	--ui-text-low-contrast: var(--nickel-11);
	--ui-text-high-contrast: var(--nickel-12);
}
```

The default values here are a _warm gray_ color called nickel. For a more colorful site, customize these with colors in line with brand colors. It should be noted however, that the theme file is **not** for _defining_ colors, only selecting them. To define colors, edit the [Color Style Sheet](../src/styles/colors.css).

### Theme Variables

Under `:root`, there variables that will have site wide impacts on the theme.

---

#### Fonts

`--font-text`: This is the base font for all readable content text in the site. Pick a font where readability is the main priority. _Poppins_ is the default font.

`--font-headings`: The font used for headings throughout the site. By default, all headings will use this font. Edit the [Main stylesheet](../src/styles/main.css) to customize which fonts are used on specified headings.

#### Spacing

There are three spacing settings:

```css
--spacing-sm: 0.5rem;
--spacing-md: 1.5rem;
--spacing-lg: 2.5rem;
```

These are used to determine things like padding, margins, and gaps between tables and flex elements. These are used sparingly at the moment, not fully implemented.

#### Drop Shadows

Three default drop shadows are provided:

```css
--shadow-sm: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px
		0px;
--shadow-md: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px
		10px -5px;
--shadow-lg: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
```

Visit [CSS Scan](https://getcssscan.com/css-box-shadow-examples) for some great alternatives.

---

#### Corner Radius

Three default radius settings are provided for use with rounded corners:

```css
--radius-sm: 0.25rem;
--radius-md: 0.75rem;
--radius-lg: 1.5rem;
```

---

#### Button Settings

These settings only affect the [`<Button>`](../src/components/Button.astro) component. To change default HTML element `<button>` styles, edit [main.css](../src/styles/main.css).

`--button-radius`: This sets the corners on buttons. If 0, the corners will be square. It's recommended to use one of the corner radius sections, such as `--radius-sm` for consistency.

`--button-border`: The thickness of button borders. Can be disabled with button props.

#### Layout Variables

These are variables make changes regarding over all layout of the site.

`--header-height`: Determines the height in pixels of the header, including logo, site title, and nav bar.
