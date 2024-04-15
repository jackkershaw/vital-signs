# Planning

- Because the client was already confident using Wordpress for a previous site, I decided to use NextJS for the frontend with Headless Wordpress as the backend. There are several reasons for this over just traditional Wordpress - the primary ones being speed and security.

- NextJS allows me to use static regeneration - a hybrid of server side rendering and static site generation.

# Building

- As this is my first time using NextJS, I decided to use Vercel's NextJS and Wordpress example to bootstrap the project:

```bash
npx create-next-app --example cms-wordpress cms-wordpress-app
```

- Secured vitalsignsmag.org domain on Porkbun for 1 year.
- Got hostinger wordpress hosting with 1 year free domain, vitalsignsmagcontenteditor.in

- Installed the [WPGraphQL](https://www.wpgraphql.com/) plugin - which will be used to create an API for the posts.

- Added some dummy content - two posts - which will be used for testing.

  - Within these posts I added excerpts and featured images.

- Created an .env.local file and added the Wordpress API URL for WPGraphQL plugin. Added this to gitignore

# Debugging

g)

- Click the **Upload Plugin** button at the top of the page and upload the WPGraphQL plugin.

![Upload new plugin](./docs/plugins-upload-new.png)

- Once the plugin has been added, activate it from either the **Activate Plugin** button displayed after uploading or from the **Plugins** page.

![WPGraphQL installed](./docs/plugin-installed.png)

#### GraphiQL

The [WPGraphQL](https://www.wpgraphql.com/) plugin also gives you access to a GraphQL IDE directly from your WordPress Admin, allowing you to inspect and play around with the GraphQL API.
