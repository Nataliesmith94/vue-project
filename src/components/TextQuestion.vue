<template>
<question
  :label="label"
  :name="name"
  :errorMessage="errorMessage" >
  <input
    :maxlength="maxLength"
    type="text"
    :id="name"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    class="input"/>
</question>
</template>

<script>
import Question from '@/components/Question.vue'

export default {
  name: 'TextQuestion',

  components: {
    question: Question
  },

  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 50
    },
    mask: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .input {
    appearance: none;
    box-sizing: border-box;
    margin-bottom: 15px;
    padding: 16px 15px 17px;
    font-size: 16px;
    border-radius: 6px;
    box-shadow: inset 0 2px 0 0 #c6cacc;
    background-color: #ebf0f2;
    display: inline-block;
    color: #566266;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 350px;
  }
</style>
