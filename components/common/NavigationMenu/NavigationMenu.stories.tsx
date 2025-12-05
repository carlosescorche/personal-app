import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./NavigationMenu";
import {
  Home,
  User,
  Settings,
  FileText,
  Image,
  Music,
  Video,
  Folder,
  Search,
  Bell,
  Mail,
  HelpCircle,
  Info,
  Download,
  Upload,
  Share2,
  Star,
  Heart,
  Bookmark,
  Calendar,
  Clock,
  TrendingUp,
  BarChart3,
  Users,
  ShoppingCart,
} from "lucide-react";
import { cn } from "../utils";
import Link from "next/link";
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Default: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Documentos" href="/docs">
                  Accede a todos tus documentos y archivos importantes.
                </ListItem>
                <ListItem title="Imágenes" href="/images">
                  Gestiona y organiza tu galería de imágenes.
                </ListItem>
                <ListItem title="Música" href="/music">
                  Explora tu biblioteca musical favorita.
                </ListItem>
                <ListItem title="Videos" href="/videos">
                  Reproduce y organiza tus videos.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Búsqueda" href="/search">
                  Busca contenido en toda la plataforma.
                </ListItem>
                <ListItem title="Notificaciones" href="/notifications">
                  Gestiona tus alertas y notificaciones.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">Acerca de</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Home className="mr-2 h-4 w-4" />
              Inicio
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/dashboard"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <BarChart3 className="h-4 w-4" />
                        Panel de control
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Vista general de tus estadísticas y métricas.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/activity"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Clock className="h-4 w-4" />
                        Actividad reciente
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Revisa tu historial de actividad.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <User className="mr-2 h-4 w-4" />
              Perfil
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/profile"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <User className="h-4 w-4" />
                        Mi perfil
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Edita tu información personal.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/settings"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Settings className="h-4 w-4" />
                        Configuración
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Ajusta las preferencias de tu cuenta.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const MultiColumn: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Plataforma
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Descubre todas nuestras funcionalidades y herramientas
                        en un solo lugar.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Documentos" href="/docs">
                  Gestiona tus documentos y archivos.
                </ListItem>
                <ListItem title="Imágenes" href="/images">
                  Organiza tu galería de imágenes.
                </ListItem>
                <ListItem title="Videos" href="/videos">
                  Reproduce y organiza tus videos.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Búsqueda" href="/search">
                  Busca contenido en toda la plataforma.
                </ListItem>
                <ListItem title="Notificaciones" href="/notifications">
                  Gestiona tus alertas y notificaciones.
                </ListItem>
                <ListItem title="Mensajes" href="/messages">
                  Revisa tus mensajes y conversaciones.
                </ListItem>
                <ListItem title="Calendario" href="/calendar">
                  Organiza tus eventos y recordatorios.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">Acerca de</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const SimpleLinks: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/home">Inicio</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/products">Productos</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/services">Servicios</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">Acerca de</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">Contacto</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const ECommerce: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Electrónica" href="/categories/electronics">
                  Dispositivos, accesorios y más.
                </ListItem>
                <ListItem title="Ropa" href="/categories/clothing">
                  Moda y estilo para todos.
                </ListItem>
                <ListItem title="Hogar" href="/categories/home">
                  Decoración y muebles.
                </ListItem>
                <ListItem title="Deportes" href="/categories/sports">
                  Equipamiento deportivo.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Ofertas</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/deals"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <TrendingUp className="h-4 w-4" />
                        Ofertas del día
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Descuentos especiales disponibles hoy.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/new-arrivals"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Star className="h-4 w-4" />
                        Nuevos productos
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Descubre los últimos lanzamientos.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/cart">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrito
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Vista general" href="/dashboard/overview">
                  Resumen de tus métricas principales.
                </ListItem>
                <ListItem title="Analíticas" href="/dashboard/analytics">
                  Gráficos y estadísticas detalladas.
                </ListItem>
                <ListItem title="Reportes" href="/dashboard/reports">
                  Genera y descarga reportes.
                </ListItem>
                <ListItem title="Actividad" href="/dashboard/activity">
                  Historial de acciones recientes.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/projects"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Folder className="h-4 w-4" />
                        Todos los proyectos
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Gestiona todos tus proyectos en un solo lugar.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/projects/new"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <FileText className="h-4 w-4" />
                        Nuevo proyecto
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Crea un nuevo proyecto desde cero.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/team">
              <Users className="mr-2 h-4 w-4" />
              Equipo
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const WithoutViewport: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <ListItem title="Documentos" href="/docs">
                  Gestiona tus documentos y archivos.
                </ListItem>
                <ListItem title="Imágenes" href="/images">
                  Organiza tu galería de imágenes.
                </ListItem>
                <ListItem title="Videos" href="/videos">
                  Reproduce y organiza tus videos.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">Acerca de</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const WithIndicator: Story = {
  render: () => (
    <div className="p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <ListItem title="Documentos" href="/docs">
                  Gestiona tus documentos y archivos.
                </ListItem>
                <ListItem title="Imágenes" href="/images">
                  Organiza tu galería de imágenes.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <ListItem title="Búsqueda" href="/search">
                  Busca contenido en toda la plataforma.
                </ListItem>
                <ListItem title="Notificaciones" href="/notifications">
                  Gestiona tus alertas y notificaciones.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    </div>
  ),
};
