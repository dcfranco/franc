/* tslint:disable */

import { Option } from "../components";
import { ViewAttributeComponentEnum } from "./view-attribute-with-relations";

/**
 * (tsType: Partial<ViewAttributeWithRelations>, schemaOptions: { includeRelations: true, partial: 'deep' })
 */
export interface ViewAttributePartialWithRelations {
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
  options?: Option[];
  [key: string]: any;
}
