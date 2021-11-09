import I18n from '@eartharoid/i18n';
import { readable } from 'svelte/store';

export const i18n = readable(new I18n('en-GB', { 'en-GB': import('./locales/en-GB.json') }));