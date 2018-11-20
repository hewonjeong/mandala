import React, { Component } from 'react'
import BlockClass from '../../types/Block'
import App from './App'
import block from '../../samples/block'

interface Props {}

interface State {
  block?: BlockClass
}

export default class AppContainer extends Component<Props, State> {
  state: State = {}
  componentDidMount() {
    this.setState({ block: this.loadBlock() })
  }

  loadBlock = () => block

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
