exports.id=915,exports.ids=[915],exports.modules={6483:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(997),c=t(7180);function i(){return a.jsx("footer",{className:"bg-customRed-50 w-full",children:(0,a.jsxs)("div",{className:"p-5 sm:p-10 sm:mx-10 font-serif justify-between space-y-10 sm:space-y-0 flex flex-col sm:flex-row",children:[a.jsx(c.Z,{}),a.jsx("div",{className:"flex items-center",children:a.jsx("p",{className:"text-xl font-sans",children:"Vital Signs: A Health Workers’ Magazine For a New Society"})}),(0,a.jsxs)("div",{className:"sm:text-right",children:[(0,a.jsxs)("p",{className:"py-2 sm:py-0",children:["Site by"," ",a.jsx("a",{href:"https://www.jackkershaw.net",target:"_blank",className:"font-bold text-customRed-800 hover:text-customRed-950 active:text-customRed-500","aria-label":"link to Jack Kershaw's website",children:"Jack Kershaw."})]}),(0,a.jsxs)("p",{className:"py-2 sm:py-0",children:["Source on"," ",a.jsx("a",{href:"https://github.com/jones58/vital-signs",target:"_blank",className:"font-bold text-customRed-800 hover:text-customRed-950 active:text-customRed-500","aria-label":"link to the Vital Signs Magazine GitHub repository",children:"Github."})]})]})]})})}},5247:(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{Z:()=>u});var c=t(997),i=t(6689),r=t(1664),l=t.n(r),o=t(5675),n=t.n(o),d=t(6197),m=t(7180),x=e([d]);function u(){let[e,s]=(0,i.useState)(!1);return c.jsx("header",{className:"bg-customRed-50 sm:px-10 pb-5 mb-5 sm:mb-0",children:(0,c.jsxs)("div",{className:"sm:grid sm:grid-cols-2 sm:mx-10",children:[(0,c.jsxs)("div",{className:"flex flex-row items-end justify-between px-5 sm:px-0 sm:justify-start sm:space-y-10 bg-customRed-50",children:[c.jsx("button",{onClick:()=>s(!e),className:"sm:hidden text-5xl text-customRed-700 pr-5","aria-label":"menu",children:e?c.jsx("span",{className:"icon-[mdi--arrow-up] text-customRed-700"}):c.jsx("span",{className:"icon-[mdi--hamburger-menu] text-customRed-700"})}),c.jsx(l(),{href:"/",className:"max-h-[220px] ",children:c.jsx("div",{className:"min-w-[250px] min-h-[250px] sm:min-w-[20vw] sm:min-h-[20vh] relative",children:c.jsx(n(),{src:"/images/banner-draft.png",alt:"logo",fill:!0,className:"object-contain object-center"})})})]}),c.jsx("div",{className:"flex flex-row sm:flex-col sm:justify-end sm:hidden",children:e&&(0,c.jsxs)(d.motion.div,{className:"absolute sm:static space-y-8 justify-start w-full flex flex-col z-50 bg-customRed-50 pl-5 sm:pl-0",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,c.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans",children:[c.jsx(l(),{href:"/about",className:"text-customRed-700 hover:text-customRed-950 active:text-customRed-500",children:"ABOUT"}),c.jsx(l(),{href:"/news?category=",className:"text-customRed-700 hover:text-customRed-950 active:text-customRed-500",children:"NEWS"}),c.jsx(l(),{href:"/issues",className:"text-customRed-700 hover:text-customRed-950 active:text-customRed-500",children:"ISSUES"})]}),c.jsx(m.Z,{})]})}),c.jsx("div",{className:"hidden sm:flex flex-row sm:flex-col sm:justify-end",children:(0,c.jsxs)("div",{className:"space-x-10 space-y-8 sm:space-y-0 sm:items-center justify-end w-full flex flex-col sm:flex-row z-50 bg-customRed-50",children:[(0,c.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center space-y-5 sm:space-y-0 sm:space-x-8 text-3xl font-sans pl-10 sm:pl-0",children:[c.jsx(l(),{href:"/about",className:"text-customRed-700 hover:text-customRed-950 active:text-customRed-500","aria-label":"link to the about page",children:"ABOUT"}),c.jsx(l(),{href:"/news",className:"text-customRed-700 hover:text-customRed-950 active:text-customRed-500","aria-label":"link to the news page",children:"NEWS"}),c.jsx(l(),{href:"/issues",className:"text-customRed-700 hover:text-customRed-950 active:text-customRed-500","aria-label":"link to the issues page",children:"ISSUES"})]}),c.jsx(m.Z,{})]})})]})})}d=(x.then?(await x)():x)[0],a()}catch(e){a(e)}})},7393:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(997),c=t(5675),i=t.n(c),r=t(1664),l=t.n(r);function o({title:e,coverImage:s,slug:t}){let c=a.jsx(i(),{fill:!0,alt:s?.node.altText,src:s?.node.sourceUrl,className:"object-cover object-center min-w-100 max-w-100 hover:scale-110 hover:scale-110 transition-transform duration-300 ease-in-out"});return a.jsx("div",{className:"relative min-w-[30vw] min-h-[30vh] sm:min-w-[21vw] sm:min-h-[25vh] overflow-hidden",children:t?a.jsx(l(),{href:`/posts/${t}`,"aria-label":e,children:c}):c})}function n({title:e,coverImage:s,excerpt:t,slug:c,category:i}){let r=t?t.split(/[.!?()]/)[0].trim():"";return a.jsx("div",{className:"mb-6 sm:mb-0",children:(0,a.jsxs)("div",{className:"flex flex-col space-y-2 sm:space-y-3",children:[s&&a.jsx(o,{title:e,coverImage:s,slug:c}),a.jsx(l(),{className:"text-customRed-950 uppercase text-sm font-bold font-sans",href:`/news?category=${i}`,children:i}),a.jsx("h1",{className:"text-2xl text-customRed-700 hover:text-customRed-950 capitalize",children:a.jsx(l(),{href:`/posts/${c}`,dangerouslySetInnerHTML:{__html:e}})}),a.jsx("div",{className:"font-serif text-lg",dangerouslySetInnerHTML:{__html:r}})]})})}},7180:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var a=t(997);function c(){return(0,a.jsxs)("div",{className:"flex flex-row sm:items-center justify-start sm:justify-between space-x-10 sm:space-x-10 pb-4 sm:pb-0 text-3xl",children:[a.jsx("span",{className:"icon-[mdi--facebook] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0"}),a.jsx("span",{className:"icon-[mdi--twitter] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0"}),a.jsx("a",{href:"https://vitalsignscontenteditor.co.uk/rss",target:"_blank",className:"flex-col flex justify-end items-end","aria-label":"link to the Vital Signs Magazine RSS feed",children:a.jsx("span",{className:"icon-[mdi--rss] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0"})}),a.jsx("a",{"aria-label":"link to the Vital Signs email",href:"mailto:vitalsignsmag@proton.me",target:"_blank",className:"flex-col flex justify-end items-end",children:a.jsx("span",{className:"icon-[mdi--email] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 sm:p-0",children:" "})})]})}},8484:(e,s,t)=>{"use strict";t.d(s,{CP:()=>n,DT:()=>r,Y8:()=>d,ds:()=>l,h9:()=>i,vx:()=>o});let a=process.env.WORDPRESS_API_URL;async function c(e="",{variables:s}={}){let t=await fetch(a,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:s})}),c=await t.json();if(c.errors)throw console.error(c.errors),Error("Failed to fetch API");return c.data}async function i(){let e=await c(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);return e?.posts}async function r(e){let s=await c(`
    query AllPosts {
      posts(first: 10000, where: { orderby: { field: DATE, order: DESC } }) {
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
  `,{variables:{onlyEnabled:!e,preview:e}});return s?.posts}async function l(e){let s=await c(`
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
          altText
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
      posts(first: 10000) {
        edges {
          node {
            ...PostFields
            content
          }
        }
      }
    }
  `,{variables:{id:e,idType:"SLUG"}}),t=s.post.categories.edges.map(({node:e})=>e.name);s.posts.edges=s.posts.edges.filter(({node:s})=>s.slug!==e),s.posts.edges=s.posts.edges.filter(({node:e})=>e.categories.edges.map(({node:e})=>e.name).some(e=>t.includes(e)));let a=s.posts.edges.filter(({node:e})=>e.categories.edges.some(({node:e})=>t.includes(e.name)));return s.posts.edges=a.slice(0,3),s}async function o(e="about"){let s=await c(`
  query getAboutPageContent {
    pages(where: {name: "about"}) {
      nodes {
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
      `);return{content:s?.pages?.nodes[0]?.content||"",featuredImage:s?.pages?.nodes[0]?.featuredImage||""}}async function n(){let e=await c(`
query allcategories {
  categories(first: 10000) {
    edges {
      node {
        name
      }
    }
  }
}
`);return e?.categories?.edges||[]}async function d(){let e=await c(`
    query AllPosts {
      posts(first: 10000, where: { orderby: { field: DATE, order: DESC }, tag: "pdf"}) {
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
  `);return e?.posts}},6814:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var a=t(997),c=t(7350),i=t.n(c),r=t(4660),l=t.n(r);t(9517);let o=function({Component:e,pageProps:s,router:t}){return a.jsx("main",{className:`${i().variable} ${l().variable}`,children:a.jsx(e,{...s})})}},7645:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var a=t(997),c=t(6859);function i(){return(0,a.jsxs)(c.Html,{lang:"en",children:[a.jsx(c.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(c.Main,{}),a.jsx(c.NextScript,{})]})]})}},9517:()=>{}};