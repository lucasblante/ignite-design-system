import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={clsx(
        'text-grey-800 font-sans',
        'py-3 px-4 bg-cyan-500 rounded font-semibold w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}