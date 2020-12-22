<template lang="pug">
  span(:class="[`s-dot--${color}`, `s-dot--${size}`, { 's-dot--disabled': disabled }]").s-dot
</template>

<script lang="ts">
import { COLORS_NAMES, SIZES_NAMES } from 'utils/constants';

export default {
  name: 'SDot',

  props: {
    color: {
      validator: (val) => val === null || Object.values(COLORS_NAMES).includes(val),
      default: 'grey'
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
@import 'styles/mixins';

.s-dot {
  @include padding(0);
  @include margin(0);
  border: 0;
  border-radius: 12px;
  width: 12px;
  height: 12px;
  font-size: 0;
  box-sizing: border-box;
  box-shadow: $shadow-short;
  display: inline-block;

  @each $colorName, $colorCode in $colors {
    &--#{$colorName} {
      background-color: $colorCode;
    }
  }

  &--mini {
    border-radius: 8px;
    width: 8px;
    height: 8px;
  }

  &--large {
    border-radius: 16px;
    width: 16px;
    height: 16px;
  }

  &--disabled {
    background-color: $c-grey;
    box-shadow: $shadow-inset-short;
  }
}
</style>
