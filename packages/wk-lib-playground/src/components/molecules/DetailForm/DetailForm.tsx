import { Field, Formik } from 'formik';
import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import { InputFormik, CheckboxFormik, TextAreaFormik, SelectFormik } from '../../atoms';
import {
  ViewAttributeComponentEnum,
  ViewAttributeWithRelations,
} from '../../../interfaces/view-attribute-with-relations';
import './DetailForm.scss';

export enum DetailFormStateEnum {
  NEW = 'NEW',
  EDIT = 'EDIT',
}

const DetailForm: NextPage<{
  attributes: ViewAttributeWithRelations[];
  pkFieldName: string;
  state: DetailFormStateEnum;
  record: any;
}> = ({ attributes, pkFieldName, state, record = {} }) => {
  // const [rows, updateRows] = useState<>()
  const rows = useMemo(() => {
    if (Array.isArray(attributes) && attributes.length > 0) {
      return attributes
        .reduce<
          Array<
            Pick<ViewAttributeWithRelations, 'line'> & {
              fields: ViewAttributeWithRelations[];
            }
          >
        >((fieldsFromAttributes, field) => {
          if (field.isVisible !== false && field.name !== pkFieldName) {
            const value =
              state === DetailFormStateEnum.NEW ? null : record[field.name];
            field.defaultValue = value;
            const row = fieldsFromAttributes.find(
              (lin) => lin.line === field.line
            );
            if (row) {
              row.fields.push(field);
            } else {
              fieldsFromAttributes.push({
                line: field.line,
                fields: [field],
              });
            }
          }
          return fieldsFromAttributes;
        }, [])
        .map((row) => {
          row.fields = row.fields.sort((field1, field2) => {
            if (field1.position > field2.position) {
              return 1;
            } else if (field1.position < field2.position) {
              return -1;
            } else {
              return 0;
            }
          });
          return row;
        });
    }
    return [];
  }, [attributes, pkFieldName]);
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <form className="detail-form">
        {rows.length > 0 &&
          rows.map((row) => {
            return (
              <div key={row.line} className="form-row mb-md-2">
                {row.fields.map((field) => {
                  return (
                    <div className={`form-group col-md-${field.size} mb-0`}>
                      {[
                        ViewAttributeComponentEnum.NUMBER,
                        ViewAttributeComponentEnum.TEXT,
                      ].includes(field.component) && (
                        <Field
                          {...field}
                          className="text-black"
                          placeholder={field.desc}
                          name={field.name}
                          component={InputFormik}
                        />
                      )}
                      {field.component === ViewAttributeComponentEnum.CHECKBOX && (
                        <Field
                          {...field}
                          className="text-black"
                          name={field.name}
                          component={CheckboxFormik}
                        />
                      )}
                      {field.component === ViewAttributeComponentEnum.TEXTAREA && (
                        <Field
                          {...field}
                          className="text-black"
                          placeholder={field.desc}
                          name={field.name}
                          component={TextAreaFormik}
                        />
                      )}
                       {field.component === ViewAttributeComponentEnum.COMBO && (
                        <Field
                          {...field}
                          className="text-black"
                          placeholder={field.desc}
                          name={field.name}
                          options={[{ label: 't', value: '1'}]}
                          component={SelectFormik}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </form>
    </Formik>
  );
};

export default DetailForm;
