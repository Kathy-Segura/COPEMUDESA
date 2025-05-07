"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Leaf, Award, Truck, ShoppingBag, Heart, Star, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProcessStep {
  title: string
  description: string
  image: string
}

interface Product {
  name: string
  image: string
  description?: string
  price?: string
  origin?: string
  rating?: number
  availability?: string
}

interface ProductSectionProps {
  title?: string
  description?: string
  processSteps?: ProcessStep[]
  products?: Product[]
}

export default function ProductSection({
  title = "Título por defecto",
  description = "Descripción por defecto.",
  processSteps = [],
  products = []
}: ProductSectionProps) {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  // Asegura que no haya errores si no se pasan productos
  const enhancedProducts = products.map((product) => ({
    ...product,
    description:
      product.description ||
      "Producto de alta calidad cultivado en las tierras fértiles de Matagalpa, Nicaragua. Cosechado con técnicas tradicionales y sostenibles.",
    price: product.price || "Contactar para precio",
    origin: product.origin || "Matagalpa, Nicaragua",
    rating: product.rating || Math.floor(Math.random() * 2) + 4,
    availability: product.availability || "Disponible",
  }))

  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Leaf className="h-5 w-5 text-green-800" />
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-green-800 bg-green-50 px-3 py-1 rounded-full text-sm">
              <Award className="h-4 w-4" />
              <span>Calidad Premium</span>
            </div>
            <div className="flex items-center gap-2 text-green-800 bg-green-50 px-3 py-1 rounded-full text-sm">
              <Truck className="h-4 w-4" />
              <span>Envío Nacional</span>
            </div>
            <div className="flex items-center gap-2 text-green-800 bg-green-50 px-3 py-1 rounded-full text-sm">
              <ShoppingBag className="h-4 w-4" />
              <span>Venta Mayorista</span>
            </div>
          </div>
          <Button variant="outline" className="group border-green-800 text-green-800 hover:bg-green-50">
            Solicitar información
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="/placeholder.svg?height=500&width=800"
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-white/80 text-sm">Calidad Premium</p>
          </div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-5 w-5 text-green-800" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-xl font-bold">Proceso de Producción</h4>
          <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent flex-grow mx-4"></div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Leaf className="h-5 w-5 text-green-800" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all border-0 shadow-sm"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div onClick={() => setSelectedStep(step)}>
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="absolute inset-0 bg-green-800/0 group-hover:bg-green-800/10 transition-colors flex items-center justify-center">
                        <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all">
                          <Plus className="h-5 w-5 text-green-800" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-xs">
                          {index + 1}
                        </div>
                        <h5 className="font-semibold text-base">{step.title}</h5>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{step.description}</p>
                    </CardContent>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-0">
                  <div className="relative h-56 sm:h-72">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-xl font-bold">Productos Derivados</h4>
          <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent flex-grow mx-4"></div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-green-800" />
          </div>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {enhancedProducts.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card
                    className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all"
                    onMouseEnter={() => setHoveredProduct(index)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-all duration-500"
                        style={{ transform: hoveredProduct === index ? "scale(1.05)" : "scale(1)" }}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${hoveredProduct === index ? "opacity-100" : "opacity-0"}`}
                      ></div>
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 ${hoveredProduct === index ? "translate-y-0" : "translate-y-full"}`}
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-white/90 backdrop-blur-sm hover:bg-white"
                            >
                              Ver detalles
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                              <div className="relative h-full min-h-[250px]">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-6 space-y-4">
                                <div>
                                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                                  <div className="flex mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < product.rating! ? "text-green-800 fill-green-800" : "text-gray-300"}`}
                                      />
                                    ))}
                                  </div>
                                  <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
                                    {product.availability}
                                  </Badge>
                                </div>

                                <p className="text-sm text-muted-foreground">{product.description}</p>

                                <div className="space-y-2 pt-2">
                                  <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-green-800" />
                                    <span className="text-muted-foreground">{product.origin}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-4 w-4 text-green-800" />
                                    <span className="text-muted-foreground">Cosecha: Todo el año</span>
                                  </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold text-green-800">{product.price}</span>
                                    <Button size="sm" className="bg-green-800 hover:bg-green-700 text-white">
                                      Solicitar
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <h5 className="font-semibold text-base">{product.name}</h5>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-green-200 hover:bg-green-50 hover:text-green-800" />
          <CarouselNext className="right-0 border-green-200 hover:bg-green-50 hover:text-green-800" />
        </Carousel>
      </div>
    </div>
  )
}