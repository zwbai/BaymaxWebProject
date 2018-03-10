<template>
    <div id="navigation" class="navbar is-fixed-top is-transparent" style="
        transform: translateY(0px);">
        <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
                主页
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/documentation/overview/start/">
                导航栏
                </a>
                <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                    研究方向
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    研究内容
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    交友天地
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    曾获奖项
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                    发表论文
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                    About
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
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
                            <i class="fab fa-Github"></i>
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


