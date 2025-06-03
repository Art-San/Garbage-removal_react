import { ModalProvider } from '@/context/modal/ModalProvider'
import { queryClient } from '@/shared/api/query-client'
import { QueryClientProvider } from '@tanstack/react-query'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>{children}</ModalProvider>
    </QueryClientProvider>
  )
}
