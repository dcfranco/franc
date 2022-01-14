/* tslint:disable */

/**
 * (tsType: SchematicObjectWithRelations, schemaOptions: { includeRelations: true })
 */

export enum SchematicObjectTypeEnum {
  PANEL = 'PANEL',
  DBPANEL = 'DBPANEL',
  FUNCTION = 'FUNCTION'
}
export interface SchematicObjectWithRelations {
  childs?: Array<SchematicObjectWithRelations>;
  createdAt?: string;
  createdBy?: string;
  handlerId: number;
  id?: number;
  type: SchematicObjectTypeEnum;
  updatedAt?: string;
  updatedBy?: string;
  [key: string]: any;

}
