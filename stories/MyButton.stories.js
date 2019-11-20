import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs'
import Centered from '@storybook/addon-centered'

import MyButton from './../components/MyButton.vue'

storiesOf('MyButton', module)
  .addDecorator(Centered)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add('simple', () => {
    return {
      components: {
        MyButton,
      },
      props: {
        label: {
          default: text('Label', 'BUTTON'),
        },
        disabled: {
          default: boolean('Disabled', false),
        },
        background: {
          default: color('Background', '#795548'),
        },
      },
      template: `<div><h2>ボタンコンポーネント</h2><my-button :disabled="disabled" :style="{background}">{{ label }}</my-button></div>`,
      methods: {
        handleClick: linkTo('SomeComponent'),
      },
    }
  })
