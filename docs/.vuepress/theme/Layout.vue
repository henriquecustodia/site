<template>
  <div>
    <div class="header">
      <div class="content">
        <div class="perfil">
          <div class="image"></div>
          <a class="name" href="/">Henrique Custódia</a>
        </div>

        <a class="link" href="/sobre-mim">Sobre mim</a>
      </div>
    </div>

    <div class="container">
      <div class="content">
        <template v-if="!showContent">
          <template v-for="(item, index) in posts">
            <a :href="item.path">
              <div class="post-item">
                <span class="post-item-title">{{ item.title }}</span>
              </div>
            </a>
          </template>
        </template>

        <template v-if="showContent">
          <Content/>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
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
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
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
    width: 100%;
    max-width: 900px;

    .link {
      color: #fff;
      margin-left: auto;
    }

    .perfil {
      display: flex;
      align-items: center;

      .image {
        background: url(/me.jpg);
        width: 50px;
        height: 50px;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
        border: 1px solid #fff;
      }
      .name {
        color: #fff;
        margin-left: 10px;
      }
    }
  }
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;

  .content {
    width: 100%;
    max-width: 900px;

    .post-item {
      height: 50px;
      color: #000;
      border-bottom: 1px solid #000;
      display: flex;
      align-items: center;
      padding: 10px;

      .post-item-title {
        font-size: 25px;
      }

      &:hover {
        background: #000;
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>

<script>
const IS_POST = /\/blog\//g;

export default {
  computed: {
    showContent() {
      return this.$page.path !== "/";
    },

    posts() {
      return this.$site.pages.filter(item => IS_POST.test(item.path));
    }
  }
};
</script>
