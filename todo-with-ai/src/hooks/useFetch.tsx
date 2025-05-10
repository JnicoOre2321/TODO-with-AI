import { useEffect } from "react";
import { useState } from "react";

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: HeadersInit;
    body?: BodyInit;
    token?: string;
}

export const useFetch = (url: string, options: FetchOptions = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let headers: HeadersInit = {
                    'Content-Type': 'application/json',
                    ...options.headers,
                };

                if (options.token) {
                    headers = {
                        ...headers,
                        'Authorization': `Bearer ${options.token}`
                    }
                }

                const response = await fetch(url, {
                    method: options.method || 'GET',
                    headers,
                    body: options.body ? JSON.stringify(options.body) : undefined,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, options.method, options.headers, options.body, options.token]);

    return { data, loading, error };
}
