Website Optimization Project
===


Description
---
The goal of this project is to optimize a website using strategies and tools that improve 
page  loading speed and animation frame rates. Files for the original website and is
located in the directory named "original-site".

Case studies have shown that poor website performance has been shown to negatively affect 
page conversions and SEO rankings. Image handling, the Document Object Model and Critical 
Rendering Path are fundamental concepts that must be applied when making web applications 
that provide a good user experience.


Optimized Website Link
---
**<https://noelnoche.github.io/udacity-fend-website-optimization>**


Testing
---
Performace is measured using Google PageSpeed and Chrome Developer Tools.  
View the results from the following link:

**<https://noelnoche.github.io/udacity-fend-website-optimization/test-results/>**


PageSpeed score of 90 or better (index.html)
---
+ Scaled and compressed image files
+ Removed inline style attribute for pizzeria thumbnail image
+ Changed source pizzaria image dimensions so browser does not rescale it
+ Made profile and pizzeria image files served from external url
+ Inlined all JavaScript code, including perfmatters.js
+ Switched to asynchronous script for Google Analytics
+ Implemented Google Fonts using `@font-face`
+ Adjusted unicode range in Google Font metadata to be specific for index.html
+ Made CSS specific to index.html
+ Moved the print stylesheet code into the inlined CSS (`@media print{}`)
+ Minified CSS, JavaScript and HTML code


Consistent 60 fps when scrolling (pizza.html, main_canvas.js, main_transform.js)
---
+ Separated scroll events from direct draw calls in `updatePositions`
+ Wrapped `updatePositions` in a `requestAnimationFrame`
+ Used canvas element for animating background (main_canvas.js)
+ Refactored DOM-abusing code in `updatePositions` with canvas code
+ Placed layout updates and draw calls in separate loops to reduce reflow-repaint cycles
+ Restricted rendering of content to the dimensions of the screen
+ Reduced the number of background pizzas to 50 from 200
+ Compressed pizza.png
+ Used css `transform` rule (main_transform.js)
+ Applied the translateZ(0) hack to force GPU usage


Bringing pizza resize time to under 5 ms (pizza.html)
---
+ Wrapped reflow-repaint `changePizzaSizes` in a `requestAnimationFrame`
+ Separated size update and draw calls in separate loops to reduced reflow-repaint cycles
+ Controlled rendering of pizza nodes using JS controlled `hidden` CSS style marker
+ Used event listeners to reduce the number of pizzas rendered when changing pizza sizes
+ Scaled down and compressed pizzeria.jpg image file


Services & Build Tools
---
+ [Chrome Developer Tools](https://developer.chrome.com/home/devtools-pillar)
+ [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
+ [WebPageTest](https://www.webpagetest.org/)
+ [HTTP Compression Test](http://www.whatsmyip.org/http-compression-test/)
+ [Kraken](https://kraken.io/web-interface)
+ [HTML Minifier](https://github.com/kangax/html-minifier)


License
---
Code provided under an **[MIT license](https://github.com/noelnoche/udacity-fend-website-optimization/blob/gh-pages/LICENSE.md)**.
