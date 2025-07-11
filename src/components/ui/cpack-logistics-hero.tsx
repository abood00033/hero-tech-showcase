"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Phone, Plane, Ship, Settings, PhoneCall, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroAction {
  label: string
  href: string
  variant?: "default" | "outline" | "secondary"
  icon?: React.ReactNode
}

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  services?: string[]
  actions?: HeroAction[]
  className?: string
}

const CPackLogisticsHero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title = "سمارتكو لوجستيك",
      subtitle = "حلول الشحن الذكية",
      description = "من الصين إلى المملكة",
      services = ["شحن بحري", "شحن جوي", "توريد وتركيب وصيانة آلات حديثة"],
      actions = [
        {
          label: "اتصل بنا الآن",
          href: "https://wa.me/+966594196930",
          variant: "default",
          icon: <PhoneCall className="h-4 w-4" />
        },
        {
          label: "احصل على عرض سعر",
          href: "#quote",
          variant: "outline",
          icon: <FileText className="h-4 w-4" />
        }
      ],
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
          className,
        )}
        {...props}
      >
        {/* Animated gradient background */}
        <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
          <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

          {/* Main glow */}
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

          {/* Lamp effect */}
          <motion.div
            initial={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            whileInView={{ width: "16rem" }}
            className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
          />

          {/* Top line */}
          <motion.div
            initial={{ width: "15rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            whileInView={{ width: "30rem" }}
            className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
          />

          {/* Left gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Right gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-8 -translate-y-20"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Company Name */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
              dir="rtl"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary"
              dir="rtl"
            >
              {subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground"
              dir="rtl"
            >
              {description}
            </motion.p>

            {/* Services */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 mt-8"
            >
              {services.map((service, index) => {
                const icons = [<Ship key="ship" className="h-6 w-6" />, <Plane key="plane" className="h-6 w-6" />, <Settings key="settings" className="h-6 w-6" />]
                return (
                  <div key={index} className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/50">
                    <div className="text-primary">
                      {icons[index]}
                    </div>
                    <span className="text-foreground font-medium" dir="rtl">
                      {service}
                    </span>
                  </div>
                )
              })}
            </motion.div>

            {/* Action Buttons */}
            {actions && actions.length > 0 && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    size="lg"
                    className="flex items-center gap-2 text-lg px-8 py-6"
                    asChild
                  >
                    <a href={action.href} dir="rtl">
                      {action.icon}
                      {action.label}
                    </a>
                  </Button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-secondary/40 rounded-lg rotate-45 animate-bounce" />
        <div className="absolute top-1/3 left-10 w-2 h-8 bg-accent/50" />
        <div className="absolute bottom-20 right-32 w-8 h-2 bg-primary/40" />
      </section>
    )
  },
)
CPackLogisticsHero.displayName = "CPackLogisticsHero"

export { CPackLogisticsHero }
export type { HeroProps, HeroAction }