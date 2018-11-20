import React, { Component } from 'react'
import BlockClass from '../../types/Block'
import App from './App'
import block from '../../samples/block'
import Block from '../Block'

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

  render() {
    const { block } = this.state
    return block ? (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Block block={block} />
      </div>
    ) : (
      ''
    )
  }
}
