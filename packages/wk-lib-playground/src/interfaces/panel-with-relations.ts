/* tslint:disable */

/**
 * (tsType: PanelWithRelations, schemaOptions: { includeRelations: true })
 */

export enum PanelSizeEnum {
  FULL = 'FULL',
  TWO = 'TWO',
  THREE = 'THREE'
}
export interface PanelWithRelations {
  createdAt?: string;
  createdBy?: string;
  description: string;
  id: number;
  size: PanelSizeEnum;
  updatedAt?: string;
  updatedBy?: string;
}
