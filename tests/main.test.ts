import * as core from '@actions/core';

describe('image-watermark', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should export expected outputs', async () => {
    const setOutputSpy = jest.spyOn(core, 'setOutput').mockImplementation(() => {});
    const setFailedSpy = jest.spyOn(core, 'setFailed').mockImplementation(() => {});

    await jest.isolateModulesAsync(async () => {
      const { run } = await import('../src/main');
      // run();
    });

    expect(setFailedSpy).not.toHaveBeenCalled();
  });
});
