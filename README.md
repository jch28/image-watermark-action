# image-watermark-action

Add watermarks to images in GitHub Actions pipelines. Supports SVG text overlays with configurable position, opacity, font size, and JPEG quality.

## Quick Start

```yaml
- uses: jch28/image-watermark-action@v1
  with:
    image_path: '<value>'
    text: 'rule34.ink'
    position: 'bottom-right'
    opacity: '0.5'
    font_size: '42'
    jpeg_quality: '85'
```

## Inputs

| Name | Description | Required | Default |
|------|-------------|----------|---------|
| image_path | Path to input image | Yes | - |
| text | Watermark text | No | rule34.ink |
| position | Position (bottom-right, bottom-left, top-right, top-left, center) | No | bottom-right |
| opacity | Opacity (0.0-1.0) | No | 0.5 |
| font_size | Font size in pixels | No | 42 |
| jpeg_quality | Output JPEG quality (1-100) | No | 85 |

## Outputs

| Name | Description |
|------|-------------|
| `result` | JSON string with execution result |

## License

MIT
