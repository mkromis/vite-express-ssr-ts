/* eslint-disable @typescript-eslint/no-unused-vars */
import 'regenerator-runtime/runtime';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('AppFooter', () => {
    it('renders footer without crashing', async () => {
        render(<App />);
    });
});
