import { renderHook as renderHookWithoutWrapper } from '@testing-library/react';
import { act, renderHook, waitFor } from 'test-utils';

import { useToastsContext } from '../toasts.hooks';

describe('useToastsContext', () => {
  it('should return default value', () => {
    const { result } = renderHook(() => useToastsContext());

    expect(result.current.toasts).toEqual([]);
    expect(typeof result.current.createToast).toBe('function');
    expect(typeof result.current.removeToast).toBe('function');
  });

  it('should throw error when not inside the context', () => {
    try {
      act(() => {
        renderHookWithoutWrapper(() => useToastsContext());
      });
      fail('expected error to be thrown');
    } catch (error) {
      expect(error.message).toBe(
        'useToastsContext hook must be used inside a ToastsContextProvider',
      );
    }
  });

  it('should create a toast', async () => {
    // render the hook with default state
    let renderHookResult;
    act(() => {
      renderHookResult = renderHook(() => useToastsContext());
    });
    const { result } = renderHookResult;

    // assert the default state
    expect(result.current.toasts).toEqual([]);

    // create a toast
    const message = 'hello toast';
    act(() => {
      result.current.createToast(message);
    });

    // assert the toast was created
    await waitFor(() => expect(result.current.toasts.length).toBe(1));
    expect(result.current.toasts.length).toBe(1);
  });

  it('should create a toast with default message', async () => {
    // render the hook with default state
    let renderHookResult;
    act(() => {
      renderHookResult = renderHook(() => useToastsContext());
    });
    const { result } = renderHookResult;

    // assert the default state
    expect(result.current.toasts).toEqual([]);

    // create a toast
    act(() => {
      result.current.createToast();
    });

    // assert the toast was created
    await waitFor(() => expect(result.current.toasts.length).toBe(1));
    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].message).toEqual('');
  });

  it('should remove a toast', async () => {
    // render the hook with default state
    let renderHookResult;
    act(() => {
      renderHookResult = renderHook(() => useToastsContext());
    });
    const { result } = renderHookResult;

    // assert the default state
    expect(result.current.toasts).toEqual([]);

    // create a toast
    const message = 'hello toast';
    act(() => {
      result.current.createToast(message);
    });

    // assert the toast was created
    await waitFor(() => expect(result.current.toasts.length).toBe(1));
    expect(result.current.toasts.length).toBe(1);

    // remove the toast
    act(() => {
      result.current.removeToast(result.current.toasts[0].id);
    });

    // asser the toast was removed
    await waitFor(() => expect(result.current.toasts.length).toBe(0));
    expect(result.current.toasts.length).toBe(0);
  });
});
