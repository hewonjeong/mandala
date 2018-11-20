import { FixedSizeArray } from './utils'

export default interface Block {
  title: string
  children?: Block[]
}

export interface BlockWithIsEditing extends Block {
  isEditing: boolean
  children?: BlockWithIsEditing[]
}
