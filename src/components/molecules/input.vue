<template lang="pug">
  div(
    :class="[\
      `s-input--${type}`,\
      `s-input--${size}`,\
      {\
        's-input--required': required,\
        's-input--with-feedback': hasFeedback,\
        's-input--autofocus': autofocus\
      }\
    ]"
  ).s-input
    label(
      v-if="$slots.label"
      :for="name"
    ).s-input__label
      span.s-input__label__text
        slot(name="label")
      span(v-if="!required").s-input__label__optional-marker
        slot(name="optionalMarker") (optional)

    input(
      ref="input",
      :type="inputType",
      :name="name"
      :value="value",
      :required="required"
      :autofocus="autofocus ? 'autofocus' : null"
      :class="{\
        's-input__input--is-missing': hasFeedback === INPUT_FEEDBACKS.MISSING,\
        's-input__input--is-invalid': hasFeedback === INPUT_FEEDBACKS.INVALID,\
        's-input__input--is-success': hasFeedback === INPUT_FEEDBACKS.SUCCESS,\
      }"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @keypress="$emit('keypress', $event)"
      @keydown="$emit('keydown', $event)"
      @keyup="$emit('keyup', $event)"
      @click="$emit('click', $event)"
      @mouseup="$emit('mouseup', $event)"
      @mousedown="$emit('mousedown', $event)"
      @mouseenter="$emit('mouseenter', $event)"
      @mouseleave="$emit('mouseleave', $event)"
    ).s-input__input

    //- Action buttons
    s-icon(
      v-if="type === INPUT_TYPES.SEARCH"
      name="close",
      color="black",
      title="Clear"
      @click="clear"
    ).s-input__action-icon

    //- Validation icons
    s-icon(
      v-if="hasFeedback === INPUT_FEEDBACKS.INVALID",
      name="alert-triangle",
      color="orange"
    ).s-input__feedback-icon
    s-icon(
      v-if="hasFeedback === INPUT_FEEDBACKS.MISSING",
      name="alert-circle",
      color="red"
    ).s-input__feedback-icon
    s-icon(
      v-if="hasFeedback === INPUT_FEEDBACKS.SUCCESS",
      name="checkmark",
      color="green"
    ).s-input__feedback-icon

    span(
      v-if="hasFeedback && $slots.feedback"
      :class="`s-input__feedback--is-${hasFeedback}`"
    ).s-input__feedback
      slot(name="feedback")

    span(v-if="$slots.help").s-input__help
      slot(name="help")
</template>

<script lang="ts">
import { INPUT_TYPES, INPUT_FEEDBACKS, SIZES_NAMES } from 'utils/constants';
import SIcon from 'components/atoms/icon.vue';

export default {
  name: 'SInput',

  components: {
    SIcon
  },

  props: {
    type: {
      validator: (val) => val === null || Object.values(INPUT_TYPES).includes(val),
      default: 'text'
    },

    name: {
      type: String,
      default: 's-input'
    },

    value: {
      type: String,
      default: ''
    },

    required: {
      type: Boolean,
      default: false
    },

    autofocus: {
      type: Boolean,
      default: false
    },

    optionalMarker: {
      type: String,
      default: '(optional)'
    },

    hasFeedback: {
      validator: (val) => val === null || Object.values(INPUT_FEEDBACKS).includes(val),
      default: ''
    },

    size: {
      validator: (val) => val === null || Object.values(SIZES_NAMES).includes(val),
      default: 'default'
    }
  }, // props

  data: () => ({
    INPUT_FEEDBACKS,
    INPUT_TYPES
  }),

  computed: {
    inputType(): string {
      if (this.type === INPUT_TYPES.SEARCH) {
        return INPUT_TYPES.TEXT;
      }

      return this.type;
    }
  },

  methods: {
    clear(evt: any): void {
      this.$emit('clear', evt);
      this.$refs.input.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/typography';
@import 'styles/colors';
@import 'styles/mixins';

.s-input {
  $class: &;

  @include margin-bottom(2);
  position: relative;

  &--with-feedback {
    #{$class}__input {
      @include padding-right(4);
    }

    #{$class}__input--is-missing {
      border-color: $c-red;
    }

    #{$class}__input--is-invalid {
      border-color: $c-orange;
    }

    #{$class}__input--is-success {
      border-color: $c-green;
    }
  }

  &__label,
  &__input,
  &__help,
  &__feedback {
    @include margin-bottom(0.5);
    display: block;
    width: 100%;
    font-family: $t-family;
    letter-spacing: $t-letter-spacing;
    box-sizing: border-box;
  }

  &__label {
    @include padding-left(0.5);
    vertical-align: middle;
    font-size: $t-font-size;

    &__optional-marker {
      @include margin-left(0.5);
      display: inline-block;
      vertical-align: middle;
      font-size: $t-font-size-small;
    }
  }

  &__input {
    @include padding(0.5, 1);
    @include appearance(none);
    font-size: $t-font-size;
    line-height: $t-line-height;
    border: 1px solid $c-border;
    border-radius: 8px;

    &:focus,
    &:active {
      @include box-shadow(0 0 0 1000px white inset); // removes the yellow background from autofil
      outline: none;
      border-color: $c-primary;
    }

    // Chrome, Firefox, Opera, Safari 10.1+
    &::placeholder {
      color: $c-placeholder;
      opacity: 1;
    }

    // IE 10-11 and Edge
    &:-ms-input-placeholder,
    &::-ms-input-placeholder {
      color: $c-placeholder;
    }
  }

  &__help,
  &__feedback {
    @include padding-left(0.5);
    font-size: $t-font-size-small;
  }

  &__help {
    color: $c-grey-dark;
  }

  &__action,
  &__feedback {
    &-icon {
      position: absolute;
      right: 8px;
    }
  }

  &__action-icon {
    @include transition(all, 0.15s, linear);
    @include transform(translateY(-170%));
    cursor: pointer;
    border-radius: 4px;
    height: 16px;
    pointer-events: auto;
    z-index: 5;

    &:hover {
      background: $c-grey-light;
    }
  }

  &__feedback {
    &-icon {
      @include transform(translateY(-130%));
      pointer-events: none;
    }

    &--is-missing {
      color: $c-red;
    }

    &--is-invalid {
      color: darken($c-orange, 10%);
    }

    &--is-success {
      color: darken($c-green, 10%);
    }
  }

  &--mini {
    #{$class}__label {
      font-size: $t-font-size-small;

      &__optional-marker {
        font-size: 0.8em;
      }
    }

    #{$class}__input {
      @include padding(0.25, 1);
      font-size: $t-font-size-small;
    }

    #{$class}__help,
    #{$class}__feedback {
      font-size: 0.8em;
    }
  }

  &--large {
    #{$class}__label {
      @include padding(1);
      font-size: $t-font-size-large;

      &__optional-marker {
        font-size: 0.8em;
      }
    }

    #{$class}__input {
      font-size: $t-font-size-large;
    }

    #{$class}__help,
    #{$class}__feedback {
      font-size: 0.8em;
    }
  }
}
</style>
