"use strict";(()=>{var e={};e.id=405,e.ids=[405],e.modules={1496:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>p,default:()=>m,getServerSideProps:()=>h,getStaticPaths:()=>g,getStaticProps:()=>u,reportWebVitals:()=>x,routeModule:()=>P,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>f});var a=s(7093),n=s(5244),l=s(1323),o=s(7645),i=s(6814),c=s(6209),d=e([c]);c=(d.then?(await d)():d)[0];let m=(0,l.l)(c,"default"),u=(0,l.l)(c,"getStaticProps"),g=(0,l.l)(c,"getStaticPaths"),h=(0,l.l)(c,"getServerSideProps"),p=(0,l.l)(c,"config"),x=(0,l.l)(c,"reportWebVitals"),f=(0,l.l)(c,"unstable_getStaticProps"),v=(0,l.l)(c,"unstable_getStaticPaths"),b=(0,l.l)(c,"unstable_getStaticParams"),j=(0,l.l)(c,"unstable_getServerProps"),S=(0,l.l)(c,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:i.default,Document:o.default},userland:c});r()}catch(e){r(e)}})},7518:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(997),a=s(5675),n=s.n(a),l=s(1664),o=s.n(l);function i({title:e,coverImage:t,slug:s}){let a=r.jsx(n(),{fill:!0,alt:e,src:t?.node.sourceUrl,className:"object-cover object-center"});return r.jsx("div",{className:"flex-row flex justify-center items-center",children:r.jsx("div",{className:"relative min-w-[80vw] min-h-[30vh] sm:min-w-[20vw] sm:h-auto",children:s?r.jsx(o(),{href:`/posts/${s}`,"aria-label":e,children:a}):a})})}},2516:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(997),a=s(5675),n=s.n(a),l=s(1664),o=s.n(l);function i({title:e,heroImage:t,slug:s}){let a=r.jsx(n(),{fill:!0,alt:e,src:t?.node.sourceUrl,className:"object-cover object-center"});return r.jsx("div",{className:"sm:mx-0 relative min-w-[30vw] min-h-[20vh] sm:min-w-[40vw] sm:min-h-[50vh]",children:s?r.jsx(o(),{href:`/posts/${s}`,"aria-label":e,children:a}):a})}function c({title:e,heroImage:t,excerpt:s,slug:a,category:n}){return(0,r.jsxs)("section",{className:"sm:py-5 mb-10 sm:mb-0",children:[(0,r.jsxs)(o(),{href:"/issues",className:"text-lg font-bold font-sans text-primary-500",children:[" ",(0,r.jsxs)("div",{className:"bg-orange-700 mb-10 sm:mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500",children:[" ","Read the Latest Issue"]})]}),r.jsx("div",{className:"mb-3",children:t&&r.jsx(i,{title:e,heroImage:t,slug:a})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"text-right",children:n}),r.jsx("h1",{className:"sm:mb-3 text-2xl lg:text-3xl text-orange-700 hover:text-orange-950 active:text-orange-500",children:r.jsx(o(),{href:`/posts/${a}`,dangerouslySetInnerHTML:{__html:e}})})]}),r.jsx("div",{children:r.jsx("div",{className:"text-lg font-serif mb-4",dangerouslySetInnerHTML:{__html:s}})})]})]})}},8379:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(997),a=s(2178),n=s(1664),l=s.n(n);function o({posts:e}){let t=e.slice(0,4);return(0,r.jsxs)("section",{children:[r.jsx("div",{className:"sm:grid sm:grid-cols-2 sm:gap-x-5",children:t.map(({node:e})=>r.jsx(a.Z,{title:e.title,coverImage:e.featuredImage,slug:e.slug,excerpt:e.excerpt,category:e.categories.nodes.map(e=>e.name)},e.slug))}),(0,r.jsxs)(l(),{href:"/news",className:"text-lg font-bold font-sans text-primary-500",children:[" ",(0,r.jsxs)("div",{className:"bg-orange-700 mb-10 sm:mb-5 p-5 w-full text-neutral-50 hover:bg-orange-950 active:bg-orange-500",children:[" ","Read more"]})]})]})}},2178:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(997),a=s(7518),n=s(1664),l=s.n(n);function o({title:e,coverImage:t,excerpt:s,slug:n,category:o}){return(0,r.jsxs)("div",{className:"sm:p-5 mb-10 sm:mb-0",children:[r.jsx("div",{className:"mb-4",children:t&&r.jsx(a.Z,{title:e,coverImage:t,slug:n})}),r.jsx("h1",{className:"text-right",children:o}),r.jsx("h1",{className:"text-2xl mb-4 text-orange-700 hover:text-orange-950",children:r.jsx(l(),{href:`/posts/${n}`,dangerouslySetInnerHTML:{__html:e}})}),r.jsx("div",{className:"mb-4 font-serif",dangerouslySetInnerHTML:{__html:s}})]})}},8484:(e,t,s)=>{s.d(t,{DT:()=>l,ds:()=>o,h9:()=>n,vx:()=>i});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(s.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(r,{headers:s,method:"POST",body:JSON.stringify({query:e,variables:t})}),n=await a.json();if(n.errors)throw console.error(n.errors),Error("Failed to fetch API");return n.data}async function n(){let e=await a(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);return e?.posts}async function l(){let e=await a(`
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
  `);return e?.posts}async function o(e){Number.isInteger(Number(e));let t=await a(`
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
  `);return t.posts.edges=t.posts.edges.filter(({node:t})=>t.slug!==e),t.posts.edges.length>2&&t.posts.edges.pop(),t}async function i(e="about"){let t=await a(`
  query getAboutPageContent {
    pages(where: {name: "about"}) {
      nodes {
        content
      }
    }
  }
      `);return t?.pages?.nodes[0]?.content||""}},6209:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>d,getStaticProps:()=>m});var a=s(997),n=s(8379),l=s(2516),o=s(6836),i=s(8484),c=e([o]);function d({allPosts:{edges:e}}){let t=e[0]?.node,s=e.slice(1);return a.jsx(o.Z,{children:(0,a.jsxs)("div",{className:"sm:grid sm:grid-cols-2 sm:gap-2",children:[t&&a.jsx(l.Z,{title:t.title,heroImage:t.featuredImage,slug:t.slug,excerpt:t.excerpt,category:t.categories.nodes.map(e=>e.name)}),s.length>0&&a.jsx(n.Z,{posts:s})]})})}o=(c.then?(await c)():c)[0];let m=async({})=>({props:{allPosts:await (0,i.DT)()},revalidate:10});r()}catch(e){r(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},6197:e=>{e.exports=import("framer-motion")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,21,673],()=>s(1496));module.exports=r})();