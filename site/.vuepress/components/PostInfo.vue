<template>
  <div class="d-flex">
    <span class="text-muted">{{ $page.frontmatter.date | $formatDate }}</span>

    <div class="ml-auto">
      <a
        class="twitter-share-button"
        :href="`https://twitter.com/intent/tweet?text=${tweetContent}`"
      >Tweet</a>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        tweetContent() {
            return `"${this.$page.title}" escrito por @henricustodia`;
        }
    }
}
</script>
