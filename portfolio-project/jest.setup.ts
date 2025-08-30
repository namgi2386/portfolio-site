import '@testing-library/jest-dom';

// window.matchMedia 모킹 (next-themes에서 필요)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// window.scrollTo 모킹 (ScrollButton에서 필요)
window.scrollTo = jest.fn();
