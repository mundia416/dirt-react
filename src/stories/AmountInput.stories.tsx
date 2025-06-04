import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import AmountInput from '../components/amountinput';

export default {
  title: 'Components/AmountInput',
  component: AmountInput,
};

type FormValues = {
  amount: string;
};

export const Default = () => {
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: { amount: '5000000' },
  });
  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AmountInput
        name="amount"
        control={control}
        label="Amount"
        placeholder="Enter amount"
        helpText="Enter a number. Commas will be added automatically."
      />
      <div style={{ marginTop: 12 }}>
        <strong>Raw value:</strong> {watch('amount')}
      </div>
      <button type="submit" style={{ marginTop: 12 }}>Submit</button>
    </form>
  );
};

export const Required = () => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { amount: '' },
  });
  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AmountInput
        name="amount"
        control={control}
        label="Amount"
        placeholder="Enter amount"
        rules={{ required: 'Amount is required' }}
      />
      {formState.errors.amount && (
        <div style={{ color: 'red' }}>{formState.errors.amount.message}</div>
      )}
      <button type="submit" style={{ marginTop: 12 }}>Submit</button>
    </form>
  );
};

export const WithHelpText = () => {
  const { control } = useForm<FormValues>({
    defaultValues: { amount: '' },
  });
  return (
    <AmountInput
      name="amount"
      control={control}
      label="Amount"
      placeholder="Enter amount"
      helpText="This is a custom help text for the amount input."
    />
  );
};

export const MinValue = () => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { amount: '' },
  });
  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AmountInput
        name="amount"
        control={control}
        label="Amount (Min 1000)"
        placeholder="Enter amount"
        min={1000}
      />
      {formState.errors.amount && (
        <div style={{ color: 'red' }}>{formState.errors.amount.message}</div>
      )}
      <button type="submit" style={{ marginTop: 12 }}>Submit</button>
    </form>
  );
};

export const MaxValue = () => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { amount: '' },
  });
  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AmountInput
        name="amount"
        control={control}
        label="Amount (Max 5000)"
        placeholder="Enter amount"
        max={5000}
      />
      {formState.errors.amount && (
        <div style={{ color: 'red' }}>{formState.errors.amount.message}</div>
      )}
      <button type="submit" style={{ marginTop: 12 }}>Submit</button>
    </form>
  );
};

export const MinMaxValue = () => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { amount: '' },
  });
  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AmountInput
        name="amount"
        control={control}
        label="Amount (Min 1000, Max 5000)"
        placeholder="Enter amount"
        min={1000}
        max={5000}
      />
      {formState.errors.amount && (
        <div style={{ color: 'red' }}>{formState.errors.amount.message}</div>
      )}
      <button type="submit" style={{ marginTop: 12 }}>Submit</button>
    </form>
  );
};

export const Controlled = () => {
  const [amount, setAmount] = React.useState('123456');
  return (
    <div>
      <AmountInput
        label="Controlled Amount"
        placeholder="Enter amount"
        value={amount}
        onChange={setAmount}
        helpText="This is a controlled input using value and onChange."
      />
      <div style={{ marginTop: 12 }}>
        <strong>Raw value:</strong> {amount}
      </div>
    </div>
  );
}; 