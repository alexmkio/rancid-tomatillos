(this["webpackJsonprancid-tomatillos"]=this["webpackJsonprancid-tomatillos"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(19),i=n.n(r),a=(n(26),n(9)),o=n.n(a),c=n(20),d=n(11),l=n(12),h=n(14),u=n(13),m=n(7),j=(n(28),n(0)),p=function(e){var t=e.photo,n=e.id,s=e.title;return t?Object(j.jsx)("img",{className:"poster-image",id:n,src:t,alt:s}):Object(j.jsx)("div",{className:"poster-image placeholder-height"})},b=(n(30),function(e){var t=e.movies,n=[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e){return Object(j.jsx)(p,{},e)})),s=[];return t&&(s=t.map((function(e){return Object(j.jsx)(m.b,{to:"".concat(e.id),children:Object(j.jsx)(p,{id:e.id,photo:e.poster_path,title:e.title},e.id)},e.id)}))),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Featured Films"}),Object(j.jsx)("section",{className:"poster-container",children:s.length?s:n})]})}),v=(n(39),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.fetch("movies/".concat(e.props.id),"selectedMovie")},e.render=function(){if(e.props.movie.title){var t=e.props.movie,n=t.genres.map((function(e){return Object(j.jsx)("dd",{className:"genre",children:e},t.genres.indexOf(e))})),s=t.genres.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("dt",{children:"Genre"}),n]}):null,r=t.runtime?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("dt",{children:"Runtime"}),Object(j.jsxs)("dd",{children:[t.runtime," minutes"]})]}):null,i=t.tagline?Object(j.jsxs)("dd",{className:"tagline",children:['"',t.tagline,'"']}):null,a="0"===t.budget?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("dt",{children:"Budget"}),Object(j.jsxs)("dd",{children:["$",t.budget]})]}),o="0"===t.revenue?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("dt",{children:"Revenue"}),Object(j.jsxs)("dd",{children:["$",t.revenue]})]});return Object(j.jsxs)("section",{className:"details-container",children:[Object(j.jsx)("img",{className:"detail-background",src:t.backdrop_path,alt:""}),Object(j.jsxs)("div",{className:"detail-info",children:[Object(j.jsxs)("dl",{children:[Object(j.jsx)("h2",{className:"detail-title",children:t.title}),i,Object(j.jsx)("dd",{children:t.overview}),s,r,Object(j.jsx)("dt",{children:"Release Date"}),Object(j.jsx)("dd",{children:t.release_date}),Object(j.jsx)("dt",{children:"Average User Rating"}),Object(j.jsx)("dd",{children:t.average_rating}),a,o]}),Object(j.jsx)(m.b,{to:"/",children:Object(j.jsx)("button",{className:"details-back",onClick:e.props.clearSelected,children:"Back"})})]})]})}return Object(j.jsx)("h3",{children:"Loading Movie Details"})},e}return n}(s.Component)),g=(n(40),[{code:301,message:"Moved Permanently",description:"The URL of the requested resource has been changed permanently. The new URL is given in the response."},{code:401,message:"Unauthorized",description:'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'},{code:403,message:"Forbidden",description:"The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server."},{code:404,message:"Not Found",description:"The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web."},{code:408,message:"Request Timeout",description:"This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message."},{code:429,message:"Too Many Requests",description:'The user has sent too many requests in a given amount of time ("rate limiting").'},{code:500,message:"Internal Server Error",description:"The server has encountered a situation it doesn't know how to handle."},{code:502,message:"Bad Gateway",description:"This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response."},{code:503,message:"Service Unavailable",description:"The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached."},{code:504,message:"Gateway Timeout",description:"This error response is given when the server is acting as a gateway and cannot get a response in time."}]),f=function(e){var t=e.code,n=e.clearSelected,s=g.find((function(e){return e.code===parseInt(t)}));return Object(j.jsx)("article",{className:"error-container",children:Object(j.jsxs)("div",{className:"error-div",children:[Object(j.jsxs)("h2",{className:"error-h2",children:["Error ",s.code]}),Object(j.jsx)("h3",{children:s.message}),Object(j.jsx)("p",{children:s.description}),Object(j.jsx)(m.b,{to:"/",children:Object(j.jsx)("button",{className:"details-back",onClick:n,children:"Back"})})]})})},x=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rancid-tomatillos.herokuapp.com/api/v2/".concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.status);case 5:return e.next=7,n.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e,t){var n;return e.includes("/")?(n="https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg"===t.movie.backdrop_path?"https://www.officespacesny.com/wp-content/themes/realestate-7/images/no-image.png":t.movie.backdrop_path,{average_rating:Math.round(100*t.movie.average_rating)/100,backdrop_path:n,budget:t.movie.budget.toLocaleString("en-US"),genres:t.movie.genres,overview:t.movie.overview,release_date:t.movie.release_date,revenue:t.movie.revenue.toLocaleString("en-US"),runtime:t.movie.runtime,tagline:t.movie.tagline,title:t.movie.title}):t.movies.map((function(e){return{id:e.id,poster_path:e.poster_path,title:e.title}}))},w=(n(41),n(2)),y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.fetch("movies","movies")},e.fetch=function(){var t=Object(d.a)(o.a.mark((function t(n,s){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(n);case 3:r=t.sent,e.setState(Object(c.a)({},s,O(n,r))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({errorCode:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),e.clearSelected=function(){e.setState({errorCode:null,selectedMovie:{}})},e.render=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Rancid Tomatillos"})}),Object(j.jsxs)("main",{children:[Object(j.jsx)(w.a,{exact:!0,path:"/",render:function(){return e.state.errorCode?Object(j.jsx)(f,{code:e.state.errorCode,clearSelected:e.clearSelected}):e.state.movies.length?Object(j.jsx)(b,{movies:e.state.movies}):Object(j.jsx)(b,{})}}),Object(j.jsx)(w.a,{exact:!0,path:"/:id",render:function(t){var n=t.match;return e.state.errorCode?Object(j.jsx)(f,{code:e.state.errorCode,clearSelected:e.clearSelected}):e.state.selectedMovie?Object(j.jsx)(v,{id:n.params.id,movie:e.state.selectedMovie,clearSelected:e.clearSelected,fetch:e.fetch}):Object(j.jsx)(v,{id:n.params.id,fetch:e.fetch})}})]})]})},e.state={movies:[],errorCode:null,selectedMovie:{}},e}return n}(s.Component),k=Object(j.jsxs)(m.a,{children:[" ",Object(j.jsx)(y,{})," "]});i.a.render(k,document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.eacfb54a.chunk.js.map