<template>
    <div id="footer">{{message}}</div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
      return {
          message: 'Footer`s Page',
        }
    }
}
</script>

<style lang="stylus" scoped>
#footer{
    background-color red
}
</style>


