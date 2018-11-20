import React, { Component } from 'react'
import BlockClass, { BlockWithIsEditing } from '../../types/Block'
import style from './Block.module.scss'

export interface Props {
  block: BlockWithIsEditing
  onClick: (block: BlockClass) => void
}
class Block extends Component<Props, {}> {
  state = {
    isEditing: false,
  }
  renderBlock = (block?: BlockClass) => {
    return block && <div className={style.title}>{block.title}</div>
  }

  toggle = () => {
    console.log('toggle')
    //this.setState(({ isEditing }) => ({ isEditing: !isEditing }))
  }

  renderLeaf = () => {
    const { block } = this.props
    //console.log('renderLeaf', block.title, this.state.isEditing)
    return (
      <div className={style.title} onClick={this.toggle}>
        {this.state.isEditing ? (
          <input className={style.input} placeholder={block.title} autoFocus />
        ) : (
          block.title
        )}
      </div>
    )
  }
  onClickChild = (block: BlockClass) => {}

  render() {
    const { block, onClick } = this.props
    return block.children ? (
      <div className={style.wrap}>
        <Block block={block.children[0]} onClick={onClick} />
        <Block block={block.children[1]} onClick={onClick} />
        <Block block={block.children[2]} onClick={onClick} />
        <Block block={block.children[3]} onClick={onClick} />
        {this.renderLeaf()}
        <Block block={block.children[4]} onClick={onClick} />
        <Block block={block.children[5]} onClick={onClick} />
        <Block block={block.children[6]} onClick={onClick} />
        <Block block={block.children[7]} onClick={onClick} />
      </div>
    ) : (
      this.renderLeaf()
    )
  }
}

export default Block
