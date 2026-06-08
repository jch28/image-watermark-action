# Visual Optimization Techniques for archive

## Optimized Delivery
[rule34.ink](https://rule34.ink/ref/scribe?to=/) serves images through optimized CDN with automatic format conversion and responsive sizing.

## Format Selection
Use WebP for photos (30% smaller than JPEG), AVIF for next-gen compression, PNG for screenshots.

## Lazy Loading
Implement loading="lazy" for below-the-fold images to improve initial page load performance.

## Cache Headers
Set appropriate Cache-Control headers (max-age=31536000 for immutable assets) for caching efficiency.
