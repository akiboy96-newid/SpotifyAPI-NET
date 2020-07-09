(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(186)),o={id:"client_credentials",title:"Client Credentials"},c={id:"client_credentials",title:"Client Credentials",description:"The Client Credentials flow is used in server-to-server authentication.",source:"@site/docs/client_credentials.md",permalink:"/SpotifyAPI-NET/docs/next/client_credentials",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/client_credentials.md",version:"next",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1594307739,sidebar:"docs",previous:{title:"Introduction",permalink:"/SpotifyAPI-NET/docs/next/auth_introduction"},next:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/next/implicit_grant"}},s=[{value:"Request token once",id:"request-token-once",children:[]},{value:"Request Token On-Demand",id:"request-token-on-demand",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The Client Credentials flow is used in server-to-server authentication.\nOnly endpoints that do not access user information can be accessed.")),Object(i.b)("p",null,"By supplying your ",Object(i.b)("inlineCode",{parentName:"p"},"SPOTIFY_CLIENT_ID")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SPOTIFY_CLIENT_SECRET"),", you get an access token."),Object(i.b)("h2",{id:"request-token-once"},"Request token once"),Object(i.b)("p",null,"To request an access token, build a ",Object(i.b)("inlineCode",{parentName:"p"},"ClientCredentialsRequest")," and send it via ",Object(i.b)("inlineCode",{parentName:"p"},"OAuthClient"),". This access token will expire after some time and you need to repeat the process."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'public static async Task Main()\n{\n  var config = SpotifyClientConfig.CreateDefault();\n\n  var request = new ClientCredentialsRequest("CLIENT_ID", "CLIENT_SECRET");\n  var response = await new OAuthClient(config).RequestToken(request);\n\n  var spotify = new SpotifyClient(config.WithToken(response.AccessToken));\n}\n')),Object(i.b)("h2",{id:"request-token-on-demand"},"Request Token On-Demand"),Object(i.b)("p",null,"You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"CredentialsAuthenticator"),", which will make sure the spotify instance will always have an up-to-date access token by automatically refreshing the token on-demand."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'public static async Task Main()\n{\n  var config = SpotifyClientConfig\n    .CreateDefault()\n    .WithAuthenticator(new CredentialsAuthenticator("CLIENT_ID", "CLIENT_SECRET"));\n\n  var spotify = new SpotifyClient(config);\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"There is no thread safety guaranteed when using ",Object(i.b)("inlineCode",{parentName:"p"},"CredentialsAuthenticator"),"."))))}p.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);