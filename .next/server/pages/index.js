(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={8801:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>_,default:()=>S,getServerSideProps:()=>P,getStaticPaths:()=>w,getStaticProps:()=>y,reportWebVitals:()=>I,routeModule:()=>R,unstable_getServerProps:()=>D,unstable_getServerSideProps:()=>k,unstable_getStaticParams:()=>A,unstable_getStaticPaths:()=>E,unstable_getStaticProps:()=>T});var r={};s.r(r),s.d(r,{default:()=>b,getStaticProps:()=>N});var a=s(7093),n=s(5244),i=s(1323),l=s(7645),o=s(6814),c=s(997),d=s(2178);function x({posts:e}){let t=e.slice(0,4);return c.jsx("section",{children:c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 gap-y-5",children:t.map(({node:e})=>c.jsx(d.Z,{title:e.title,coverImage:e.featuredImage,slug:e.slug,excerpt:e.excerpt,category:e.categories.nodes.map(e=>e.name)},e.slug))})})}var g=s(5675),u=s.n(g),h=s(1664),m=s.n(h);function p({title:e,heroImage:t,slug:s}){let r=c.jsx(u(),{fill:!0,alt:e,src:t?.node.sourceUrl,className:"object-cover object-center w-50 h-70"});return c.jsx("div",{className:"sm:mx-0 relative min-w-[40vw] sm:min-h-[80vh]",children:s?c.jsx(m(),{href:`/posts/${s}`,"aria-label":e,children:r}):r})}function f({title:e,heroImage:t,excerpt:s,slug:r,category:a}){return(0,c.jsxs)("section",{className:"p-5 ",children:[(0,c.jsxs)(m(),{href:`/posts/${r}`,className:"text-lg font-bold text-primary-500",children:[" ",(0,c.jsxs)("div",{className:"bg-orange-700 mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500",children:[" ","Read the Latest Issue"]})]}),c.jsx("div",{className:"mb-3",children:t&&c.jsx(p,{title:e,heroImage:t,slug:r})}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[c.jsx("h1",{className:"text-right",children:a}),c.jsx("h3",{className:"mb-3 text-2xl lg:text-3xl text-orange-700 hover:text-orange-950 active:text-orange-500",children:c.jsx(m(),{href:`/posts/${r}`,dangerouslySetInnerHTML:{__html:e}})})]}),c.jsx("div",{children:c.jsx("div",{className:"text-lg font-serif mb-4",dangerouslySetInnerHTML:{__html:s}})})]})]})}var j=s(6676),v=s(8484);function b({allPosts:{edges:e},preview:t}){let s=e[0]?.node,r=e.slice(1);return c.jsx(j.Z,{children:(0,c.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[s&&c.jsx(f,{title:s.title,heroImage:s.featuredImage,slug:s.slug,excerpt:s.excerpt,category:s.categories.nodes.map(e=>e.name)}),r.length>0&&c.jsx(x,{posts:r})]})})}let N=async({preview:e=!1})=>({props:{allPosts:await (0,v.DT)(e),preview:e},revalidate:10}),S=(0,i.l)(r,"default"),y=(0,i.l)(r,"getStaticProps"),w=(0,i.l)(r,"getStaticPaths"),P=(0,i.l)(r,"getServerSideProps"),_=(0,i.l)(r,"config"),I=(0,i.l)(r,"reportWebVitals"),T=(0,i.l)(r,"unstable_getStaticProps"),E=(0,i.l)(r,"unstable_getStaticPaths"),A=(0,i.l)(r,"unstable_getStaticParams"),D=(0,i.l)(r,"unstable_getServerProps"),k=(0,i.l)(r,"unstable_getServerSideProps"),R=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:r})},7518:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(997),a=s(5675),n=s.n(a),i=s(1664),l=s.n(i);function o({title:e,coverImage:t,slug:s}){let a=r.jsx(n(),{fill:!0,alt:e,src:t?.node.sourceUrl,className:"object-cover object-center"});return r.jsx("div",{className:"mx-0 relative w-[90vw] h-[40vh] sm:w-[22vw] sm:h-[25vh]",children:r.jsx("div",{className:"flex-row flex justify-end items-center",children:s?r.jsx(l(),{href:`/posts/${s}`,"aria-label":e,children:a}):a})})}},6676:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(997),a=s(1664),n=s.n(a),i=s(5675),l=s.n(i);function o(){return r.jsx("div",{className:"bg-orange-50 px-10 py-5 mb-10",children:(0,r.jsxs)("div",{className:"flex flex-row justify-between space-x-10 text-3xl bg-orange-50",children:[r.jsx(n(),{href:"/",children:r.jsx("div",{className:"min-w-[20vw] min-h-[20vh] relative",children:r.jsx(l(),{src:"/images/banner-draft.png",alt:"logo",fill:!0,className:"object-contain object-center"})})}),r.jsx("div",{className:"flex flex-col justify-end",children:(0,r.jsxs)("div",{className:"flex flex-row space-x-10 h-20 items-center justify-end w-full",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-8",children:[r.jsx(n(),{href:"/about",className:"text-orange-700 hover:text-orange-950 active:text-orange-500",children:"ABOUT"}),r.jsx(n(),{href:"/news",className:"text-orange-700 hover:text-orange-950 active:text-orange-500",children:"NEWS"}),r.jsx(n(),{href:"/issues",className:"text-orange-700 hover:text-orange-950 active:text-orange-500",children:"ISSUES"})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-6",children:[r.jsx("span",{className:"icon-[mdi--facebook] text-orange-700 hover:text-orange-950 active:text-orange-500"}),r.jsx("span",{className:"icon-[mdi--twitter] text-orange-700 hover:text-orange-950 active:text-orange-500"}),r.jsx("span",{className:"icon-[mdi--instagram] text-orange-700 hover:text-orange-950 active:text-orange-500"}),r.jsx("a",{href:"mailto:vitalsignsmag@proton.me",className:"flex-col flex justify-end items-end",children:r.jsx("span",{className:"icon-[mdi--email] text-orange-700 hover:text-orange-950 active:text-orange-500",children:" "})})]})]})})]})})}function c(){return r.jsx("footer",{className:"bg-orange-50 w-full",children:(0,r.jsxs)("div",{className:"p-10 mx-5 font-serif justify-between flex flex-row",children:[r.jsx("div",{children:r.jsx("p",{children:"Vital signs is a project. "})}),(0,r.jsxs)("div",{className:"text-right",children:[(0,r.jsxs)("p",{children:["Site by"," ",r.jsx("a",{href:"https://www.jackkershaw.net",target:"_blank",className:"font-bold text-orange-700 hover:text-orange-950 active:text-orange-500",children:"Jack Kershaw."})]}),(0,r.jsxs)("p",{children:["Source on"," ",r.jsx("a",{href:"https://github.com/jones58/vital-signs",target:"_blank",className:"font-bold text-orange-700 hover:text-orange-950 active:text-orange-500",children:"Github."})]})]})]})})}var d=s(968),x=s.n(d);function g(){return(0,r.jsxs)(x(),{children:[r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),r.jsx("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),r.jsx("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),r.jsx("meta",{name:"msapplication-TileColor",content:"#000000"}),r.jsx("meta",{name:"theme-color",content:"#000"}),r.jsx("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),r.jsx("meta",{name:"description",content:"Vital Signs Magazine"})]})}function u({children:e}){return(0,r.jsxs)("div",{children:[r.jsx(x(),{children:r.jsx("title",{children:"Vital Signs Magazine"})}),r.jsx(g,{}),r.jsx(o,{}),r.jsx("div",{className:"bg-neutral-50 text-orange-950",children:r.jsx("div",{className:"px-10",children:r.jsx("main",{children:e})})}),r.jsx(c,{})]})}},2178:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(997),a=s(7518),n=s(1664),i=s.n(n);function l({title:e,coverImage:t,excerpt:s,slug:n,category:l}){return(0,r.jsxs)("div",{className:"p-5",children:[r.jsx("div",{className:"mb-4",children:t&&r.jsx(a.Z,{title:e,coverImage:t,slug:n})}),r.jsx("h1",{className:"text-right",children:l}),r.jsx("h3",{className:"text-2xl mb-4 text-orange-700 hover:text-orange-950",children:r.jsx(i(),{href:`/posts/${n}`,dangerouslySetInnerHTML:{__html:e}})}),r.jsx("div",{className:"mb-4 font-serif",dangerouslySetInnerHTML:{__html:s}})]})}},8484:(e,t,s)=>{"use strict";s.d(t,{DT:()=>i,ds:()=>l,h9:()=>n,vx:()=>o});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(s.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(r,{headers:s,method:"POST",body:JSON.stringify({query:e,variables:t})}),n=await a.json();if(n.errors)throw console.error(n.errors),Error("Failed to fetch API");return n.data}async function n(){let e=await a(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);return e?.posts}async function i(e){let t=await a(`
    query AllPosts {
      posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            categories {
              nodes {
                name
              }
            }
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `,{variables:{onlyEnabled:!e,preview:e}});return t?.posts}async function l(e,t,s){let r=t&&s?.post,n=Number.isInteger(Number(e))?Number(e)===r.id:e===r.slug,i=n&&r?.status==="draft",l=n&&r?.status==="publish",o=await a(`
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
  `,{variables:{id:i?r.id:e,idType:i?"DATABASE_ID":"SLUG"}});return o.posts.edges=o.posts.edges.filter(({node:t})=>t.slug!==e),o.posts.edges.length>2&&o.posts.edges.pop(),o}async function o(e="about"){let t=await a(`
  query getAboutPageContent {
    pages(where: {name: "about"}) {
      nodes {
        content
      }
    }
  }
      `);return t?.pages?.nodes[0]?.content||""}},6814:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(997);s(9517);let a=function({Component:e,pageProps:t}){return r.jsx(e,{...t})}},7645:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(997),a=s(6859);function n(){return(0,r.jsxs)(a.Html,{lang:"en",children:[r.jsx(a.Head,{}),(0,r.jsxs)("body",{children:[r.jsx(a.Main,{}),r.jsx(a.NextScript,{})]})]})}},9517:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,637],()=>s(8801));module.exports=r})();