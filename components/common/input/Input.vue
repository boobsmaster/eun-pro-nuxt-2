<script>
import Icon from '../icon/Icon.vue'

export default {
  name: 'Input',
  components: { Icon },
  props: {
    value: { type: String },
    id: { type: String },
    label: { type: String },
    error: { type: String },
    mask: { type: String },
    placeholder: { type: String },
    required: { type: Boolean },
    type: { type: String, default: 'input' },
    errors: {
      type: Array,
      default: () => [],
    },
    dark: {
      type: String,
    },
    dirty: { type: Boolean },
    valid: { type: Boolean },
    failed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    clear() {
      this.model = ''
    },
  },
}
</script>

<template>
  <div :class="['input', { ['input_dark']: dark }]">
    <label :for="id" class="input__label">{{ label }}</label>

    <div
      :class="[
        'input__container',
        { ['input__container_error']: value?.length > 0 && failed },
        { ['input__container_success']: valid },
      ]"
    >
      <input
        v-if="type === 'input'"
        :id="id"
        v-model="model"
        v-mask="mask"
        class="input__field"
        :placeholder="placeholder"
      />

      <textarea
        v-if="type === 'textarea'"
        v-model="model"
        class="input__field input__field_textarea"
        :placeholder="placeholder"
      />

      <span v-if="errors" class="input__error">
        {{ errors[0] }}
      </span>

      <button v-if="valid" class="input__button">
        <Icon name="success" class="input__icon" />
      </button>

      <button @click="clear" v-if="value?.length > 0 && failed" class="input__button">
        <Icon name="delete" class="input__icon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &_dark {
    .input__label {
      color: var(--white, #f3f3f3);
    }

    .input__field {
      background-color: #433142;
      border-color: #898088;
    }
  }

  &__label {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;

    color: #283c63;
  }

  &__container {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 4px;

    &_success {
      .input__field {
        border-color: #8cba51;
      }

      .input__icon {
        color: #8cba51;
      }
    }

    &_error {
      .input__field {
        border-color: #fd5e53;
      }

      .input__icon {
        color: #fd5e53;
      }
    }
  }

  &__field {
    padding: 12px;
    width: 100%;
    height: 40px;
    background: #ffffff;
    border: 1px solid #e2e1f2;
    border-radius: 4px;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;

    &::placeholder {
      color: #828282;
    }

    &_textarea {
      min-height: 54.6px;
    }
  }

  &__error {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    color: #fd5e53;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    border: none;
    outline: none;
    background-color: transparent;
  }
}
</style>
