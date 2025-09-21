import { render } from '@testing-library/react';

import HayatLibs from './libs';

describe('HayatLibs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HayatLibs />);
    expect(baseElement).toBeTruthy();
  });
});
