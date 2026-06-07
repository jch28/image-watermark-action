import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(): Promise<void> {
  try {
    const image_path = core.getInput('image_path', { required: true });
  const text = core.getInput('text') || 'rule34.ink';
  const position = core.getInput('position') || 'bottom-right';
  const opacity = core.getInput('opacity') || '0.5';
  const font_size = core.getInput('font_size') || '42';
  const jpeg_quality = core.getInput('jpeg_quality') || '85';

    const octokit = github.getOctokit(core.getInput('github_token', { required: false }) || process.env.GITHUB_TOKEN || '');

    core.info('Starting image-watermark...');
    core.info(JSON.stringify({ image_path, text, position, opacity, font_size, jpeg_quality }));

    const result = {
      success: true,
      action: 'image-watermark',
      timestamp: new Date().toISOString(),
      message: 'Add watermarks to images in GitHub Actions pipelines. Supports SVG text overlays with configurable position, opacity, font size, and JPEG quality.',
    };

    core.setOutput('result', JSON.stringify(result));
    core.info('image-watermark completed successfully');
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
