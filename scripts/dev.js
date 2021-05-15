const esbuild = require('esbuild');

esbuild
  .serve(
    {
      servedir: 'public',
    },
    {
      entryPoints: ['src/main.ts'],
      entryNames: '[name]',
      outbase: 'src',
      bundle: true,
      format: 'iife',
      // external: [],
      // outfile: "out.js",
      // inject: [""],
      outdir: 'public/js',
    }
  )
  .then((server) => {
    console.log('stop..')
    // server.stop();
  });

// esbuild.buildSync({
//   entryPoints: ['src/main.ts'],
//   // entryNames: '[dir][name]-[hash]',
//   outbase: 'src',
//   bundle: true,
//   format: 'iife',
//   // external: [],
//   // outfile: "out.js",
//   // inject: [""],
//   outdir: 'dist',
// });
