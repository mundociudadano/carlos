import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, User, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <img
          src="/mnt/data/Gemini_Generated_Image_z0yinhz0yinhz0yi.png"
          alt="Logo Comunicación Estratégica IA"
          className="w-48 h-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Comunicación Estratégica con Inteligencia Artificial</h1>
        <p className="text-lg max-w-xl">
          Potenciamos tu marca con soluciones de marketing inteligentes, automatización de procesos y estrategias de comunicación basadas en datos.
        </p>
        <Button className="mt-6 text-lg px-6 py-3">
          Conocé nuestros servicios <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </header>

      <section className="grid md:grid-cols-3 gap-6 px-6 py-12 bg-gray-50">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Chatbots Inteligentes</h2>
            <p>Automatizá tu atención al cliente y mejorá la experiencia con asistentes virtuales personalizados.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Análisis de Datos</h2>
            <p>Tomá decisiones estratégicas a partir de métricas claras y dashboards impulsados por IA.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Campañas Automatizadas</h2>
            <p>Diseñamos y ejecutamos campañas de marketing omnicanal basadas en comportamiento del usuario.</p>
          </CardContent>
        </Card>
      </section>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonios de Clientes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="italic">“Gracias a su chatbot, redujimos el tiempo de respuesta en un 80%. La IA realmente nos cambió el juego.”</p>
              <p className="mt-4 font-semibold">— Carla G., Ecommerce</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="italic">“El análisis predictivo nos ayudó a enfocar nuestras campañas y duplicar la conversión en solo 3 meses.”</p>
              <p className="mt-4 font-semibold">— Pablo M., Agencia de Viajes</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cómo la IA transforma el marketing digital</h3>
              <p className="text-sm text-gray-600 mb-4">Exploramos los cambios clave en estrategias de marketing gracias al uso de inteligencia artificial.</p>
              <Button variant="link" className="p-0 text-blue-600">Leer más</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">5 herramientas de IA para automatizar tu negocio</h3>
              <p className="text-sm text-gray-600 mb-4">Descubrí plataformas que pueden ayudarte a optimizar procesos y ahorrar recursos.</p>
              <Button variant="link" className="p-0 text-blue-600">Leer más</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">El futuro del contenido generado por IA</h3>
              <p className="text-sm text-gray-600 mb-4">¿Puede la IA escribir mejor que un humano? Analizamos sus fortalezas y limitaciones.</p>
              <Button variant="link" className="p-0 text-blue-600">Leer más</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <User className="w-5 h-5 mx-3 text-gray-400" />
              <input
                type="text"
                className="w-full p-3 focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <Mail className="w-5 h-5 mx-3 text-gray-400" />
              <input
                type="email"
                className="w-full p-3 focus:outline-none"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <div className="flex items-start border border-gray-300 rounded-lg overflow-hidden">
              <MessageCircle className="w-5 h-5 mx-3 mt-3 text-gray-400" />
              <textarea
                className="w-full p-3 focus:outline-none"
                rows="4"
                placeholder="Contanos en qué podemos ayudarte"
              ></textarea>
            </div>
          </div>
          <Button className="w-full text-lg">Enviar mensaje</Button>
        </form>
      </section>

      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Comunicación Estratégica IA. Todos los derechos reservados.
      </footer>
    </main>
  );
}
