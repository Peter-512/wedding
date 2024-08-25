export const tailwindSizes = {
	isAboveSM: 640,
	isAboveMD: 768,
	isAboveLG: 1024,
	isAboveXL: 1280,
	isAboveXXL: 1536
} as const;

export type TailwindSizeKey = keyof typeof tailwindSizes;
