<template>
  <div class="page">
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.page{
  height:100px;
}
</style>
