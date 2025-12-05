import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';
import { Card } from '../Card';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div>
      <div>Content above</div>
      <Separator orientation="horizontal" className="my-4" />
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center gap-4">
      <div>Left</div>
      <Separator orientation="vertical" />
      <div>Middle</div>
      <Separator orientation="vertical" />
      <div>Right</div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <div>
        <h3 className="text-lg font-semibold">Configuración</h3>
        <p className="text-sm text-muted-foreground">
          Administra las preferencias de tu cuenta.
        </p>
      </div>
      <Separator />
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Notificaciones</span>
          <span className="text-sm text-muted-foreground">Activadas</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Idioma</span>
          <span className="text-sm text-muted-foreground">Español</span>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Última actualización</span>
        <span className="text-sm">Hace 2 días</span>
      </div>
    </Card>
  ),
};

export const InCardWithNavigation: Story = {
  render: () => (
    <Card className="w-[300px]">
      <h3 className="text-lg font-semibold">Navegación</h3>
      <Separator />
      <nav className="flex flex-col gap-2">
        <a href="#" className="text-sm hover:text-primary transition-colors">Inicio</a>
        <a href="#" className="text-sm hover:text-primary transition-colors">Perfil</a>
        <a href="#" className="text-sm hover:text-primary transition-colors">Configuración</a>
      </nav>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <a href="#" className="text-muted-foreground hover:text-primary">Ayuda</a>
        <Separator orientation="vertical" />
        <a href="#" className="text-muted-foreground hover:text-primary">Soporte</a>
        <Separator orientation="vertical" />
        <a href="#" className="text-muted-foreground hover:text-primary">FAQ</a>
      </div>
    </Card>
  ),
};
