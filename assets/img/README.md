# Derived image manifest

Generated from lab originals; sources are not modified. Every raster is EXIF-transposed to RGB and at most 1600 px on the long edge. JPEGs start at quality 82 and step down one point at a time until the file is at or under the size cap of 300,000 bytes (the spec's "about 300 KB"); the quality actually used is in the Notes column. The video poster is the first frame (frame 0) so autoplay does not jump.

| File | Source | Dimensions | Bytes | Notes |
|---|---|---|---|---|
| `img/hero-wafer.jpg` | `/Users/Owner/School/website/science photos/front_end_sensors_cleanroom_fabrication_full_wafer.jpg` | 1600x1200 | 298,124 | top-anchored full-width 4:3 crop (0,0)-(3072,2304), resized; q78 |
| `img/hero-wafer-800.jpg` | `/Users/Owner/School/website/science photos/front_end_sensors_cleanroom_fabrication_full_wafer.jpg` | 800x600 | 112,763 | same crop, 800 px wide; q82 |
| `img/og-image.jpg` | `/Users/Owner/School/website/science photos/front_end_sensors_cleanroom_fabrication_full_wafer.jpg` | 1200x630 | 159,242 | 1200x630 centre crop of the hero; q82 |
| `img/research/giwaxs-poster.jpg` | `/Users/Owner/School/website/science photos/GIWAXS_P3MEEET_HighMw_NaCl.mp4` | 1029x1064 | 60,386 | frame 0 (t=0) decoded with cv2, cropped to the 1029 px display width; q82 |
| `video/giwaxs-p3meeet.mp4` | `/Users/Owner/School/website/science photos/GIWAXS_P3MEEET_HighMw_NaCl.mp4` | 1029x1064 (5 s) | 1,884,203 | byte-identical copy, 5 s |
| `img/research/pink-column.jpg` | `/Users/Owner/School/website/science photos/Pink_column.jpg` | 1200x1600 | 158,887 | EXIF orientation 6, so portrait after transpose; q82 |
| `img/research/shiny-spedot.jpg` | `/Users/Owner/School/website/science photos/Shiny_SPEDOT.jpg` | 1200x1600 | 298,142 | EXIF orientation 6, so portrait after transpose; q77 |
| `img/research/pedot-fiber-histology.jpg` | `/Users/Owner/School/website/science photos/PEDOT fiber in ESKM_Masson_s trichrome staining.tif` | 1600x1200 | 297,132 | full frame; q71 |
| `img/research/organoid-die.jpg` | `/Users/Owner/School/website/organoid sensor/on wafer/full die.png` | 1600x1067 | 161,420 | full frame; q82 |
| `img/research/organoid-assembly.jpg` | `/Users/Owner/School/website/organoid sensor/full assembly/1.png` | 1600x1067 | 225,496 | 3:2 crop (1489,876)-(6745,4380) centred on holder and gloved hand; q82 |
| `img/research/synbioelectronics.png` | `https://images.squarespace-cdn.com/content/v1/5b3fad18af2096f8b7ddb0a4/8ff4e762-cd7b-4250-ae26-82435250630c/synbioelectronics2-01%281%29.png` | 500x500 | 16,582 | old-site graphic (research page), re-saved as PNG unchanged in pixels |
