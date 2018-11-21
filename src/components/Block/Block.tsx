import React, { Component } from 'react'
import BlockClass, { BlockWithIsEditing } from '../../types/Block'
import style from './Block.module.scss'

export interface Props {
  block: BlockWithIsEditing
  root?: boolean
  path: number[]
  onClick: (block: BlockClass) => void
  onSelect: (selected: number[]) => void
}

/* TODO: Block Cont */
class Block extends Component<Props, {}> {
  static defaultProps = {
    root: false,
  }
  state = {
    isEditing: false,
  }
  onClickLeaf = () => {
    console.log('onClickLeaf', this.props.path)
    this.props.onSelect([])
  }

  onClick = (child: BlockWithIsEditing) => {
    this.props.onClick
  }

  renderLeaf = (title: string) => {
    return (
      <div
        key={this.props.path.join('/')}
        className={style.title}
        onClick={this.onClickLeaf}
      >
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
  renderBlock = (child: BlockWithIsEditing, i: number) => {
    const onSelect = (selected: number[]) =>
      this.props.onSelect([i, ...selected])
    const paht = [...this.props.path, i]
    return (
      <Block
        block={child}
        path={paht}
        onClick={this.props.onClick}
        onSelect={onSelect}
        key={paht.join('/')}
      />
    )
  }

  renderBlocks = (
    children: BlockWithIsEditing[],
    title: string,
    root: boolean = this.props.root as boolean
  ) => {
    const childrenBlocks = children.map(this.renderBlock)
    const blocks = [
      childrenBlocks.slice(0, 4),
      root ? this.renderRoot() : this.renderLeaf(title),
      childrenBlocks.slice(4, 8),
    ]
    const key = this.props.path.join('/')
    return (
      <div key={key} className={style.wrap}>
        {blocks}
      </div>
    )
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
