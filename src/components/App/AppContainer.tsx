import React, { Component } from 'react'
import BlockClass, { BlockWithIsEditing } from '../../types/Block'
import App from './App'
import block from '../../samples/block'

interface Props {}

interface State {
  block?: BlockWithIsEditing
}

export default class AppContainer extends Component<Props, State> {
  state: State = {}
  componentDidMount() {
    this.setState({ block: this.initIsEditing(this.loadBlock()) })
  }

  loadBlock = () => block

  initIsEditing = (block: BlockClass): BlockWithIsEditing => {
    console.log('block', block)
    return {
      isEditing: false,
      title: block.title,
      children:
        block.children &&
        block.children.map(child => ({
          ...this.initIsEditing(child),
          isEditing: false,
        })),
    }
  }

  /*  onClickBlock = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target)
  } */

  onClickBlock = (newBlock: BlockClass) => {
    console.log(newBlock)
    //this.setState({ newBlock })
  }

  render() {
    const { block } = this.state
    return block ? (
      <App block={block} onClickBlock={this.onClickBlock} />
    ) : (
      <div>Let's make mandala art planner🕺🏻</div>
    )
  }
}
