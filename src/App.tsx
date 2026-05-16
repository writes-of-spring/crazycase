import CrazyCase from '@/components/CrazyCase'

function App() {
  return (
    <div className="isolate relative min-h-dvh flex flex-col">
      {/* Decorative background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
        <div className="absolute -top-8 -left-4 text-[16rem] font-mono font-semibold leading-none text-foreground/[0.08] dark:text-foreground/[0.06]">
          Cc
        </div>
        <div className="absolute bottom-12 right-8 text-[10rem] font-mono font-semibold leading-none text-foreground/[0.06] dark:text-foreground/[0.05]">
          aB
        </div>
      </div>

      <main className="relative flex flex-1 flex-col items-start justify-center px-6 py-16 sm:px-12 lg:px-20">
        <CrazyCase />
      </main>
    </div>
  )
}

export default App
