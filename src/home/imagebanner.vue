<template>
  <div>
   <app-banner :listImg="listImg"></app-banner>
  </div>
</template>

<script>
 import Banner from './banner.vue'
 import a from '../assets/images/BJTU-1.jpg'
 import b from '../assets/images/BJTU-2.jpg'
 import c from '../assets/images/BJTU-3.jpg'
 import d from '../assets/images/BJTU-4.jpg'
 import e from '../assets/images/BJTU-5.jpg'
     export default {
        name: 'Imagebanner',
        data() {
            return {
                listImg: [{
                    url: a
                }, {
                    url: b
                }, {
                    url: c
                }, {
                    url: d
                }, {
                    url: e
                }]
            }
        },
        components: {
            'app-banner': Banner
        }
    };
</script>