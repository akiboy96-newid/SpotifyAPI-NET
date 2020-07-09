(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(186)),i={id:"token_swap",title:"Token Swap"},p={id:"token_swap",title:"Token Swap",description:"Token Swap provides an authenticatiow flow where client-side apps (like cli/desktop/mobile apps) are still able to use long-living tokens and the oppurtunity to refresh them without exposing your application's secret. This however requires a server-side part to work.",source:"@site/docs/token_swap.md",permalink:"/SpotifyAPI-NET/docs/next/token_swap",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/token_swap.md",version:"next",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1594307739,sidebar:"docs",previous:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/next/authorization_code"},next:{title:"Showcase",permalink:"/SpotifyAPI-NET/docs/next/showcase"}},s=[{value:"Flow",id:"flow",children:[]},{value:"Server Implementation",id:"server-implementation",children:[{value:"Swap",id:"swap",children:[]},{value:"Refresh",id:"refresh",children:[]}]},{value:"Example",id:"example",children:[]}],c={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Token Swap provides an authenticatiow flow where client-side apps (like cli/desktop/mobile apps) are still able to use long-living tokens and the oppurtunity to refresh them without exposing your application's secret. This however requires a server-side part to work."),Object(o.b)("p",null,"It is based on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/next/authorization_code"}),"Authorization Code")," flow and is also documented by spotify: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/documentation/ios/guides/token-swap-and-refresh/"}),"Token Swap and Refresh "),"."),Object(o.b)("h2",{id:"flow"},"Flow"),Object(o.b)("p",null,"The client uses the first part of the ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization Code")," flow and redirects the user to spotify's login page. In this part, only the client id is required. Once the user logged in and confirmed the usage of your app, he will be redirect to a ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost")," server which grabs the ",Object(o.b)("inlineCode",{parentName:"p"},"code")," from the query parameters."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var request = new LoginRequest("http://localhost", "ClientId", LoginRequest.ResponseType.Code)\n{\n  Scope = new List<string> { Scopes.UserReadEmail }\n};\nBrowserUtil.Open(uri);\n')),Object(o.b)("p",null,"Now, swapping out this ",Object(o.b)("inlineCode",{parentName:"p"},"code")," for an ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," would require the app's client secret. We don't have this on the client-side. Instead, we send a request to our server, which takes care of the code swap:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'public Task GetCallback(string code)\n{\n  var response = await new OAuthClient().RequestToken(\n    new TokenSwapTokenRequest("https://your-swap-server.com/swap", code)\n  );\n\n  var spotify = new SpotifyClient(response.AccessToken);\n  // Also important for later: response.RefreshToken\n}\n')),Object(o.b)("p",null,"The server swapped out the ",Object(o.b)("inlineCode",{parentName:"p"},"code")," for an ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," and ",Object(o.b)("inlineCode",{parentName:"p"},"refresh_token"),". Once we realize the ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," expired, we can also ask the server to refresh it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'// if response.IsExpired is true\nvar newResponse = await new OAuthClient().RequestToken(\n  new TokenSwapTokenRequest("https://your-swap-server.com/refresh", response.RefreshToken)\n);\n\nvar spotify = new SpotifyClient(newResponse.AccessToken);\n')),Object(o.b)("h2",{id:"server-implementation"},"Server Implementation"),Object(o.b)("p",null,"The server needs to support two endpoints, ",Object(o.b)("inlineCode",{parentName:"p"},"/swap")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/refresh")," (endpoints can be named differently of course)"),Object(o.b)("h3",{id:"swap"},"Swap"),Object(o.b)("p",null,"The client sends a body via ",Object(o.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," where the received ",Object(o.b)("inlineCode",{parentName:"p"},"code")," is included. In cURL:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST "https://example.com/v1/swap"\\\n  -H "Content-Type: application/x-www-form-urlencoded"\\\n  --data "code=AQDy8...xMhKNA"\n')),Object(o.b)("p",null,"The server needs to respond with content-type ",Object(o.b)("inlineCode",{parentName:"p"},"application/json")," and the at least the following body:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n "access_token" : "NgAagA...Um_SHo",\n "expires_in" : "3600",\n "refresh_token" : "NgCXRK...MzYjw"\n}\n')),Object(o.b)("h3",{id:"refresh"},"Refresh"),Object(o.b)("p",null,"The client sends a body via ",Object(o.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," where the received ",Object(o.b)("inlineCode",{parentName:"p"},"refresh_token")," is included. In cURL:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST "https://example.com/v1/refresh"\\\n  -H "Content-Type: application/x-www-form-urlencoded"\\\n  --data "refresh_token=NgCXRK...MzYjw"\n')),Object(o.b)("p",null,"The server needs to respond with content-type ",Object(o.b)("inlineCode",{parentName:"p"},"application/json")," and the at least the following body:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n "access_token" : "NgAagA...Um_SHo",\n "expires_in" : "3600"\n}\n')),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example server has been implemented in NodeJS with a .NET CLI client, located at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.TokenSwap"}),"Example.TokenSwap")))}l.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(h,p({ref:t},c,{components:n})):a.a.createElement(h,p({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);