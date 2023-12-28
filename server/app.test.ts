import supertest from 'supertest';
import { test, it, describe, expect } from 'vitest'

import app from './app';

test('Check for invalid routes', () => {
    describe('Should return a 404', async () => {
        await supertest(app).get('/').expect('Welcome to the API!');
    });
});
