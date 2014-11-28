define({
  "name": "apidoc-example",
  "version": "0.3.0",
  "description": "apiDoc example project",
  "title": "Custom apiDoc browser title",
  "template": {
    "withCompare": true,
    "withGenerator": true
  },
  "url": "https://api.github.com/v1",
  "header": {
    "title": "My own header title",
    "content": "<h1 id=\"example-text-from-header-md\">Example text from header.md</h1>\n<p>This text is from file &quot;header.md&quot;.</p>\n<h2 id=\"howto-include\">HowTo include</h2>\n<p>In your projects &quot;package.json&quot; you can set &quot;apidoc.header&quot; with a title and a filename to include this file into your documentation.</p>\n<p>This example attempts to integrate &quot;header.md&quot; and &quot;footer.md&quot;.</p>\n<pre><code>{\n  &quot;name&quot;: &quot;example&quot;,\n  &quot;version&quot;: &quot;0.3.0&quot;,\n  &quot;description&quot;: &quot;apidoc example project.&quot;,\n  &quot;apidoc&quot;: {\n    &quot;header&quot;: {\n      &quot;title&quot;: &quot;My own header title&quot;,\n      &quot;filename&quot;: &quot;header.md&quot;\n    },\n    &quot;footer&quot;: {\n      &quot;title&quot;: &quot;My own footer title&quot;,\n      &quot;filename&quot;: &quot;footert.md&quot;\n    }\n  }\n}\n</code></pre>"
  },
  "footer": {
    "title": "My own footer title",
    "content": "<h1 id=\"example-text-from-footer-md\">Example text from footer.md</h1>\n<p>This text is from file &quot;footer.md&quot;.</p>\n<h2 id=\"howto-include\">HowTo include</h2>\n<p>Watch header.md for further information.</p>\n"
  },
  "order": [
    "GetUser",
    "PostUser"
  ],
  "generator": {
    "version": "0.9.0",
    "time": "2014-11-28T14:54:41.801Z"
  },
  "apidoc": "0.2.0"
});