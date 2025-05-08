"use client"

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import HistorySection from "@/components/HistorySection"
import MissionVisionSection from "@/components/MissionVisionSection"
import CategorySection from "@/components/CategorySection"
import CoffeeSection from "@/components/CoffeeSection"
import GrainsSection from "@/components/GrainsSection"
import VegetablesSection from "@/components/VegetablesSection"
import VidSeccion from "@/components/VidSeccion"
import CertificationSeccion from '@/components/CertificationSeccion'
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import ProductSection from "@/components/ProductSection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Coffee, Wheat, Leaf, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import HoneySection from "@/components/HoneySection"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionVisionSection />
        <HistorySection />
        <CategorySection />
        <CoffeeSection/>
        <GrainsSection/>
        <VegetablesSection/>
        <HoneySection/>
        <VidSeccion/>
        <CertificationSeccion/>
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
