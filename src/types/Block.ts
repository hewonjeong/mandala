import { FixedSizeArray } from './utils'

export default interface Block {
  title: string
  children?: [Block, Block, Block, Block, Block, Block, Block, Block]
}
