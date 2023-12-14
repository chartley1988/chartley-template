## Customizing This Theme

Most of the customization is done in the "Layout" file in the layouts folder. Here you can change default colours, fonts, spacing, and more. At the top of the file, edit the metadata to have site-wide impacts. 

## Using Colours

_Borrowed From Radix Colour themes_: [Radix](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)

-   For more finely tuned colour palettes: [Radix Scales](https://www.radix-ui.com/colors/docs/palette-composition/scales)
-   Use `Slate` for a cool gray
-   Use `Nickel` for a warm gray

| Colour | Use                                   |
| :----- | :------------------------------------ |
| 1      | App background                        |
| 2      | Subtle background                     |
| 3      | UI element background                 |
| 4      | Hovered UI element background         |
| 5      | Active/Selected UI element background |
| 6      | Subtle borders and separators         |
| 7      | UI element border and focus rings     |
| 8      | Hovered UI element border             |
| 9      | Solid backgrounds                     |
| 10     | Hovered Solid backgrounds             |
| 11     | Low Contrast Text                     |
| 12     | High Contrast Text                    |

## Change Font

1. Install font using Fontsource
   Example
   `npm install @fontsource/poppins`
2. Import it into layout file:
   `import '@fontsource/poppins';`

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
