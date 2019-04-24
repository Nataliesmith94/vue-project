<template>
  <question
    :label="label"
    :name="name"
    :errorMessage="errorMessage">
    <fieldset>
      <legend class="visually-hidden">{{label}}</legend>\
      <ul class="radio-button-list" :class="{'radio-button-list--dual' : dual}" >
        <li v-for="(option, index) in options" :key="option.id" class="radio-button-list__item">
        <input
        class="radio-button"
        type="radio"
        :id="`${name}-${index}`"
        v-model="selected"
        :value="option.value"
        @change="$emit('input', option.value)">
        <label
          class="radio-button__label"
          @click="$emit('selected', option.value)"
          :for="`${name}-${index}`">
          {{option.label}}
        </label>
        </li>
      </ul>
    </fieldset>
  </question>
</template>

<script>
import Question from '@/components/Question.vue'

export default {
  name: 'RadioButtonQuestion',
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
    value: {
      type: [String, Boolean, Number],
      default: null
    },
    options: {
      type: Array,
      validator: options => {
        return options.every(option => option.hasOwnProperty('label') && option.hasOwnProperty('value'))
      },
      default: () => [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
      ]
    },
    hint: {
      type: String,
      default: ''
    },
    dependant: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    dual: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      selected: this.value
    }
  }
}
</script>

<style>

  fieldset {
    display: block;
    width: 100px;
    border: none;
  }

  legend {
    display: none;
  }

  .radio-button-list__item input{
    display: inline-block;
    float: left;
  }

  .radio-button__label {
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    padding: 15px 10px 15px 50px;
    border-radius: 5px;
    box-shadow: 0 2px 0 0 #c6cacc;
    background-color: #ebf0f2;
    display: block;
    color: #566266;
    width: 100%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    position: relative;
    margin: 0 0 10px;
    text-align: center;
    display: inline-block;
  }

</style>
