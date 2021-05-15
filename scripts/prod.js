const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/main.ts'],
  entryNames: '[name]',
  outbase: 'src',
  bundle: true,
  format: 'iife',
  minify: true,
  // external: [],
  // outfile: "out.js",
  // inject: [""],
  outdir: 'public/js',
});
