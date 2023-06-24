<script>
import Icon from '../icon/Icon.vue'
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'Input',
  components: { Icon, ValidationProvider },
  props: {
    label: { type: String },
    error: { type: String },
    placeholder: { type: String },
    type: { type: String, default: 'input' },
  },
  data() {
    const isValid = false
    const isError = true
    const value = ''

    return {
      isValid,
      isError,
      value,
    }
  },
  methods: {
    clear() {},
  },
}
</script>

<template>
  <ValidationProvider rules="required" v-slot="{ valid, touched, invalid, errors }">
    <div class="input">
      <label class="input__label">{{ label }}</label>

      <div
        :class="[
          'input__container',
          { ['input__container_success']: valid && touched },
          { ['input__container_error']: invalid },
        ]"
      >
        <input v-if="type === 'input'" v-model="value" class="input__field" :placeholder="placeholder" />
        <textarea
          v-if="type === 'textarea'"
          v-model="value"
          class="input__field input__field_textarea"
          :placeholder="placeholder"
        ></textarea>
        <span class="input__error">
          {{ errors[0] }}
        </span>

        <button v-if="valid && touched" class="input__button">
          <Icon name="success" class="input__icon" />
        </button>

        <!-- <button v-if="invalid" class="input__button">
          <Icon name="delete" class="input__icon" />
        </button> -->
      </div>
    </div>
  </ValidationProvider>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 5px;

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
