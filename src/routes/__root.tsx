import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'SkyFly International | Europe Visa Documentation & Immigration Guidance' },
      { name: 'description', content: 'SkyFly International Pvt. Ltd. — Professional overseas documentation and global visa guidance consultancy in Trichy, India. Expert immigration consultation for Europe, Canada, Australia, and 29+ countries.' },
      { name: 'keywords', content: 'Europe visitor visa, Europe visa consultancy, documentation support, immigration guidance, overseas travel consultancy, Schengen visa guidance, Europe travel support, Trichy visa consultancy' },
      { name: 'author', content: 'SkyFly International Pvt. Ltd.' },
      { property: 'og:title', content: 'SkyFly International | Europe Visa Documentation & Immigration Guidance' },
      { property: 'og:description', content: 'Professional overseas documentation and global visa guidance. Your global journey starts with SkyFly.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'shortcut icon', href: '/favicon.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
