# Massage Évasion Paris

Site vitrine premium pour une maison de bien-être située à Paris 8ᵉ.
Design éditorial minimaliste — palette sable, sauge, or — fabriqué en
HTML5 / CSS3 / Vanilla JS, sans dépendance, sans build.

## Stack

- HTML5 sémantique
- CSS custom properties (design tokens, variantes `data-palette`)
- Vanilla JS (i18n FR/EN, IntersectionObserver, focus trap)
- Schema.org JSON-LD (HealthAndBeautyBusiness, FAQPage, ItemList)
- Open Graph, Twitter Cards, sitemap.xml, robots.txt, manifest PWA
- Déploiement Vercel (edge cache + headers sécurité)

## Pages (13)

`index` · `prestations` · `institut` · `rituel` · `tarifs` ·
`reservation` · `contact` · `avis` · `faq` · `bon-cadeau` ·
`mentions` · `confidentialite` · `404`

## Développement local

Aucune dépendance. Un simple serveur statique suffit :

```bash
python -m http.server 8002
# puis ouvrir http://localhost:8002
```

## Déploiement

Le fichier `vercel.json` configure :

- `cleanUrls` (URLs sans `.html`)
- Headers de sécurité (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`)
- Cache immutable sur `/assets/*` (1 an)

Déployer via :

```bash
vercel --prod
# ou push sur main — Vercel auto-deploy si projet lié au repo
```

## Standards

- Performance Lighthouse : 90+
- Accessibilité WCAG 2.1 AA (skip-link, ARIA, focus visible, contraste)
- Respect `prefers-reduced-motion`
- SEO : meta uniques par page, hreflang, canonical, sitemap
- Responsive mobile-first (375 → 1440)

## Structure

```
massage-evasion/
├── *.html                    13 pages
├── assets/
│   ├── css/                  variables, reset, base, components, layout
│   ├── js/                   i18n, main, booking, modal
│   └── images/               favicon + visuels
├── sitemap.xml · robots.txt · manifest.webmanifest
└── vercel.json
```

## Licence

© Massage Évasion Paris — site démo.
