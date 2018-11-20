import React from 'react'
import { storiesOf } from '@storybook/react'
import Block from './Block'
import block from '../../samples/block'

const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
  console.log('ee')
}
storiesOf('Block', module).add('default', () => (
  <Block block={block} onClick={onClick} />
))
