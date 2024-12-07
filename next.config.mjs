const nextConfig = {
	reactStrictMode: false,
	rewrites() {
		return [
			{
				source: "/",
				destination: "/overview",
			},
		];
	},
	// TODO : Have to correctly configure  SCSS for Next15, currently not possible
	sassOptions: {
		silenceDeprecations: ["legacy-js-api"],
	},
	devIndicators: {
		appIsrStatus: false,
	},
};

export default nextConfig;
