import type { Meta, StoryObj } from '@storybook/react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './Resizable';
import { ScrollArea } from '../ScrollArea';

const meta: Meta = {
  title: 'Components/Resizable',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup direction="horizontal" className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-muted-foreground">Panel 1</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-muted-foreground">Panel 2</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const WithHandle: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup direction="horizontal" className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-6 bg-primary/5">
            <span className="font-semibold text-primary">Panel Izquierdo</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-muted-foreground">Panel Derecho</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};


const fileTree = [
  { name: 'src', type: 'folder', children: [
    { name: 'components', type: 'folder' },
    { name: 'hooks', type: 'folder' },
    { name: 'App.tsx', type: 'file' },
    { name: 'index.tsx', type: 'file' },
  ]},
  { name: 'public', type: 'folder' },
  { name: 'package.json', type: 'file' },
  { name: 'tsconfig.json', type: 'file' },
];

export const CodeEditorLayout: Story = {
  render: () => (
    <div className="h-[500px] w-full">
      <ResizablePanelGroup direction="horizontal" className="rounded-xl border border-gray-200 overflow-hidden">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <div className="h-full bg-muted/30">
            <div className="p-3 border-b border-gray-200">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Explorador</span>
            </div>
            <ScrollArea className="h-[calc(100%-45px)]">
              <div className="p-2 space-y-1">
                {fileTree.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted cursor-pointer text-sm">
                      <span>{item.type === 'folder' ? '📁' : '📄'}</span>
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <div key={child.name} className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted cursor-pointer text-sm">
                            <span>{child.type === 'folder' ? '📁' : '📄'}</span>
                            <span className="text-muted-foreground">{child.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={55} minSize={30}>
          <div className="h-full bg-white">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-muted/20">
              <div className="flex items-center gap-2 px-3 py-1 rounded-t-md bg-white border-t border-x border-gray-200 -mb-px">
                <span className="text-sm">App.tsx</span>
                <button className="text-muted-foreground hover:text-foreground text-xs">×</button>
              </div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-muted-foreground">
                <span className="text-purple-600">import</span> React <span className="text-purple-600">from</span> <span className="text-green-600">&apos;react&apos;</span>;
              </div>
              <div className="mt-2 text-muted-foreground">
                <span className="text-purple-600">function</span> <span className="text-blue-600">App</span>() {'{'}
              </div>
              <div className="ml-4 text-muted-foreground">
                <span className="text-purple-600">return</span> {'<'}<span className="text-orange-600">div</span>{'>'}<span className="text-foreground">Hello World</span>{'</'}<span className="text-orange-600">div</span>{'>'};
              </div>
              <div className="text-muted-foreground">{'}'}</div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="h-full bg-muted/20">
            <div className="p-3 border-b border-gray-200">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Terminal</span>
            </div>
            <div className="p-3 font-mono text-xs text-muted-foreground">
              <div>$ npm run dev</div>
              <div className="text-green-600 mt-1">✓ Ready in 1.2s</div>
              <div className="mt-1">➜ Local: http://localhost:3000</div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

const emails = [
  { id: 1, from: 'Juan García', subject: 'Reunión de proyecto', preview: 'Hola, quería confirmar la reunión...', time: '10:30', unread: true },
  { id: 2, from: 'María López', subject: 'Actualización semanal', preview: 'Aquí está el resumen de esta semana...', time: '09:15', unread: true },
  { id: 3, from: 'Carlos Ruiz', subject: 'Re: Propuesta de diseño', preview: 'Me parece excelente la propuesta...', time: 'Ayer', unread: false },
  { id: 4, from: 'Ana Martínez', subject: 'Documentación lista', preview: 'Ya terminé con la documentación...', time: 'Ayer', unread: false },
  { id: 5, from: 'Pedro Sánchez', subject: 'Feedback del cliente', preview: 'El cliente está muy contento con...', time: 'Lun', unread: false },
];

export const EmailClient: Story = {
  render: () => (
    <div className="h-[500px] w-full">
      <ResizablePanelGroup direction="horizontal" className="rounded-xl border border-gray-200 overflow-hidden">
        <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
          <div className="h-full bg-white">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold">Bandeja de entrada</h3>
              <p className="text-sm text-muted-foreground">2 sin leer</p>
            </div>
            <ScrollArea className="h-[calc(100%-73px)]">
              {emails.map((email) => (
                <div
                  key={email.id}
                  className={`p-4 border-b border-gray-200 cursor-pointer transition-colors hover:bg-muted/50 ${
                    email.id === 1 ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${email.unread ? 'font-semibold' : 'text-muted-foreground'}`}>
                      {email.from}
                    </span>
                    <span className="text-xs text-muted-foreground">{email.time}</span>
                  </div>
                  <div className={`text-sm ${email.unread ? 'font-medium' : 'text-muted-foreground'}`}>
                    {email.subject}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 truncate">
                    {email.preview}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70} minSize={40}>
          <div className="h-full bg-white">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Reunión de proyecto</h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  JG
                </div>
                <div>
                  <div className="font-medium">Juan García</div>
                  <div className="text-sm text-muted-foreground">para mí • 10:30</div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-muted-foreground leading-relaxed">
                Hola,<br /><br />
                Quería confirmar la reunión de proyecto para mañana a las 15:00. 
                Revisaremos los avances del sprint actual y planificaremos las tareas 
                para la próxima semana.<br /><br />
                Por favor, prepara un breve resumen de tus tareas completadas.<br /><br />
                Saludos,<br />
                Juan
              </p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="h-[400px] w-full max-w-md">
      <ResizablePanelGroup direction="vertical" className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <ResizablePanel defaultSize={40} minSize={20}>
          <div className="h-full p-4 bg-primary/5">
            <h3 className="font-semibold text-primary">Panel Superior</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Arrastra el handle para redimensionar
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60} minSize={20}>
          <div className="h-full p-4">
            <h3 className="font-semibold">Panel Inferior</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Contenido del panel inferior
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
