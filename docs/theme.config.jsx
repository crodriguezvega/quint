import { useRouter } from 'next/router'
import { useConfig, useTheme } from 'nextra-theme-docs'
import { InformalSystemsLogo } from './components/home/InformalSystemsLogo'

export default {
  logo: () => {
    const { resolvedTheme } = useTheme()
    if (resolvedTheme == 'dark') {
      return (
        <img
          src="https://raw.githubusercontent.com/informalsystems/quint/main/logos/quint-logo-light.svg"
          alt="Quint"
          width="150px"
        />
      )
    } else {
      return (
        <img
          src="https://raw.githubusercontent.com/informalsystems/quint/main/logos/quint-logo-dark.svg"
          alt="Quint"
          width="150px"
        />
      )
    }
  },
  docsRepositoryBase: 'https://github.com/informalsystems/quint/blob/main/docs',
  project: {
    link: 'https://github.com/informalsystems/quint',
  },
  chat: {
    link: 'https://t.me/quint_lang',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 50 50"
      >
        <path
          fill="currentColor"
          d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
        ></path>
      </svg>
    ),
  },
  head: function useHead() {
    const { title } = useConfig()
    return (
      <>
        <meta
          name="msapplication-TileColor"
          content="#fff"
        />
        <meta
          name="theme-color"
          content="#fff"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          httpEquiv="Content-Language"
          content="en"
        />
        <meta
          name="description"
          content="A modern and executable specification language"
        />
        <meta
          name="og:description"
          content="A modern and executable specification language"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:image"
          content="/og.png"
        />
        <meta
          name="twitter:site:domain"
          content="quint-lang.com"
        />
        <meta
          name="twitter:url"
          content="https://quint-lang.com"
        />
        <meta
          name="og:title"
          content={title ? title + ' – Quint' : 'Quint'}
        />
        <meta
          name="og:image"
          content="/og.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Quint"
        />
        <link
          rel="icon"
          href="/icon-light.png"
          type="image/png"
        />
        <link
          rel="icon"
          href="/icon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  footer: {
    text: (
      <div className="flex w-full flex-col gap-6 items-center sm:items-start">
        <InformalSystemsLogo />
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Informal Systems.
        </p>
      </div>
    ),
  },
  primaryHue: { dark: 264, light: 264 },
  primarySaturation: { dark: 52, light: 90 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: asPath !== '/' ? '%s – Quint' : 'Quint',
    }
  },
}
