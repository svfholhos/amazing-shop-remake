(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(33)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),s=t.n(c),l=(t(16),t(17),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),g=(t(18),t(19),t(20),function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement("h2",{style:{color:"#fff"}},"Amazing shop")))}),p=(t(21),function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h4",{className:"subTitle"},r.a.createElement("i",{className:"fas fa-map-marker-alt"}),"My city:",r.a.createElement("a",{href:"https://goo.gl/maps/27cDydCFh38FUNeb6",target:"_blank",rel:"noopener noreferrer"},"Los Angeles")),r.a.createElement("h4",{className:"subTitle"},r.a.createElement("i",{className:"fas fa-phone"})," 8 800505-04-83"))}),d=(t(22),function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",{className:"main-menu"},r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:"/"},"Shipping")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:"/"},"Blog")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:"/"},"Company")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:"/"},"My account"))))}),f=(t(23),function(){return r.a.createElement("div",{className:"searchBar"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{type:"text",placeholder:"Search products by SKU or name"}))}),E=(t(24),function(){return r.a.createElement("button",{className:"myCart"},r.a.createElement("i",{className:"fas fa-cart-plus cart-icon"}),r.a.createElement("div",{className:"myCart-text"},"My Cart"),r.a.createElement("div",{className:"count"}," 12 "))}),h=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).toggleHamburger=function(){t.setState({toggleHamburger:""===t.state.toggleHamburger?" is-active":""})},t.state={toggleHamburger:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header-top-container"},r.a.createElement(g,null),r.a.createElement(p,null),r.a.createElement(d,null)),r.a.createElement("div",{className:"header-bottom-container"},r.a.createElement(f,null),r.a.createElement(E,null)),r.a.createElement("div",{className:"mobile-menu"},r.a.createElement("button",{className:"hamburger hamburger--elastic"+this.state.toggleHamburger,type:"button",onClick:this.toggleHamburger},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"})),r.a.createElement("span",{id:"categ-name"},"Face")),r.a.createElement("div",{className:"mobile-search"},r.a.createElement("img",{src:"icons/search_icon.png",alt:"search",id:"search-icon"}))))}}]),a}(r.a.Component),b=t(6),N=t.n(b),v=t(9),y=(t(26),t(27),function(e){return e.subCategories.map(function(e,a){return r.a.createElement("li",{key:a,className:"subCategories-item"},e)})}),j=(t(28),function(){return r.a.createElement("div",{className:"ads"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"ads/img1.jpg",alt:"",className:"ad"})))}),C=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).categories=Object.keys(t.props.categories),t.state={activeCategory:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sideBar"},r.a.createElement("span",{className:"all-categories"},"All categories"),this.categories.map(function(a,t){return r.a.createElement("div",{key:t},r.a.createElement("button",{className:"category",id:a,onClick:function(){e.setState(function(e){return{activeCategory:e.activeCategory===a?"":a}})}},a),r.a.createElement("div",{className:"subCategories"},e.state.activeCategory===a&&r.a.createElement(y,{subCategories:e.props.categories[a]})))}),r.a.createElement(j,null))}}]),a}(r.a.Component),O=(t(29),t(30),t(31),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{id:"showFilters"},r.a.createElement("h4",null,"Filters")),r.a.createElement("div",{className:"filters"},r.a.createElement("span",{className:"brand-filter"},"Brand: ",r.a.createElement("span",{className:"filter-blue"},"All brands")),r.a.createElement("span",{className:"skin-filter"},"Skin type: ",r.a.createElement("span",{className:"filter-blue"},"For oily skin")),r.a.createElement("span",{className:"age-filter"},"Age: ",r.a.createElement("span",{className:"filter-blue"},"30+")),r.a.createElement("span",{className:"sort-by"},"Sort:",r.a.createElement("span",{className:"filter-blue"}," ","By",r.a.createElement("br",null),"Popularity"))))}}]),a}(n.Component)),k=(t(32),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"product",id:this.props.item.id},this.props.item.name)}}]),a}(n.Component)),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={products:{face:[{id:0,img:"/img/products-img/prod1.jpg",name:"Missha All Around Safe Block Sebum Zero Sun",price:4.99},{id:1,img:"/img/products-img/prod2.jpg",name:"Claire\u2019s Cloud 9 Blanc De Whitening Cream",price:20},{id:2,img:"/img/products-img/prod3.jpg",name:"Scinic Honey Banana Cleansing Foam",price:4},{id:3,img:"/img/products-img/prod4.jpg",name:"Cosrx Advanced Snail 92 All in One Cream",price:24},{id:4,img:"/img/products-img/prod5.png",name:"Innisfree Green Tea Balancing Cream",price:18},{id:5,img:"/img/products-img/prod6.jpg",name:"Skin79 Fresh Garden Mask - Snail",price:2},{id:6,img:"/img/products-img/prod7.jpg",name:"Tonymoly Pure Eco Snail Moisture Gel",price:8},{id:7,img:"/img/products-img/prod8.jpg",name:"Innisfree Canola Honey Mask",price:14}]}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"products-wrapper"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"content-header-text"},r.a.createElement("h2",{id:"category-title"},"Creams & gels")),r.a.createElement("div",{className:"pagination"},r.a.createElement("h4",null,"Showing 60 of 392"),r.a.createElement("div",{className:"arrows"},r.a.createElement("span",{className:"arrow-left"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"arrow-right"},r.a.createElement("i",{className:"fas fa-chevron-right"}))))),r.a.createElement(O,null),r.a.createElement("hr",null),r.a.createElement("div",{className:"product-list"},this.state.products.face.map(function(e,a){return r.a.createElement(k,{item:e,key:a})})))}}]),a}(n.Component),S=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).getCategories=Object(v.a)(N.a.mark(function e(){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:5000/api/categories").catch(function(e){return console.log(e)});case 2:a=e.sent,console.log(a.json());case 4:case"end":return e.stop()}},e)})),t.state={categories:{face:["Creams & Gels","Patches","Emulsions","Toners","Face Cleasing","Make up removal","Scrubs","Peeling","Masks"],body:["test","test"],foot:["test"],hands:["test"],hair:["test"],makeUp:[]}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.getCategories(),r.a.createElement("div",{className:"main-content"},r.a.createElement(C,{categories:this.state.categories}," "),r.a.createElement(w,null))}}]),a}(r.a.Component);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.15ac3649.chunk.js.map