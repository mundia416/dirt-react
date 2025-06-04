import React from 'react';
import { Controller, FieldValues, Path, PathValue } from 'react-hook-form';
import FieldInput, { FieldInputProps } from '../fieldinput';
import functionUtils from '../../utils/function-utils';

export interface AmountInputProps<T extends FieldValues = FieldValues> extends Omit<FieldInputProps, 'value' | 'onChange' | 'formProps'> {
  name: Path<T>;
  control: any;
  rules?: any;
  defaultValue?: PathValue<T, Path<T>>;
}

function AmountInput<T extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  defaultValue = '' as PathValue<T, Path<T>>,
  ...rest
}: AmountInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const { value, onChange, ...fieldProps } = field;
        // Format value for display
        const displayValue = functionUtils.formatNumberWithCommas(value ?? '');
        return (
          <FieldInput
            {...rest}
            {...fieldProps}
            value={displayValue}
            inputMode='decimal'
            onChange={val => {
              // Only allow numbers
              const numericOnly = val.replace(/[^\d]/g, '');
              // Remove commas before updating form state (should be redundant, but safe)
              const numericValue = functionUtils.unformatNumber(numericOnly);
              onChange(numericValue);
            }}
            error={!!fieldState.error}
            helpText={fieldState.error ? fieldState.error.message : rest.helpText}
            // Allow typing only numbers and commas
            inputClassName={
              (rest.inputClassName || '') + ' amount-input'
            }
            // Optionally, you can restrict input to numbers and commas here
            // by using onInput or pattern prop if needed
          />
        );
      }}
    />
  );
}

export default AmountInput; 