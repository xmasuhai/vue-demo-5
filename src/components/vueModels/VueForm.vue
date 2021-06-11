<template>
  <div>
    <h3>登录表单</h3>
    用户名： {{ user }}
    <form @submit.prevent="onSubmit">
      <label>
        <span>用户名</span>
        <input type="text" v-model.lazy.trim="user.username"/>
        <!--   等价于   -->
        <!--
       <input type="text" :value="user.username" @input="user.name=$event.target.value">-->
      </label>
      <label>
        <span>密码</span>
        <input type="password" v-model.trim="user.password"/>
      </label>
      <label>
        <span>联系电话</span>
        <input type="number" v-model.number="user.number"/>
      </label>
      <button type="submit">登录</button>
      <br/>
      <hr/>
      <h3>In My Input &lt;MyInput v-model="user.username"&gt;</h3>
      <my-input v-model="user.username"/>
      <h3>
        equals Input &lt;MyInput :value="user.username" @input="user.username =
        $event"&gt;
      </h3>
      <my-input :value="user.username" @input="user.username = $event"/>
    </form>
  </div>
</template>

<script>
import MyInput from '@/components/vueModels/MyInput'

export default {
  name: 'VueForm',
  components: {MyInput},
  data() {
    return {
      user: {
        username: '',
        password: '',
        number: NaN,
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
    },
  },
}
</script>
