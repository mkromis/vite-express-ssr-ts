import { defineWorkspace } from 'vitest/config'

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
    {
        // add "extends" to merge two configs together
        extends: './vite.config.js',
        test: {
            include: ['client/**/*.test.{tsx,js}'],
            //setupFiles: ['server/setupTests.ts'],
            // it is recommended to define a name when using inline configs
            name: 'client',
            environment: 'jsdom',
        }
    },
    {
        test: {
            include: ['server/**/*.test.{ts,js}'],
            //setupFiles: ['server/setupTests.ts'],
            name: 'server',
            environment: 'node',
        }
    }
])