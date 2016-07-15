# Ghost Theme Boilterplate with Sass + Webpack

I wanted a Ghost theme boilerplate with ES6, modules, and Sass, but couldn't
find one. So I built this.

## Usage
- Clone the repo down
- Run `npm install`
- Symlink `dist` into `ghost/content/themes`:
  `ln -s /path/to/dist /path/to/ghost/content/myNewTheme`
- Restart ghost
- Go to `localhost:2368/ghost/settings/general` and set Theme to your new theme
- Optional: Install the [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
- Modify handlebars templates in dist; JS & Sass in src

## TODO
- Add [sass-module-importer](https://www.npmjs.com/package/sass-module-importer)
- Minify/Uglify JS in build process
