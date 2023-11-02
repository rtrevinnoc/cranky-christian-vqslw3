export default {
	server: {
		strictPort: true,
		hmr: process.env.IN_SANDBOX ? {
			protocol: "wss",
			port: 443
		} : {}
	}
};
