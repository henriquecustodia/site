<template>
  <div class="layout d-flex flex-column">
    <header class="header">
      <div class="d-flex flex-column flex-sm-row align-items-center container">
        <router-link class="text-white" to="/">
          <span>/</span>
        </router-link>

        <router-link class="text-white ml-sm-auto" to="/blog">Blog</router-link>
      </div>
    </header>

    <Content />

    <footer class="footer mt-auto d-flex align-items-center justify-content-center">
      <div class="container d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
        <span class="text-white">Henrique Custódia © {{ new Date().getFullYear() }}</span>

        <div class="ml-sm-auto">
          <a class="mx-1 text-white" href="https://twitter.com/henricustodia" target="_blank">
            <i class="fab fa-lg fa-twitter"></i>
          </a>

          <a class="mx-1 text-white" href="https://github.com/henriquecustodia" target="_blank">
            <i class="fab fa-lg fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";

#app,
body,
html {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: 0 0;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #2d2d2d;
}
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}
.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #999;
}
.token.punctuation {
  color: #ccc;
}
.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag {
  color: #e2777a;
}
.token.function-name {
  color: #6196cc;
}
.token.boolean,
.token.function,
.token.number {
  color: #f08d49;
}
.token.class-name,
.token.constant,
.token.property,
.token.symbol {
  color: #f8c555;
}
.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
  color: #cc99cd;
}
.token.attr-value,
.token.char,
.token.regex,
.token.string,
.token.variable {
  color: #7ec699;
}
.token.entity,
.token.operator,
.token.url {
  color: #67cdcc;
}
.token.bold,
.token.important {
  font-weight: 700;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
.token.inserted {
  color: green;
}
</style>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  padding-top: 70px;
}

.header {
  height: 70px;
  background: #000;
  display: flex;
  justify-content: center;
  padding: 0 25px;
  top: 0;
  position: fixed;
  z-index: 1000;
  width: 100%;
}

.footer {
  height: 50px;
  background: #000;
  padding: 25px;
}
</style>
