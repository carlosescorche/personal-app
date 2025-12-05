import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./Carousel";
import { Card } from "../Card";
import { Button } from "../Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta: Meta<any> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
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
    <div className="px-14 py-4">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-square items-center justify-center rounded-md bg-muted p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const WithControls: Story = {
  render: () => (
    <div className="px-14 py-4">
      <Carousel className="w-full max-w-2xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Slide {index + 1}</h3>
                  <p className="text-muted-foreground">
                    Contenido del slide {index + 1}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="px-4 py-14">
      <Carousel
        orientation="vertical"
        className="w-full max-w-xs"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-mt-1 h-[400px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="flex aspect-square items-center justify-center rounded-md bg-muted p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const MultipleSlides: Story = {
  render: () => (
    <div className="px-14 py-4">
      <Carousel
        className="w-full max-w-5xl"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex aspect-square items-center justify-center rounded-lg bg-muted p-6">
                <span className="text-2xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

const AutoplayComponent = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="px-14 py-4">
      <div className="w-full max-w-2xl">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Slide {index + 1}</h3>
                    <p className="text-muted-foreground">Auto-play activado</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} de {count}
        </div>
      </div>
    </div>
  );
};

export const Autoplay: Story = {
  render: () => <AutoplayComponent />,
};

const WithDotsComponent = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="px-14 py-4">
      <div className="w-full max-w-2xl">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Slide {index + 1}</h3>
                    <p className="text-muted-foreground">
                      Con indicadores de puntos
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center gap-2 py-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index + 1 === current ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const WithDots: Story = {
  render: () => <WithDotsComponent />,
};

export const ProductGallery: Story = {
  render: () => (
    <div className="px-14 py-4">
      <Carousel className="w-full max-w-2xl">
        <CarouselContent>
          {[
            { id: 1, name: "Producto 1", price: "$99.99" },
            { id: 2, name: "Producto 2", price: "$149.99" },
            { id: 3, name: "Producto 3", price: "$199.99" },
            { id: 4, name: "Producto 4", price: "$249.99" },
          ].map((product) => (
            <CarouselItem key={product.id}>
              <Card className="p-6">
                <div className="flex aspect-video items-center justify-center rounded-lg bg-muted mb-4">
                  <span className="text-4xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </p>
                <Button className="w-full">Agregar al carrito</Button>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Testimonials: Story = {
  render: () => (
    <div className="px-14 py-4">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {[
            {
              name: "Juan Pérez",
              role: "CEO, Empresa XYZ",
              content:
                "Este producto ha transformado completamente nuestra forma de trabajar. Altamente recomendado.",
            },
            {
              name: "María García",
              role: "Diseñadora UX",
              content:
                "La mejor inversión que hemos hecho este año. La interfaz es intuitiva y fácil de usar.",
            },
            {
              name: "Carlos López",
              role: "Desarrollador Senior",
              content:
                "Increíble herramienta que ha mejorado significativamente nuestra productividad.",
            },
          ].map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="text-xl font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  &quot;{testimonial.content}&quot;
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <div className="px-14 py-4">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖼️</div>
                  <p className="text-lg font-medium">Imagen {index + 1}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Cards: Story = {
  render: () => (
    <div className="px-14 py-4">
      <Carousel
        className="w-full max-w-5xl"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-6">
                <div className="flex aspect-square items-center justify-center rounded-lg bg-muted mb-4">
                  <span className="text-4xl">🎴</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Tarjeta {index + 1}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Descripción de la tarjeta {index + 1}
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const WithoutControls: Story = {
  render: () => (
    <div className="p-4">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-square items-center justify-center rounded-md bg-muted p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-sm text-muted-foreground mt-4 text-center">
        Usa las flechas del teclado o arrastra para navegar
      </p>
    </div>
  ),
};
