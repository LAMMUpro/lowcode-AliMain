import { PageNodeDto } from "../dto/PageNode"

export interface PageNode extends PageNodeDto {
  children: Array<PageNode>
  path: string
}