import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
} from './Menubar';
import {
  FileText,
  Folder,
  Image,
  File,
  Save,
  Download,
  Upload,
  Printer,
  X,
  Copy,
  Scissors,
  Clipboard,
  Undo,
  Redo,
  Search,
  Settings,
  Eye,
  Layout,
  Grid,
  List,
  ZoomIn,
  ZoomOut,
  User,
  LogOut,
  HelpCircle,
  Info,
} from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: 'Components/Menubar',
  component: Menubar,
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
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Nuevo</span>
            </MenubarItem>
            <MenubarItem>
              <Folder className="mr-2 h-4 w-4" />
              <span>Abrir</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Save className="mr-2 h-4 w-4" />
              <span>Guardar</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Undo className="mr-2 h-4 w-4" />
              <span>Deshacer</span>
            </MenubarItem>
            <MenubarItem>
              <Redo className="mr-2 h-4 w-4" />
              <span>Rehacer</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const ApplicationMenu: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Nuevo</span>
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Folder className="mr-2 h-4 w-4" />
              <span>Abrir</span>
              <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Save className="mr-2 h-4 w-4" />
              <span>Guardar</span>
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Exportar</span>
            </MenubarItem>
            <MenubarItem>
              <Upload className="mr-2 h-4 w-4" />
              <span>Importar</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Printer className="mr-2 h-4 w-4" />
              <span>Imprimir</span>
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <X className="mr-2 h-4 w-4" />
              <span>Salir</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Undo className="mr-2 h-4 w-4" />
              <span>Deshacer</span>
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Redo className="mr-2 h-4 w-4" />
              <span>Rehacer</span>
              <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Scissors className="mr-2 h-4 w-4" />
              <span>Cortar</span>
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copiar</span>
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Clipboard className="mr-2 h-4 w-4" />
              <span>Pegar</span>
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Search className="mr-2 h-4 w-4" />
              <span>Buscar</span>
              <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Ver</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>
              <Eye className="mr-2 h-4 w-4" />
              <span>Mostrar panel lateral</span>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>
              <Grid className="mr-2 h-4 w-4" />
              <span>Vista de cuadrícula</span>
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarLabel>Zoom</MenubarLabel>
            <MenubarRadioGroup value="100">
              <MenubarRadioItem value="50">50%</MenubarRadioItem>
              <MenubarRadioItem value="75">75%</MenubarRadioItem>
              <MenubarRadioItem value="100">100%</MenubarRadioItem>
              <MenubarRadioItem value="125">125%</MenubarRadioItem>
              <MenubarRadioItem value="150">150%</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem>
              <ZoomIn className="mr-2 h-4 w-4" />
              <span>Acercar</span>
              <MenubarShortcut>⌘+</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <ZoomOut className="mr-2 h-4 w-4" />
              <span>Alejar</span>
              <MenubarShortcut>⌘-</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Herramientas</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Preferencias</MenubarItem>
                <MenubarItem>Atajos de teclado</MenubarItem>
                <MenubarItem>Temas</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Ayuda</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Documentación</span>
            </MenubarItem>
            <MenubarItem>
              <Info className="mr-2 h-4 w-4" />
              <span>Acerca de</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Nuevo documento</span>
            </MenubarItem>
            <MenubarItem>
              <Folder className="mr-2 h-4 w-4" />
              <span>Abrir carpeta</span>
            </MenubarItem>
            <MenubarItem>
              <Image className="mr-2 h-4 w-4" />
              <span>Nueva imagen</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copiar</span>
            </MenubarItem>
            <MenubarItem>
              <Clipboard className="mr-2 h-4 w-4" />
              <span>Pegar</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Nuevo
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Abrir
              <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Guardar
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Imprimir
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Deshacer
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Rehacer
              <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

const WithCheckboxesComponent = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);
  const [showGrid, setShowGrid] = React.useState(false);

  return (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Ver</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={showSidebar}
              onCheckedChange={setShowSidebar}
            >
              <Eye className="mr-2 h-4 w-4" />
              <span>Mostrar panel lateral</span>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={showGrid}
              onCheckedChange={setShowGrid}
            >
              <Grid className="mr-2 h-4 w-4" />
              <span>Vista de cuadrícula</span>
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarCheckboxItem>
              <List className="mr-2 h-4 w-4" />
              <span>Mostrar números de línea</span>
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export const WithCheckboxes: Story = {
  render: () => <WithCheckboxesComponent />,
};

const WithRadioButtonsComponent = () => {
  const [view, setView] = React.useState('grid');

  return (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Ver</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Vista</MenubarLabel>
            <MenubarRadioGroup value={view} onValueChange={setView}>
              <MenubarRadioItem value="grid">
                <Grid className="mr-2 h-4 w-4" />
                <span>Cuadrícula</span>
              </MenubarRadioItem>
              <MenubarRadioItem value="list">
                <List className="mr-2 h-4 w-4" />
                <span>Lista</span>
              </MenubarRadioItem>
              <MenubarRadioItem value="compact">
                <Layout className="mr-2 h-4 w-4" />
                <span>Compacta</span>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export const WithRadioButtons: Story = {
  render: () => <WithRadioButtonsComponent />,
};

export const WithSubmenus: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <File className="mr-2 h-4 w-4" />
                <span>Nuevo</span>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Documento</span>
                </MenubarItem>
                <MenubarItem>
                  <Folder className="mr-2 h-4 w-4" />
                  <span>Carpeta</span>
                </MenubarItem>
                <MenubarItem>
                  <Image className="mr-2 h-4 w-4" />
                  <span>Imagen</span>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>
                <Upload className="mr-2 h-4 w-4" />
                <span>Importar</span>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Desde archivo</MenubarItem>
                <MenubarItem>Desde URL</MenubarItem>
                <MenubarItem>Desde dispositivo</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const WithSeparators: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Nuevo</MenubarItem>
            <MenubarItem>Abrir</MenubarItem>
            <MenubarItem>Guardar</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exportar</MenubarItem>
            <MenubarItem>Importar</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Imprimir</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Salir</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const DestructiveItems: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Save className="mr-2 h-4 w-4" />
              <span>Guardar</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <X className="mr-2 h-4 w-4" />
              <span>Eliminar archivo</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Cuenta</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Undo className="mr-2 h-4 w-4" />
              <span>Deshacer</span>
            </MenubarItem>
            <MenubarItem disabled>
              <Redo className="mr-2 h-4 w-4" />
              <span>Rehacer (deshabilitado)</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copiar</span>
            </MenubarItem>
            <MenubarItem disabled>
              <Clipboard className="mr-2 h-4 w-4" />
              <span>Pegar (deshabilitado)</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <div className="p-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Ver</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Eye className="mr-2 h-4 w-4" />
                <span>Mostrar panel</span>
              </MenubarItem>
              <MenubarItem>
                <Grid className="mr-2 h-4 w-4" />
                <span>Vista de cuadrícula</span>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel>Zoom</MenubarLabel>
              <MenubarItem>
                <ZoomIn className="mr-2 h-4 w-4" />
                <span>Acercar</span>
              </MenubarItem>
              <MenubarItem>
                <ZoomOut className="mr-2 h-4 w-4" />
                <span>Alejar</span>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};
