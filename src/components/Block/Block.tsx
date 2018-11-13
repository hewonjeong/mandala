import React, { Component } from 'react';
import BlockClass from '../../types/Block';
import block from '../../samples/block';

interface Props {
  block: BlockClass;
}

class Block extends Component<Props, {}> {
  render() {
    return (
      <div>
        <span>{block.title}</span>
        <span>{block.children && block.children[0].title}</span>
      </div>
    );
  }
}

export default Block;
