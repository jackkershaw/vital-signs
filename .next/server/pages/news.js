"use strict";(()=>{var e={};e.id=134,e.ids=[134],e.modules={4613:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>h,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>p,getStaticProps:()=>g,reportWebVitals:()=>f,routeModule:()=>y,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>x});var a=s(7093),o=s(5244),n=s(1323),i=s(7645),l=s(6814),d=s(418),c=e([d]);d=(c.then?(await c)():c)[0];let u=(0,n.l)(d,"default"),g=(0,n.l)(d,"getStaticProps"),p=(0,n.l)(d,"getStaticPaths"),m=(0,n.l)(d,"getServerSideProps"),h=(0,n.l)(d,"config"),f=(0,n.l)(d,"reportWebVitals"),x=(0,n.l)(d,"unstable_getStaticProps"),S=(0,n.l)(d,"unstable_getStaticPaths"),v=(0,n.l)(d,"unstable_getStaticParams"),P=(0,n.l)(d,"unstable_getServerProps"),b=(0,n.l)(d,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/news",pathname:"/news",bundlePath:"",filename:""},components:{App:l.default,Document:i.default},userland:d});r()}catch(e){r(e)}})},7518:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(997),a=s(5675),o=s.n(a),n=s(1664),i=s.n(n);function l({title:e,coverImage:t,slug:s}){let a=r.jsx(o(),{fill:!0,alt:e,src:t?.node.sourceUrl,className:"object-cover object-center"});return r.jsx("div",{className:"flex-row flex justify-center items-center",children:r.jsx("div",{className:"relative min-w-[80vw] min-h-[30vh] sm:min-w-[20vw] sm:h-auto",children:s?r.jsx(i(),{href:`/posts/${s}`,"aria-label":e,children:a}):a})})}},2178:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(997),a=s(7518),o=s(1664),n=s.n(o);function i({title:e,coverImage:t,excerpt:s,slug:o,category:i}){return(0,r.jsxs)("div",{className:"sm:p-5 mb-10 sm:mb-0",children:[r.jsx("div",{className:"mb-4",children:t&&r.jsx(a.Z,{title:e,coverImage:t,slug:o})}),r.jsx("h1",{className:"text-right",children:i}),r.jsx("h1",{className:"text-2xl mb-4 text-orange-700 hover:text-orange-950",children:r.jsx(n(),{href:`/posts/${o}`,dangerouslySetInnerHTML:{__html:e}})}),r.jsx("div",{className:"mb-4 font-serif",dangerouslySetInnerHTML:{__html:s}})]})}},8484:(e,t,s)=>{s.d(t,{DT:()=>n,ds:()=>i,h9:()=>o,vx:()=>l});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(s.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(r,{headers:s,method:"POST",body:JSON.stringify({query:e,variables:t})}),o=await a.json();if(o.errors)throw console.error(o.errors),Error("Failed to fetch API");return o.data}async function o(){let e=await a(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);return e?.posts}async function n(){let e=await a(`
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
  `);return e?.posts}async function i(e){Number.isInteger(Number(e));let t=await a(`
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
      }
        }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `);return t.posts.edges=t.posts.edges.filter(({node:t})=>t.slug!==e),t.posts.edges.length>2&&t.posts.edges.pop(),t}async function l(e="about"){let t=await a(`
  query getAboutPageContent {
    pages(where: {name: "about"}) {
      nodes {
        content
      }
    }
  }
      `);return t?.pages?.nodes[0]?.content||""}},418:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>d,getStaticProps:()=>c});var a=s(997),o=s(6836),n=s(8484),i=s(2178),l=e([o]);function d({allPosts:e}){return a.jsx("div",{children:(0,a.jsxs)(o.Z,{children:[a.jsx("div",{className:"grid grid-cols-2 gap-10 py-10",children:"This is the news categories page. All categories listed and selectable at top"}),a.jsx("div",{className:"sm:grid sm:grid-cols-2 sm:gap-x-5",children:e.map(({node:e})=>a.jsx(i.Z,{title:e.title,coverImage:e.featuredImage,slug:e.slug,excerpt:e.excerpt,category:e.categories.nodes.map(e=>e.name)},e.slug))})]})})}o=(l.then?(await l)():l)[0];let c=async({})=>({props:{allPosts:await (0,n.DT)()},revalidate:10});r()}catch(e){r(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},6197:e=>{e.exports=import("framer-motion")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,21,673],()=>s(4613));module.exports=r})();