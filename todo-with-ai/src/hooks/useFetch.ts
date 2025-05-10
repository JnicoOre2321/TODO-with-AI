import { useEffect, useState } from "react";

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: any;
    token?: string;
}

export function useFetch<T>(url: string, options: FetchOptions = {}) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const headers: Record<string, string> = {
                    'Content-Type': 'application/json',
                    ...(options.headers || {})
                };

                if (options.token) {
                    headers['Authorization'] = `Bearer ${options.token}`;
                }

                const response = await fetch(url, {
                    method: options.method || 'GET',
                    headers,
                    body: options.body ? JSON.stringify(options.body) : undefined,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonData = await response.json();
                setData(jsonData as T);
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