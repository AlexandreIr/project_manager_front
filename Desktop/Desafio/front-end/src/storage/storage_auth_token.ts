import AsyncStorage from 'asyncstorage';
import {AUTH_TOKEN_STORAGE} from './storage_config';

type StorageAuthTokenProps = {
    token: string;
    refresh_token: string;
}

export async function storage_auth_token_save({token, refresh_token}:StorageAuthTokenProps) {
    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify({token, refresh_token}));
}

export async function storage_auth_token_get() {
    const response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
    const {token, refresh_token}: StorageAuthTokenProps = response ? JSON.parse(response):{};
    return {token, refresh_token};
}

export async function storage_auth_token_remove() {
    await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
}