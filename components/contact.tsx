"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "miguel.garza@example.com",
      link: "mailto:miguel.garza@example.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Teléfono",
      value: "+52 (871) 123-4567",
      link: "tel:+528711234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Ubicación",
      value: "Torreón, Coahuila, México",
      link: "https://maps.google.com/?q=Torreón,Coahuila,México",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-600">Contáctame</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres trabajar conmigo? No dudes en contactarme. Estaré encantado de escuchar
            tus ideas y proyectos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center p-8 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h4>
                    <p className="text-muted-foreground">Gracias por contactarme. Te responderé lo antes posible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nombre
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Asunto del mensaje"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2 mb-6">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tu mensaje"
                        required
                        className="min-h-32 bg-background/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensaje
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-4 rounded-lg hover:bg-primary/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="p-3 rounded-full bg-primary/10 mr-4">{item.icon}</div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Sígueme</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  )
}
