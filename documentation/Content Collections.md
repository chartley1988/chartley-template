# Content

## Services

The services collection generates content throughout the site, including the following:

- Generates pages under `/services` for each entry, and builds headings and
  paragraphs accordingly.
- Generates a link in the nav bar under 'services'.
- Generates a 'Services' menu in the footer.
- Services and ServicesFlipCards generate from services by default.

## Blog

### Adding posts

Add new blog entries by adding them to `content/blog`. Any filenames preceded
with an underscore will **not** be published.

### List of Entries

At build, an index of blog posts is generated. How many pages of posts
there are is determined by the variable `quantityDisplayed` in the file
`/src/pages/blog/[page].astro`. By default, 6 posts are shown per page. If
you choose to customize the page with a more text based list rather than the
default cards in this file, then you may want to increase number of posts.
The size of the card elements can be customized by changing the `cardSize`
variable, the default is 200px.

### This is a test, delete later

