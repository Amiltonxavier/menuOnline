import React, { ComponentProps } from 'react'

type SectionHeroProps = ComponentProps<'div'> 

export function Header(props: SectionHeroProps) {
  return (

    <section {...props} className="relative w-full overflow-hidden">
      <div className="container flex flex-col items-center justify-center px-6 space-y-4 pt-12 pb-16 text-center md:space-y-10 md:pt-24 md:pb-20 lg:space-y-12 lg:pt-32 lg:pb-24 xl:space-y-16 xl:pt-48 xl:pb-32">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-300">Beautiful Websites, Fast</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Shadcn makes it easy to create stunning designs without being a designer.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1]">
        <img alt="Hero" className="aspect-[2/1] object-cover" height="288" src="https://images.unsplash.com/photo-1582295523904-8ab53717447c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1440" />
      </div>
    </section>

  )
}
