<template lang="pug">
  button(
    :class="[\
      `s-button--${color}`,\
      `s-button--${size}`,\
      {\
        's-button--icon': icon,\
        's-button--loading': loading,\
        's-button--round': round,\
        's-button--outline': outline\
      }\
    ]",
    :disabled="disabled"
    @click="$emit('click', $event)"
  ).s-button
    div(v-if="loading")
      s-spinner(size="mini", :color="color")
    slot(v-else) Button
</template>

<script lang="ts">
import { COLORS_NAMES, SIZES_NAMES } from 'utils/constants';
import SSpinner from './spinner';

export default {
  name: 'SButton',

  components: {
    SSpinner
  },

  props: {
    color: {
      validator: (val) => val === null || Object.values(COLORS_NAMES).includes(val),
      default: 'white'
    },

    size: {
      validator: (val) => null || Object.values(SIZES_NAMES).includes(val),
      default: 'default'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    icon: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    },

    round: {
      type: Boolean,
      default: false
    },

    outline: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/colors';
@import 'styles/shadows';
@import 'styles/typography';
@import 'styles/mixins';

::v-deep {
  .s-spinner {
    margin: -4px 0 0 !important;
  }
}

.s-button {
  $class: &;

  @include padding(1);
  @include margin(0);
  @include transition(all, 0.2s, ease-in-out);
  @include appearance(none);

  background-color: transparent;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: $t-family;
  font-size: $t-font-size;
  font-weight: $t-font-weight-button;
  height: 40px;
  min-width: 96px;
  text-align: center;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:not(#{$class}--outline) {
    &:hover,
    &:active,
    &:focus,
    &:focus-within {
      @include box-shadow($shadow-default);
    }
  }

  @each $colorName, $colorCode in $colors {
    &--#{$colorName} {
      border: 1px solid $colorCode;

      &:not(#{$class}--outline) {
        background-color: $colorCode;
        @include box-shadow($shadow-short);

        @if $colorName == 'grey-light' or $colorName == 'grey' or $colorName == 'white' {
          color: $c-black;
        } @else {
          color: $c-white;
        }

        &:hover,
        &:active,
        &:focus,
        &:focus-within {
          outline: none;
          border-color: lighten($colorCode, 4%);
          background-color: lighten($colorCode, 4%);
        }
      }

      &#{$class}--outline {
        color: $colorCode;

        &:hover,
        &:active,
        &:focus,
        &:focus-within {
          outline: none;
          background-color: $colorCode;

          @if $colorName == 'grey-light' or $colorName == 'grey' or $colorName == 'white' {
            color: $c-black;
          } @else {
            color: $c-white;
          }
        }
      }
    }
  }

  &--mini {
    @include padding(0.5);

    font-size: $t-font-size-small;
    height: 24px;
    min-width: 72px;
  }

  &--large {
    @include padding(1.5);

    font-size: $t-font-size-large;
    height: 56px;
    min-width: 112px;
  }

  &--round {
    border-radius: 50px;

    &#{$class}--mini {
      @include padding(0.5, 1);
    }

    &#{$class}--default {
      @include padding(1, 1.5);
    }

    &#{$class}--large {
      @include padding(1.5, 2);
    }
  }

  &--loading {
    &:hover {
      @include box-shadow($shadow-short !important);
      cursor: default;
    }
  }

  &--icon {
    min-width: auto;

    &#{$class}--mini {
      font-size: 1rem;
      line-height: 1rem;
    }

    &#{$class}--default {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }

    &#{$class}--large {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }

  &:disabled {
    box-shadow: none;
    cursor: default;
    opacity: 0.6;

    &:hover {
      @include box-shadow(none);

      @each $colorName, $colorCode in $colors {
        &:not(#{$class}--outline)#{$class}--#{$colorName} {
          background-color: $colorCode;
        }

        &#{$class}--outline#{$class}--#{$colorName} {
          background-color: transparent;
          color: $colorCode;
        }
      }
    }
  }
}
</style>
