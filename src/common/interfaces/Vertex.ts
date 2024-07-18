import { ResourceType } from "types/ResourceType";
import VertexData from "./VertexData";

export default interface Vertex {
  id: string
  resourceType: ResourceType
  position: [number, number]
  // data will be filled in as we go
  data: VertexData
}