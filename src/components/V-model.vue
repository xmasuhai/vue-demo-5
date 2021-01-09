<template>
  <div>
    <br />
    输入框
    <hr />
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <p><button @click="message = 'Fang'">set message to 'Fang'</button></p>
    <br />
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
  </pre
    >
    <br />
    <br />
    复选框
    <hr />
    <br />
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <br />
    <label>
      <span>
        <input type="checkbox" v-model="checked" /> </span
      >{{ checked }}
    </label>
    <br />
    <label>
      <span>
        <input type="checkbox" v-model="checked" /> </span
      >用label包住input 不需要再在input上加id属性和对应的label上加for属性
    </label>
    <br />
    不良嗜好：{{ hobby }}
    <br />
    <label>
      <input type="checkbox" v-model="hobby" value="抽烟" />
      <span>抽烟 </span>
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="hobby" value="喝酒" />
      <span>喝酒 </span>
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="hobby" value="烫头" />
      <span>烫头 </span>
    </label>
    <br />
    动态绑定：{{ hobby2 }} ':value'
    <br />
    <label>
      <input type="checkbox" v-model="hobby2" :value="1" />
      <span>1抽烟 </span>
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="hobby2" :value="2" />
      <span>2喝酒 </span>
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="hobby2" :value="3" />
      <span>3烫头 </span>
    </label>
    <br />
    <br />
    单选框
    <hr />
    你想要： {{ radio }}
    <br />
    <label>
      <input type="radio" v-model="radio" :value="1" name="want" />
      <span>1抽烟 </span>
    </label>
    <label>
      <input type="radio" v-model="radio" :value="2" name="want" />
      <span>2喝酒 </span>
    </label>
    <label>
      <input type="radio" v-model="radio" :value="3" name="want" />
      <span>3烫头 </span>
    </label>
    <br />
    加上属性name，表示单选框是同一组的
    <br />
    <br />
    选择框
    <hr />
    你想要{{ want }}
    <br />
    <select v-model="want" name="want2" id="want2">
      <option disabled value="">---请选择---</option>
      <option :value="1">抽烟</option>
      <option :value="2">喝酒</option>
      <option :value="3">烫头</option>
      <option v-for="item in want2" :value="item.value" :key="item.value">
        {{ item.text }}
      </option>
    </select>
    <br />
    你想要{{ hope }}
    <br />
    <select multiple v-model="hope" name="hope" id="hope">
      <option disabled value="">---请选择---</option>
      <option :value="1">抽烟</option>
      <option :value="2">喝酒</option>
      <option :value="3">烫头</option>
      <option v-for="item in want2" :value="item.value" :key="item.value">
        {{ item.text }}
      </option>
    </select>
    <br />
    <br />
    登录表单 {{ user }}
    <form @submit.prevent="onSubmit">
      <label>
        <span>用户名</span>
        <input type="text" v-model.lazy.trim="user.username" />
        <!--   等价于   -->
        <!--
       <input type="text" :value="user.username" @input="user.name=$event.target.value">-->
      </label>
      <label>
        <span>密码</span>
        <input type="password" v-model.trim="user.password" />
      </label>
      <label>
        <span>联系电话</span>
        <input type="number" v-model.number="user.number" />
      </label>
      <button type="submit">登录</button>
      <br />
      <hr />
      <h3>In My Input &lt;MyInput v-model="user.username"&gt;</h3>
      <MyInput v-model="user.username" />
      <h3>
        equals Input &lt;MyInput :value="user.username" @input="user.username =
        $event"&gt;
      </h3>
      <MyInput :value="user.username" @input="user.username = $event" />
    </form>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";
export default {
  data() {
    return {
      message: "hi",
      checked: true,
      hobby: [],
      hobby2: [],
      radio: "",
      want: "",
      want2: [
        { text: "抽烟", value: 4 },
        { text: "喝酒", value: 5 },
        { text: "烫头", value: 6 },
      ],
      hope: [],
      user: {
        username: "",
        password: "",
        number: NaN,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
  components: {
    MyInput,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
pre {
  width: 200px;
  background: #cccccc;
  display: inline-block;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
