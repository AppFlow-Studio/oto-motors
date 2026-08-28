'use client'

import { useDeal } from '@/components/deal-provider'

export function MobileBar() {
  const { openDeal } = useDeal()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-hairline bg-background/90 backdrop-blur-xl lg:hidden">
      <a
        href="tel:+12125550142"
        className="eyebrow flex items-center justify-center border-r border-hairline py-4 text-muted-foreground"
      >
        Call
      </a>
      <a
        href="sms:+12125550142"
        className="eyebrow flex items-center justify-center border-r border-hairline py-4 text-muted-foreground"
      >
        Text
      </a>
      <button
        type="button"
        onClick={openDeal}
        className="champagne-gradient eyebrow col-span-2 py-4 text-[#0a0a0c]"
      >
        Build Your Deal →
      </button>
    </div>
  )
}
