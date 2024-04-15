# Useful links

[WP admin](https://vitalsignscontenteditor.co.uk/wp-admin)
[Vercel Deploy](https://vercel.com/jones58s-projects/vital-signs/settings/domains)
[Live site](https://www.vitalsignsmag.org/)
[Are.na inspo](https://www.are.na/jack-kershaw/vitalsigns)

# To do

- Remove Vercel bits from template and style own way.

  - go over files in:

    - components

      - [] cover-image
      - [x] date
      - [x] footer
      - [x] header
      - [] hero-post
      - [x] layout
      - [x] meta
      - [x] more-stories
      - [] post-body.module.css
      - [] post-body
      - [] post-header
      - [x] post-preview
      - [] post-title
      - [x] section-separator
      - [] tags

    - lib
      - [] api.ts
    - pages

      - [] \_app
      - [] \_document
      - [x] index

    - [x] tailwind.config.js

- add font
- add tailwind typography and use the prose classname
- add iconify for icons.
- Get logo from client and add favicon in public/favicon - use [this](https://frontendmasters.com/blog/how-to-favicon-in-2024/) to build it.

- Add Categories

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

- change isr time - revalidate: 600 etc. in getstaticprops, basically time to rerender blog content. Test this.

- use app router

- use built in nextjs components

- manage metadata dynamically for better SEO and user experience.

- SEO

- Google Lighthouse

- Work out why images not loading on Vercel Deployment.
