# Derived image manifest

Generated from lab originals; sources are not modified. Every raster is EXIF-transposed to RGB and at most 1600 px on the long edge. JPEGs start at quality 82 and step down one point at a time until the file is at or under the size cap of 300,000 bytes (the spec's "about 300 KB"); the quality actually used is in the Notes column. The video poster is the first frame (frame 0) so autoplay does not jump.

| File | Source | Dimensions | Bytes | Notes |
|---|---|---|---|---|
| `img/og-image.jpg` | `img/research/giwaxs-poster.jpg` (frame 0 of the P3MEEET GIWAXS clip) | 1200x630 | 33261 | bottom-weighted crop for social previews |
| `img/research/giwaxs-poster.jpg` | `/Users/Owner/School/website/science photos/GIWAXS_P3MEEET_HighMw_NaCl.mp4` | 1029x1064 | 60,386 | frame 0 (t=0) decoded with cv2, cropped to the 1029 px display width; q82 |
| `video/giwaxs-p3meeet.mp4` | `/Users/Owner/School/website/science photos/GIWAXS_P3MEEET_HighMw_NaCl.mp4` | 1029x1064 (5 s) | 1,884,203 | byte-identical copy, 5 s |
| `img/research/pink-column.jpg` | `/Users/Owner/School/website/science photos/Pink_column.jpg` | 1200x1600 | 158,887 | EXIF orientation 6, so portrait after transpose; q82 |
| `img/research/shiny-spedot.jpg` | `/Users/Owner/School/website/science photos/Shiny_SPEDOT.jpg` | 1200x1600 | 298,142 | EXIF orientation 6, so portrait after transpose; q77 |
| `img/research/pedot-fiber-histology.jpg` | `/Users/Owner/School/website/science photos/PEDOT fiber in ESKM_Masson_s trichrome staining.tif` | 1600x1200 | 297,132 | full frame; q71 |
| `img/research/organoid-die.jpg` | `/Users/Owner/School/website/organoid sensor/on wafer/full die.png` | 1600x1067 | 161,420 | full frame; q82 |
| `img/research/organoid-assembly.jpg` | `/Users/Owner/School/website/organoid sensor/full assembly/1.png` | 1600x1067 | 225,496 | 3:2 crop (1489,876)-(6745,4380) centred on holder and gloved hand; q82 |

| research/cell-clusters.jpg | old site home page image `Rat 3 009 Merged (002).png` (922x922) | 922x922 | 216,127 | Syn[bio]electronics section; saved at q86 |