import type {
	ModuleLoader,
	// ModuleLoaderEnv,
	ModuleLoaderOutput,
} from "alephjs/server/types.ts"
import sass from "deno's ass"

interface Options {
	style?: "expanded" | "compressed"
}

export default class SCSSLoader implements ModuleLoader {
	#options: Options

	constructor(options?: Options) {
		this.#options = options ?? {}
	}

	test(pathname: string): boolean {
		return pathname.endsWith(".scss")
	}

	load(
		specifier: string,
		// Might need later
		// content: string,
		// env: ModuleLoaderEnv,
	): ModuleLoaderOutput | Promise<ModuleLoaderOutput> {
		const ret = sass(specifier, this.#options)
		return {
			code: ret.to_string() as string,
			lang: "css"
		}
	}
}
