<template>
  <button
    :disabled="disabled"
    :class="customClass"
    :style="{ background: background }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    className: {
      type: String,
      required: false,
      default: 'default',
    },
    background: {
      type: String,
      required: false,
      default: '#795548',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    customClass: function() {
      const classObject = {
        default: false,
        border: false,
      }
      classObject[this.className] = true
      return classObject
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click-event', event)
    },
  },
}
</script>

<style scoped>
button {
  color: #fff;
  display: block;
  padding: 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 160px;
}

button:hover {
  cursor: pointer;
  opacity: 0.8;
  text-decoration: none;
}

button:disabled {
  opacity: 0.5;
}

.default {
  margin: 0 auto;
}

.border {
  border: 3px solid red;
}
</style>
