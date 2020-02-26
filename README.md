<h1 align="center"> Contentful Image Optimiser </h1>

<hr/>

<p>The Contentful Image Optimiser is a lightweight module that will improve the speed and performance of any page that serves it's images via Contenful.</p>

<h3> List of features </h3>

<ul>
  <li>Automatically serves appropriate image size depending on device</li>
  <li>Allows you to specify specific image sizes</li>
  <li>Serves images in WebP format autimatically if browser support is available. Fallsback to original format if not supported</li>
</ul>



```html

This will return an image with it's width set to match the browser window width. It will also
automatically change it's format to WebP if supported

<img src="setAutoWidth(/imageURL.png)">

<hr>

This will return an image with a specified width

<img src="setFixedWidth(/imageURL.png, 350)">

```

<a href="https://github.com/suiteD1989/contentful-image-optimiser"> Link to repo </a>

<h3> Download & Installation </h3>

```shell
$ npm i contentful-image-optimiser
```
<h3>Author</h3>
<ul>
  <li>Daragh Cassidy</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License