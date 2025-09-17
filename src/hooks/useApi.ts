import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../services';
import { ApiResponse, LoadingState } from '../types';

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useApi<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
  options: UseApiOptions = {}
) {
  const { immediate = false, onSuccess, onError } = options;
  
  const [state, setState] = useState<LoadingState & { data: T | null }>({
    data: null,
    isLoading: false,
    error: null,
  });

  const execute = useCallback(
    async (requestData?: any): Promise<ApiResponse<T>> => {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      try {
        let response: ApiResponse<T>;

        switch (method) {
          case 'GET':
            response = await apiClient.get<T>(endpoint);
            break;
          case 'POST':
            response = await apiClient.post<T>(endpoint, requestData);
            break;
          case 'PUT':
            response = await apiClient.put<T>(endpoint, requestData);
            break;
          case 'PATCH':
            response = await apiClient.patch<T>(endpoint, requestData);
            break;
          case 'DELETE':
            response = await apiClient.delete<T>(endpoint);
            break;
          default:
            throw new Error(`Unsupported method: ${method}`);
        }

        if (response.success && response.data) {
          setState({
            data: response.data,
            isLoading: false,
            error: null,
          });
          onSuccess?.(response.data);
        } else {
          const errorMessage = response.error || 'Request failed';
          setState({
            data: null,
            isLoading: false,
            error: errorMessage,
          });
          onError?.(errorMessage);
        }

        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        setState({
          data: null,
          isLoading: false,
          error: errorMessage,
        });
        onError?.(errorMessage);
        
        return {
          success: false,
          error: errorMessage,
        };
      }
    },
    [endpoint, method, onSuccess, onError]
  );

  const reset = useCallback(() => {
    setState({
      data: null,
      isLoading: false,
      error: null,
    });
  }, []);

  useEffect(() => {
    if (immediate && method === 'GET') {
      execute();
    }
  }, [execute, immediate, method]);

  return {
    ...state,
    execute,
    reset,
  };
}

