
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background sticky top-0 z-50 border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
            <GamepadIcon className="w-6 h-6" />
            <span>Portfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to my Portfolio</h1>
                <p className="text-lg md:text-xl">Explore my work and play interactive games to learn more about me.</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Exploring
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground/90 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Play a Game
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width={550}
                  height={550}
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 rounded-xl" />
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h2 className="text-2xl font-bold">Gamified Portfolio</h2>
                  <p className="text-sm">Explore my work through interactive games</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Featured Projects</h2>
                <p className="text-muted-foreground md:text-xl">
                  Explore a selection of my best work, each with its own unique interactive game.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="group relative overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Project</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Project 1"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Project 1</h3>
                    <p className="text-sm text-muted-foreground">Interactive game: Guess the color</p>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Project</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Project 2"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Project 2</h3>
                    <p className="text-sm text-muted-foreground">Interactive game: Spot the difference</p>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Project</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Project 3"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Project 3</h3>
                    <p className="text-sm text-muted-foreground">Interactive game: Memory match</p>
                  </CardContent>
                </Card>
                <Card className="group relative overflow-hidden rounded-lg">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Project</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Project 4"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Project 4</h3>
                    <p className="text-sm text-muted-foreground">Interactive game: Trivia challenge</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  width={550}
                  height={550}
                  alt="About"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 rounded-xl" />
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h2 className="text-2xl font-bold">About Me</h2>
                  <p className="text-sm">Learn more through an interactive quiz</p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get to Know Me</h2>
                <p className="text-muted-foreground md:text-xl">
                  Explore my background, skills, and interests through an interactive quiz.
                </p>
                <Button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Take the Quiz
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                <p className="text-muted-foreground md:text-xl">
                  Get in touch to discuss potential collaborations or just to say hello.
                </p>
              </div>
              <div className="space-y-4">
                <form className="grid gap-4">
                  <Input type="text" placeholder="Name" className="w-full" />
                  <Input type="email" placeholder="Email" className="w-full" />
                  <Textarea placeholder="Message" rows={4} className="w-full" />
                  <Button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container flex flex-col gap-4 py-6 px-4 md:px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Portfolio. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
