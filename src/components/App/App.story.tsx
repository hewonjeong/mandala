import React from 'react'
import { storiesOf } from '@storybook/react'
import App from './App'
import Block from '../../types/Block'
import block from '../../samples/block'

storiesOf('App', module).add('default', () => <App block={block} />)
