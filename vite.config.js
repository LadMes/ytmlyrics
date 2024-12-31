export default {
    build: {
        lib: {
            entry: 'src/content.ts',
            name: 'content'
        },
        outDir: './unpacked_extension',
        emptyOutDir: true,
        rollupOptions: {
            output: {
            chunkFileNames: "scripts/[name].js",
            entryFileNames: "scripts/[name].js",
            }
        }
    }, 
}