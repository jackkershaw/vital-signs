(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={533:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>P,default:()=>b,getServerSideProps:()=>N,getStaticPaths:()=>y,getStaticProps:()=>S,reportWebVitals:()=>T,routeModule:()=>D,unstable_getServerProps:()=>E,unstable_getServerSideProps:()=>A,unstable_getStaticParams:()=>I,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>_});var r={};s.r(r),s.d(r,{default:()=>j,getStaticProps:()=>v});var a=s(7093),i=s(5244),n=s(1323),l=s(7645),o=s(6814),c=s(997),d=s(7145),u=s(5290),x=s(7518),g=s(1664),m=s.n(g);function p({title:e,coverImage:t,date:s,excerpt:r,slug:a}){return(0,c.jsxs)("section",{children:[c.jsx("div",{className:"mb-8",children:t&&c.jsx(x.Z,{title:e,coverImage:t,slug:a})}),(0,c.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",children:[(0,c.jsxs)("div",{children:[c.jsx("h3",{className:"mb-4 text-4xl lg:text-6xl leading-tight",children:c.jsx(m(),{href:`/posts/${a}`,className:"hover:underline",dangerouslySetInnerHTML:{__html:e}})}),c.jsx("div",{className:"mb-4 md:mb-0 text-lg",children:c.jsx(u.Z,{dateString:s})})]}),c.jsx("div",{children:c.jsx("div",{className:"text-lg leading-relaxed mb-4",dangerouslySetInnerHTML:{__html:r}})})]})]})}var h=s(6676),f=s(8484);function j({allPosts:{edges:e},preview:t}){let s=e[0]?.node,r=e.slice(1);return(0,c.jsxs)(h.Z,{children:[s&&c.jsx(p,{title:s.title,coverImage:s.featuredImage,date:s.date,slug:s.slug,excerpt:s.excerpt}),r.length>0&&c.jsx(d.Z,{posts:r})]})}let v=async({preview:e=!1})=>({props:{allPosts:await (0,f.DT)(e),preview:e},revalidate:10}),b=(0,n.l)(r,"default"),S=(0,n.l)(r,"getStaticProps"),y=(0,n.l)(r,"getStaticPaths"),N=(0,n.l)(r,"getServerSideProps"),P=(0,n.l)(r,"config"),T=(0,n.l)(r,"reportWebVitals"),_=(0,n.l)(r,"unstable_getStaticProps"),w=(0,n.l)(r,"unstable_getStaticPaths"),I=(0,n.l)(r,"unstable_getStaticParams"),E=(0,n.l)(r,"unstable_getServerProps"),A=(0,n.l)(r,"unstable_getServerSideProps"),D=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:r})},7518:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(997),a=s(5675),i=s.n(a),n=s(1664),l=s.n(n);function o({title:e,coverImage:t,slug:s}){let a=r.jsx(i(),{width:2e3,height:1e3,alt:e,src:t?.node.sourceUrl,className:"hover:shadow-medium transition-shadow duration-200"});return r.jsx("div",{className:"sm:mx-0",children:s?r.jsx(l(),{href:`/posts/${s}`,"aria-label":e,children:a}):a})}},5290:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(997),a=s(7922),i=s(5515);function n({dateString:e}){let t=(0,a.Z)(e);return r.jsx("time",{dateTime:e,children:(0,i.Z)(t,"LLLL	d, yyyy")})}},6676:(e,t,s)=>{"use strict";s.d(t,{Z:()=>g});var r=s(997),a=s(1664),i=s.n(a),n=s(5675),l=s.n(n);function o(){return r.jsx("div",{children:(0,r.jsxs)("div",{className:"mx-auto container px-5 flex flex-row justify-between my-10 space-x-10 text-3xl",children:[r.jsx(l(),{src:"/images/banner-draft.png",alt:"logo",width:300,height:200}),(0,r.jsxs)("div",{className:"flex flex-row space-x-10 h-20 items-center justify-center my-10",children:[r.jsx(i(),{href:"/About",className:"bg-accent-1 p-4",children:"ABOUT"}),r.jsx(i(),{href:"/News",className:"bg-accent-1 p-4",children:"NEWS"}),r.jsx(i(),{href:"/Issues",className:"bg-accent-1 p-4",children:"ISSUES"}),r.jsx(i(),{href:"/Contact",className:"bg-accent-1 p-4",children:"CONTACT"}),r.jsx("div",{className:"bg-accent-1 p-4",children:"F, T, I links"})]})]})})}function c(){return r.jsx("footer",{className:"bg-accent-1 border-t border-accent-2 w-full",children:r.jsx("div",{className:"py-28 flex flex-col lg:flex-row items-center mx-auto container px-5",children:"This is the footer"})})}var d=s(968),u=s.n(d);function x(){return(0,r.jsxs)(u(),{children:[r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),r.jsx("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),r.jsx("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),r.jsx("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),r.jsx("meta",{name:"msapplication-TileColor",content:"#000000"}),r.jsx("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),r.jsx("meta",{name:"theme-color",content:"#000"}),r.jsx("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),r.jsx("meta",{name:"description",content:"Vital Signs Magazine"})]})}function g({children:e}){return(0,r.jsxs)("div",{children:[r.jsx(u(),{children:r.jsx("title",{children:"Vital Signs Magazine"})}),r.jsx(x,{}),r.jsx(o,{}),r.jsx("div",{className:"min-h-screen container mx-auto px-5",children:r.jsx("main",{children:e})}),r.jsx(c,{})]})}},7145:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var r=s(997),a=s(5290),i=s(7518),n=s(1664),l=s.n(n);function o({title:e,coverImage:t,date:s,excerpt:n,slug:o}){return(0,r.jsxs)("div",{children:[r.jsx("div",{className:"mb-5",children:t&&r.jsx(i.Z,{title:e,coverImage:t,slug:o})}),r.jsx("h3",{className:"text-3xl mb-3 leading-snug",children:r.jsx(l(),{href:`/posts/${o}`,className:"hover:underline",dangerouslySetInnerHTML:{__html:e}})}),r.jsx("div",{className:"text-lg mb-4",children:r.jsx(a.Z,{dateString:s})}),r.jsx("div",{className:"text-lg leading-relaxed mb-4",dangerouslySetInnerHTML:{__html:n}})]})}function c({posts:e}){return r.jsx("section",{children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:e.map(({node:e})=>r.jsx(o,{title:e.title,coverImage:e.featuredImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug))})})}},8484:(e,t,s)=>{"use strict";s.d(t,{DT:()=>n,ds:()=>l,h9:()=>i});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(s.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(r,{headers:s,method:"POST",body:JSON.stringify({query:e,variables:t})}),i=await a.json();if(i.errors)throw console.error(i.errors),Error("Failed to fetch API");return i.data}async function i(){let e=await a(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);return e?.posts}async function n(e){let t=await a(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,{variables:{onlyEnabled:!e,preview:e}});return t?.posts}async function l(e,t,s){let r=t&&s?.post,i=Number.isInteger(Number(e))?Number(e)===r.id:e===r.slug,n=i&&r?.status==="draft",l=i&&r?.status==="publish",o=await a(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${l?`
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `:""}
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,{variables:{id:n?r.id:e,idType:n?"DATABASE_ID":"SLUG"}});if(n&&(o.post.slug=r.id),l&&o.post.revisions){let e=o.post.revisions.edges[0]?.node;e&&Object.assign(o.post,e),delete o.post.revisions}return o.posts.edges=o.posts.edges.filter(({node:t})=>t.slug!==e),o.posts.edges.length>2&&o.posts.edges.pop(),o}},6814:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(997);s(9517);let a=function({Component:e,pageProps:t}){return r.jsx(e,{...t})}},7645:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(997),a=s(6859);function i(){return(0,r.jsxs)(a.Html,{lang:"en",children:[r.jsx(a.Head,{}),(0,r.jsxs)("body",{children:[r.jsx(a.Main,{}),r.jsx(a.NextScript,{})]})]})}},9517:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,375],()=>s(533));module.exports=r})();