/* tslint:disable */

import { ViewAttributeComponentEnum } from "./view-attribute-with-relations";

/**
 * (tsType: Partial<ViewAttribute>, schemaOptions: { partial: true })
 */
export interface ViewAttributePartial {
  component?: ViewAttributeComponentEnum;
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
  label?: string;
  line?: number;
  mask?: string;
  name?: string;
  position?: number;
  relationId?: number;
  size?: number;
  sizePercent?: number;
  updatedAt?: string;
  updatedBy?: string;
  viewId?: number;

  [key: string]: any;
}
