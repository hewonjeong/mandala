import React, { Component } from 'react'
import BlockClass from '../../types/Block'
import Block from '../Block'
import style from './App.module.scss'

interface Props {
  block: BlockClass
  onClickBlock: (newBlock: BlockClass) => void
}

class App extends Component<Props> {
  render() {
    return (
      <div className={style.App}>
        <Block block={this.props.block} onClick={this.props.onClickBlock} />
      </div>
    )
  }
}

export default App
