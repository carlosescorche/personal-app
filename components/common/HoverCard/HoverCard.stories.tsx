import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import { Button } from "../Button";
import { CalendarIcon, Mail, MapPin, Phone } from "lucide-react";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Pasa el mouse aquí</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Información adicional</h4>
            <p className="text-sm text-muted-foreground">
              Este es un ejemplo básico de HoverCard. Muestra información cuando
              pasas el mouse sobre el elemento.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="p-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-foreground">
            @usuario
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@usuario</h4>
              <p className="text-sm">
                Desarrollador full-stack apasionado por crear experiencias
                digitales excepcionales.
              </p>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Se unió en enero 2024
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const ContactCard: Story = {
  render: () => (
    <div className="p-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="primary">Ver información de contacto</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-semibold">Juan Pérez</h4>
                <p className="text-xs text-muted-foreground">
                  Director de Producto
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>juan.perez@ejemplo.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>+34 600 123 456</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const ProductPreview: Story = {
  render: () => (
    <div className="p-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-foreground">
            Producto destacado
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-3">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Imagen del producto
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">MacBook Pro 16</h4>
              <p className="text-xs text-muted-foreground">
                Potente laptop para profesionales. Chip M3 Pro, 18GB RAM, 512GB
                SSD.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-bold">€2,499</span>
                <span className="text-xs text-muted-foreground">En stock</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const LinkPreview: Story = {
  render: () => (
    <div className="p-4 space-y-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            href="https://github.com"
            className="text-sm font-medium underline underline-offset-4 hover:text-primary"
          >
            https://github.com
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                GitHub Logo
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">GitHub</h4>
              <p className="text-xs text-muted-foreground">
                Plataforma de desarrollo colaborativo para alojar y revisar
                código.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="p-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="primary">Información detallada</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-96">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Estadísticas</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-xs text-muted-foreground">
                    Seguidores
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">567</div>
                  <div className="text-xs text-muted-foreground">Siguiendo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">89</div>
                  <div className="text-xs text-muted-foreground">Proyectos</div>
                </div>
              </div>
            </div>
            <div className="border-t border-secondary pt-4">
              <h4 className="text-sm font-semibold mb-2">Habilidades</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Node.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-muted rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const DifferentAlignments: Story = {
  render: () => (
    <div className="p-4 space-y-8">
      <div className="flex justify-center">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="primary">Alineación: center (default)</Button>
          </HoverCardTrigger>
          <HoverCardContent align="center">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Centrado</h4>
              <p className="text-sm text-muted-foreground">
                El contenido se alinea al centro del trigger.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="flex justify-start">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="primary">Alineación: start</Button>
          </HoverCardTrigger>
          <HoverCardContent align="start">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Inicio</h4>
              <p className="text-sm text-muted-foreground">
                El contenido se alinea al inicio del trigger.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="flex justify-end">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="primary">Alineación: end</Button>
          </HoverCardTrigger>
          <HoverCardContent align="end">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Final</h4>
              <p className="text-sm text-muted-foreground">
                El contenido se alinea al final del trigger.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div className="p-4 space-y-4">
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Button variant="primary">
            Con delay (200ms abrir, 100ms cerrar)
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Delay personalizado</h4>
            <p className="text-sm text-muted-foreground">
              Este HoverCard tiene un delay de 200ms para abrir y 100ms para
              cerrar, proporcionando una experiencia más suave.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
