(this.webpackJsonpicomm=this.webpackJsonpicomm||[]).push([[0],{28:function(t,e,c){},37:function(t,e,c){"use strict";c.r(e);var a=c(1),i=c(19),r=c.n(i),n=c(11),s=c(8),A=c(3),l=c(7),d=c.p+"static/media/image_1.28cc92d9.png",o=c.p+"static/media/image_2.d09fd7a8.png",j=c.p+"static/media/image_3.8b8dc9e1.png",m=c.p+"static/media/image_4.28cc92d9.png",u=[{id:1,title:"BLAZER FEMININO LIOCEL PUNHO",price:759,parcel:"12 X R$ 63,25",msg:"LAN\xc7AMENTO",image:m,favorited:!1},{id:2,title:"REGATA FEMININA DE TRICOT COM OMBREIRA",price:759,parcel:"12 X R$ 63,25",msg:"20% OFF",image:o,favorited:!1},{id:3,title:"BLUSA FEMININA SILK MERCI LIOCEL",price:759,parcel:"12 X R$ 63,25",msg:"",image:j,favorited:!1},{id:4,title:"MACAC\xc3O FEMININO MARIA FILO SOBREPOSI\xc7\xc3O",price:759,parcel:"12 X R$ 63,25",msg:"VER\xc3O 2022",image:d,favorited:!1},{id:5,title:"MACAC\xc3O FEMININO MARIA FILO SOBREPOSI\xc7\xc3O",price:759,parcel:"12 X R$ 63,25",msg:"VER\xc3O 2022",image:d,favorited:!1},{id:6,title:"BLUSA FEMININA SILK MERCI LIOCEL",price:759,parcel:"12 X R$ 63,25",msg:"",image:j,favorited:!1},{id:7,title:"REGATA FEMININA DE TRICOT COM OMBREIRA",price:759,parcel:"12 X R$ 63,25",msg:"20% OFF",image:o,favorited:!1},{id:8,title:"BLUSA FEMININA SILK MERCI LIOCEL",price:759,parcel:"12 X R$ 63,25",msg:"",image:j,favorited:!1},{id:9,title:"MACAC\xc3O FEMININO MARIA FILO SOBREPOSI\xc7\xc3O",price:759,parcel:"12 X R$ 63,25",msg:"VER\xc3O 2022",image:d,favorited:!1},{id:10,title:"REGATA FEMININA DE TRICOT COM OMBREIRA",price:759,parcel:"12 X R$ 63,25",msg:"20% OFF",image:o,favorited:!1},{id:11,title:"BLAZER FEMININO LIOCEL PUNHO",price:759,parcel:"12 X R$ 63,25",msg:"LAN\xc7AMENTO",image:m,favorited:!1},{id:12,title:"BLAZER FEMININO LIOCEL PUNHO",price:759,parcel:"12 X R$ 63,25",msg:"LAN\xc7AMENTO",image:m,favorited:!1}],O={products:Object(l.a)(u)},b={cart:[]},g=Object(A.a)(Object(A.a)({},O),b),p=Object(a.createContext)(g),C="SET_FAVORITE",N=function(t){return{type:C,payload:{products:t}}},I="ADD_CART",h=function(t){return{type:I,payload:{cart:t}}},f=function(t,e){var c=e.type,a=e.payload;switch(c){case I:var i=a.cart;return Object(A.a)(Object(A.a)({},t),{},{cart:i,updateSum:!0});default:return t}},v=function(t,e){var c=e.type,a=e.payload;switch(c){case C:var i=a.products;return Object(A.a)(Object(A.a)({},t),{},{products:i});default:return t}},P=c(2);function x(t){var e=t.children,c=Object(a.useReducer)(v,O),i=Object(s.a)(c,2),r=i[0],n=i[1],A=Object(a.useReducer)(f,b),l=Object(s.a)(A,2),d={products:r,cart:l[0],setProducts:n,setCart:l[1]};return Object(P.jsx)(p.Provider,{value:d,children:e})}c(28);var R=c(4),B=c(9),E=c(22),L=function(t,e){return localStorage.setItem(t,JSON.stringify(e))};function S(){var t=Object(a.useContext)(p),e=t.products.products,c=t.cart.cart,i=t.setCart,r=t.setProducts,s=function(t,e){if(t){var c=e.filter((function(e){return e.id===t}))[0];return c?c.count:0}return e.reduce((function(t,e){return t+e.count}),0)}(!1,c),A=function(){for(var t=Object(l.a)(e),c=0;c<t.length;c+=1)t[c].favorited=!1;r(N(t))};return Object(P.jsx)("header",{className:"header",children:Object(P.jsxs)("nav",{className:"nav",children:[Object(P.jsxs)(n.b,{to:"/",className:"navLogo",children:[Object(P.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(P.jsx)("h2",{children:"MCX"})]}),Object(P.jsx)("div",{children:Object(P.jsxs)("ul",{className:"navList",children:[Object(P.jsx)("li",{className:"navItem","aria-hidden":!0,onClick:A,children:Object(P.jsx)("div",{className:"navLink",children:e.some((function(t){return t.favorited}))?Object(P.jsx)(B.a,{className:"navIcon"}):Object(P.jsx)(B.b,{className:"navIcon"})})}),Object(P.jsx)("li",{className:"navItem","aria-hidden":!0,onClick:function(){return i(h([]))},children:Object(P.jsxs)("div",{className:"navLink displayCart",children:[Object(P.jsx)(E.a,{className:"navIcon",style:{marginBottom:".8rem"}}),0!==s&&Object(P.jsx)("div",{className:0===s?"numCount":"numCount showNumCount",children:s})]})})]})})]})})}var Q=c(18);function w(){var t=Object(a.useContext)(p),e=t.products.products,c=t.cart.cart,i=t.setProducts,r=t.setCart,n={qtyPgs:1,atualPg:1,qtyPgsFloor:1,initialProd:0,limitProd:4,cardsLimit:4},d={qtyPgs:1,atualPg:1,qtyPgsFloor:1,initialProd:0,limitProd:2,cardsLimit:2},o=Object(a.useState)(n),j=Object(s.a)(o,2),m=j[0],u=j[1],O=Object(a.useState)([]),b=Object(s.a)(O,2),g=b[0],C=b[1],I=Object(a.useState)(!0),f=Object(s.a)(I,2),v=f[0],x=f[1],R=function(){var t=window.screen.width;x(t>=768)},E=function(){var t=m.limitProd,c=m.cardsLimit,a=m.atualPg;t>=e.length-1?u(v?Object(A.a)(Object(A.a)({},m),{},{initialProd:0,limitProd:4,atualPg:1}):Object(A.a)(Object(A.a)({},m),{},{initialProd:0,limitProd:2,atualPg:1})):u((function(t){return Object(A.a)(Object(A.a)({},m),{},{initialProd:t.initialProd+c,limitProd:t.limitProd+c,atualPg:a+1})}))},S=function(){var t=m.initialProd,c=m.cardsLimit,a=m.qtyPgs,i=m.atualPg;u(0===t?Object(A.a)(Object(A.a)({},m),{},{initialProd:e.length-c,limitProd:e.length,atualPg:a}):function(t){return Object(A.a)(Object(A.a)({},m),{},{initialProd:t.initialProd-c,limitProd:t.limitProd-c,atualPg:i-1})})},w=function(t){return"VER\xc3O 2022"===t?"msgSummer":"LAN\xc7AMENTO"===t?"msgLaunch":"20% OFF"===t?"msgOff":""};return Object(a.useEffect)((function(){u(v?n:d)}),[v]),Object(a.useEffect)((function(){for(var t=m.cardsLimit,c=e.length/t,a=Math.floor(c),i=Math.ceil(c),r=[],n=1;n<=i;n+=1)r.push(n);u(Object(A.a)(Object(A.a)({},m),{},{qtyPgs:i,qtyPgsFloor:a})),C(r)}),[m.cardsLimit]),Object(a.useEffect)(R,[]),window.addEventListener("resize",(function(){return R()})),function(){var t=m.initialProd,a=m.limitProd,n=m.atualPg,s=e.slice(t,a);return Object(P.jsxs)("section",{children:[Object(P.jsx)("div",{className:"homeContainer",children:s.map((function(t){var a=t.id,n=t.msg,s=t.favorited,A=t.image,d=t.title,o=t.price,j=t.parcel;return Object(P.jsxs)("div",{className:"cardContent",children:[Object(P.jsxs)("div",{className:"topCard",children:[Object(P.jsx)("p",{className:w(n),children:n}),Object(P.jsx)("button",{type:"button",className:"favoritedBtn",onClick:function(){return i(N(function(t,e){var c=Object(l.a)(t),a=c.find((function(t){return t.id===e})),i=c.indexOf(a);return c[i].favorited=!c[i].favorited,L("LSprod",c),c}(e,a)))},children:s?Object(P.jsx)(B.a,{}):Object(P.jsx)(B.b,{})})]}),Object(P.jsxs)("div",{className:"middleCard",children:[Object(P.jsx)("img",{src:A,alt:"imagem do produto",className:"imgCard"}),Object(P.jsx)("h3",{className:"titleCard",children:d}),Object(P.jsx)("div",{className:"priceCard",children:"R$ ".concat(o.toLocaleString("pt-br",{minimumFractionDigits:2}))}),Object(P.jsx)("p",{className:"parcelCard",children:j})]}),Object(P.jsx)("div",{className:"buttonCard",children:Object(P.jsx)("button",{type:"button",className:"buyBtn",onClick:function(){return r(h(function(t,e){var c=t.id,a=t.msg,i=t.favorited,r=t.image,n=t.title,s=t.price,A=t.parcel,d=e.find((function(e){return e.id===t.id}));if(!e.length||!d){var o=[].concat(Object(l.a)(e),[{id:c,msg:a,favorited:i,image:r,title:n,price:s,parcel:A,count:1,totalValue:s}]);return L("LScart",o),o}var j=Object(l.a)(e),m=j.indexOf(d);return j[m].count+=1,j[m].totalValue=Math.round(j[m].count*j[m].price*100)/100,L("LScart",j),j}(t,c)))},children:"COMPRAR"})})]},a)}))}),Object(P.jsxs)("div",{className:"pageContent",children:[Object(P.jsx)("div",{className:"arrowLeft",children:Object(P.jsx)(Q.a,{onClick:S,className:"arrowPage"})}),g.map((function(t){return Object(P.jsx)("div",{"aria-hidden":!0,onClick:function(){return function(t){var e=m.cardsLimit;u(Object(A.a)(Object(A.a)({},m),{},{initialProd:(t-1)*e,limitProd:t*e,atualPg:t}))}(t)},className:t===n?"numPage atualPg":"numPage",children:t},t)})),Object(P.jsx)("div",{className:"arrowRight",children:Object(P.jsx)(Q.b,{onClick:E,className:"arrowPage"})})]})]})}()}var T=c.p+"static/media/image_5.252cc445.png",M=c.p+"static/media/image_6.c308b444.png";function G(){return Object(P.jsxs)("main",{children:[Object(P.jsx)(S,{}),Object(P.jsxs)("section",{className:"topImages",children:[Object(P.jsxs)("div",{children:[Object(P.jsxs)("p",{className:"titleTopImg",children:["\xcdRIS",Object(P.jsx)("br",{}),"VER\xc3O",Object(P.jsx)("br",{}),"2022"]}),Object(P.jsx)("img",{src:T,alt:"imagem destaque 1"})]}),Object(P.jsxs)("div",{children:[Object(P.jsxs)("p",{className:"titleTopImg",children:[Object(P.jsx)("br",{}),"LE LIS",Object(P.jsx)("br",{}),"BLANC"]}),Object(P.jsx)("img",{src:M,alt:"imagem destaque 2"})]})]}),Object(P.jsxs)("section",{className:"homeContent",children:[Object(P.jsx)("h2",{className:"titleHome",children:"DESTAQUES"}),Object(P.jsx)(w,{})]})]})}var k=function(){return Object(P.jsx)(R.c,{children:Object(P.jsx)(R.a,{exact:!0,path:"/",component:G})})};r.a.render(Object(P.jsx)(n.a,{children:Object(P.jsx)(x,{store:p,children:Object(P.jsx)(k,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c009ea6d.chunk.js.map