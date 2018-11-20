import React, { Component } from 'react'
import BlockClass from '../../types/Block'
import block from '../../samples/block'
import style from './Block.module.scss'

interface Props {
  block: BlockClass
}

class Block extends Component<Props, {}> {
  renderBlock = (block?: BlockClass) => {
    return block && <div className={style.title}>{block.title}</div>
  }
  render() {
    const { block } = this.props
    return (
      <>
        {this.renderBlock(block.children[0])}
        {this.renderBlock(block.children[1])}
        {this.renderBlock(block.children[2])}
        {this.renderBlock(block.children[3])}
        {this.renderBlock(block)}
        {this.renderBlock(block.children[4])}
        {this.renderBlock(block.children[5])}
        {this.renderBlock(block.children[6])}
        {this.renderBlock(block.children[7])}
      </>
    )
  }
}

export default Block
