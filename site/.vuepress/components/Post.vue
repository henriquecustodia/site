<template>
  <div class="d-flex justify-content-center">
    <div class="content">
      <img class="mb-3 w-100" :src="$withBase($page.frontmatter.image || '')" alt="cover" />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  max-width: 700px;
  padding: 10px;
}
</style>