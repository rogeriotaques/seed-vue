<template lang="pug">
  span(:class="[`s-badge s-badge--${color}`, { 's-badge--disabled': disabled }, `s-badge--${size}`]")
    slot Badge
</template>

<script lang="ts">
import { COLORS_NAMES, SIZES_NAMES } from 'utils/constants';

export default {
  name: 'SBadge',

  props: {
    color: {
      validator: (val) => val === null || Object.values(COLORS_NAMES).includes(val),
      default: 'grey-light'
    },

    size: {
      validator: (val) => null || Object.values(SIZES_NAMES).includes(val),
      default: 'default'
    },

    disabled: {
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

.s-badge {
  // @extend .base-typography;
  @include padding(1);
  @include margin(0, 0.5, 0.5);
  border: 0;
  border-radius: 16px;
  font-size: 0.8rem;
  line-height: 1;
  box-sizing: border-box;
  box-shadow: $shadow-default;
  white-space: nowrap;
  display: inline-block;

  @each $colorName, $colorCode in $colors {
    &--#{$colorName} {
      background-color: $colorCode;
      @if $colorName == 'grey' {
        color: $c-grey-dark;
      } @else if $colorName == 'grey-light' or $colorName == 'white' {
        color: $c-black;
      } @else {
        color: $c-white;
      }
    }
  }

  &--mini {
    @include padding(0.5);
    font-size: 0.6rem;
  }

  &--large {
    @include padding(1.3);
    font-size: 1rem;
  }

  &--disabled {
    box-shadow: none;
    background-color: darken($c-grey-light, 5%);
    color: $c-grey;
    text-shadow: $shadow-text;
  }
}
</style>
