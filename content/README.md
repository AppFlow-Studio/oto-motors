# Content

**All page copy and media paths live here.** Put new files in `public/assets/`, then point `src` fields here.

| File / folder | Used by |
|---------------|---------|
| `home.ts` | `/` homepage |
| `marques/<brand>.ts` | `/ferrari`, `/mclaren`, … |
| `marques.ts` | thin re-export (do not put content here) |
| `payments.ts` | `/leasing`, `/financing`, `/cash-purchase` |
| `brands.ts` | `/brands` |
| `showroom.ts` | `/showroom` |
| `site.ts` | nav, footer, shared silk (`SILK`) |

Brand pages: edit `marques/ferrari.ts` (etc.), not the shim `marques.ts`.
