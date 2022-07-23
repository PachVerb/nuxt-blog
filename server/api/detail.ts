/*
 * @LastEditTime: 2022-07-23 16:12:42
 * @Description:
 * @Date: 2022-07-21 22:52:10
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import detail from "./mock/detail.json";
export default defineEventHandler((event) => {
  return {
    //     content:
    //       "'\
    // <p><img src='https://raw.githubusercontent.com/showdownjs/logo/master/dist/logo.readme.png' alt='Showdown' /></p>\
    // <p>Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io).</p>\
    // <h1 id='installation'>Installation</h1>\
    // <h2 id='downloadtarball'>Download tarball</h2>\
    // <p>You can download the latest release tarball directly from <a href='https://github.com/showdownjs/showdown/releases'>releases</a></p>\
    // <h2 id='bower'>Bower</h2>\
    // <pre><code>bower install showdown\
    // </code></pre>\
    // <h2 id='npmserverside'>npm (server-side)</h2>\
    // <pre><code>npm install showdown\
    // </code></pre>\
    // <h2 id='cdn'>CDN</h2>\
    // <p>You can also use one of several CDNs available:</p>\
    // <ul>\
    // <li><p>rawgit CDN</p>\
    // <pre><code>https://cdn.rawgit.com/showdownjs/showdown/&lt;version tag&gt;/dist/showdown.min.js\
    // </code></pre></li>\
    // <li><p>cdnjs</p>\
    // <pre><code>https://cdnjs.cloudflare.com/ajax/libs/showdown/&lt;version tag&gt;/showdown.min.js\
    // </code></pre></li>\
    // </ul>\
    // <hr />\
    // <h1 id='syntax'>Syntax</h1>\
    // <h2 id='tableofcontents'>Table of contents</h2>\
    // <ul>\
    // <li><a href='#installation'>Installation</a></li>\
    // <li><a href='#download-tarball'>Download tarball</a></li>\
    // <li><a href='#bower'>Bower</a></li>\
    // <li><a href='#npm-server-side'>npm (server-side)</a></li>\
    // <li><a href='#cdn'>CDN</a></li>\
    // <li><a href='#syntax'>Syntax</a></li>\
    // <li><a href='#table-of-contents'>Table of contents</a></li>\
    // <li><a href='#introduction'>Introduction</a></li>\
    // <li><a href='#paragraphs'>Paragraphs</a></li>\
    // <li><a href='#headings'>Headings</a><ul>\
    // <li><a href='#atx-style'>Atx Style</a></li>\
    // <li><a href='#setext-style'>Setext style</a></li>\
    // <li><a href='#header-ids'>Header IDs</a></li></ul></li>\
    // <li><a href='#blockquotes'>Blockquotes</a></li>\
    // <li><a href='#bold-and-italic'>Bold and Italic</a></li>\
    // <li><a href='#strikethrough'>Strikethrough</a></li>\
    // <li><a href='#emojis'>Emojis</a></li>\
    // <li><a href='#code-formatting'>Code formatting</a><ul>\
    // <li><a href='#inline-formats'>Inline formats</a></li>\
    // <li><a href='#multiple-lines'>Multiple lines</a></li></ul></li>\
    // <li><a href='#lists'>Lists</a><ul>\
    // <li><a href='#unordered-lists'>Unordered lists</a></li>\
    // <li><a href='#ordered-lists'>Ordered lists</a></li>\
    // <li><a href='#tasklists-gfm-style'>TaskLists (GFM Style)</a></li>\
    // <li><a href='#list-syntax'>List syntax</a></li>\
    // <li><a href='#nested-blocks'>Nested blocks</a></li>\
    // <li><a href='#nested-lists'>Nested lists</a></li>\
    // <li><a href='#nested-code-blocks'>Nested code blocks</a></li></ul></li>\
    // <li><a href='#links'>Links</a><ul>\
    // <li><a href='#simple'>Simple</a></li>\
    // <li><a href='#inline'>Inline</a></li>\
    // <li><a href='#reference-style'>Reference Style</a></li></ul></li>\
    // <li><a href='#images'>Images</a><ul>\
    // <li><a href='#inline-1'>Inline</a></li>\
    // <li><a href='#reference-style-1'>Reference Style</a></li>\
    // <li><a href='#image-dimensions'>Image dimensions</a></li>\
    // <li><a href='#base64-encoded-images'>Base64 encoded images</a></li></ul></li>\
    // <li><a href='#tables'>Tables</a></li>\
    // <li><a href='#mentions'>Mentions</a></li>\
    // <li><a href='#handling-html-in-markdown-documents'>Handling HTML in markdown documents</a></li>\
    // <li><a href='#escaping-entities'>Escaping entities</a><ul>\
    // <li><a href='#escaping-markdown-entities'>Escaping markdown entities</a></li>\
    // <li><a href='#escaping-html-tags'>Escaping HTML tags</a></li></ul></li>\
    // <li><a href='#known-differences-and-gotchas'>Known differences and Gotchas</a></li>\
    // </ul>\
    // <h2 id='introduction'>Introduction</h2>\
    // <p>Showdown was created by John Fraser as a direct port of the original parser written by markdown's creator, John Gruber. Although Showdown has evolved since its inception, in 'vanilla mode', it tries to follow the <a href='http://daringfireball.net/projects/markdown/'>original markdown spec</a> (henceforth refereed as vanilla) as much as possible. There are, however, a few important differences, mainly due to inconsistencies in the original spec, which we addressed following the author's advice as stated in the <a href='https://pairlist6.pair.net/mailman/listinfo/markdown-discuss'>markdown's 'official' newsletter</a>.</p>\
    // <p>Showdown also support 'extra' syntax not defined in the original spec as opt-in features. This means new syntax elements are not enabled by default and require users to enable them through options.</p>\
    // <p>This document provides a quick description the syntax supported and the differences in output from the original markdown.pl implementation.</p>\
    // <h2 id='paragraphs'>Paragraphs</h2>\
    // <p>Paragraphs in Showdown are just <strong>one or more lines of consecutive text</strong> followed by one or more blank lines.</p>\
    // <pre><code class='md language-md'>On July 2, an alien mothership entered Earth's orbit and deployed several dozen\
    // saucer-shaped 'destroyer' spacecraft, each 15 miles (24 km) wide.\
    // On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets,\
    // participated in an assault on a destroyer near the city of Los Angeles.\
    // </code></pre>\
    // <p>The implication of the “one or more consecutive lines of text” is that Showdown supports\
    // “hard-wrapped” text paragraphs. This means the following examples produce the same output:</p>\
    // <pre><code class='md language-md'>A very long line of text\
    // </code></pre>\
    // <pre><code class='md language-md'>A very\
    // long line\
    // of text\
    // </code></pre>\
    // <p>If you DO want to add soft line breaks (which translate to <code>&lt;br&gt;</code> in HTML) to a paragraph,\
    // you can do so by adding 3 space characters to the end of the line (<code></code>).</p>\
    // <p>You can also force every line break in paragraphs to translate to <code>&lt;br&gt;</code> (as Github does) by\
    // enabling the option <strong><code>simpleLineBreaks</code></strong>.</p>\
    // <h2 id='headings'>Headings</h2>\
    // <h3 id='atxstyle'>Atx Style</h3>\
    // <p>You can create a heading by adding one or more # symbols before your heading text. The number of # you use will determine the size of the heading. This is similar to <a href='http://www.aaronsw.com/2002/atx/intro'><strong>atx style</strong></a>.</p>\
    // <pre><code class='md language-md'># The largest heading (an &lt;h1&gt; tag)\
    // ## The second largest heading (an &lt;h2&gt; tag)\
    // …\
    // ###### The 6th largest heading (an &lt;h6&gt; tag)\
    // </code></pre>\
    // <p>The space between <code>#</code> and the heading text is not required but you can make that space mandatory by enabling the option <strong><code>requireSpaceBeforeHeadingText</code></strong>.</p>\
    // <p>You can wrap the headings in <code>#</code>. Both leading and trailing <code>#</code> will be removed.</p>\
    // <pre><code class='md language-md'>## My Heading\
    // </code></pre>\
    // <p>If, for some reason, you need to keep a leading or trailing <code>#</code>, you can either add a space or escape it:</p>\
    // <pre><code class='md language-md'># # My header\
    // #//# My Header //# #\
    // </code></pre>\
    // <h3 id='setextstyle'>Setext style</h3>\
    // <p>You can also use <a href='https://en.wikipedia.org/wiki/Setext'><strong>setext style</strong></a> headings, although only two levels are available.</p>\
    // <pre><code class='md language-md'># This is an H1\
    // ## This is an H2\
    // </code></pre>\
    // <p><strong>Note:</strong><br />\
    // In live preview editors, when a paragraph is followed by a list it can cause an awkward effect.</p>\
    // <p><img src='http://i.imgur.com/YQ9iHTL.gif' alt='awkward effect' /></p>\
    // <p>You can prevent this by enabling the option <strong><code>smoothPreview</code></strong>.</p>\
    // <h3 id='headerids'>Header IDs</h3>\
    // <p>Showdown generates bookmarks anchors in titles automatically, by adding an id property to an heading.</p>\
    // <pre><code class='md language-md'># My cool header with ID\
    // </code></pre>\
    // <pre><code class='html language-html'>&lt;h1 id='mycoolheaderwithid'&gt;My cool header with ID&lt;/h1&gt;\
    // </code></pre>\
    // <p>This behavior can be modified with options:</p>\
    // <ul>\
    // <li><strong><code>noHeaderId</code></strong> disables automatic id generation;</li>\
    // <li><strong><code>ghCompatibleHeaderId</code></strong> generates header ids compatible with github style (spaces are replaced with dashes and a bunch of non alphanumeric chars are removed)</li>\
    // <li><strong><code>prefixHeaderId</code></strong> adds a prefix to the generated header ids (either automatic or custom).</li>\
    // <li><strong><code>headerLevelStart</code></strong> sets the header starting level. For instance, setting this to 3 means that <code># header</code> will be converted to <code>&lt;h3&gt;</code>.</li>\
    // </ul>\
    // <p>Read the <a href='https://github.com/showdownjs/showdown/blob/master/README.md'>README.md</a> for more info</p>\
    // <h2 id='blockquotes'>Blockquotes</h2>\
    // <p>You can indicate blockquotes with a &gt;.</p>\
    // <pre><code class='md language-md'>In the words of Abraham Lincoln:\
    // &gt; Pardon my french\
    // </code></pre>\
    // <p>Blockquotes can have multiple paragraphs and can have other block elements inside.</p>\
    // <pre><code class='md language-md'>&gt; A paragraph of text\
    // &gt;\
    // &gt; Another paragraph\
    // &gt;\
    // &gt; - A list\
    // &gt; - with items\
    // </code></pre>\
    // <h2 id='boldanditalic'>Bold and Italic</h2>\
    // <p>You can make text bold or italic.</p>\
    // <pre><code>*This text will be italic*\
    // **This text will be bold**\
    // </code></pre>\
    // <p>Both bold and italic can use either a * or an _ around the text for styling. This allows you to combine both bold and italic if needed.</p>\
    // <pre><code>**Everyone _must_ attend the meeting at 5 o'clock today.**\
    // </code></pre>\
    // <h2 id='strikethrough'>Strikethrough</h2>\
    // <p>With the option <strong><code>strikethrough</code></strong> enabled, Showdown supports strikethrough elements.\
    // The syntax is the same as GFM, that is, by adding two tilde (<code>~~</code>) characters around\
    // a word or groups of words.</p>\
    // <pre><code class='md language-md'>a ~~strikethrough~~ element\
    // </code></pre>\
    // <p>a ~~strikethrough~~ element</p>\
    // <h2 id='emojis'>Emojis</h2>\
    // <p>Since version 1.8.0, showdown supports github's emojis. A complete list of available emojis can be foun <a href='https://github.com/showdownjs/showdown/wiki/emojis'>here</a>.</p>\
    // <pre><code class='md language-md'>this is a :smile: smile emoji\
    // </code></pre>\
    // <p>this is a :smile: smile emoji</p>\
    // <h2 id='codeformatting'>Code formatting</h2>\
    // <h3 id='inlineformats'>Inline formats</h3>\
    // <p>Use single backticks (`) to format text in a special monospace format. Everything within the backticks appear as-is, with no other special formatting.</p>\
    // <pre><code class='md language-md'>Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.\
    // </code></pre>\
    // <pre><code class='html language-html'>&lt;p&gt;\
    //   Here's an idea: why don't we take &lt;code&gt;SuperiorProject&lt;/code&gt; and turn it\
    //   into &lt;code&gt;**Reasonable**Project&lt;/code&gt;.\
    // &lt;/p&gt;\
    // </code></pre>\
    // <h3 id='multiplelines'>Multiple lines</h3>\
    // <p>To create blocks of code you should indent it by four spaces.</p>\
    // <pre><code class='md language-md'>    this is a piece\
    //     of\
    //     code\
    // </code></pre>\
    // <p>If the options <strong><code>ghCodeBlocks</code></strong> is activated (which is by default), you can use triple backticks (```) to format text as its own distinct block.</p>\
    // <pre><code>Check out this neat program I wrote:\
    // ```\
    // x = 0\
    // x = 2 + 2\
    // what is x\
    // ```\
    // </code></pre>\
    // <h2 id='lists'>Lists</h2>\
    // <p>Showdown supports ordered (numbered) and unordered (bulleted) lists.</p>\
    // <h3 id='unorderedlists'>Unordered lists</h3>\
    // <p>You can make an unordered list by preceding list items with either a *, a - or a +. Markers are interchangeable too.</p>\
    // <pre><code class='md language-md'>- Item\
    // * Item\
    // - Item\
    // </code></pre>\
    // <h3 id='orderedlists'>Ordered lists</h3>\
    // <p>You can make an ordered list by preceding list items with a number.</p>\
    // <pre><code class='md language-md'>1. Item 1\
    // 2. Item 2\
    // 3. Item 3\
    // </code></pre>\
    // <p>It’s important to note that the actual numbers you use to mark the list have no effect on the HTML output Showdown produces. So you can use the same number in all items if you wish to.</p>\
    // <h3 id='tasklistsgfmstyle'>TaskLists (GFM Style)</h3>\
    // <p>Showdown also supports GFM styled takslists if the <strong><code>tasklists</code></strong> option is enabled.</p>\
    // <pre><code class='md language-md'>- [x] checked list item\
    // - [ ] unchecked list item\
    // </code></pre>\
    // <ul>\
    // <li>[x] checked list item</li>\
    // <li>[ ] unchecked list item</li>\
    // </ul>\
    // <h3 id='listsyntax'>List syntax</h3>\
    // <p>List markers typically start at the left margin, but may be indented by up to three spaces.</p>\
    // <pre><code class='md language-md'>- this is valid\
    // - this is too\
    // </code></pre>\
    // <p>List markers must be followed by one or more spaces or a tab.</p>\
    // <p>To make lists look nice, you can wrap items with hanging indents:</p>\
    // <pre><code class='md language-md'>- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\
    //   Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\
    //   viverra nec, fringilla in, laoreet vitae, risus.\
    // - Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\
    //   Suspendisse id sem consectetuer libero luctus adipiscing.\
    // </code></pre>\
    // <p>But if you want to be lazy, you don’t have to</p>\
    // <p>If one list item is separated by a blank line, Showdown will wrap all the list items in <code>&lt;p&gt;</code> tags in the HTML output.\
    // So this input:</p>\
    // <pre><code class='md language-md'>- Bird\
    // - Magic\
    // - Johnson\
    // </code></pre>\
    // <p>Results in:</p>\
    // <pre><code class='html language-html'>&lt;ul&gt;\
    //   &lt;li&gt;&lt;p&gt;Bird&lt;/p&gt;&lt;/li&gt;\
    //   &lt;li&gt;&lt;p&gt;Magic&lt;/p&gt;&lt;/li&gt;\
    //   &lt;li&gt;&lt;p&gt;Johnson&lt;/p&gt;&lt;/li&gt;\
    // &lt;/ul&gt;\
    // </code></pre>\
    // <p>This differs from other markdown implementations such as GFM (github) or commonmark.</p>\
    // <h3 id='nestedblocks'>Nested blocks</h3>\
    // <p>List items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab:</p>\
    // <pre><code class='md language-md'>1.  This is a list item with two paragraphs. Lorem ipsum dolor\
    //     sit amet, consectetuer adipiscing elit. Aliquam hendrerit\
    //     mi posuere lectus.\
    //     Vestibulum enim wisi, viverra nec, fringilla in, laoreet\
    //     vitae, risus. Donec sit amet nisl. Aliquam semper ipsum\
    //     sit amet velit.\
    // 2.  Suspendisse id sem consectetuer libero luctus adipiscing.\
    // </code></pre>\
    // <p>This is valid for other block elements such as blockquotes:</p>\
    // <pre><code class='md language-md'>- A list item with a blockquote:\
    //   &gt; This is a blockquote\
    //   &gt; inside a list item.\
    // </code></pre>\
    // <p>or event other lists.</p>\
    // <h3 id='nestedlists'>Nested lists</h3>\
    // <p>You can create nested lists by indenting list items by <strong>four</strong> spaces.</p>\
    // <pre><code class='md language-md'>1.  Item 1\
    //     1. A corollary to the above item.\
    //     2. Yet another point to consider.\
    // 2.  Item 2\
    //     - A corollary that does not need to be ordered.\
    //     - This is indented four spaces\
    //     - You might want to consider making a new list.\
    // 3.  Item 3\
    // </code></pre>\
    // <p>This behavior is consistent with the original spec but differs from other implementations such as GFM or commonmark. Prior to version 1.5, you just needed to indent two spaces for it to be considered a sublist.\
    // You can disable the <strong>four spaces requirement</strong> with option <strong><code>disableForced4SpacesIndentedSublists</code></strong></p>\
    // <p>To nest a third (or more) sublist level, you need to indent 4 extra spaces (or 1 extra tab) for each level.</p>\
    // <pre><code class='md language-md'>1.  level 1\
    //     1.  Level 2\
    //         - Level 3\
    //     2.  level 2\
    //         1.  Level 3\
    // 1.  Level 1\
    // </code></pre>\
    // <h3 id='nestedcodeblocks'>Nested code blocks</h3>\
    // <p>You can nest fenced codeblocks the same way you nest other block elements, by indenting by fours spaces or a tab:</p>\
    // <pre><code class='md language-md'>1.  Some code:\
    //     ```js\
    //     var foo = 'bar';\
    //     console.log(foo);\
    //     ```\
    // </code></pre>\
    // <p>To put a <em>indented style</em> code block within a list item, the code block needs to be indented twice — 8 spaces or two tabs:</p>\
    // <pre><code class='md language-md'>1.  Some code:\
    //     var foo = 'bar';\
    //     console.log(foo);\
    // </code></pre>\
    // <h2 id='links'>Links</h2>\
    // <h3 id='simple'>Simple</h3>\
    // <p>If you wrap a valid URL or email in <code>&lt;&gt;</code> it will be turned into a link whose text is the link itself.</p>\
    // <pre><code class='md language-md'>link to &lt;http://www.google.com/&gt;\
    // this is my email &lt;somedude@mail.com&gt;\
    // </code></pre>\
    // <p>In the case of email addreses, Showdown will also perform a bit of randomized decimal and hex entity-encoding to help obscure your address from address-harvesting spambots.\
    // You can disable this obfuscation setting <strong><code>encodeEmails</code></strong> option to <code>false</code>.</p>\
    // <p>With the option <strong><code>simplifiedAutoLink</code></strong> enabled, Showdown will automagically turn every valid URL it finds in the text body to links for you, without the need to wrap them in <code>&lt;&gt;</code>.</p>\
    // <pre><code class='md language-md'>link to http://www.google.com/\
    // this is my email somedude@mail.com\
    // </code></pre>\
    // <h3 id='inline'>Inline</h3>\
    // <p>You can create an inline link by wrapping link text in brackets ( <code>[ ]</code> ), and then wrapping the link in parentheses ( <code>( )</code> ).</p>\
    // <p>For example, to create a hyperlink to github.com/showdownjs/showdown, with a link text that says, Get Showdown!, you'd write this in Markdown: <code>[Get Showdown!](https://github.com/showdownjs/showdown)</code>.</p>\
    // <h3 id='referencestyle'>Reference Style</h3>\
    // <p>You can also use the reference style, like this:</p>\
    // <pre><code class='md language-md'>this is a [link to google][1]\
    // [1]: www.google.com\
    // </code></pre>\
    // <p>Showdown also supports implicit link references:</p>\
    // <pre><code class='md language-md'>this is a link to [google][]\
    // [google]: www.google.com\
    // </code></pre>\
    // <h2 id='images'>Images</h2>\
    // <p>Markdown uses an image syntax that is intended to resemble the syntax for links, also allowing for two styles: inline and reference.</p>\
    // <h3 id='inline-1'>Inline</h3>\
    // <p>Inline image syntax looks like this:</p>\
    // <pre><code class='md language-md'>![Alt text](url/to/image)\
    // ![Alt text](url/to/image 'Optional title')\
    // </code></pre>\
    // <p>That is:</p>\
    // <ul>\
    // <li>An exclamation mark: !;</li>\
    // <li>followed by a set of square brackets, containing the alt attribute text for the image;</li>\
    // <li>followed by a set of parentheses, containing the URL or path to the image, and an optional title attribute enclosed in double or single quotes.</li>\
    // </ul>\
    // <h3 id='referencestyle-1'>Reference Style</h3>\
    // <p>Reference-style image syntax looks like this:</p>\
    // <pre><code class='md language-md'>![Alt text][id]\
    // </code></pre>\
    // <p>Where “id” is the name of a defined image reference. Image references are defined using syntax identical to link references:</p>\
    // <pre><code class='md language-md'>[id]: url/to/image 'Optional title attribute'\
    // </code></pre>\
    // <p>Implicit references are also supported in images, similar to what happens with links:</p>\
    // <pre><code class='md language-md'>![showdown logo][]\
    // [showdown logo]: http://showdownjs.github.io/demo/img/editor.logo.white.png\
    // </code></pre>\
    // <h3 id='imagedimensions'>Image dimensions</h3>\
    // <p>When the option <strong><code>parseImgDimension</code></strong> is activated, you can also define the image dimensions, like this:</p>\
    // <pre><code class='md language-md'>![Alt text](url/to/image =250x250 'Optional title')\
    // </code></pre>\
    // <p>or in reference style:</p>\
    // <pre><code class='md language-md'>![Alt text][id]\
    // [id]: url/to/image =250x250\
    // </code></pre>\
    // <h3 id='base64encodedimages'>Base64 encoded images</h3>\
    // <p>Showdown also supports Base64 encoded images, both reference and inline style.\
    // <strong>Since version 1.7.4</strong>, wrapping base64 strings, which are usually extremely long lines of text, is supported.\
    // You can add newlines arbitrarily, as long as they are added after the <code>,</code> character.</p>\
    // <p><strong>inline style</strong></p>\
    // <pre><code class='md language-md'>![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\
    // jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAY\
    // SURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=)\
    // </code></pre>\
    // <p><strong>reference style</strong></p>\
    // <pre><code class='md language-md'>![Alt text][id]\
    // [id]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\
    // jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D\
    // AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=\
    // </code></pre>\
    // <p>Please note that with reference style base64 image sources, regardless of 'wrapping', a double newline is needed after the base64 string to separate them from a paragraph or other text block (but references can be adjacent).</p>\
    // <p><strong>wrapped reference style</strong></p>\
    // <pre><code class='md language-md'>![Alt text][id]\
    // ![Alt text][id2]\
    // [id]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\
    // jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D\
    // AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=\
    // [id2]:\
    // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\
    // jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D\
    // AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=\
    // this text needs to be separated from the references by 2 newlines\
    // </code></pre>\
    // <h2 id='tables'>Tables</h2>\
    // <p>Tables aren't part of the core Markdown spec, but they are part of GFM and Showdown supports them by turning on the option <code>tables</code>.</p>\
    // <p>Colons can be used to align columns.</p>\
    // <p>In the new version, the outer pipes (<code>|</code>) are optional, matching GFM spec.</p>\
    // <p>You also don't need to make the raw Markdown line up prettily.</p>\
    // <p>You can also use other markdown syntax inside them.</p>\
    // <pre><code class='md language-md'>| Tables        |      Are      |  Cool |\
    // | ------------- | :-----------: | ----: |\
    // | **col 3 is**  | right-aligned | $1600 |\
    // | col 2 is      |  _centered_   |   $12 |\
    // | zebra stripes | ~~are neat~~  |    $1 |\
    // </code></pre>\
    // <h2 id='mentions'>Mentions</h2>\
    // <p>Showdown supports github mentions by enabling the option <strong><code>ghMentions</code></strong>. This will turn every <code>@username</code> into a link to their github profile.</p>\
    // <pre><code class='md language-md'>hey @tivie, check this out\
    // </code></pre>\
    // <p>Since version 1.6.2 you can customize the generated link in mentions with the option <strong><code>ghMentionsLink</code></strong>.\
    // For instance, setting this option to <code>http://mysite.com/{u}/profile</code>:</p>\
    // <pre><code class='html language-html'>&lt;p&gt;hey &lt;a href='http://mysite.com/tivie/profile'&gt;@tivie&lt;/a&gt;, check this out&lt;/p&gt;\
    // </code></pre>\
    // <h2 id='handlinghtmlinmarkdowndocuments'>Handling HTML in markdown documents</h2>\
    // <p>Showdown, in most cases, leaves HTML tags alone, leaving them untouched in the output document.</p>\
    // <pre><code class='md language-md'>some markdown **here**\
    // &lt;div&gt;this is *not* **parsed**&lt;/div&gt;\
    // </code></pre>\
    // <pre><code class='html language-html'>&lt;p&gt;some markdown &lt;strong&gt;here&lt;/strong&gt;&lt;/p&gt;\
    // &lt;div&gt;this is *not* **parsed**&lt;/div&gt;\
    // </code></pre>\
    // <p>However, there are exceptions to this. With <code>&lt;code&gt;</code> and <code>&lt;pre&gt;&lt;code&gt;</code> tags, their contents are always escaped.</p>\
    // <pre><code class='md language-md'>some markdown **here** with &lt;code&gt;foo &amp; bar &lt;baz&gt;&lt;/baz&gt;&lt;/code&gt;\
    // </code></pre>\
    // <pre><code class='html language-html'>&lt;p&gt;\
    //   some markdown &lt;strong&gt;here&lt;/strong&gt; with\
    //   &lt;code&gt;foo &amp;amp; bar &amp;lt;baz&amp;gt;&amp;lt;/baz&amp;gt;&lt;/code&gt;\
    // &lt;/p&gt;\
    // </code></pre>\
    // <p>If you wish to enable markdown parsing inside a specific HTML tag, you can enable it by using the html attribute <strong><code>markdown</code></strong> or <strong><code>markdown='1'</code></strong> or <strong><code>data-markdown='1'</code></strong>.</p>\
    // <pre><code class='md language-md'>some markdown **here**\
    // &lt;div markdown='1'&gt;this is *not* **parsed**&lt;/div&gt;\
    // </code></pre>\
    // <pre><code class='html language-html'>&lt;p&gt;some markdown &lt;strong&gt;here&lt;/strong&gt;&lt;/p&gt;\
    // &lt;div markdown='1'&gt;\
    //   &lt;p&gt;this is &lt;em&gt;not&lt;/em&gt; &lt;strong&gt;parsed&lt;/strong&gt;&lt;/p&gt;\
    // &lt;/div&gt;\
    // </code></pre>\
    // <h2 id='escapingentities'>Escaping entities</h2>\
    // <h3 id='escapingmarkdownentities'>Escaping markdown entities</h3>\
    // <p>Showdown allows you to use backslash (<code>//</code>) escapes to generate literal characters which would otherwise have special meaning in markdown’s syntax. For example, if you wanted to surround a word with literal underscores (instead of an HTML <code>&lt;em&gt;</code> tag), you can use backslashes before the unserscores, like this:</p>\
    // <pre><code class='md language-md'>//_literal underscores//_\
    // </code></pre>\
    // <p>Showdown provides backslash escapes for the following characters:</p>\
    // <pre><code>//   backslash\
    // `   backtick\
    // *   asterisk\
    // _   underscore\
    // {}  curly braces\
    // []  square brackets\
    // ()  parentheses\
    // #   hash mark\
    // +   plus sign\
    // -   minus sign (hyphen)\
    // .   dot\
    // !   exclamation mark\
    // </code></pre>\
    // <h3 id='escapinghtmltags'>Escaping HTML tags</h3>\
    // <p>Since <a href='https://github.com/showdownjs/showdown/tree/1.7.2'>version 1.7.2</a> backslash escaping HTML tags is supported when <code>backslashEscapesHTMLTags</code> option is enabled.</p>\
    // <pre><code class='md language-md'>//&lt;div&gt;a literal div//&lt;/div&gt;\
    // </code></pre>\
    // <h2 id='knowndifferencesandgotchas'>Known differences and Gotchas</h2>\
    // <p>In most cases, Showdown's output is identical to that of Perl Markdown v1.0.2b7. What follows is a list of all known deviations. Please file an issue if you find more.</p>\
    // <ul>\
    // <li><p><strong>Since version 1.4.0, showdown supports the markdown='1' attribute</strong>, but for older versions, this attribute is ignored. This means:</p>\
    // <pre><code>&lt;div markdown='1'&gt;\
    //      Markdown does *not* work in here.\
    // &lt;/div&gt;\
    // </code></pre></li>\
    // <li><p>You can only nest square brackets in link titles to a depth of two levels:</p>\
    // <pre><code>[[fine]](http://www.github.com/)\
    // [[[broken]]](http://www.github.com/)\
    // </code></pre>\
    // <p>If you need more, you can escape them with backslashes.</p></li>\
    // <li><p>A list is <strong>single paragraph</strong> if it has only <strong>1 line-break separating items</strong> and it becomes <strong>multi paragraph if ANY of its items is separated by 2 line-breaks</strong>:</p></li>\
    // </ul>\
    // <pre><code class='md language-md'>  - foo\
    //   - bar\
    //   - baz\
    // </code></pre>\
    // <p>becomes</p>\
    // <pre><code class='html language-html'>  &lt;ul&gt;\
    //     &lt;li&gt;&lt;p&gt;foo&lt;/p&gt;&lt;/li&gt;\
    //     &lt;li&gt;&lt;p&gt;bar&lt;/p&gt;&lt;/li&gt;\
    //     &lt;li&gt;&lt;p&gt;baz&lt;/p&gt;&lt;/li&gt;\
    //   &lt;/ul&gt;\
    // </code></pre>\
    // <p>This new ruleset is based on the comments of Markdown's author John Gruber in the <a href='https://pairlist6.pair.net/mailman/listinfo/markdown-discuss'>Markdown discussion list</a>.</p>\
    // '",
    content:
      "<p><img src='https://raw.githubusercontent.com/showdownjs/logo/master/dist/logo.readme.png' alt='Showdown' /></p>" +
      "<p>Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io).</p>" +
      "<h1 id='installation'>Installation</h1>" +
      "<h2 id='downloadtarball'>Download tarball</h2>" +
      "<p>You can download the latest release tarball directly from <a href='https://github.com/showdownjs/showdown/releases'>releases</a></p>" +
      "<h2 id='bower'>Bower</h2>" +
      "<pre><code>bower install showdown" +
      "</code></pre>" +
      "<h2 id='npmserverside'>npm (server-side)</h2>" +
      "<pre><code>npm install showdown" +
      "</code></pre>" +
      "<h2 id='cdn'>CDN</h2>" +
      "<p>You can also use one of several CDNs available:</p>" +
      "<ul>" +
      "<li><p>rawgit CDN</p>" +
      "<pre><code>https://cdn.rawgit.com/showdownjs/showdown/&lt;version tag&gt;/dist/showdown.min.js" +
      "</code></pre></li>" +
      "<li><p>cdnjs</p>" +
      "<pre><code>https://cdnjs.cloudflare.com/ajax/libs/showdown/&lt;version tag&gt;/showdown.min.js" +
      "</code></pre></li>" +
      "</ul>" +
      "<hr />" +
      "<h1 id='syntax'>Syntax</h1>" +
      "<h2 id='tableofcontents'>Table of contents</h2>" +
      "<ul>" +
      "<li><a href='#installation'>Installation</a></li>" +
      "<li><a href='#download-tarball'>Download tarball</a></li>" +
      "<li><a href='#bower'>Bower</a></li>" +
      "<li><a href='#npm-server-side'>npm (server-side)</a></li>" +
      "<li><a href='#cdn'>CDN</a></li>" +
      "<li><a href='#syntax'>Syntax</a></li>" +
      "<li><a href='#table-of-contents'>Table of contents</a></li>" +
      "<li><a href='#introduction'>Introduction</a></li>" +
      "<li><a href='#paragraphs'>Paragraphs</a></li>" +
      "<li><a href='#headings'>Headings</a><ul>" +
      "<li><a href='#atx-style'>Atx Style</a></li>" +
      "<li><a href='#setext-style'>Setext style</a></li>" +
      "<li><a href='#header-ids'>Header IDs</a></li></ul></li>" +
      "<li><a href='#blockquotes'>Blockquotes</a></li>" +
      "<li><a href='#bold-and-italic'>Bold and Italic</a></li>" +
      "<li><a href='#strikethrough'>Strikethrough</a></li>" +
      "<li><a href='#emojis'>Emojis</a></li>" +
      "<li><a href='#code-formatting'>Code formatting</a><ul>" +
      "<li><a href='#inline-formats'>Inline formats</a></li>" +
      "<li><a href='#multiple-lines'>Multiple lines</a></li></ul></li>" +
      "<li><a href='#lists'>Lists</a><ul>" +
      "<li><a href='#unordered-lists'>Unordered lists</a></li>" +
      "<li><a href='#ordered-lists'>Ordered lists</a></li>" +
      "<li><a href='#tasklists-gfm-style'>TaskLists (GFM Style)</a></li>" +
      "<li><a href='#list-syntax'>List syntax</a></li>" +
      "<li><a href='#nested-blocks'>Nested blocks</a></li>" +
      "<li><a href='#nested-lists'>Nested lists</a></li>" +
      "<li><a href='#nested-code-blocks'>Nested code blocks</a></li></ul></li>" +
      "<li><a href='#links'>Links</a><ul>" +
      "<li><a href='#simple'>Simple</a></li>" +
      "<li><a href='#inline'>Inline</a></li>" +
      "<li><a href='#reference-style'>Reference Style</a></li></ul></li>" +
      "<li><a href='#images'>Images</a><ul>" +
      "<li><a href='#inline-1'>Inline</a></li>" +
      "<li><a href='#reference-style-1'>Reference Style</a></li>" +
      "<li><a href='#image-dimensions'>Image dimensions</a></li>" +
      "<li><a href='#base64-encoded-images'>Base64 encoded images</a></li></ul></li>" +
      "<li><a href='#tables'>Tables</a></li>" +
      "<li><a href='#mentions'>Mentions</a></li>" +
      "<li><a href='#handling-html-in-markdown-documents'>Handling HTML in markdown documents</a></li>" +
      "<li><a href='#escaping-entities'>Escaping entities</a><ul>" +
      "<li><a href='#escaping-markdown-entities'>Escaping markdown entities</a></li>" +
      "<li><a href='#escaping-html-tags'>Escaping HTML tags</a></li></ul></li>" +
      "<li><a href='#known-differences-and-gotchas'>Known differences and Gotchas</a></li>" +
      "</ul>" +
      "<h2 id='introduction'>Introduction</h2>" +
      "<p>Showdown was created by John Fraser as a direct port of the original parser written by markdown's creator, John Gruber. Although Showdown has evolved since its inception, in 'vanilla mode', it tries to follow the <a href='http://daringfireball.net/projects/markdown/'>original markdown spec</a> (henceforth refereed as vanilla) as much as possible. There are, however, a few important differences, mainly due to inconsistencies in the original spec, which we addressed following the author's advice as stated in the <a href='https://pairlist6.pair.net/mailman/listinfo/markdown-discuss'>markdown's 'official' newsletter</a>.</p>" +
      "<p>Showdown also support 'extra' syntax not defined in the original spec as opt-in features. This means new syntax elements are not enabled by default and require users to enable them through options.</p>" +
      "<p>This document provides a quick description the syntax supported and the differences in output from the original markdown.pl implementation.</p>" +
      "<h2 id='paragraphs'>Paragraphs</h2>" +
      "<p>Paragraphs in Showdown are just <strong>one or more lines of consecutive text</strong> followed by one or more blank lines.</p>" +
      "<pre><code class='md language-md'>On July 2, an alien mothership entered Earth's orbit and deployed several dozen" +
      "saucer-shaped 'destroyer' spacecraft, each 15 miles (24 km) wide." +
      "On July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets," +
      "participated in an assault on a destroyer near the city of Los Angeles." +
      "</code></pre>" +
      "<p>The implication of the “one or more consecutive lines of text” is that Showdown supports" +
      "“hard-wrapped” text paragraphs. This means the following examples produce the same output:</p>" +
      "<pre><code class='md language-md'>A very long line of text" +
      "</code></pre>" +
      "<pre><code class='md language-md'>A very" +
      "long line" +
      "of text" +
      "</code></pre>" +
      "<p>If you DO want to add soft line breaks (which translate to <code>&lt;br&gt;</code> in HTML) to a paragraph," +
      "you can do so by adding 3 space characters to the end of the line (<code></code>).</p>" +
      "<p>You can also force every line break in paragraphs to translate to <code>&lt;br&gt;</code> (as Github does) by" +
      "enabling the option <strong><code>simpleLineBreaks</code></strong>.</p>" +
      "<h2 id='headings'>Headings</h2>" +
      "<h3 id='atxstyle'>Atx Style</h3>" +
      "<p>You can create a heading by adding one or more # symbols before your heading text. The number of # you use will determine the size of the heading. This is similar to <a href='http://www.aaronsw.com/2002/atx/intro'><strong>atx style</strong></a>.</p>" +
      "<pre><code class='md language-md'># The largest heading (an &lt;h1&gt; tag)" +
      "## The second largest heading (an &lt;h2&gt; tag)" +
      "…" +
      "###### The 6th largest heading (an &lt;h6&gt; tag)" +
      "</code></pre>" +
      "<p>The space between <code>#</code> and the heading text is not required but you can make that space mandatory by enabling the option <strong><code>requireSpaceBeforeHeadingText</code></strong>.</p>" +
      "<p>You can wrap the headings in <code>#</code>. Both leading and trailing <code>#</code> will be removed.</p>" +
      "<pre><code class='md language-md'>## My Heading" +
      "</code></pre>" +
      "<p>If, for some reason, you need to keep a leading or trailing <code>#</code>, you can either add a space or escape it:</p>" +
      "<pre><code class='md language-md'># # My header" +
      "#//# My Header //# #" +
      "</code></pre>" +
      "<h3 id='setextstyle'>Setext style</h3>" +
      "<p>You can also use <a href='https://en.wikipedia.org/wiki/Setext'><strong>setext style</strong></a> headings, although only two levels are available.</p>" +
      "<pre><code class='md language-md'># This is an H1" +
      "## This is an H2" +
      "</code></pre>" +
      "<p><strong>Note:</strong><br />" +
      "In live preview editors, when a paragraph is followed by a list it can cause an awkward effect.</p>" +
      "<p><img src='http://i.imgur.com/YQ9iHTL.gif' alt='awkward effect' /></p>" +
      "<p>You can prevent this by enabling the option <strong><code>smoothPreview</code></strong>.</p>" +
      "<h3 id='headerids'>Header IDs</h3>" +
      "<p>Showdown generates bookmarks anchors in titles automatically, by adding an id property to an heading.</p>" +
      "<pre><code class='md language-md'># My cool header with ID" +
      "</code></pre>" +
      "<pre><code class='html language-html'>&lt;h1 id='mycoolheaderwithid'&gt;My cool header with ID&lt;/h1&gt;" +
      "</code></pre>" +
      "<p>This behavior can be modified with options:</p>" +
      "<ul>" +
      "<li><strong><code>noHeaderId</code></strong> disables automatic id generation;</li>" +
      "<li><strong><code>ghCompatibleHeaderId</code></strong> generates header ids compatible with github style (spaces are replaced with dashes and a bunch of non alphanumeric chars are removed)</li>" +
      "<li><strong><code>prefixHeaderId</code></strong> adds a prefix to the generated header ids (either automatic or custom).</li>" +
      "<li><strong><code>headerLevelStart</code></strong> sets the header starting level. For instance, setting this to 3 means that <code># header</code> will be converted to <code>&lt;h3&gt;</code>.</li>" +
      "</ul>" +
      "<p>Read the <a href='https://github.com/showdownjs/showdown/blob/master/README.md'>README.md</a> for more info</p>" +
      "<h2 id='blockquotes'>Blockquotes</h2>" +
      "<p>You can indicate blockquotes with a &gt;.</p>" +
      "<pre><code class='md language-md'>In the words of Abraham Lincoln:" +
      "&gt; Pardon my french" +
      "</code></pre>" +
      "<p>Blockquotes can have multiple paragraphs and can have other block elements inside.</p>" +
      "<pre><code class='md language-md'>&gt; A paragraph of text" +
      "&gt;" +
      "&gt; Another paragraph" +
      "&gt;" +
      "&gt; - A list" +
      "&gt; - with items" +
      "</code></pre>" +
      "<h2 id='boldanditalic'>Bold and Italic</h2>" +
      "<p>You can make text bold or italic.</p>" +
      "<pre><code>*This text will be italic*" +
      "**This text will be bold**" +
      "</code></pre>" +
      "<p>Both bold and italic can use either a * or an _ around the text for styling. This allows you to combine both bold and italic if needed.</p>" +
      "<pre><code>**Everyone _must_ attend the meeting at 5 o'clock today.**" +
      "</code></pre>" +
      "<h2 id='strikethrough'>Strikethrough</h2>" +
      "<p>With the option <strong><code>strikethrough</code></strong> enabled, Showdown supports strikethrough elements." +
      "The syntax is the same as GFM, that is, by adding two tilde (<code>~~</code>) characters around" +
      "a word or groups of words.</p>" +
      "<pre><code class='md language-md'>a ~~strikethrough~~ element" +
      "</code></pre>" +
      "<p>a ~~strikethrough~~ element</p>" +
      "<h2 id='emojis'>Emojis</h2>" +
      "<p>Since version 1.8.0, showdown supports github's emojis. A complete list of available emojis can be foun <a href='https://github.com/showdownjs/showdown/wiki/emojis'>here</a>.</p>" +
      "<pre><code class='md language-md'>this is a :smile: smile emoji" +
      "</code></pre>" +
      "<p>this is a :smile: smile emoji</p>" +
      "<h2 id='codeformatting'>Code formatting</h2>" +
      "<h3 id='inlineformats'>Inline formats</h3>" +
      "<p>Use single backticks (`) to format text in a special monospace format. Everything within the backticks appear as-is, with no other special formatting.</p>" +
      "<pre><code class='md language-md'>Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`." +
      "</code></pre>" +
      "<pre><code class='html language-html'>&lt;p&gt;" +
      "  Here's an idea: why don't we take &lt;code&gt;SuperiorProject&lt;/code&gt; and turn it" +
      "  into &lt;code&gt;**Reasonable**Project&lt;/code&gt;." +
      "&lt;/p&gt;" +
      "</code></pre>" +
      "<h3 id='multiplelines'>Multiple lines</h3>" +
      "<p>To create blocks of code you should indent it by four spaces.</p>" +
      "<pre><code class='md language-md'>    this is a piece" +
      "    of" +
      "    code" +
      "</code></pre>" +
      "<p>If the options <strong><code>ghCodeBlocks</code></strong> is activated (which is by default), you can use triple backticks (```) to format text as its own distinct block.</p>" +
      "<pre><code>Check out this neat program I wrote:" +
      "```" +
      "x = 0" +
      "x = 2 + 2" +
      "what is x" +
      "```" +
      "</code></pre>" +
      "<h2 id='lists'>Lists</h2>" +
      "<p>Showdown supports ordered (numbered) and unordered (bulleted) lists.</p>" +
      "<h3 id='unorderedlists'>Unordered lists</h3>" +
      "<p>You can make an unordered list by preceding list items with either a *, a - or a +. Markers are interchangeable too.</p>" +
      "<pre><code class='md language-md'>- Item" +
      "* Item" +
      "- Item" +
      "</code></pre>" +
      "<h3 id='orderedlists'>Ordered lists</h3>" +
      "<p>You can make an ordered list by preceding list items with a number.</p>" +
      "<pre><code class='md language-md'>1. Item 1" +
      "2. Item 2" +
      "3. Item 3" +
      "</code></pre>" +
      "<p>It’s important to note that the actual numbers you use to mark the list have no effect on the HTML output Showdown produces. So you can use the same number in all items if you wish to.</p>" +
      "<h3 id='tasklistsgfmstyle'>TaskLists (GFM Style)</h3>" +
      "<p>Showdown also supports GFM styled takslists if the <strong><code>tasklists</code></strong> option is enabled.</p>" +
      "<pre><code class='md language-md'>- [x] checked list item" +
      "- [ ] unchecked list item" +
      "</code></pre>" +
      "<ul>" +
      "<li>[x] checked list item</li>" +
      "<li>[ ] unchecked list item</li>" +
      "</ul>" +
      "<h3 id='listsyntax'>List syntax</h3>" +
      "<p>List markers typically start at the left margin, but may be indented by up to three spaces.</p>" +
      "<pre><code class='md language-md'>- this is valid" +
      "- this is too" +
      "</code></pre>" +
      "<p>List markers must be followed by one or more spaces or a tab.</p>" +
      "<p>To make lists look nice, you can wrap items with hanging indents:</p>" +
      "<pre><code class='md language-md'>- Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
      "  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi," +
      "  viverra nec, fringilla in, laoreet vitae, risus." +
      "- Donec sit amet nisl. Aliquam semper ipsum sit amet velit." +
      "  Suspendisse id sem consectetuer libero luctus adipiscing." +
      "</code></pre>" +
      "<p>But if you want to be lazy, you don’t have to</p>" +
      "<p>If one list item is separated by a blank line, Showdown will wrap all the list items in <code>&lt;p&gt;</code> tags in the HTML output." +
      "So this input:</p>" +
      "<pre><code class='md language-md'>- Bird" +
      "- Magic" +
      "- Johnson" +
      "</code></pre>" +
      "<p>Results in:</p>" +
      "<pre><code class='html language-html'>&lt;ul&gt;" +
      "  &lt;li&gt;&lt;p&gt;Bird&lt;/p&gt;&lt;/li&gt;" +
      "  &lt;li&gt;&lt;p&gt;Magic&lt;/p&gt;&lt;/li&gt;" +
      "  &lt;li&gt;&lt;p&gt;Johnson&lt;/p&gt;&lt;/li&gt;" +
      "&lt;/ul&gt;" +
      "</code></pre>" +
      "<p>This differs from other markdown implementations such as GFM (github) or commonmark.</p>" +
      "<h3 id='nestedblocks'>Nested blocks</h3>" +
      "<p>List items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab:</p>" +
      "<pre><code class='md language-md'>1.  This is a list item with two paragraphs. Lorem ipsum dolor" +
      "    sit amet, consectetuer adipiscing elit. Aliquam hendrerit" +
      "    mi posuere lectus." +
      "    Vestibulum enim wisi, viverra nec, fringilla in, laoreet" +
      "    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum" +
      "    sit amet velit." +
      "2.  Suspendisse id sem consectetuer libero luctus adipiscing." +
      "</code></pre>" +
      "<p>This is valid for other block elements such as blockquotes:</p>" +
      "<pre><code class='md language-md'>- A list item with a blockquote:" +
      "  &gt; This is a blockquote" +
      "  &gt; inside a list item." +
      "</code></pre>" +
      "<p>or event other lists.</p>" +
      "<h3 id='nestedlists'>Nested lists</h3>" +
      "<p>You can create nested lists by indenting list items by <strong>four</strong> spaces.</p>" +
      "<pre><code class='md language-md'>1.  Item 1" +
      "    1. A corollary to the above item." +
      "    2. Yet another point to consider." +
      "2.  Item 2" +
      "    - A corollary that does not need to be ordered." +
      "    - This is indented four spaces" +
      "    - You might want to consider making a new list." +
      "3.  Item 3" +
      "</code></pre>" +
      "<p>This behavior is consistent with the original spec but differs from other implementations such as GFM or commonmark. Prior to version 1.5, you just needed to indent two spaces for it to be considered a sublist." +
      "You can disable the <strong>four spaces requirement</strong> with option <strong><code>disableForced4SpacesIndentedSublists</code></strong></p>" +
      "<p>To nest a third (or more) sublist level, you need to indent 4 extra spaces (or 1 extra tab) for each level.</p>" +
      "<pre><code class='md language-md'>1.  level 1" +
      "    1.  Level 2" +
      "        - Level 3" +
      "    2.  level 2" +
      "        1.  Level 3" +
      "1.  Level 1" +
      "</code></pre>" +
      "<h3 id='nestedcodeblocks'>Nested code blocks</h3>" +
      "<p>You can nest fenced codeblocks the same way you nest other block elements, by indenting by fours spaces or a tab:</p>" +
      "<pre><code class='md language-md'>1.  Some code:" +
      "    ```js" +
      "    var foo = 'bar';" +
      "    console.log(foo);" +
      "    ```" +
      "</code></pre>" +
      "<p>To put a <em>indented style</em> code block within a list item, the code block needs to be indented twice — 8 spaces or two tabs:</p>" +
      "<pre><code class='md language-md'>1.  Some code:" +
      "    var foo = 'bar';" +
      "    console.log(foo);" +
      "</code></pre>" +
      "<h2 id='links'>Links</h2>" +
      "<h3 id='simple'>Simple</h3>" +
      "<p>If you wrap a valid URL or email in <code>&lt;&gt;</code> it will be turned into a link whose text is the link itself.</p>" +
      "<pre><code class='md language-md'>link to &lt;http://www.google.com/&gt;" +
      "this is my email &lt;somedude@mail.com&gt;" +
      "</code></pre>" +
      "<p>In the case of email addreses, Showdown will also perform a bit of randomized decimal and hex entity-encoding to help obscure your address from address-harvesting spambots." +
      "You can disable this obfuscation setting <strong><code>encodeEmails</code></strong> option to <code>false</code>.</p>" +
      "<p>With the option <strong><code>simplifiedAutoLink</code></strong> enabled, Showdown will automagically turn every valid URL it finds in the text body to links for you, without the need to wrap them in <code>&lt;&gt;</code>.</p>" +
      "<pre><code class='md language-md'>link to http://www.google.com/" +
      "this is my email somedude@mail.com" +
      "</code></pre>" +
      "<h3 id='inline'>Inline</h3>" +
      "<p>You can create an inline link by wrapping link text in brackets ( <code>[ ]</code> ), and then wrapping the link in parentheses ( <code>( )</code> ).</p>" +
      "<p>For example, to create a hyperlink to github.com/showdownjs/showdown, with a link text that says, Get Showdown!, you'd write this in Markdown: <code>[Get Showdown!](https://github.com/showdownjs/showdown)</code>.</p>" +
      "<h3 id='referencestyle'>Reference Style</h3>" +
      "<p>You can also use the reference style, like this:</p>" +
      "<pre><code class='md language-md'>this is a [link to google][1]" +
      "[1]: www.google.com" +
      "</code></pre>" +
      "<p>Showdown also supports implicit link references:</p>" +
      "<pre><code class='md language-md'>this is a link to [google][]" +
      "[google]: www.google.com" +
      "</code></pre>" +
      "<h2 id='images'>Images</h2>" +
      "<p>Markdown uses an image syntax that is intended to resemble the syntax for links, also allowing for two styles: inline and reference.</p>" +
      "<h3 id='inline-1'>Inline</h3>" +
      "<p>Inline image syntax looks like this:</p>" +
      "<pre><code class='md language-md'>![Alt text](url/to/image)" +
      "![Alt text](url/to/image 'Optional title')" +
      "</code></pre>" +
      "<p>That is:</p>" +
      "<ul>" +
      "<li>An exclamation mark: !;</li>" +
      "<li>followed by a set of square brackets, containing the alt attribute text for the image;</li>" +
      "<li>followed by a set of parentheses, containing the URL or path to the image, and an optional title attribute enclosed in double or single quotes.</li>" +
      "</ul>" +
      "<h3 id='referencestyle-1'>Reference Style</h3>" +
      "<p>Reference-style image syntax looks like this:</p>" +
      "<pre><code class='md language-md'>![Alt text][id]" +
      "</code></pre>" +
      "<p>Where “id” is the name of a defined image reference. Image references are defined using syntax identical to link references:</p>" +
      "<pre><code class='md language-md'>[id]: url/to/image 'Optional title attribute'" +
      "</code></pre>" +
      "<p>Implicit references are also supported in images, similar to what happens with links:</p>" +
      "<pre><code class='md language-md'>![showdown logo][]" +
      "[showdown logo]: http://showdownjs.github.io/demo/img/editor.logo.white.png" +
      "</code></pre>" +
      "<h3 id='imagedimensions'>Image dimensions</h3>" +
      "<p>When the option <strong><code>parseImgDimension</code></strong> is activated, you can also define the image dimensions, like this:</p>" +
      "<pre><code class='md language-md'>![Alt text](url/to/image =250x250 'Optional title')" +
      "</code></pre>" +
      "<p>or in reference style:</p>" +
      "<pre><code class='md language-md'>![Alt text][id]" +
      "[id]: url/to/image =250x250" +
      "</code></pre>" +
      "<h3 id='base64encodedimages'>Base64 encoded images</h3>" +
      "<p>Showdown also supports Base64 encoded images, both reference and inline style." +
      "<strong>Since version 1.7.4</strong>, wrapping base64 strings, which are usually extremely long lines of text, is supported." +
      "You can add newlines arbitrarily, as long as they are added after the <code>,</code> character.</p>" +
      "<p><strong>inline style</strong></p>" +
      "<pre><code class='md language-md'>![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l" +
      "jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAY" +
      "SURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=)" +
      "</code></pre>" +
      "<p><strong>reference style</strong></p>" +
      "<pre><code class='md language-md'>![Alt text][id]" +
      "[id]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l" +
      "jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D" +
      "AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=" +
      "</code></pre>" +
      "<p>Please note that with reference style base64 image sources, regardless of 'wrapping', a double newline is needed after the base64 string to separate them from a paragraph or other text block (but references can be adjacent).</p>" +
      "<p><strong>wrapped reference style</strong></p>" +
      "<pre><code class='md language-md'>![Alt text][id]" +
      "![Alt text][id2]" +
      "[id]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l" +
      "jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D" +
      "AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=" +
      "[id2]:" +
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l" +
      "jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D" +
      "AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=" +
      "this text needs to be separated from the references by 2 newlines" +
      "</code></pre>" +
      "<h2 id='tables'>Tables</h2>" +
      "<p>Tables aren't part of the core Markdown spec, but they are part of GFM and Showdown supports them by turning on the option <code>tables</code>.</p>" +
      "<p>Colons can be used to align columns.</p>" +
      "<p>In the new version, the outer pipes (<code>|</code>) are optional, matching GFM spec.</p>" +
      "<p>You also don't need to make the raw Markdown line up prettily.</p>" +
      "<p>You can also use other markdown syntax inside them.</p>" +
      "<pre><code class='md language-md'>| Tables        |      Are      |  Cool |" +
      "| ------------- | :-----------: | ----: |" +
      "| **col 3 is**  | right-aligned | $1600 |" +
      "| col 2 is      |  _centered_   |   $12 |" +
      "| zebra stripes | ~~are neat~~  |    $1 |" +
      "</code></pre>" +
      "<h2 id='mentions'>Mentions</h2>" +
      "<p>Showdown supports github mentions by enabling the option <strong><code>ghMentions</code></strong>. This will turn every <code>@username</code> into a link to their github profile.</p>" +
      "<pre><code class='md language-md'>hey @tivie, check this out" +
      "</code></pre>" +
      "<p>Since version 1.6.2 you can customize the generated link in mentions with the option <strong><code>ghMentionsLink</code></strong>." +
      "For instance, setting this option to <code>http://mysite.com/{u}/profile</code>:</p>" +
      "<pre><code class='html language-html'>&lt;p&gt;hey &lt;a href='http://mysite.com/tivie/profile'&gt;@tivie&lt;/a&gt;, check this out&lt;/p&gt;" +
      "</code></pre>" +
      "<h2 id='handlinghtmlinmarkdowndocuments'>Handling HTML in markdown documents</h2>" +
      "<p>Showdown, in most cases, leaves HTML tags alone, leaving them untouched in the output document.</p>" +
      "<pre><code class='md language-md'>some markdown **here**" +
      "&lt;div&gt;this is *not* **parsed**&lt;/div&gt;" +
      "</code></pre>" +
      "<pre><code class='html language-html'>&lt;p&gt;some markdown &lt;strong&gt;here&lt;/strong&gt;&lt;/p&gt;" +
      "&lt;div&gt;this is *not* **parsed**&lt;/div&gt;" +
      "</code></pre>" +
      "<p>However, there are exceptions to this. With <code>&lt;code&gt;</code> and <code>&lt;pre&gt;&lt;code&gt;</code> tags, their contents are always escaped.</p>" +
      "<pre><code class='md language-md'>some markdown **here** with &lt;code&gt;foo &amp; bar &lt;baz&gt;&lt;/baz&gt;&lt;/code&gt;" +
      "</code></pre>" +
      "<pre><code class='html language-html'>&lt;p&gt;" +
      "  some markdown &lt;strong&gt;here&lt;/strong&gt; with" +
      "  &lt;code&gt;foo &amp;amp; bar &amp;lt;baz&amp;gt;&amp;lt;/baz&amp;gt;&lt;/code&gt;" +
      "&lt;/p&gt;" +
      "</code></pre>" +
      "<p>If you wish to enable markdown parsing inside a specific HTML tag, you can enable it by using the html attribute <strong><code>markdown</code></strong> or <strong><code>markdown='1'</code></strong> or <strong><code>data-markdown='1'</code></strong>.</p>" +
      "<pre><code class='md language-md'>some markdown **here**" +
      "&lt;div markdown='1'&gt;this is *not* **parsed**&lt;/div&gt;" +
      "</code></pre>" +
      "<pre><code class='html language-html'>&lt;p&gt;some markdown &lt;strong&gt;here&lt;/strong&gt;&lt;/p&gt;" +
      "&lt;div markdown='1'&gt;" +
      "  &lt;p&gt;this is &lt;em&gt;not&lt;/em&gt; &lt;strong&gt;parsed&lt;/strong&gt;&lt;/p&gt;" +
      "&lt;/div&gt;" +
      "</code></pre>" +
      "<h2 id='escapingentities'>Escaping entities</h2>" +
      "<h3 id='escapingmarkdownentities'>Escaping markdown entities</h3>" +
      "<p>Showdown allows you to use backslash (<code>//</code>) escapes to generate literal characters which would otherwise have special meaning in markdown’s syntax. For example, if you wanted to surround a word with literal underscores (instead of an HTML <code>&lt;em&gt;</code> tag), you can use backslashes before the unserscores, like this:</p>" +
      "<pre><code class='md language-md'>//_literal underscores//_" +
      "</code></pre>" +
      "<p>Showdown provides backslash escapes for the following characters:</p>" +
      "<pre><code>//   backslash" +
      "`   backtick" +
      "*   asterisk" +
      "_   underscore" +
      "{}  curly braces" +
      "[]  square brackets" +
      "()  parentheses" +
      "#   hash mark" +
      "+   plus sign" +
      "-   minus sign (hyphen)" +
      ".   dot" +
      "!   exclamation mark" +
      "</code></pre>" +
      "<h3 id='escapinghtmltags'>Escaping HTML tags</h3>" +
      "<p>Since <a href='https://github.com/showdownjs/showdown/tree/1.7.2'>version 1.7.2</a> backslash escaping HTML tags is supported when <code>backslashEscapesHTMLTags</code> option is enabled.</p>" +
      "<pre><code class='md language-md'>//&lt;div&gt;a literal div//&lt;/div&gt;" +
      "</code></pre>" +
      "<h2 id='knowndifferencesandgotchas'>Known differences and Gotchas</h2>" +
      "<p>In most cases, Showdown's output is identical to that of Perl Markdown v1.0.2b7. What follows is a list of all known deviations. Please file an issue if you find more.</p>" +
      "<ul>" +
      "<li><p><strong>Since version 1.4.0, showdown supports the markdown='1' attribute</strong>, but for older versions, this attribute is ignored. This means:</p>" +
      "<pre><code>&lt;div markdown='1'&gt;" +
      "     Markdown does *not* work in here." +
      "&lt;/div&gt;" +
      "</code></pre></li>" +
      "<li><p>You can only nest square brackets in link titles to a depth of two levels:</p>" +
      "<pre><code>[[fine]](http://www.github.com/)" +
      "[[[broken]]](http://www.github.com/)" +
      "</code></pre>" +
      "<p>If you need more, you can escape them with backslashes.</p></li>" +
      "<li><p>A list is <strong>single paragraph</strong> if it has only <strong>1 line-break separating items</strong> and it becomes <strong>multi paragraph if ANY of its items is separated by 2 line-breaks</strong>:</p></li>" +
      "</ul>" +
      "<pre><code class='md language-md'>  - foo" +
      "  - bar" +
      "  - baz" +
      "</code></pre>" +
      "<p>becomes</p>" +
      "<pre><code class='html language-html'>  &lt;ul&gt;" +
      "    &lt;li&gt;&lt;p&gt;foo&lt;/p&gt;&lt;/li&gt;" +
      "    &lt;li&gt;&lt;p&gt;bar&lt;/p&gt;&lt;/li&gt;" +
      "    &lt;li&gt;&lt;p&gt;baz&lt;/p&gt;&lt;/li&gt;" +
      "  &lt;/ul&gt;" +
      "</code></pre>" +
      "<p>This new ruleset is based on the comments of Markdown's author John Gruber in the <a href='https://pairlist6.pair.net/mailman/listinfo/markdown-discuss'>Markdown discussion list</a>.</p>",
  };
});
