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

- Improved the site's SEO using [the NextJS docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata). I added static metadata to the Layout file, as well as dynamic metadata for each page. I used [OpenGraph.xyz](https://www.opengraph.xyz) to test how links would appear when shared on social media.

- Added MIT License.

- RSS: I have kept this simple and just added a link to the RSS feed that Worpdress generates rather than creating something in NextJS. I created a /feed page in NextJS which automatically redirects to this URL, to enable the same sort of functionality in NextJS that Wordpress offers.

- Added a custom 404 page to the site, using a page titled 404 in the NextJS pages router.

- Added a read more button to the bottom of the home page which links to the news page.

- Used framer motion to add animation to my header opening and closing on mobile. Because of the nature of animating this, I found it simpler to have separate code for mobile and desktop here.

- Ran Google Lighthouse to improve Accessibility, reaching a score of 100 after the following edits:

  - Added aria-label for menu button in header on mobile, and other links in header.
  - make main top level component in layout

- updated to latest version of nextjs

- Made layout changes across the site. I went for a mobile-first approach to this, making sure the mobile site looked clean and used up the available width before moving to desktop.

- When the client asked me make the red of the page brighter, I was inititally a bit worried since using bright colours can reduce accessibility. I used [Tailwind Shades](https://www.tailwindshades.com/#color=360%2C84.68085106382979%2C46.07843137254902&step-up=6&step-down=12&hue-shift=10&name=crimson&base-stop=7&v=1&overrides=eyIwLjUiOnsiaHVlIjowLCJzYXR1cmF0aW9uIjotMSwibGlnaHRuZXNzIjotMSwiaGV4IjoiRjlCOUI5IiwidGV4dENvbG9yIjoiYmxhY2sifX0%3D) to help me iterate through different options. Using the same colour name I had used across the site already,"orange", as the colour to extend while testing worked well and helped me see live updates across the site quickly.I consulted the WCAG Contrast Checker (available as a Firefox extension) and was able to reach a set of colours I was happy with.

- I came across some interesting image animations on [EF Pro Cycling](https://efprocycling.com/tips-recipes/team-recipe-on-the-bike-rice-cakes/) and decided I wanted to emulate these on my site to add some more interactivity. I built something similar using Tailwind:

```css
hover: scale-110 transition-transform duration-300 ease-in-out;
```

and then wrapped this in a div with overflow-hidden to make sure the image didn't overflow it's original container.

- Added social share icons at the bottom of each article to increase potential reach. I also moved the social icons to the footer as well as the header, to improve click-through rate.

- I created a [guide](https://docs.google.com/document/d/15b1BsL_N7juXm-dLcq64IQnLwN_tcb6rK1kKYZ3LF5o/edit?usp=sharing) for the client to help them understand how to edit the site.

## Run Next.js in development mode:

```bash
npm install
npm run dev
```

## Useful links

[WP admin](https://vitalsignscontenteditor.co.uk/wp-admin)
[Vercel Deploy](https://vercel.com/jones58s-projects/vital-signs/settings/domains)
[Live site](https://www.vitalsignsmag.org/)
[Are.na inspo here](https://www.are.na/jack-kershaw/vitalsigns)
and [use this website built in nextjs as a guide](https://www.stylist.co.uk/)

# Roadmap/To Do

# API Issues

## More stories

Fix API so more stories include three next ones just three most recent. Tbh should do this by fetching the post, then fetching the posts for more stories in two separate queries. Rather than at the moment one query and another for getting cursor. So should be one query, which returns a cursor and the post, and then another query, which returns the next 3 posts.

## News

- List all the categories at top with API.
- Click on category to get just articles for that category.[see this solution](https://stackoverflow.com/questions/73687998/how-to-get-related-post-by-category-in-headless-wordpressgraphql).
- If doesn't work, could just have page for each category maybe.

## PDF

- Issues page which just has the PDFS of the issues - i.e anything tagged PDF. Tbh it should also have articles from latest issue all clustered together - like issue 1 issues. There will be a way to do this dynamically. Edit in API.
- If necessary, can just have a page for all the PDF issues/one for each. Simpler to embed the PDF then too.
  //
  ( clarify this on word doc) If you want to add something as a pdf, you should add it as a post within Wordpress, making sure to set the category to the appropiate issue or leaflets, and then add PDF as a tag.

## Slug/ posts

- PDFs - Work out how to show these when it's a pdf embedded in an article - see testpdf post. Show the PDF as an embedded PDF not just a link. Way of sorting links so that if it has pdf in it it's embedded?

# Other

- check alt text comes through from wordpress.
