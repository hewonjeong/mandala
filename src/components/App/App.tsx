import React, { Component } from 'react'
import BlockClass, { BlockWithIsEditing } from '../../types/Block'
import Block, { Props as BlockProps } from '../Block/Block'
import style from './App.module.scss'
import 'normalize.css'

interface Props {
  block: BlockWithIsEditing
  onClickBlock: (newBlock: BlockClass) => void
  onSelect: (selected: number[]) => void
}

class App extends Component<Props> {
  render() {
    return (
      <div className={style.App}>
        <Block
          root={true}
          block={this.props.block}
          onClick={this.props.onClickBlock}
          onSelect={this.props.onSelect}
          path={[]}
        />
      </div>
    )
  }
}

export default App
