(this.webpackJsonpsponty_web=this.webpackJsonpsponty_web||[]).push([[10,4,5],{117:function(e,t,n){"use strict";n.r(t);var r=n(1);t.default=function(e){var t=e.src,n=e.width,i=e.height,o=e.style;return Object(r.jsx)("img",{src:"/img/svg/".concat(t),alt:t,with:n,height:i,style:o})}},118:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(118);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},132:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.left,r=t.right,i=t.up,o=t.down,c=t.top,a=t.bottom,d=t.big,l=t.mirror,u=t.opposite,j=(n?1:0)|(r?2:0)|(c||o?4:0)|(a||i?8:0)|(l?16:0)|(u?32:0)|(e?64:0)|(d?128:0);if(b.hasOwnProperty(j))return b[j];var f=n||r||i||o||c||a,p=void 0,h=void 0;if(f){if(!l!=!(e&&u)){var m=[r,n,a,c,o,i];n=m[0],r=m[1],c=m[2],a=m[3],i=m[4],o=m[5]}var x=d?"2000px":"100%";p=n?"-"+x:r?x:"0",h=o||c?"-"+x:i||a?x:"0"}return b[j]=(0,s.animation)((e?"to":"from")+" {"+(f?" transform: translate3d("+p+", "+h+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),b[j]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,n=(e.out,e.forever),o=e.timeout,c=e.duration,a=void 0===c?s.defaults.duration:c,d=e.delay,u=void 0===d?s.defaults.delay:d,b=e.count,j=void 0===b?s.defaults.count:b,f=r(e,["children","out","forever","timeout","duration","delay","count"]),p={make:i,duration:void 0===o?a:o,delay:u,forever:n,count:j,style:{animationFillMode:"both"},reverse:f.left};return(0,l.default)(f,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var c,a=n(22),d=n(81),l=(c=d)&&c.__esModule?c:{default:c},s=n(55),u={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,delay:a.number,count:a.number,forever:a.bool},b={};o.propTypes=u,t.default=o,e.exports=t.default},133:function(e,t,n){"use strict";n.r(t);var r,i=n(4),o=n(5).b.button(r||(r=Object(i.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n  }\n"])),(function(e){return e.color||"#faae3d"}),(function(e){return e.color?"#faae3d":"#fff"}),(function(e){return e.color?"1px solid #faae3d":"0px"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"140px":"100%"}),(function(e){return e.width?"130px":"100%"})),c=n(1);t.default=function(e){var t=e.color,n=e.width,r=e.children,i=e.onClick;return Object(c.jsx)(o,{color:t,width:n,onClick:i,children:r})}},170:function(e,t,n){"use strict";n.r(t);var r,i,o,c,a,d,l,s,u,b,j,f=n(119),p=n(112),h=n(114),m=n(113),x=n(132),O=n.n(x),y=n(117),g=n(4),v=n(5),w=v.b.section(r||(r=Object(g.a)(["\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),P=v.b.p(i||(i=Object(g.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),k=v.b.div(o||(o=Object(g.a)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),_=v.b.div(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),C=v.b.h6(a||(a=Object(g.a)(["\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n"]))),D=v.b.p(d||(d=Object(g.a)(["\n  font-size: 0.75rem;\n"]))),z=(Object(v.b)(h.a)(l||(l=Object(g.a)(["\n  margin: 2rem 0;\n  position: relative;\n"]))),n(1)),E=Object(m.a)()((function(e){var t=e.icon,n=e.title,r=e.content,i=e.section,o=e.t,c=e.id;return Object(z.jsx)(w,{children:Object(z.jsxs)(p.a,{type:"flex",justify:"space-between",align:"middle",id:c,children:[Object(z.jsx)(h.a,{lg:11,md:11,sm:12,xs:24,children:Object(z.jsx)(O.a,{left:!0,children:Object(z.jsx)(y.default,{src:t,className:"about-block-image",width:"100%",height:"100%"})})}),Object(z.jsx)(h.a,{lg:11,md:11,sm:11,xs:24,children:Object(z.jsx)(O.a,{right:!0,children:Object(z.jsxs)(k,{children:[Object(z.jsx)("h6",{children:o(n)}),Object(z.jsx)(P,{children:o(r)}),Object(z.jsx)(_,{children:Object(z.jsx)(p.a,{type:"flex",justify:"space-between",children:i&&"object"===typeof i&&i.map((function(e,t){return Object(z.jsxs)(h.a,{span:11,children:[Object(z.jsx)(y.default,{src:e.icon,width:"60px",height:"60px"}),Object(z.jsx)(C,{children:o(e.title)}),Object(z.jsx)(D,{children:o(e.content)})]},t)}))})})]})})})]})})})),M=n(133),I=v.b.section(s||(s=Object(g.a)(["\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 8rem 0 6rem;\n  }\n"]))),J=v.b.p(u||(u=Object(g.a)(["\n  margin: 1.5rem 0 2rem 0;\n"]))),N=v.b.div(b||(b=Object(g.a)(["\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),S=v.b.div(j||(j=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n"]))),B=Object(m.a)()((function(e){var t=e.title,n=e.content,r=e.button,i=e.icon,o=e.t,c=e.id,a=e.expand;return console.log(a),Object(z.jsx)(I,{children:Object(z.jsxs)(p.a,{type:"flex",justify:"space-between",align:"middle",id:c,children:[Object(z.jsx)(h.a,{lg:11,md:11,sm:11,xs:24,children:Object(z.jsx)(O.a,{left:!0,children:Object(z.jsxs)(N,{children:[Object(z.jsx)("h6",{children:o(t)}),Object(z.jsx)(J,{children:o(n)}),Object(z.jsx)(S,{children:r&&"object"===typeof r&&r.map((function(e,t){return Object(z.jsx)(M.default,{color:e.color,width:"true",onClick:function(){return function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}("about")},children:o(e.title)},t)}))})]})})}),Object(z.jsx)(h.a,{lg:11,md:11,sm:12,xs:24,children:Object(z.jsx)(O.a,{right:!0,children:Object(z.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(z.jsx)(y.default,{src:i,className:"about-block-image",style:void 0!==a&&!0===a?{width:"100%",height:"100%"}:void 0})})})})]})})}));t.default=function(e){return console.log(e.expand),"left"===e.type?Object(z.jsx)(E,Object(f.a)({},e)):"right"===e.type?Object(z.jsx)(B,Object(f.a)({},e)):null}}}]);
//# sourceMappingURL=10.eb9225be.chunk.js.map