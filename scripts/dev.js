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
      outdir: 'public/js',
    }
  )
  .then((server) => {
    console.log('stop..');
  });
