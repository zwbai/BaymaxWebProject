<template>
    <div id="tips">{{message}}</div>
</template>

<script>
export default {
    name: 'Tips',

    data() {
      return {
          message: 'Tips`s Page',
        }
    }
}
</script>

<style lang="stylus" scoped>
#tips{
    background-color green
}
</style>


