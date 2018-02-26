# github-embedder

> Anyway, sorry for my English. Pull request for me if you insist on improvement this document :)

This package is for getting a context from external link that should contain a raw markdown only, then we will convert into HTML element and render to `.g-embed` class.

## Usage

Import a script `git-embbeder.js` from `dist` folder into bottom of your page. 

> Note: this script not work inside `<head>` tag and only working after all page rendered. that meaning you should add this script into bottom of you site before your `</body>` close tag

```html
<script src="/path/to/git-embedder.js"></script>
```

Then add any HTML element that contain a `class="g-embed"` attribute with your external link of raw markdown in `data-url="http://example.com/markdown.md"`

```html
<div class="g-embed" data-url="http://example.com/markdown.md"></div>
```

That's all. :)
