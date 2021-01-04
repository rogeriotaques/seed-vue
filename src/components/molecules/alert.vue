<template lang="pug">
  div(:class="[`s-alert s-alert--${color}`, {'s-alert--dismissable': dismissable, 's-alert--with-title': title}]")
    span.s-alert__content
      span(v-if="title").s-alert__title {{ title }}
      span.s-alert__text
        slot This is an alert text!
      span(
        v-if="dismissable",
        @click.prevent="$emit('dismiss', $event)"
      ).s-alert__dismiss
        s-icon(name="close")

</template>

<script lang="ts">
import { COLORS_NAMES } from 'utils/constants';
import SIcon from 'components/atoms/icon.vue';

const COLORS_TO_IGNORE = [COLORS_NAMES.WHITE, COLORS_NAMES.SOFT_GREY, COLORS_NAMES.GREY];
const FILTERED_COLORS_NAMES = Object.values(COLORS_NAMES).filter((name) => !COLORS_TO_IGNORE.some((n) => n === name));

export default {
  name: 'SAlert',

  components: {
    SIcon
  },

  props: {
    color: {
      validator: (val) => val === null || Object.values(FILTERED_COLORS_NAMES).includes(val),
      default: 'grey-dark'
    },

    title: {
      type: String,
      default: null
    },

    dismissable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import 'eva-icons/style/eva-icons.css';
@import 'styles/transitions';
@import 'styles/typography';
@import 'styles/colors';
@import 'styles/mixins';

.s-alert {
  $class: &;

  @include margin(2, 1);
  @include padding(2);
  display: block;
  position: relative;
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: $t-family;
  font-size: $t-font-size;
  line-height: $t-line-height;
  letter-spacing: $t-letter-spacing;

  &__title {
    display: block;
    font-weight: $t-font-weight-heading;
    font-family: $t-family-heading;
  }

  &__text {
    display: block;
    font-weight: $t-font-weight;
  }

  &__dismiss {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 55%);
    font-size: 1.3rem;
    color: $c-grey-dark;
    cursor: pointer;

    .eva {
      transition: $transition-standard-linear;
    }

    &:hover {
      .eva {
        color: lighten($c-grey-dark, 20%) !important;
      }
    }
  }

  &--dismissable {
    &#{$class}--with-title {
      #{$class}__title {
        max-width: 85%;
      }
    }
    &:not(#{$class}--with-title) {
      #{$class}__text {
        max-width: 85%;
      }
    }
  }

  &::before {
    content: '';
    font-size: 0;
    border-radius: 32px;
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #ccc;
    border: 0;
    top: 0;
    left: 0;
    transform: translate(-60%, 120%);
  }

  @each $colorName, $colorCode in $colors {
    &--#{$colorName} {
      border-left: 4px solid $colorCode;

      @if $colorName == 'secondary' or $colorName == 'grey-dark' {
        background-color: lighten($colorCode, 50%);
        color: $colorCode;
      } @else if $colorName == 'orange' or $colorName == 'blue' or $colorName == 'purple' {
        background-color: lighten($colorCode, 35%);
        color: $colorCode;
      } @else if $colorName == 'green' {
        background-color: lighten($colorCode, 30%);
        color: darken($colorCode, 20%);
      } @else if $colorName == 'black' {
        background-color: lighten($colorCode, 40%);
        color: $c-white;
      } @else {
        background-color: lighten($colorCode, 40%);
        color: $colorCode;
      }

      &::before {
        background-color: $colorCode;
        border-color: $colorCode;
      }

      #{$class}__title + #{$class}__text {
        @if $colorName == 'grey-dark' {
          color: lighten($c-grey-dark, 20%);
        } @else if $colorName == 'black' {
          color: darken($c-white, 10%);
        } @else {
          color: $c-grey-dark;
        }
      }
    }
  }
}
</style>
