<template lang="pug">
  div(
    :class="[`s-progress--${color}`, `s-progress--${size}`, { 's-progress--infinite': infinite }]"
  ).s-progress
    div(
      :style="`width: ${percentageString}`"
      role="progressbar"
    ).s-progress__bar
      div(v-if="!infinite && !hidePercentage").s-progress__bar__percentage {{ percentageString }}
</template>

<script lang="ts">
import { COLORS_NAMES, SIZES_NAMES } from 'utils/constants';

export default {
  name: 'SProgress',

  props: {
    color: {
      validator: (val) => val === null || Object.values(COLORS_NAMES).includes(val),
      default: 'primary'
    },

    size: {
      validator: (val) => null || Object.values(SIZES_NAMES).includes(val),
      default: 'default'
    },

    infinite: {
      type: Boolean,
      required: false
    },

    percentage: {
      type: [Number, String],
      default: 0
    },

    hidePercentage: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    percentageString(): string {
      if (this.infinite) {
        return '100%';
      }

      const value: string = String(this.percentage).replace(/[^0-9]/g, '');

      return `${value || 0}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/animations';
@import 'styles/colors';
@import 'styles/typography';
@import 'styles/mixins';

$s-progress-height: 24px;

.s-progress {
  $class: &;

  position: relative;
  border: 0;
  border-radius: 12px;
  background-color: $c-border;
  height: $s-progress-height;
  box-sizing: border-box;
  font-size: 0;
  overflow: hidden;
  z-index: 1;

  &__bar {
    position: relative;
    box-sizing: content-box;
    border: 0;
    border-radius: 12px;
    border: 0;
    height: $s-progress-height;
    font-size: 0;
    z-index: 2;

    &__percentage {
      @include padding(0, 1);
      position: relative;
      color: $c-white;
      font-size: $t-font-size-small;
      line-height: $s-progress-height;
      text-align: right;
      width: calc(100% - 16px);
      margin-top: -1px;
    }
  }

  @each $colorName, $colorCode in $colors {
    &--#{$colorName} {
      @if $colorName == 'white' {
        background-color: $c-grey;
      }

      > #{$class}__bar {
        background-color: $colorCode;

        #{$class}__bar__percentage {
          @if $colorName == 'grey-light' or $colorName == 'grey' {
            color: $c-grey-dark;
          } @else if $colorName == 'white' {
            color: $c-grey-dark;
          }
        }
      }
    }
  }

  &--infinite {
    #{$class}__bar {
      @include animation(progressLoop, 2s, ease-in-out);
      @include animation-iteration-count(infinite);
    }
  }

  &--mini {
    height: $s-progress-height / 2;

    #{$class}__bar {
      height: $s-progress-height / 2;

      &__percentage {
        line-height: $s-progress-height / 2;
        font-size: $t-font-size / 4 * 2;
      }
    }
  }

  &--large {
    height: $s-progress-height * 1.5;

    #{$class}__bar {
      height: $s-progress-height * 1.5;
      border-radius: 24px;

      &__percentage {
        line-height: $s-progress-height * 1.5;
        font-size: $t-font-size * 2 / 1.5;
      }
    }
  }
}
</style>
