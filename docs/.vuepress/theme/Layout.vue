<template>
  <div>
    <nav class="header navbar navbar-dark bg-dark">
      <div class="content container">
        <a class="text-white" href="/">
          <h3>Henrique Custódia</h3>
        </a>

        <div class="ml-auto">
          <a class="text-white btn btn-outline-secondary" href="/">Blog</a>
          <a class="text-white btn btn-outline-secondary" href="/sobre-mim">Sobre mim</a>
        </div>
      </div>
    </nav>

    <div class="container py-3">
      <template v-if="!showContent">
        <template v-if="lastPost">
          <a class="text-dark" :href="lastPost.path">
            <div class="card m-2">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="lastPost.frontmatter.cover" class="card-img">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ lastPost.title }}</h5>
                    <p class="card-text">{{ lastPost.frontmatter.subtitle }}</p>

                    <p class="card-text">
                      <small class="text-muted">{{ lastPost.frontmatter.updatedAt | formatDate }}</small>
                    </p>

                    <div class="d-flex">
                      <template v-for="(tag) in lastPost.frontmatter.tags">
                        <span class="badge badge-dark">{{ tag }}</span>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </template>

        <div class="d-flex flex-wrap mt-3">
          <template v-for="(item, index) in pastPosts">
            <a class="text-dark" :href="item.path">
              <div class="card w-350 m-2">
                <img :src="item.frontmatter.cover" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.frontmatter.subtitle }}</p>
                  <p class="card-text">
                    <small class="text-muted">{{ item.frontmatter.updatedAt | formatDate }}</small>
                  </p>

                  <div class="d-flex">
                    <template v-for="(tag) in lastPost.frontmatter.tags">
                      <span class="badge badge-dark">{{ tag }}</span>
                    </template>
                  </div>
                </div>
              </div>
            </a>
          </template>
        </div>
      </template>

      <template v-else>
        <Content/>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";

body {
  margin: 0;
}

/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=css+clike+javascript+scss */
/**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: none;
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

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #e2777a;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
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
a {
  text-decoration: none;
}

.header {
  height: 100px;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  padding: 0 25px;

  .content {
    display: flex;
    align-items: center;
  }
}

.w-350 {
  width: 350px;
}

a:hover {
  text-decoration: none;
}

</style>

<script>
import format from "date-fns/format";
import pt from "date-fns/locale/pt";

function formatDate(value) {
  return format(new Date(value), "DD [de] MMMM [de] YYYY", { locale: pt });
}

export default {
  filters: {
    formatDate
  },

  computed: {
    showContent() {
      return this.$page.path !== "/";
    },

    lastPost() {
      return this.posts[0];
    },

    pastPosts() {
      return this.posts.slice(1);
    },

    posts() {
      return this.$site.pages
        .filter(item => item.path.startsWith("/blog"))
        .sort((a, b) => {
          const da = new Date(a.frontmatter.updatedAt);
          const db = new Date(b.frontmatter.updatedAt);

          return da > db ? -1 : 1;
        });
    }
  },
  methods: {}
};
</script>
