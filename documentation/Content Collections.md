# Content 

## Services

The services collection generates content throughout the site, including the following:
- Generates pages under `/services` for each entry, and builds headings and paragraphs accordingly.
- Generates a link in the nav bar under 'services'.
- Generates a 'Services' menu in the footer.
- Services and ServicesFlipCards generate from services by default.

## Blog
### Adding posts
Add new blog entries by adding them to `content/blog`. Any filenames preceded with an underscore will **not** be published. 

### List of Entries
All posts are automatically listed under the url `/blog`. This URL uses parameters. `page=1` will take you to the first page of entries. How many entries are shown on a page is dictated by `show=10`, which will show 10 entries by default.