load("@aspect_rules_js//js:defs.bzl", "js_binary")

# Rule to build the Vite frontend
js_binary(
    name = "build",
    entry_point = "node_modules/vite/bin/vite.js",
    args = ["build"],
    data = glob([
        "src/**",
        "public/**",
        "vite.config.ts",
        "package.json",
        "tsconfig.json",
        "index.html",
    ]),
)