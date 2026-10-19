import {defineConfig} from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig(({mode}) => {

	return {
		publicDir: path.resolve(import.meta.dirname, process.env.VITE_PUBLIC_RESOURCES_PATH),
		base: process.env.VITE_PUBLIC_URL_PATH,
		resolve: {
			alias: [
				{
					find: '@projectPrivate',
					replacement: path.resolve(import.meta.dirname, './source/DistributionPackages/Sites/DenkPharma.Hub/Resources/Private')
				},
				{
					find: '@projectPublic',
					replacement: path.resolve(import.meta.dirname, './source/DistributionPackages/Sites/DenkPharma.Hub/Resources/Public')
				},
				{
					find: '@packages',
					replacement: path.resolve(import.meta.dirname, './source/Packages')
				},
				{
					find: '@distributionPackages',
					replacement: path.resolve(import.meta.dirname, './source/DistributionPackages')
				},
				{
					find: '@designPrivate',
					replacement: path.resolve(import.meta.dirname, './source/DistributionPackages/Design/DenkPharma.Design/Resources/Private')
				}
			],
			extensions: [
				'.js',
				'.jsx',
				'.ts',
				'.scss',
				'.tsx',
				'.svelte'
			]
		},
		build: {
			emptyOutDir: false,
			cssCodeSplit: true,
			outDir: path.resolve(import.meta.dirname, process.env.VITE_PUBLIC_RESOURCES_PATH),
			assetsInlineLimit: 35000,
			minify: mode === 'production' ? 'oxc' : false,
			rollupOptions: {
				input: {
					main: `./${process.env.VITE_PRIVATE_RESOURCES_PATH}/Fusion/Root.ts`
				},
				output: {
					hashCharacters: 'hex',
					entryFileNames: mode === 'production' ? `JavaScript/[name].bundle-[hash:8].js` : `JavaScript/[name].bundle.js`,
					chunkFileNames: mode === 'production' ? `JavaScript/[name].chunk-[hash:8].js` : `JavaScript/[name].chunk.js`,
					assetFileNames: mode === 'production' ? `StyleSheets/[name]-[hash:8].css` : `StyleSheets/[name].[ext]`,
				},
			},
			watch: mode === 'development' ? {
				include: ['/app/source/DistributionPackages/**/*'],
				exclude: ['node_modules/**', '**/Resources/Public/**'],
				chokidar: {
					usePolling: true,
					interval: 500
				}
			} : false
		},
		css: {
			preprocessorOptions: {
				scss: {
					loadPaths: [
						path.resolve(import.meta.dirname, './source/DistributionPackages/Sites/DenkPharma.Hub/Resources/Private/Fusion'),
						path.resolve(import.meta.dirname, './source/DistributionPackages/Design/DenkPharma.Design/Resources/Private/Fusion')
					],
					quietDeps: true
				}
			}
		},
		plugins: [
			svelte()
		]
	}
})
