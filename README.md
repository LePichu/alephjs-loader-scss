# Aleph.js Loader SCSS 
A Custom SCSS Loader for Aleph.js which allows using SCSS in your Aleph.js project using `denosass` module.

## Usage
- Server File
```ts
import { serve } from "aleph/react-server"
import SCSSLoader from "https://deno,land/x/alephjs_loader_scss/mod.ts"
import routes from "~/routes/_export.ts"

serve({
	loaders: [
		new SCSSLoader({
			style: "compressed" // or "expanded" 
		})
	],
	router: {
		glob: "./routes/**/*.{tsx,mdx,md}",
		routes
	},
	ssr: true
})

``` 
## License
`alephjs-loader-scss` is licensed under MIT License, see [LICENSE](./LICENSE) for more information.