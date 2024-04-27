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
- Added categories:
  - I decided to set up the following categories for posts on the site:
    - Working Conditions
    - International
    - Current Struggles
    - Debate
    - History
    - Leaflets
    - Newsletters
    - Meetings
    - Issue 1
    - Issue 2
    - Issue 3
- Added content
  - I used draft content supplied by the client to get some key posts on the site. I used stock images from Unsplash for now, to test the image sizing across the site.
- Added Charter and Libre Franklin fonts to the site. With Libre Franklin, although I only needed one font weight for the titles, this was my first time using a variable font and something I will definitely look at using again. It allowed rapid prototyping of font weight on the site.
- Added Iconify to the site via Tailwind.
- Read up about [Image components](https://nextjs.org/docs/pages/api-reference/components/image) in NextJS, and decided to use the following structure, wrapping the images in a div to better set their size:
  <div className="h-[20vh] w-[20vw] relative">
  <Image
              src="/images/banner-draft.png"
              alt="logo"
              fill
              className="object-cover"
            />
  </div>
- I found it particularly difficult to add category queries to the site, but after some time using the GraphQL IDE on Wordpress, I managed to edit the API and then reference the API in components.
- Added rudimentary favicon based off the banner design.
- I then set up the About page as something the client could edit in Wordpress. I used the GraphQL IDE in Wordpress to find and test the correct API command and then added the content to my about page.

  ```graphql
  query getAboutPageContent {
    pages(where: { name: "about" }) {
      nodes {
        content
      }
    }
  }
  ```

- I had an issue loading fonts when deployed on Vercel. Whilst it worked locally, I had to make some changes using Next/font to get it to work. The documentation [here](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts) proved very valuable.

- Added some animations with Framer Motion. For now, I have gone for a simple fade in from the bottom with a slight delay, between each page. This is wrapped around the layout component rather than the whole site. So, the header and footer are not animated.

# Running on your machine

### Run Next.js in development mode:

```bash
npm install
npm run dev
```
