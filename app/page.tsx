import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import Chatbot from "@/registry/chatbot/chatbot"
import { ExampleForm } from "@/registry/example-form/example-form"
import PokemonPage from "@/registry/complex-component/page"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Shadfinity</h1>
        <p className="text-muted-foreground">
          A registry for advance shadcn components
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A chatbot component with customisable flow
            </h2>
            <OpenInV0Button name="chatbot" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Chatbot config={{
              name:"chatbot",
              image:"https://sanjaybora.in/images/chatbot.png",
              initialStep:'start',
              flow:{
                start:{
                  message:'hello'
                }
              }
            }} />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </div>
      </main>
    </div>
  )
}
