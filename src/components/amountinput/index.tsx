import React from 'react';
import { Controller, FieldValues, Path, PathValue, RegisterOptions } from 'react-hook-form';
import FieldInput, { FieldInputProps } from '../fieldinput';
import functionUtils from '../../utils/function-utils';

export interface AmountInputProps<T extends FieldValues = FieldValues> extends Omit<FieldInputProps, 'value' | 'onChange' | 'formProps'> {
  name?: Path<T>;
  control?: any;
  rules?: Omit<RegisterOptions<T, Path<T>>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
  defaultValue?: PathValue<T, Path<T>>;
  min?: number;
  max?: number;
  value?: string | number;
  onChange?: (value: string) => void;
}

function AmountInput<T extends FieldValues = FieldValues>({
  name,
  control,
  rules = {},
  defaultValue = '' as PathValue<T, Path<T>>,
  min,
  max,
  value,
  onChange,
  ...rest
}: AmountInputProps<T>) {
  // If value and onChange are provided, use controlled mode
  if (typeof value !== 'undefined' && typeof onChange === 'function') {
    // Format value for display
    const displayValue = functionUtils.formatNumberWithCommas(value ?? '');
    return (
      <FieldInput
        {...rest}
        value={displayValue}
        inputMode='decimal'
        type='text'
        min={min}
        max={max}
        onChange={val => {
          // Only allow numbers
          const numericOnly = val.replace(/[^\d]/g, '');
          // Remove commas before updating form state (should be redundant, but safe)
          const numericValue = functionUtils.unformatNumber(numericOnly);
          onChange(numericValue);
        }}
        inputClassName={
          (rest.inputClassName || '') + ' amount-input'
        }
      />
    );
  }

  // Merge min/max into rules if not already present
  const mergedRules = { ...rules };
  if (typeof min !== 'undefined' && !rules.min) {
    mergedRules.min = { value: min, message: `Minimum value is ${min}` };
  }
  if (typeof max !== 'undefined' && !rules.max) {
    mergedRules.max = { value: max, message: `Maximum value is ${max}` };
  }
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      rules={mergedRules}
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
            type='text'
            min={min}
            max={max}
            onChange={val => {
              // Only allow numbers
              const numericOnly = val.replace(/[^\d]/g, '');
              // Remove commas before updating form state (should be redundant, but safe)
              const numericValue = functionUtils.unformatNumber(numericOnly);
              onChange(numericValue);
            }}
            error={!!fieldState.error}
            helpText={fieldState.error ? fieldState.error.message : rest.helpText}
            inputClassName={
              (rest.inputClassName || '') + ' amount-input'
            }
          />
        );
      }}
    />
  );
}

export default AmountInput; 