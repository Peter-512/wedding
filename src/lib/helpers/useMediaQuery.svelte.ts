import { tailwindSizes, type TailwindSizeKey } from '$lib/helpers/tailwindSizes';

export const useMediaQuery = () => {
	function typedEntries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
		return Object.entries(obj) as [keyof T, T[keyof T]][];
	}

	let matches = $state(
		typedEntries(tailwindSizes).reduce<Record<TailwindSizeKey, boolean>>(
			(acc, [key]) => {
				acc[key] = false;
				return acc;
			},
			{} as Record<TailwindSizeKey, boolean>
		)
	);

	$effect(() => {
		const queries = typedEntries(tailwindSizes).reduce<Record<TailwindSizeKey, MediaQueryList>>(
			(acc, [key, value]) => {
				acc[key] = window.matchMedia(`(min-width: ${value}px)`);
				return acc;
			},
			{} as Record<TailwindSizeKey, MediaQueryList>
		);

		matches = typedEntries(queries).reduce<Record<string, boolean>>((acc, [key, value]) => {
			acc[key] = value.matches;
			return acc;
		}, {});

		const listeners = typedEntries(queries).map(([key]) => {
			return (event: MediaQueryListEvent) => {
				matches[key] = event.matches;
			};
		});

		Object.values(queries).forEach((mql, index) => {
			mql.addEventListener('change', listeners[index]);
		});

		return () => {
			Object.values(queries).forEach((mql, index) => {
				mql.removeEventListener('change', listeners[index]);
			});
		};
	});

	return {
		get isAboveSM() {
			return matches.isAboveSM;
		},
		get isAboveMD() {
			return matches.isAboveMD;
		},
		get isAboveLG() {
			return matches.isAboveLG;
		},
		get isAboveXL() {
			return matches.isAboveXL;
		},
		get isAboveXXL() {
			return matches.isAboveXXL;
		}
	};
};
