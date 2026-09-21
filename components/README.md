# Components

| Folder | Role |
|--------|------|
| `views/` | One composer per page type — keep thin |
| `home/` | Homepage sections only |
| `sections/` | Shared brand + payment blocks (same pattern as `home/`) |
| `chrome/` | Site shell (header, footer, `PageShell`) |
| `ui/` | Small shared controls (`OtoAction`, …) |
| `PageEffects.tsx` | Boots the JS effect modules listed on each route |

Content does **not** live here — use `../content/`.
