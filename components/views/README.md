# Views

One file per **page type**. These only assemble sections — they should stay thin.

| View | Route(s) |
|------|----------|
| `HomeView.tsx` | `/` |
| `MarqueView.tsx` | `/[marque]` (Ferrari, McLaren, …) |
| `PaymentView.tsx` | `/leasing`, `/financing`, `/cash-purchase` |
| `BrandsView.tsx` | `/brands` |
| `ShowroomView.tsx` | `/showroom` |
| `DeliveriesView.tsx` | `/deliveries` |
| `BuildDealView.tsx` | `/build-your-deal` |

Content → `../../content/` · Section UI → `../home/` or `../sections/`.
