import React, { Component } from 'react'
import BlockClass from '../../types/Block'
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
    return block.children ? (
      <div className={style.wrap}>
        <Block block={block.children[0]} />
        <Block block={block.children[1]} />
        <Block block={block.children[2]} />
        <Block block={block.children[3]} />
        <div className={style.title}>{block.title}</div>
        <Block block={block.children[4]} />
        <Block block={block.children[5]} />
        <Block block={block.children[6]} />
        <Block block={block.children[7]} />
      </div>
    ) : (
      <div className={style.title}>{block.title}</div>
    )
  }
}

export default Block
