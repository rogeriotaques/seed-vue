<template lang="pug">
  div(
    :class="[`s-spinner--${color}`, `s-spinner--${size}`, `s-spinner--${speed}`]"
  ).s-spinner
    span(v-if="text").s-spinner__text {{ text }}
</template>

<script lang="ts">
import { COLORS_NAMES, SIZES_NAMES } from 'utils/constants';

export default {
  name: 'SSpinner',

  props: {
    color: {
      validator: (val) => val === null || Object.values(COLORS_NAMES).includes(val),
      default: 'primary'
    },

    size: {
      validator: (val) => null || Object.values(SIZES_NAMES).includes(val),
      default: 'default'
    },

    speed: {
      validator: (val) => val === null || ['default', 'fast', 'furious'].includes(val),
      default: 'default'
    },

    text: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/colors';
@import 'styles/animations';
@import 'styles/typography';
@import 'styles/mixins';

$s-spinner-gutter: 4px;
$s-spinner-dimension: 24px;

.s-spinner {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: 30px;
  margin: 10px;

  &::before {
    @include animation(spinner, 1.3s, infinite, linear);
    content: '';
    display: inline-block;
    vertical-align: middle;
    border: $s-spinner-gutter solid $c-spinner-bg;
    border-radius: 50%;
    width: $s-spinner-dimension;
    height: $s-spinner-dimension;
  }

  @each $colorName, $colorCode in $colors {
    &--#{$colorName}::before {
      @if $colorName == 'white' {
        border-color: $c-grey-dark;
      }

      border-top-color: $colorCode;
      border-bottom-color: $colorCode;
    }
  }

  &--mini::before {
    border-width: $s-spinner-gutter / 3 * 2;
    width: ($s-spinner-dimension / 3 * 2 - $s-spinner-gutter - ($s-spinner-gutter / 3 * 2));
    height: ($s-spinner-dimension / 3 * 2 - $s-spinner-gutter - ($s-spinner-gutter / 3 * 2));
  }

  &--large::before {
    border-width: $s-spinner-gutter * 2;
    width: ($s-spinner-dimension * 2 - $s-spinner-gutter - ($s-spinner-gutter * 2));
    height: ($s-spinner-dimension * 2 - $s-spinner-gutter - ($s-spinner-gutter * 2));
  }

  &--fast::before {
    @include animation-duration(0.85s);
  }

  &--furious::before {
    @include animation-duration(0.5s);
  }

  &__text {
    @include margin-left(1);
    display: inline-block;
    vertical-align: middle;
    font-size: $t-font-size-small;
    color: $c-grey-dark;
  } // .spinner:after
}
</style>
