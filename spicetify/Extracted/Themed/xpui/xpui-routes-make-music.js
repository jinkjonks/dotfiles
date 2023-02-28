"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5786],{81583:(e,r,t)=>{t.d(r,{w:()=>v});t(719);var n=t(59496),a=t(4417),i=t.n(a),l=t(33892),s=t(33186),c=(t(78390),t(47408),t(3761),t(97274),t(75684),t(68063),/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g);var o=t(3777);const u="QD13ZfPiO5otS0PU89wG",d="playlist-playlist-playlistDescription",f="ZbLneLRe2x_OBOYZMX3M",m="rjdQaIDkSgcGmxkdI2vU",h="umouqjSkMUbvF4I_Xz6r";var p=t(4637),v=n.memo((function(e){var r=e.html,t=e.onTimeStampClick,a=e.enableTimestamps,l=void 0!==a&&a,s=e.semanticColor,o=void 0===s?"textSubdued":s,u=(0,n.useMemo)((function(){var e,n=l?r.split(c).map((function(e){if(e.match(c)){var r=e.replace("(","").replace(")","");return"(<time>".concat(r,"</time>)")}return e})).join(""):r;try{e=i()(n,{transform:x(t,o),dangerouslySetChildren:[]})}catch(t){e=r}return e}),[l,r,t,o]);return(0,p.jsx)("div",{className:d,children:u})}));function x(e,r){var t=0;return{p:function(e){return(0,p.jsx)(l.D,{as:"p",variant:"ballad",semanticColor:r,className:h,children:e.children})},a:function(r){var t;return null!==(t=r.href)&&void 0!==t&&t.startsWith("#t=")?(0,p.jsx)(s.E,{onClick:e,children:r.children}):r.href?(0,p.jsx)(o.Link,{to:r.href,children:r.children}):(0,p.jsx)(p.Fragment,{children:r.children})},ul:function(e){return(0,p.jsx)("ul",{className:f,children:e.children})},ol:function(e){return(0,p.jsx)("ol",{className:f,children:e.children})},li:function(e){return(0,p.jsx)(l.D,{as:"li",variant:"ballad",semanticColor:r,className:m,children:e.children})},br:function(){return(0,p.jsx)("br",{})},h1:function(e){return(0,p.jsx)(l.D,{as:"h1",variant:"balladBold",semanticColor:r,className:u,children:e.children})},h2:function(e){return(0,p.jsx)(l.D,{as:"h2",variant:"balladBold",semanticColor:r,className:u,children:e.children})},h3:function(e){return(0,p.jsx)(l.D,{as:"h3",variant:"balladBold",semanticColor:r,className:u,children:e.children})},h4:function(e){return(0,p.jsx)(l.D,{as:"h4",variant:"balladBold",semanticColor:r,className:u,children:e.children})},h5:function(e){return(0,p.jsx)(l.D,{as:"h5",variant:"balladBold",semanticColor:r,className:u,children:e.children})},h6:function(e){return(0,p.jsx)(l.D,{as:"h6",variant:"balladBold",semanticColor:r,className:u,children:e.children})},time:function(r){return(0,p.jsx)(s.E,{onClick:e,children:r.children})},_:function(e,r,a){var i=void 0===r?e:a;return(0,p.jsx)(n.Fragment,{children:i},"fragment".concat(t++))}}}},38336:(e,r,t)=>{t.r(r),t.d(r,{default:()=>N});var n=t(14942),a=(t(73566),t(93019),t(47408),t(98372),t(59496)),i=t(22056),l=t(27293),s=t(77646),c=t(33892),o=t(47018),u=t(81583);const d="nV_0UjulnuGnBYzXiFRd",f="F2fw42rcgQCHUh82jc3U";var m=t(4637),h=function(){var e=(0,s.v9)((function(e){var r;return null===(r=e.session.user)||void 0===r?void 0:r.uri})),r=(0,o.EC)(e).toURLPath(!0);return(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)(c.D,{variant:"forte",semanticColor:"textBase",dir:"auto",children:i.ag.get("web-player.soundtrap.title")}),(0,m.jsx)(c.D,{variant:"ballad",semanticColor:"textBase",dir:"auto",children:i.ag.get("web-player.soundtrap.subtitle.text")}),(0,m.jsx)(c.D,{variant:"ballad",semanticColor:"textBase",dir:"auto",children:i.ag.get("web-player.soundtrap.confidential")}),(0,m.jsx)(u.w,{html:i.ag.get("web-player.soundtrap.subtitle.link",r),semanticColor:"textBase",onTimeStampClick:function(){}})]})},p=t(71218),v=t(88769),x=t(26533),j=t.n(x),g=(t(3726),t(92053)),b=t(35708);var k=t(8719);var C=t(44223),y=t(8206),w=function(e){var r=e.templates,t=e.title,n=e.onClick;return(0,m.jsx)(C.P,{title:t,className:f,children:r.map((function(e,r){return(0,m.jsx)(y.t,{project:e,index:r,onClick:n},"template-".concat(e.key))}))})};const N=(0,a.memo)((function(){var e=function(){var e=(0,a.useState)(null),r=(0,n.Z)(e,2),t=r[0],i=r[1],l=(0,b.z)(),s=(0,a.useCallback)((0,v.Z)(j().mark((function e(){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getTemplates({query:"",page_number:0,result_per_page:6,sort_by:""});case 2:r=e.sent,i(r.projects);case 4:case"end":return e.stop()}}),e)}))),[l]);return(0,a.useEffect)((function(){s()}),[s]),{templates:t}}(),r=e.templates,t=(0,k.u)().playlists,s=function(){var e=(0,g.s0)(),r=(0,a.useState)(null),t=(0,n.Z)(r,2),i=t[0],l=t[1],s=(0,a.useState)(!1),c=(0,n.Z)(s,2),o=c[0],u=c[1],d=(0,b.z)(),f=(0,a.useCallback)(function(){var r=(0,v.Z)(j().mark((function r(t){var n,a;return j().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u(!0),r.prev=1,r.next=4,d.forkProject({projectKey:t});case 4:n=r.sent,a=n.project,e("/make-music/studio/".concat(a.originalTrackUri,"/").concat(a.soundtrapProjectId)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),l("Could not navigate to project, forking failed");case 12:u(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}(),[e,l,d]);return{forkAndNavigate:f,error:i,loading:o}}(),c=s.forkAndNavigate,o=s.error,u=s.loading;if(!r||o||u||!t)return(0,m.jsx)(l.h,{hasError:!!o,errorMessage:null!=o?o:i.ag.get("web-player.soundtrap.error.request-templates-failure")});var d=r.reduce((function(e,r){var t,n;return null!==(n=e[t=r.genre])&&void 0!==n||(e[t]=[]),e[r.genre].push(r),e}),{});return(0,m.jsxs)("div",{className:"contentSpacing",id:"makeMusicPage",children:[(0,m.jsx)(h,{}),Object.entries(d).map((function(e){var r=(0,n.Z)(e,2),t=r[0],a=r[1];return(0,m.jsx)(w,{templates:a,title:t,onClick:c},"template-shelf-".concat(t))})),(0,m.jsx)(p.W,{playlists:t,title:"Hear what others are creating"})]})}))},71218:(e,r,t)=>{t.d(r,{W:()=>l});t(47408),t(26870),t(53987);var n=t(81785),a=t(44223),i=t(4637),l=function(e){var r=e.playlists,t=e.title,l=e.showAll,s=void 0!==l&&l;return(0,i.jsx)(a.P,{total:r.length,title:t,seeAllUri:"/make-music/playlists",showSeeAll:!0,showAll:s,children:r.map((function(e,r){return(0,i.jsx)(n.Z,{uri:e.playlistUri,name:e.title,images:[{url:e.imageUri}],description:e.description,authorName:e.author,index:r},e.playlistUri)}))})}},8206:(e,r,t)=>{t.d(r,{t:()=>s});var n=t(47262),a=t(95441),i=t(66616),l=t(4637),s=function(e){var r=e.project,t=e.index,s=e.onClick;return(0,l.jsx)(n.C,{index:t,onClick:function(){return s(r.key)},headerText:r.title,featureIdentifier:"make_music",uri:r.originalTrackUri,delegateNavigation:!0,renderCardImage:function(){return(0,l.jsx)(a.x,{images:[{url:r.imageUri}]})},renderSubHeaderContent:function(){return(0,l.jsx)(i.NB,{source:r.templateDescription})}})}},8719:(e,r,t)=>{t.d(r,{u:()=>o});var n=t(88769),a=t(14942),i=t(26533),l=t.n(i),s=t(59496),c=t(35708),o=function(){var e=(0,s.useState)(null),r=(0,a.Z)(e,2),t=r[0],i=r[1],o=(0,s.useRef)(!1),u=(0,c.z)(),d=(0,s.useCallback)((0,n.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getPlaylists({query:"",page_number:0,result_per_page:6,sort_by:""});case 2:if(r=e.sent,o.current){e.next=5;break}return e.abrupt("return");case 5:i(r.playlists);case 6:case"end":return e.stop()}}),e)}))),[u]);return(0,s.useEffect)((function(){return o.current=!0,d(),function(){o.current=!1}}),[d]),{playlists:t,fetchPlaylists:d}}}}]);
//# sourceMappingURL=xpui-routes-make-music.js.map