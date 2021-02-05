# Bedrock

> Created by Robert Forbes ([@roboticdinosaur](https://twitter.com/roboticdinosaur) and is based on the work by Stephanie Eckles ([@5t3ph](https://twitter.com/5t3ph)) and Thanh Tran ([@trongthanh](https://twitter.com/trongthanh)) as well as some others.


## Quick Start

1. [Generate a repo from this template](https://github.com/roboticdinosaur/bedrock/generate)
   which will copy this project into your own new repo.

1. Once cloned, run `npm install` to install 11ty and other dependencies. Then run `npm start` to run both 11ty and sass in watch
   mode. Use `npm run build` to run a production version, which will also generate social share
   preview images.

1. Open `src/_data/*.json` and adjust the values as required.

1. Edit `src/_includes/home.njk` to change the home page - including changing the template type if desired -
   and then create content within `src/pages` using any templating format you prefer to add content.

1. Review the [11ty documentation](https://11ty.dev) to more deeply apply customizations, including
   adding custom data sources and reviewing what template languages are available.

### Is Netlify hosting required?

It's not required, but highly recommended, and is also how the build process is setup to run
against.

## Development Scripts

**`npm start`**

> Run 11ty with hot reload at localhost:8080

**`npm run build`**

> Production build includes minified, autoprefixed CSS and social preview image generation

Use this as the "Publish command" if needed by hosting such as Netlify.

## Feedback welcome!

You can [file it as an issue](https://github.com/roboticdinosaur/bedrock/issues).


