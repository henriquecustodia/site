(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{17:function(t,s,a){},18:function(t,s,a){},69:function(t,s,a){"use strict";var e=a(17);a.n(e).a},70:function(t,s,a){"use strict";var e=a(18);a.n(e).a},72:function(t,s,a){"use strict";a.r(s);a(31),a(48),a(49);var e=a(53),i=a.n(e),r=a(66),n=a.n(r);var o={components:{VueDisqus:a(71).a},filters:{formatDate:function(t){return i()(new Date(t),"DD [de] MMMM [de] YYYY",{locale:n.a})}},computed:{showContent:function(){return"/"!==this.$page.path},lastPost:function(){return this.posts[0]},pastPosts:function(){return this.posts.slice(1)},isAbout:function(){return this.$page.path.startsWith("/sobre-mim")},posts:function(){return this.$site.pages.filter(function(t){return t.path.startsWith("/posts")}).sort(function(t,s){return new Date(t.frontmatter.date)>new Date(s.frontmatter.date)?-1:1})}},methods:{}},c=(a(69),a(70),a(0)),l=Object(c.a)(o,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"header navbar navbar-dark bg-dark"},[a("div",{staticClass:"d-flex flex-column flex-sm-row align-items-center container"},[a("router-link",{staticClass:"text-white",attrs:{to:"/"}},[a("h3",[t._v("Henrique Custódia")])]),t._v(" "),a("div",{staticClass:"ml-sm-auto"},[a("router-link",{staticClass:"text-white btn btn-outline-secondary",attrs:{to:"/"}},[t._v("Blog")]),t._v(" "),a("router-link",{staticClass:"text-white btn btn-outline-secondary",attrs:{to:"/sobre-mim"}},[t._v("Sobre mim")])],1)],1)]),t._v(" "),t.showContent?t.isAbout?[a("div",{staticClass:"container post-container py-3"},[a("Content",{staticClass:"post-content"})],1)]:[a("div",{staticClass:"container post-container py-3"},[a("img",{staticClass:"my-3 w-100",attrs:{src:t.$withBase(t.$page.frontmatter.image),alt:"cover"}}),t._v(" "),a("Content",{staticClass:"post-content"}),t._v(" "),a("VueDisqus",{attrs:{shortname:"henriquecustdia"}})],1)]:[a("div",{staticClass:"container py-3"},[t.lastPost?[a("router-link",{staticClass:"text-dark",attrs:{to:t.lastPost.path}},[a("div",{staticClass:"card m-2"},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"card-img",attrs:{src:t.$withBase(t.lastPost.frontmatter.image)}})]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.lastPost.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(t.lastPost.frontmatter.description))]),t._v(" "),a("p",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v(t._s(t._f("formatDate")(t.lastPost.frontmatter.date)))])]),t._v(" "),a("div",{staticClass:"d-flex"},[t._l(t.lastPost.frontmatter.tags,function(s){return[a("span",{staticClass:"badge badge-dark"},[t._v(t._s(s))])]})],2)])])])])])]:t._e(),t._v(" "),a("div",{staticClass:"d-flex flex-wrap mt-3"},[t._l(t.pastPosts,function(s,e){return[a("router-link",{staticClass:"text-dark",attrs:{to:s.path}},[a("div",{staticClass:"card card-width mt-3 m-sm-2"},[a("img",{staticClass:"card-img-top",attrs:{src:t.$withBase(s.frontmatter.image)}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(s.frontmatter.description))]),t._v(" "),a("p",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v(t._s(t._f("formatDate")(s.frontmatter.date)))])]),t._v(" "),a("div",{staticClass:"d-flex"},[t._l(t.lastPost.frontmatter.tags,function(s){return[a("span",{staticClass:"badge badge-dark"},[t._v(t._s(s))])]})],2)])])])]})],2)],2)]],2)},[],!1,null,"92769146",null);s.default=l.exports}}]);