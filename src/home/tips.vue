<template>
    <div id="tips">
        <section class="hero is-link">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <p class="title">
                                北麦课思
                            </p>
                            <br/>
                            <p class="subtitle">
                                在这里你可以了解到
                                <b>
                                    机器学习
                                </b>
                                与
                                <strong>
                                    智能交通系统
                                </strong>
                                相关的学习内容
                            </p>
                        </div>
                        <div class="column is-narrow">
                            <div id="carboncontainer">
                                <div id="carbon" class="box">
                                    <div id="carbonads">
                                        <span class="carbon-wrap">
                                            <a href="https://space.bilibili.com/19840845/#/" 
                                            target="_blank" class="carbon-img" rel="noopener">
                                                <img src="//fallbacks.carbonads.com/nosvn/fallbacks/ee60df160da9698be82293f861214209.png" 
                                                alt="" border="0" height="100" width="130" style="max-width: 130px;">
                                            </a>  
                                        </span>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

    </div>
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
    margin-top 35px
}
</style>


