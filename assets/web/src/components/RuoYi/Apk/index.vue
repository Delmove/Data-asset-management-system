<template>
  <div>
    <svg-icon icon-class="phone" @click="goto"/>
  </div>
</template>

<script>
export default {
  name: 'Apk',
  data() {
    return {
      url: '/assets.apk'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>