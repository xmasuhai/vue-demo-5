<template>
  <div>
    <h3>输入框 input box:</h3>
    <input v-model="message" placeholder="edit me"/>
    <p>Message is: {{ message }}</p>
    <p>
      <button @click="message = 'Fang'">set message to 'Fang'</button>
    </p>
    <br/>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <p>
      <span>Multiline message is:</span>
    </p>
    <p style="white-space: pre-line">{{ message }}</p>
    <pre>
      当一行文字是数字或字母时或者数字字母组合时会出现不换行局面，
      这时候加个word-wrap:break-word；
      就基本可以解决但是有种情况是它解决不了的
      前台页面用户输入文字的时候没有换行没有空格，文字传给后台，
      但是这些文字再一次原样输出（&lt;pre&gt;标签）传到前台页面时就会出现不换行的局面。
      简单的说就是&lt;pre&gt;标签文字无法用word-wrap:break-word换行的
    </pre>
  </div>
</template>

<script>
export default {
  name: 'VueInput',
  data() {
    return {
      message: 'hi',
    }
  }
}
</script>

<style scoped>

</style>
