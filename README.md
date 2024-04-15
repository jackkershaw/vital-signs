# Planning

- Because the client was already confident using Wordpress for a previous site, I decided to use NextJS for the frontend with Headless Wordpress as the backend. There are several reasons for this over just traditional Wordpress - the primary ones being speed and security.

- NextJS allows me to use static regeneration - a hybrid of server side rendering and static site generation.

- Designed the site, first by sketching it and then building it in Figma.

# Building

- As this is my first time using NextJS, I decided to use Vercel's NextJS and Wordpress example to bootstrap the project:

```bash
npx create-next-app --example cms-wordpress cms-wordpress-app
```

- I was hesistant to use this example, because it might complicate the project and make it harder for me to work on it but in the end, I decided to use it, and make sure to read through the code to make sure I understood it.

- Secured vitalsignsmag.org domain on Porkbun for 1 year.
- Got Siteground wordpress hosting with 1 year free domain, vitalsignscontenteditor.co.uk

- Installed the [WPGraphQL](https://www.wpgraphql.com/) plugin - which will be used to create an API for the posts.

- Added some dummy content - two posts - which will be used for testing.

  - Within these posts I added excerpts and featured images.

- Created an .env.local file and added the Wordpress API URL for WPGraphQL plugin. Added this to gitignore

- Ran Next.js in development mode using the commands below.
  - This gave me an image error - but [the docs](https://nextjs.org/docs/messages/next-image-unconfigured-host) explained how to fix this by changing the domain path in the next.config.js file.
- Deployed on Vercel via Github, adding the environment variables.
- Removed the extra content from the Vercel example I bootstrapped this project off. I also made sure to read through the code to make sure I understood it.

# Debugging

# Running on your machine

### Run Next.js in development mode:

```bash
npm install
npm run dev
```
