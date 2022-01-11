/* tslint:disable */

/**
 * (tsType: ViewAttributeWithRelations, schemaOptions: { includeRelations: true })
 */
export enum ViewAttributeComponentEnum {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  COMBO = 'COMBO',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  TEXTAREA = 'TEXTAREA',
  LIST = 'LIST',
  DATETIME = 'DATETIME',
}
export interface ViewAttributeWithRelations {
  component: ViewAttributeComponentEnum;
  createdAt?: string;
  createdBy?: string;
  defaultValue?: string;
  desc?: string;
  id?: number;
  isColumnVisible?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isVisible?: boolean;
  isPrimaryKey?: boolean;
  label: string;
  line: number;
  mask?: string;
  name: string;
  position: number;
  relationId?: number;
  size: number;
  sizePercent?: number;
  updatedAt?: string;
  updatedBy?: string;
  viewId?: number;

  [key: string]: any;
}
