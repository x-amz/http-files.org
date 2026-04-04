// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
	site: 'https://http-files.org',
	integrations: [
		markdoc(),
		starlight({
			title: '.http files',
			description: 'The home of the .http file format — specification, tools, and cross-client compatibility reference.',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/http-files' },
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#4a9eff' },
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What are .http files?', slug: 'guides/introduction' },
						{ label: 'Your First .http File', slug: 'guides/quickstart' },
						{ label: 'Choose a Client', slug: 'guides/choose-a-client' },
					],
				},
				{
					label: 'Specification',
					items: [
						{ label: 'File Basics', slug: 'spec/basics' },
						{ label: 'Requests', slug: 'spec/requests' },
						{ label: 'Separators & Comments', slug: 'spec/separators' },
						{ label: 'Variables', slug: 'spec/variables' },
						{ label: 'Environments', slug: 'spec/environments' },
						{ label: 'Dynamic Variables', slug: 'spec/dynamic-variables' },
						{ label: 'Metadata & Annotations', slug: 'spec/metadata' },
						{ label: 'Authentication', slug: 'spec/auth' },
						{ label: 'File Includes', slug: 'spec/file-includes' },
						{ label: 'Multipart & Uploads', slug: 'spec/multipart' },
						{ label: 'GraphQL', slug: 'spec/graphql' },
						{ label: 'Response Handlers', slug: 'spec/response-handlers' },
						{ label: 'Pre-Request Scripts', slug: 'spec/pre-request-scripts' },
						{ label: 'Response Saving', slug: 'spec/response-saving' },
						{ label: 'Cookies', slug: 'spec/cookies' },
						{ label: 'SSL & Certificates', slug: 'spec/ssl' },
						{ label: 'Proxy', slug: 'spec/proxy' },
						{ label: 'Protocols', slug: 'spec/protocols' },
						{ label: 'Imports & Cross-File', slug: 'spec/imports' },
						{ label: 'cURL Integration', slug: 'spec/curl' },
					],
				},
				{
					label: 'Clients & Tools',
					items: [
						{ label: 'Overview', slug: 'clients/overview' },
						{ label: 'IDE Extensions', slug: 'clients/ide' },
						{ label: 'CLI Tools', slug: 'clients/cli' },
						{ label: 'Neovim Plugins', slug: 'clients/neovim' },
						{ label: 'Parser Libraries', slug: 'clients/parsers' },
					],
				},
				{
					label: 'Compatibility',
					items: [
						{ label: 'Comparison Overview', slug: 'compare/overview' },
						{ label: 'Core Syntax', slug: 'compare/core' },
						{ label: 'Variables & Environments', slug: 'compare/variables' },
						{ label: 'Scripting & Testing', slug: 'compare/scripting' },
						{ label: 'Protocols & Extensions', slug: 'compare/protocols' },
						{ label: 'Auth & Security', slug: 'compare/auth' },
						{ label: 'Portability Guide', slug: 'compare/portability' },
					],
				},
			],
		}),
	],
});
