<template>
  <div>
    <app-header></app-header>
    <ul>
      <text-question
        name="firstName"
        label="What's your first name?"
        placeholder="e.g. Joe"
        data-vv-validate-on="textEntered"
        mask="[a-zA-Z-' \u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff]"
        maxLength="50">
      </text-question>

      <text-question
        name="lastName"
        label="What's your last name?"
        placeholder="e.g. smith"
        data-vv-validate-on="textEntered"
        mask="[a-zA-Z-' \u00c0-\u00d6\u00d8-\u00f6\u00f8-\u024f\u1e00-\u1eff]"
        maxLength=50>
      </text-question>

      <radio-button-question
        name="gender"
        label="what is your gender?"
        v-model="gender"
        data-vv-validate-on="input"
        :dual="true"
        :options="genderOptions">
      </radio-button-question>
    </ul>
      <button type="button"> Enter Your Details </button>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TextQuestion from '@/components/TextQuestion.vue'
import RadioButtonQuestion from '@/components/RadioButtonQuestion.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'text-question': TextQuestion,
    'radio-button-question': RadioButtonQuestion
  },
  data () {
    return {
      genderOptions: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
      ]
    }
  }
}
</script>

<style>

  button {
    display: block;
    font: 700 14px/1.3 'Open Sans';
    font-family: "Open Sans", Arial, Sans-Serif;
    text-decoration: none;
    border-radius: 30px;
    height: 40px;
    width: 50%;
    padding: 0 20px;
    transition: all 0.2s linear;
    position: relative;
    box-sizing: border-box;
    border: 2px solid grey;
    background-color: lightskyblue;
    color: grey;
    cursor: pointer;
    line-height: 1;
    margin: auto;
  }
</style>
