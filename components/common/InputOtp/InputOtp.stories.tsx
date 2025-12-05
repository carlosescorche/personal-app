import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './InputOtp';
import { Label } from '../Label';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: 'Components/InputOtp',
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-default">Código de verificación</Label>
      <InputOTP maxLength={6} id="otp-default">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const FourDigits: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-4">PIN de 4 dígitos</Label>
      <InputOTP maxLength={4} id="otp-4">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const SixDigits: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-6">Código de 6 dígitos</Label>
      <InputOTP maxLength={6} id="otp-6">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const EightDigits: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-8">Código de 8 dígitos</Label>
      <InputOTP maxLength={8} id="otp-8">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-separator">Código con separador</Label>
      <InputOTP maxLength={6} id="otp-separator">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const WithMultipleGroups: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-groups">Código agrupado (2-2-2)</Label>
      <InputOTP maxLength={6} id="otp-groups">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-disabled">Código deshabilitado</Label>
      <InputOTP maxLength={6} id="otp-disabled" disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="p-4 space-y-2">
      <Label htmlFor="otp-error">Código con error</Label>
      <InputOTP maxLength={6} id="otp-error">
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid />
          <InputOTPSlot index={1} aria-invalid />
          <InputOTPSlot index={2} aria-invalid />
          <InputOTPSlot index={3} aria-invalid />
          <InputOTPSlot index={4} aria-invalid />
          <InputOTPSlot index={5} aria-invalid />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-destructive mt-1">
        El código ingresado es incorrecto
      </p>
    </div>
  ),
};

const VerificationCodeComponent = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp-verification">Código de verificación</Label>
        <InputOTP
          maxLength={6}
          id="otp-verification"
          value={value}
          onChange={setValue}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground">
          Ingresa el código de 6 dígitos que enviamos a tu correo
        </p>
      </div>
      {value.length === 6 && (
        <div className="rounded-md bg-muted p-3">
          <p className="text-sm font-medium">Código ingresado:</p>
          <p className="text-sm text-muted-foreground font-mono">{value}</p>
        </div>
      )}
    </div>
  );
};

export const VerificationCode: Story = {
  render: () => <VerificationCodeComponent />,
};

const TwoFactorAuthComponent = () => {
  const [code, setCode] = React.useState('');

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp-2fa">Código de autenticación de dos factores</Label>
        <InputOTP maxLength={6} id="otp-2fa" value={code} onChange={setCode}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground">
          Abre tu aplicación de autenticación y ingresa el código
        </p>
      </div>
      {code.length === 6 && (
        <div className="rounded-md bg-green-50 dark:bg-green-950 p-3 border border-green-200 dark:border-green-800">
          <p className="text-sm font-medium text-green-900 dark:text-green-100">
            Código completo
          </p>
        </div>
      )}
    </div>
  );
};

export const TwoFactorAuth: Story = {
  render: () => <TwoFactorAuthComponent />,
};
