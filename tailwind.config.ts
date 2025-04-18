import svelteUX from 'svelte-ux/plugins/tailwind.cjs';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindCssAnimate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svelte-ux/**/*.{svelte,js}'],
	safelist: ['dark'],
	theme: {
		listStyleType: {
			disc: 'disc',
			circle: 'circle'
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--bits-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--bits-accordion-content-height)' },
				to: { height: '0' }
			},
			'caret-blink': {
				'0%,70%,100%': { opacity: '1' },
				'20%,50%': { opacity: '0' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'caret-blink': 'caret-blink 1.25s ease-out infinite'
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				serif: [...fontFamily.serif],
				freeserif: ['Free Serif', 'serif'],
				arimo: ['Arimo', 'sans-serif'],
				scandilover: ['Scandilover', 'sans-serif']
			}
		}
	},
	plugins: [typography, svelteUX, tailwindCssAnimate],
	ux: {
		themes: {
			light: {
				primary: colors['orange']['500'],
				'primary-content': 'white',
				secondary: colors['blue']['500'],
				'surface-100': 'white',
				'surface-200': colors['gray']['100'],
				'surface-300': colors['gray']['300'],
				'surface-content': colors['gray']['900'],
				'color-scheme': 'light'
			},
			dark: {
				primary: colors['orange']['500'],
				'primary-content': 'white',
				secondary: colors['blue']['500'],
				'surface-100': colors['zinc']['800'],
				'surface-200': colors['zinc']['900'],
				'surface-300': colors['zinc']['950'],
				'surface-content': colors['zinc']['100'],
				'color-scheme': 'dark'
			}
		}
	}
};

export default config;
