"use strict";(()=>{var e={};e.id=521,e.ids=[521],e.modules={299:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>h,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>p,reportWebVitals:()=>S,routeModule:()=>y,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>x,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>f});var a=s(7093),o=s(5244),n=s(1323),i=s(7645),l=s(6814),d=s(400),c=e([d]);d=(c.then?(await c)():c)[0];let u=(0,n.l)(d,"default"),p=(0,n.l)(d,"getStaticProps"),g=(0,n.l)(d,"getStaticPaths"),m=(0,n.l)(d,"getServerSideProps"),h=(0,n.l)(d,"config"),S=(0,n.l)(d,"reportWebVitals"),f=(0,n.l)(d,"unstable_getStaticProps"),P=(0,n.l)(d,"unstable_getStaticPaths"),x=(0,n.l)(d,"unstable_getStaticParams"),b=(0,n.l)(d,"unstable_getServerProps"),v=(0,n.l)(d,"unstable_getServerSideProps"),y=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/about",pathname:"/about",bundlePath:"",filename:""},components:{App:l.default,Document:i.default},userland:d});r()}catch(e){r(e)}})},8484:(e,t,s)=>{s.d(t,{DT:()=>n,ds:()=>i,h9:()=>o,vx:()=>l});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s={"Content-Type":"application/json"};process.env.WORDPRESS_AUTH_REFRESH_TOKEN&&(s.Authorization=`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);let a=await fetch(r,{headers:s,method:"POST",body:JSON.stringify({query:e,variables:t})}),o=await a.json();if(o.errors)throw console.error(o.errors),Error("Failed to fetch API");return o.data}async function o(){let e=await a(`
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
      `);return t?.pages?.nodes[0]?.content||""}},400:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>c,getStaticProps:()=>u});var a=s(997),o=s(6836),n=s(5675),i=s.n(n),l=s(8484),d=e([o]);function c({content:e}){let t=e.replace(/<[^>]+>/g," ");return a.jsx("div",{children:a.jsx(o.Z,{children:(0,a.jsxs)("div",{className:"sm:grid sm:grid-cols-2 sm:gap-10 sm:min-h-[70vh] pb-10",children:[a.jsx("div",{className:"relative min-w-[200px] min-h-[200px] sm:max-w-[50vw]",children:a.jsx(i(),{src:"/images/about.jpg",alt:"",className:"object-cover object-center pb-8 sm:pb-0",fill:!0})}),(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"font-sans text-2xl sm:text-4xl pb-5",children:"About Vital Signs"}),a.jsx("div",{className:"font-serif text-lg prose",children:t})]})]})})})}o=(d.then?(await d)():d)[0];let u=async()=>({props:{content:await (0,l.vx)()},revalidate:10});r()}catch(e){r(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},6197:e=>{e.exports=import("framer-motion")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,21,673],()=>s(299));module.exports=r})();