import { setupWorker } from 'msw/browser';
import { handler } from '@shared/mock/handler';

export const worker = setupWorker(...handler);