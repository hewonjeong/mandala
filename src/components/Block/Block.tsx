import React, { Component } from 'react'
import BlockClass, { BlockWithIsEditing } from '../../types/Block'
import style from './Block.module.scss'

export interface Props {
  block: BlockWithIsEditing
  root?: boolean
  onClick: (block: BlockClass) => void
}
class Block extends Component<Props, {}> {
  static defaultProps = {
    root: false,
  }
  state = {
    isEditing: false,
  }
  onClickLeaf = () => {
    console.log('toggle', this.props.block)
  }

  onClick = (child: BlockWithIsEditing) => {
    this.props.onClick
  }

  renderLeaf = (title: string) => {
    return (
      <div className={style.title} onClick={this.onClickLeaf}>
        {this.state.isEditing ? (
          <input className={style.input} placeholder={title} autoFocus />
        ) : (
          title
        )}
      </div>
    )
  }
  onClickChild = (block: BlockClass) => {}

  renderRoot = () => {
    const { block } = this.props
    const { children = [] } = block
    const leafs = children.map(child => ({
      ...child,
      children: undefined,
    }))
    return this.renderBlocks(leafs, block.title, false)
  }

  /* recurssive */
  renderBlock = (child: BlockWithIsEditing) => (
    <Block block={child} onClick={this.props.onClick} />
  )

  renderBlocks = (
    children: BlockWithIsEditing[],
    title: string,
    root: boolean = this.props.root as boolean
  ) => {
    const blocks = [
      children.slice(0, 4).map(this.renderBlock),
      root ? this.renderRoot() : this.renderLeaf(title),
      children.slice(4, 8).map(this.renderBlock),
    ]
    return <div className={style.wrap}>{blocks}</div>
  }

  render() {
    const { block } = this.props
    const { title } = block

    return block.children
      ? this.renderBlocks(block.children, title)
      : this.renderLeaf(title)
  }
}

export default Block
