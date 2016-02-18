Website Optimization Project
===
<br>

Synopsis
---
The goal of this **[Udacity](https://www.udacity.com/)** project is to optimize a website using techniques and tools that improve page loading speed and animation frame rates (details to follow). Following the Udacity's project rubric, optimizations were made to the index.html file and main.js file in the GitHub repo located **[here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)**.


Link
---
Access the optimized website **[here](http://genkibit.github.io/udacity-fend-website-optimization/)**.


Testing
---
The original and optimized portfolios were compared using Google PageSpeed and Chrome Developer Tools. Test results can be accessed **[here](https://drive.google.com/file/d/0B9fvKmX-nM0UQUZjZTlhSFVpQnc/view?usp=sharing)**.


PageSpeed score of 90 or better (index.html)
---
+ Scaled and compressed image files
+ Removed inline style attribute for pizzeria thumbnail image
+ Made profile and pizzeria image files served from a CDN
+ Minified and inlined all js code, including perfmatters.js
+ Switched to asynchronous script for Google Analytics
+ Implemented Google Fonts using `@font-face`
+ Adjusted unicode range in Google Font metadata to be specific for index.html
+ Inlined CSS code and customized it for index.html
+ Moved the print stylesheet code into the inlined CSS (`@media print{}`)
+ Minified the HTML and inlined CSS


Consistent 60 fps when scrolling (pizza.html)
---
+ Separated scroll events from direct draw calls in `updatePositions`
+ Wrapped `updatePositions` in a `requestAnimationFrame`
+ Used canvas element for moving pizzas background (main_canvas.js)
+ Refactored DOM-abusing code in `updatePositions` with canvas code
+ Placed layout updates and draw calls in separate loops to reduce reflow-repaint cycles
+ Restricted rendering of content to the dimensions of the screen
+ Reduced the number of background pizzas to 100 from 200
+ Compressed pizza.png
+ Used css `transform` rule (main_transform.js)


Bringing pizza resize time to under 5 ms (pizza.html)
---
+ Wrapped reflow-repaint `changePizzaSizes` in a `requestAnimationFrame`
+ Separated size update and draw calls in separate loops to reduced reflow-repaint cycles
+ Controlled rendering of pizza nodes using  JS controlled `hidden` style marker
+ Used event listeners to reduce the number of pizzas rendered when changing pizza sizes
+ Scaled down and compressed pizzeria.jpg


Used services and build tools
---
+ [Chrome Developer Tools](https://developer.chrome.com/home/devtools-pillar)
+ [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
+ [GoogleDocs](https://www.google.com/docs/about/)
+ [WebPageTest](http://www.webpagetest.org/)
+ [HTTP Compression Test](http://www.whatsmyip.org/http-compression-test/)
+ [Kraken](https://kraken.io/)
+ [Grunt](http://gruntjs.com/)


License
---
Read LICENSE.txt file.