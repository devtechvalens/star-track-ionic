webpackJsonp([4],{138:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(4),a=n(0),r=function(){function t(){}return t.prototype.getPalette=function(t,e,n){(void 0===e||e<2||e>256)&&(e=10),(void 0===n||n<1)&&(n=10);for(var o,a,r,i,c=new s(t),l=c.getImageData().data,h=c.getPixelCount(),f=[],p=0;p<h;p+=n)a=l[(o=4*p)+0],r=l[o+1],i=l[o+2],l[o+3]>=125&&(a>250&&r>250&&i>250||f.push([a,r,i]));var d=u.quantize(f,e),g=d?d.palette():null;return c.removeCanvas(),g},t.prototype.getColor=function(t,e){return void 0===e&&(e=10),this.getPalette(t,5,e)[0]},t.prototype.getColorFromUrl=function(t,e){var n=this;return void 0===e&&(e=10),new Promise(function(o,a){var r=new Image;r.crossOrigin="Anonymous";var i,u;r.addEventListener("load",function(){u=n.getPalette(r,5,e),o({dominantColor:i=u[0],imageUrl:t})}),r.src=t,r.addEventListener("error",a.bind(n))})},t=Object(o.__decorate)([Object(a.p)(),Object(o.__metadata)("design:paramtypes",[])],t)}(),i={map:function(t,e){var n={};return e?t.map(function(t,o){return n.index=o,e.call(n,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,o,a){return n.index=a,t+e.call(n,o)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?i.map(t,e):t)}},u=function(){function t(t,e,n){return(t<<2*a)+(e<<a)+n}function e(e){var n,o,i,u,s=1<<3*a,c=new Array(s);return e.forEach(function(e){n=t(o=e[0]>>r,i=e[1]>>r,u=e[2]>>r),c[n]=(c[n]||0)+1}),c}function n(t,e){var n,o,a,i=1e6,u=0,s=1e6,c=0,h=1e6,f=0;return t.forEach(function(t){n=t[0]>>r,o=t[1]>>r,a=t[2]>>r,n<i?i=n:n>u&&(u=n),o<s?s=o:o>c&&(c=o),a<h?h=a:a>f&&(f=a)}),new l(i,u,s,c,h,f,e)}function o(e,n){function o(t){var e,o,a,r,i,u=t+"1",s=t+"2",l=0;for(c=n[u];c<=n[s];c++)if(d[c]>p/2){for(a=n.copy(),r=n.copy(),i=(e=c-n[u])<=(o=n[s]-c)?Math.min(n[s]-1,~~(c+o/2)):Math.max(n[u],~~(c-1-e/2));!d[i];)i++;for(l=g[i];!l&&d[i-1];)l=g[--i];return a[s]=i,r[u]=a[s]+1,[a,r]}}if(n.count()){var a=n.r2-n.r1+1,r=n.g2-n.g1+1,u=n.b2-n.b1+1,s=i.max([a,r,u]);if(1==n.count())return[n.copy()];var c,l,h,f,p=0,d=[],g=[];if(s==a)for(c=n.r1;c<=n.r2;c++){for(f=0,l=n.g1;l<=n.g2;l++)for(h=n.b1;h<=n.b2;h++)f+=e[t(c,l,h)]||0;p+=f,d[c]=p}else if(s==r)for(c=n.g1;c<=n.g2;c++){for(f=0,l=n.r1;l<=n.r2;l++)for(h=n.b1;h<=n.b2;h++)f+=e[t(l,c,h)]||0;p+=f,d[c]=p}else for(c=n.b1;c<=n.b2;c++){for(f=0,l=n.r1;l<=n.r2;l++)for(h=n.g1;h<=n.g2;h++)f+=e[t(l,h,c)]||0;p+=f,d[c]=p}return d.forEach(function(t,e){g[e]=p-t}),o(s==a?"r":s==r?"g":"b")}}var a=5,r=8-a,u=1e3,s=.75,c=function(){function t(t){this.comparator=t,this.contents=[],this.sorted=!1}return t.prototype.sort=function(){this.contents.sort(this.comparator),this.sorted=!0},t.prototype.push=function(t){this.contents.push(t),this.sorted=!1},t.prototype.peek=function(t){return this.sorted||this.sort(),void 0===t&&(t=this.contents.length-1),this.contents[t]},t.prototype.pop=function(){return this.sorted||this.sort(),this.contents.pop()},t.prototype.size=function(){return this.contents.length},t.prototype.map=function(t){return this.contents.map(t)},t.prototype.debug=function(){return this.sorted||this.sort(),this.contents},t}(),l=function(){function e(t,e,n,o,a,r,i){this.r1=t,this.r2=e,this.g1=n,this.g2=o,this.b1=a,this.b2=r,this.histo=i}return e.prototype.volume=function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},e.prototype.count=function(e){if(!this._count_set||e){var n=0,o=void 0,a=void 0,r=void 0;for(o=this.r1;o<=this.r2;o++)for(a=this.g1;a<=this.g2;a++)for(r=this.b1;r<=this.b2;r++){var i=t(o,a,r);n+=this.histo[i]||0}this._count=n,this._count_set=!0}return this._count},e.prototype.copy=function(){return new e(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},e.prototype.avg=function(e){if(!this._avg||e){var n=0,o=1<<8-a,r=0,i=0,u=0,s=void 0,c=void 0,l=void 0,h=void 0,f=void 0;for(c=this.r1;c<=this.r2;c++)for(l=this.g1;l<=this.g2;l++)for(h=this.b1;h<=this.b2;h++)f=t(c,l,h),n+=s=this.histo[f]||0,r+=s*(c+.5)*o,i+=s*(l+.5)*o,u+=s*(h+.5)*o;n?this._avg=[~~(r/n),~~(i/n),~~(u/n)]:(console.log("empty box"),this._avg=[~~(o*(this.r1+this.r2+1)/2),~~(o*(this.g1+this.g2+1)/2),~~(o*(this.b1+this.b2+1)/2)])}return this._avg},e.prototype.contains=function(t){var e=t[0]>>r,n=t[1]>>r,o=t[2]>>r;return e>=this.r1&&e<=this.r2&&n>=this.g1&&e<=this.g2&&o>=this.b1&&e<=this.b2},e}(),h=function(){function t(){this.vboxes=new c(function(t,e){return i.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}return t.prototype.push=function(t){this.vboxes.push({vbox:t,color:t.avg()})},t.prototype.palette=function(){return this.vboxes.map(function(t){return t.color})},t.prototype.size=function(){return this.vboxes.size()},t.prototype.map=function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},t.prototype.nearest=function(t){for(var e,n,o,a=this.vboxes,r=0;r<a.size();r++)((n=Math.sqrt(Math.pow(t[0]-a.peek(r).color[0],2)+Math.pow(t[1]-a.peek(r).color[1],2)+Math.pow(t[1]-a.peek(r).color[1],2)))<e||void 0===e)&&(e=n,o=a.peek(r).color);return o},t.prototype.forcebw=function(){var t=this.vboxes;t.sort(function(t,e){return i.naturalOrder(i.sum(t.color),i.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,o=t[n].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[n].color=[255,255,255])},t}();return{quantize:function(t,a){function r(t,e){for(var n,a=1,r=0;r<u;)if((n=t.pop()).count()){var i=o(l,n),s=i[0],c=i[1];if(!s)return void console.log("vbox1 not defined; shouldn't happen!");if(t.push(s),c&&(t.push(c),a++),a>=e)return;if(r++>u)return void console.log("infinite loop; perhaps too few pixels!")}else t.push(n),r++}if(!t.length||a<2||a>256)return console.log("wrong number of maxcolors"),!1;var l=e(t),f=0;l.forEach(function(){f++});var p=n(t,l),d=new c(function(t,e){return i.naturalOrder(t.count(),e.count())});d.push(p),r(d,s*a);for(var g=new c(function(t,e){return i.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});d.size();)g.push(d.pop());r(g,a-g.size());for(var _=new h;g.size();)_.push(g.pop());return _}}}(),s=function(){function t(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)}return t.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},t.prototype.update=function(t){this.context.putImageData(t,0,0)},t.prototype.getPixelCount=function(){return this.width*this.height},t.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},t.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)},t}()},146:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=146},170:function(t,e,n){function o(t){var e=a[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"../pages/menu-list/menu-list.module.ngfactory":[233,2],"../pages/menu/menu.module.ngfactory":[234,3],"../pages/search/search.module.ngfactory":[235,0],"../pages/track-detail/track-detail.module.ngfactory":[236,1]};o.keys=function(){return Object.keys(a)},o.id=170,t.exports=o},202:function(t,e,n){"use strict";function o(t){return r._32(0,[(t()(),r._8(0,null,null,2,"ion-nav",[["root","MenuPage"]],null,null,null,C.b,C.a)),r._27(6144,null,O.a,null,[z.a]),r._6(4374528,null,0,z.a,[[2,N.a],[2,F.a],E.a,D.a,S.a,r.l,r.z,r.G,r.j,H.l,T.a,[2,I.a],L.a,r.m],{root:[0,"root"]},null)],function(t,e){t(e,2,0,"MenuPage")},null)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(31),r=n(0),i=n(4),u=n(111),s=n(117),c=n(71),l=n(72),h=function(){function t(t,e,n){var o=this;this.plt=t,this.keyboard=e,this.statusbar=n,this.plt.ready().then(function(){o.keyboard.disableScroll(!0),o.keyboard.hideKeyboardAccessoryBar(!0),o.statusbar.overlaysWebView(!0),o.plt.is("ios")?o.statusbar.styleDefault():o.statusbar.styleLightContent()})}return t=Object(i.__decorate)([Object(r.i)({template:'<ion-nav root="MenuPage"></ion-nav>'}),Object(i.__metadata)("design:paramtypes",["function"==typeof(e=void 0!==u.g&&u.g)&&e||Object,"function"==typeof(n=void 0!==l.a&&l.a)&&n||Object,"function"==typeof(o=void 0!==c.a&&c.a)&&o||Object])],t);var e,n,o}(),f=n(129),p=n(128),d=n(138),g=n(114),_=function(){function t(){}return t=Object(i.__decorate)([Object(r.w)({declarations:[h],imports:[g.d,a.a,u.c.forRoot(h,{},{links:[{loadChildren:"../pages/menu-list/menu-list.module.ngfactory#MenuListPageModuleNgFactory",name:"MenuListPage",segment:"menu-list",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchPageModuleNgFactory",name:"SearchPage",segment:"search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/track-detail/track-detail.module.ngfactory#TrackDetailPageModuleNgFactory",name:"TrackDetailPage",segment:"detail/:id",priority:"low",defaultHistory:["SearchPage"]}]}),s.a.forRoot({name:"__startTrack"})],bootstrap:[u.b],entryComponents:[h],providers:[c.a,p.a,l.a,f.a,d.a]})],t)}(),m=n(46),v=n(189),b=n(190),y=n(191),w=n(192),k=n(193),x=n(194),P=n(195),M=n(196),j=n(197),C=n(200),O=n(32),z=n(45),N=n(5),F=n(20),E=n(8),D=n(1),S=n(3),H=n(7),T=n(27),I=n(13),L=n(9),q=[],R=r._5({encapsulation:2,styles:q,data:{}}),K=r._3("ng-component",h,function(t){return r._32(0,[(t()(),r._8(0,null,null,1,"ng-component",[],null,null,null,o,R)),r._6(49152,null,0,h,[S.a,l.a,c.a],null,null)],null,null)},{},{},[]),A=n(14),U=n(92),X=n(17),B=n(83),G=n(85),J=n(75),V=n(15),W=n(26),Q=n(34),Y=n(90),Z=n(113),$=n(48),tt=n(35),et=n(96),nt=n(61),ot=n(100),at=n(94),rt=n(77),it=n(118),ut=n(93),st=n(25),ct=n(91),lt=n(95),ht=r._4(_,[m.b],function(t){return r._19([r._20(512,r.j,r._0,[[8,[v.a,b.a,y.a,w.a,k.a,x.a,P.a,M.a,j.a,K]],[3,r.j],r.x]),r._20(4608,g.h,g.m,[A.c,r.C,g.k]),r._20(4608,g.n,g.n,[g.h,g.l]),r._20(5120,g.a,function(t){return[t]},[g.n]),r._20(4608,g.j,g.j,[]),r._20(6144,g.i,null,[g.j]),r._20(4608,g.g,g.g,[g.i]),r._20(6144,g.b,null,[g.g]),r._20(5120,g.f,g.o,[g.b,[2,g.a]]),r._20(4608,g.c,g.c,[g.f]),r._20(5120,r.v,r._18,[[3,r.v]]),r._20(4608,A.k,A.j,[r.v]),r._20(5120,r.b,r._9,[]),r._20(5120,r.t,r._15,[]),r._20(5120,r.u,r._16,[]),r._20(4608,a.c,a.t,[A.c]),r._20(6144,r.K,null,[a.c]),r._20(4608,a.f,U.a,[]),r._20(5120,a.d,function(t,e,n,o){return[new a.l(t),new a.p(e),new a.o(n,o)]},[A.c,A.c,A.c,a.f]),r._20(4608,a.e,a.e,[a.d,r.z]),r._20(135680,a.n,a.n,[A.c]),r._20(4608,a.m,a.m,[a.e,a.n]),r._20(6144,r.I,null,[a.m]),r._20(6144,a.q,null,[a.n]),r._20(4608,r.N,r.N,[r.z]),r._20(4608,a.h,a.h,[A.c]),r._20(4608,a.j,a.j,[A.c]),r._20(4608,X.m,X.m,[]),r._20(4608,X.c,X.c,[]),r._20(4608,B.a,B.a,[E.a,D.a]),r._20(4608,G.a,G.a,[E.a,D.a]),r._20(4608,J.a,J.a,[]),r._20(4608,V.a,V.a,[]),r._20(4608,W.a,W.a,[S.a]),r._20(4608,Q.a,Q.a,[D.a,S.a,r.z,L.a]),r._20(4608,Y.a,Y.a,[E.a,D.a]),r._20(5120,A.f,Z.c,[A.q,[2,A.a],D.a]),r._20(4608,A.e,A.e,[A.f]),r._20(5120,$.b,$.d,[E.a,$.a]),r._20(5120,I.a,I.b,[E.a,$.b,A.e,tt.b,r.j]),r._20(4608,et.a,et.a,[E.a,D.a,I.a]),r._20(4608,nt.a,nt.a,[E.a,D.a]),r._20(4608,ot.a,ot.a,[E.a,D.a,I.a]),r._20(4608,at.a,at.a,[D.a,S.a,L.a,E.a,H.l]),r._20(4608,rt.a,rt.a,[E.a,D.a]),r._20(4608,T.a,T.a,[S.a,D.a]),r._20(5120,it.a,it.c,[it.b]),r._20(4608,c.a,c.a,[]),r._20(4608,p.a,p.a,[]),r._20(4608,l.a,l.a,[]),r._20(4608,f.a,f.a,[]),r._20(4608,d.a,d.a,[]),r._20(512,g.e,g.e,[]),r._20(512,g.d,g.d,[]),r._20(512,A.b,A.b,[]),r._20(1024,r.m,a.r,[]),r._20(256,D.b,{},[]),r._20(1024,ut.a,ut.b,[]),r._20(1024,S.a,S.b,[a.b,ut.a,r.z]),r._20(1024,D.a,D.c,[D.b,S.a]),r._20(512,L.a,L.a,[S.a]),r._20(512,st.a,st.a,[]),r._20(512,E.a,E.a,[D.a,S.a,[2,st.a]]),r._20(512,H.l,H.l,[E.a]),r._20(256,$.a,{links:[{loadChildren:"../pages/menu-list/menu-list.module.ngfactory#MenuListPageModuleNgFactory",name:"MenuListPage",segment:"menu-list",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchPageModuleNgFactory",name:"SearchPage",segment:"search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/track-detail/track-detail.module.ngfactory#TrackDetailPageModuleNgFactory",name:"TrackDetailPage",segment:"detail/:id",priority:"low",defaultHistory:["SearchPage"]}]},[]),r._20(512,r.h,r.h,[]),r._20(512,ct.a,ct.a,[r.h]),r._20(1024,tt.b,tt.c,[ct.a,r.r]),r._20(1024,r.c,function(t,e,n,o,r,i,u,s,c,l,h,f,p,d){return[a.s(t,e),lt.a(n),J.b(o,r),at.b(i,u,s,c,l),tt.d(h,f,p,d)]},[[2,a.i],[2,r.y],D.a,S.a,L.a,D.a,S.a,L.a,E.a,H.l,D.a,$.a,tt.b,r.z]),r._20(512,r.d,r.d,[[2,r.c]]),r._20(131584,r._7,r._7,[r.z,r._1,r.r,r.m,r.j,r.d]),r._20(2048,r.f,null,[r._7]),r._20(512,r.e,r.e,[r.f]),r._20(512,a.a,a.a,[[3,a.a]]),r._20(512,X.l,X.l,[]),r._20(512,X.f,X.f,[]),r._20(512,X.k,X.k,[]),r._20(512,Z.a,Z.a,[]),r._20(512,s.a,s.a,[]),r._20(512,_,_,[]),r._20(256,g.k,"XSRF-TOKEN",[]),r._20(256,g.l,"X-XSRF-TOKEN",[]),r._20(256,m.a,h,[]),r._20(256,A.a,"/",[]),r._20(256,it.b,{name:"__startTrack"},[])])});Object(r.U)(),Object(a.k)().bootstrapModuleFactory(ht)}},[202]);