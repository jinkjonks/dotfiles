"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2579],{80945:(e,t,r)=>{r.d(t,{A:()=>l});r(79075),r(26870),r(33208),r(93019),r(86978),r(98618),r(40905),r(79410),r(21105),r(72753);var n=r(24255),o=r(22056),s=r(67008);const c="Opi2dmbjxhZcr0do4cr9";var i=r(4637);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t=e.shelfHeaderProps,r=e.listProps;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.r,p({title:o.ag.get("episode.sponsored_by")},t)),(0,i.jsx)("aside",p({className:c},r))]})}},87501:(e,t,r)=>{r.r(t),r.d(t,{ALL_EPISODE_SPONSORS_TESTID:()=>j,AllEpisodeSponsors:()=>S,allEpisodeSponsorsPath:()=>b.e,default:()=>v});var n=r(24255),o=r(88769),s=r(26533),c=r.n(s),i=(r(15970),r(93019),r(84196),r(27586),r(56110),r(79075),r(26870),r(33208),r(86978),r(98618),r(40905),r(79410),r(21105),r(72753),r(59496)),a=r(92053),p=r(41343),l=r(27894);var u=r(72069),O=r(5797),f=r(4637),b=r(66265);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j="all-episode-sponsors",P=(0,i.lazy)((function(){return r.e(2771).then(r.bind(r,12771))})),g=(0,i.lazy)((function(){return r.e(5808).then(r.bind(r,97778))})),h=(0,i.lazy)((0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,57651));case 2:return e.t0=e.sent.InstrumentedRedirect,e.abrupt("return",{default:e.t0});case 4:case"end":return e.stop()}}),e)}))));function S(e){var t,r=e.EpisodeSponsorsWrapper,n=void 0===r?g:r,o=(0,a.UO)()[p.hd],s=(0,l.P)(),c=(0,O.o)();return(0,f.jsx)(i.Suspense,{fallback:!0,children:null!==(t=s.location.state)&&void 0!==t&&t[u.H]?(0,f.jsx)(P,{"data-testid":j,children:(0,f.jsx)(n,y(y({},c),{},{numberOfSponsorsToDisplay:1/0,reason:"Episode page See All"}))}):(0,f.jsx)(h,{to:o?(0,p.lc)(o):"/"})})}const v=S},12579:(e,t,r)=>{r.r(t),r.d(t,{EpisodeSponsorsWrapperWithData:()=>d,default:()=>y});r(79075),r(26870),r(33208),r(93019),r(86978),r(98618),r(40905),r(79410),r(21105),r(72753);var n=r(24255),o=r(92053),s=r(22056),c=r(87501),i=r(97778),a=r(72069),p=r(41583),l=r(80945);const u="GSz6Q5lt5PCmKrP2AHB3";var O=r(4637);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){var t=e.version,r=e.state,f=e.numberOfSponsorsToDisplay,d=e.reason,y=(0,o.TH)(),j=(0,p.X)(b(b({},r),{},{reason:d}));return(0,O.jsx)(l.A,{shelfHeaderProps:{title:2===t?s.ag.get("episode.sponsored_by"):s.ag.get("episode.sponsors"),hasMoreElements:r.fetchedEpisodeSponsorsData.length>f?{pathname:(0,c.allEpisodeSponsorsPath)(r.episodeBase62Id),state:b(b({},y.state),{},(0,n.Z)({},a.H,r))}:void 0,seeAllProps:{"data-testid":i.SEE_ALL_EPISODE_SPONSORS_TESTID,onClick:function(){j({cta_card_see_all:!0})}}},listProps:b({"data-testid":i.EPISODE_SPONSORS_SHELF_TESTID,children:r.displayedSponsors},1===t?{className:u}:void 0)})}const y=d},27894:(e,t,r)=>{r.d(t,{P:()=>a});r(79075),r(26870),r(33208),r(93019),r(86978),r(98618),r(40905),r(79410),r(21105),r(72753);var n=r(24255),o=r(59496),s=r(25010);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(){var e=(0,s.D)(),t=e.listen,r=e.location;return(0,o.useEffect)((function(){return t((function(e,t){"POP"===t&&(e.state=i(i(i({},void 0),r.state),e.state))}))})),e}}}]);
//# sourceMappingURL=2579.js.map