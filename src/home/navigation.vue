<template>
    <div id="navigation">
        <nav class="navbar is-fixed-top is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://www.baymaxbai.cn">
            <img src="../assets/images/web_icon.png" alt="Baymaxbai: a modern ML&ITS Learning website" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item" href="http://www.baymaxbai.cn" target="_blank"> 
                主页
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="">
                导航栏
                </a>
                <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="">
                    研究方向
                </a>
                <a class="navbar-item" href="">
                    研究内容
                </a>
                <a class="navbar-item" href="">
                    Let`s Talk
                </a>
                <a class="navbar-item" href="">
                    曾获奖项
                </a>
                <a class="navbar-item" href="">
                    发表论文
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="">
                    About
                </a>
                <a class="navbar-item is-active" href="">
                    赞助
                </a>
                </div>
            </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                    <p class="control">
                        <a class="bd-tw-button button" target="_blank" href="https://github.com/zwbai">
                        <span class="icon">
                            <i class="fab fa-github-square"></i>
                        </span>
                        <span>
                            Github
                        </span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button is-primary" href="https://weibo.com/3899676694/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" target="_blank">
                        <span class="icon">
                            <i class="fas fa-download"></i>
                        </span>
                        <span>联系我们</span>
                        </a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation',

    data() {
      return {
          message: 'Navigation`s Page',
        }
    }
}
</script>

<style lang="stylus" scoped>
#navigation{
}
</style>


