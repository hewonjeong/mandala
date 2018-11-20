import React from 'react'
import { storiesOf } from '@storybook/react'
import Block from './Block'
import block from '../../samples/block'

storiesOf('Block', module).add('default', () => <Block block={block} />)
