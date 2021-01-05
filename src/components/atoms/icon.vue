<template lang="pug">
  span(
    :class="[`s-icon--${color}`, {'eva-parent-hover': animation && !infinite}]"
    @click="$emit('click', $event)"
  ).s-icon
    i(
      :class="[`eva-${name}${style}`, { 'eva-animation': animation, 'eva-infinite': infinite }, animationClassName, sizeClassName]"
    ).eva
</template>

<script lang="ts">
import { COLORS_NAMES } from 'utils/constants';

const EVA_ANIMATIONS = ['zoom', 'pulse', 'shake', 'flip'];

export default {
  name: 'SIcon',

  props: {
    name: {
      type: String,
      required: true
    },

    fill: {
      type: Boolean,
      default: false
    },

    animation: {
      validator: (val) => null || EVA_ANIMATIONS.includes(val),
      default: null
    },

    infinite: {
      type: Boolean,
      default: false
    },

    size: {
      validator: (val) => 'default' || ['2', '3', '4', '5', '2x', '3x', '4x', '5x'].includes(val),
      default: 'default'
    },

    customClass: {
      type: String,
      default: null
    },

    color: {
      validator: (val) => val === null || Object.values(COLORS_NAMES).includes(val),
      default: 'grey'
    }
  },

  computed: {
    style(): string {
      return !this.fill ? '-outline' : '';
    },

    animationClassName(): string {
      if (!this.animation) {
        return null;
      }

      return `eva-icon${!this.infinite ? '-hover' : ''}-${this.animation}`;
    },

    sizeClassName(): string {
      if (!this.size || this.size === 'default') {
        return null;
      }

      return `eva-${this.size.replace('x', '')}x`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'eva-icons/style/eva-icons.css';
@import 'styles/eva-animations';
@import 'styles/colors';

.s-icon {
  @each $colorName, $colorCode in $colors {
    &--#{$colorName} {
      color: $colorCode;
    }
  }
}
</style>
