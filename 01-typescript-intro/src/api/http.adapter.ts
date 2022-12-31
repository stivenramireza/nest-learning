import axios, { Axios } from 'axios';

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;

    post<T extends BodyInit>(url: string, data: T): Promise<T>;

    put<T extends BodyInit>(url: string, data: T): Promise<T>;

    patch<T extends BodyInit>(url: string, data: T): Promise<T>;

    delete<T>(url: string): Promise<T>;
}

export class FetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data: T = await response.json();
        return data;
    }

    async post<T extends BodyInit>(url: string, data: T): Promise<T> {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });
        const responseData: T = await response.json();
        return responseData;
    }

    async put<T extends BodyInit>(url: string, data: T): Promise<T> {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });
        const responseData: T = await response.json();
        return responseData;
    }

    async patch<T extends BodyInit>(url: string, data: T) {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });
        const responseData: T = await response.json();
        return responseData;
    }

    async delete<T>(url: string): Promise<T> {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        const data: T = await response.json();
        return data;
    }
}

export class AxiosAdapter implements HttpAdapter {
    private readonly axios: Axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post<T>(url: string, data: T): Promise<T> {
        const { data: responseData } = await this.axios.post<T>(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return responseData;
    }

    async put<T>(url: string, data: T): Promise<T> {
        const { data: responseData } = await this.axios.put<T>(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return responseData;
    }

    async patch<T>(url: string, data: T): Promise<T> {
        const { data: responseData } = await this.axios.patch<T>(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return responseData;
    }

    async delete<T>(url: string): Promise<T> {
        const { data } = await this.axios.delete<T>(url);
        return data;
    }
}
