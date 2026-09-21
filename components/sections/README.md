# Shared sections (brand + payment)

Same layout kit is reused by:
- Brand pages → `../views/MarqueView.tsx`
- Payment pages → `../views/PaymentView.tsx`

Homepage blocks are separate: `../home/`.

| File | Block |
|------|-------|
| `Hero.tsx` | Full-bleed hero |
| `MarqueEntrance.tsx` | Brand intro + line art |
| `MarqueLayer.tsx` | Brand overlay chapter |
| `PaymentLayer.tsx` | Payment expand chapter |
| `CopyBlock.tsx` | Text chapter |
| `Collage.tsx` | Two-image collage |
| `Scene.tsx` | Full-bleed scene |
| `SilkQuote.tsx` | Quote |
| `ExpandTrack.tsx` | Sticky expand image |
| `Faq.tsx` | FAQ |
| `OptionCards.tsx` | Model / option cards |
| `DrawingAtelier.tsx` | Drawing studies |
| `ClosingLineArt.tsx` | Closing drawing |

Copy lives in `content/marques/*` or `content/payments.ts`.

CSS still uses class names like `.narrative` / `.n-hero` for motion — do not rename those.
