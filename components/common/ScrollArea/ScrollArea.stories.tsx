import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from './ScrollArea';
import { Card } from '../Card';
import { Separator } from '../Separator';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-xl border border-gray-200 bg-white p-4">
      <div className="space-y-2">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="text-sm text-muted-foreground">
            Elemento {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

const notifications = [
  { id: 1, title: 'Nuevo mensaje', description: 'Juan te envió un mensaje', time: 'Hace 2 min', unread: true },
  { id: 2, title: 'Actualización completada', description: 'Tu perfil ha sido actualizado', time: 'Hace 15 min', unread: true },
  { id: 3, title: 'Nuevo seguidor', description: 'María comenzó a seguirte', time: 'Hace 1 hora', unread: false },
  { id: 4, title: 'Recordatorio', description: 'Tienes una reunión en 30 minutos', time: 'Hace 2 horas', unread: false },
  { id: 5, title: 'Comentario nuevo', description: 'Pedro comentó en tu publicación', time: 'Hace 3 horas', unread: false },
  { id: 6, title: 'Pago recibido', description: 'Has recibido un pago de $150', time: 'Hace 5 horas', unread: false },
  { id: 7, title: 'Invitación', description: 'Te invitaron al equipo de Diseño', time: 'Ayer', unread: false },
  { id: 8, title: 'Backup completado', description: 'Tu backup semanal está listo', time: 'Ayer', unread: false },
];

export const NotificationList: Story = {
  render: () => (
    <Card className="w-[380px] p-0">
      <div className="px-4 py-3">
        <h3 className="font-semibold">Notificaciones</h3>
        <p className="text-sm text-muted-foreground">Tienes 2 sin leer</p>
      </div>
      <Separator />
      <ScrollArea className="h-[300px]">
        <div className="p-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50 ${
                notification.unread ? 'bg-primary/5' : ''
              }`}
            >
              <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${notification.unread ? 'bg-primary' : 'bg-transparent'}`} />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground/70">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  ),
};

const chatMessages = [
  { id: 1, sender: 'María', message: 'Hola! ¿Cómo estás?', time: '10:30', isMe: false },
  { id: 2, sender: 'Yo', message: '¡Hola! Todo bien, gracias. ¿Y tú?', time: '10:31', isMe: true },
  { id: 3, sender: 'María', message: 'Muy bien! Quería preguntarte sobre el proyecto', time: '10:32', isMe: false },
  { id: 4, sender: 'Yo', message: 'Claro, dime', time: '10:32', isMe: true },
  { id: 5, sender: 'María', message: '¿Ya terminaste con los diseños de la landing page?', time: '10:33', isMe: false },
  { id: 6, sender: 'Yo', message: 'Sí, los terminé ayer. Te los paso por email', time: '10:35', isMe: true },
  { id: 7, sender: 'María', message: 'Perfecto! Muchas gracias 🙌', time: '10:35', isMe: false },
  { id: 8, sender: 'Yo', message: 'De nada! Cualquier cambio me avisas', time: '10:36', isMe: true },
];

export const ChatHistory: Story = {
  render: () => (
    <Card className="w-[400px] p-0">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          M
        </div>
        <div>
          <h3 className="font-semibold">María García</h3>
          <p className="text-xs text-muted-foreground">En línea</p>
        </div>
      </div>
      <Separator />
      <ScrollArea className="h-[350px] bg-muted/20">
        <div className="flex flex-col gap-3 p-4">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  msg.isMe
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-white border border-gray-200 rounded-bl-sm'
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.isMe ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  ),
};

const menuItems = [
  { category: 'Entradas', items: ['Ensalada César', 'Sopa del día', 'Bruschetta', 'Carpaccio'] },
  { category: 'Platos principales', items: ['Filete de res', 'Salmón a la plancha', 'Risotto de hongos', 'Pasta carbonara', 'Pollo al limón'] },
  { category: 'Postres', items: ['Tiramisú', 'Cheesecake', 'Helado artesanal', 'Brownie con helado'] },
  { category: 'Bebidas', items: ['Agua mineral', 'Refrescos', 'Vino tinto', 'Vino blanco', 'Cerveza artesanal', 'Café espresso'] },
];

export const MenuList: Story = {
  render: () => (
    <Card className="w-[300px] p-0">
      <div className="px-4 py-3">
        <h3 className="font-semibold">Menú del día</h3>
      </div>
      <Separator />
      <ScrollArea className="h-[320px]">
        <div className="p-4 space-y-6">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h4 className="text-sm font-semibold text-primary mb-2">{section.category}</h4>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  ),
};

const tags = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Go', 'Rust', 'Vue', 'Angular', 'Svelte',
  'Next.js', 'Nuxt', 'Tailwind', 'CSS', 'HTML', 'GraphQL', 'REST API', 'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Git', 'Testing', 'Agile', 'DevOps'
];

export const HorizontalScroll: Story = {
  render: () => (
    <Card className="w-[400px]">
      <h3 className="font-semibold mb-4">Tecnologías</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2 pb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  ),
};
