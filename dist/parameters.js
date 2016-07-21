(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['imgixParameters'] = factory();
  }
}(this, function () {

return {
	"parameters": {
		"auto": {
			"display_name": "auto features",
			"category": "automatic",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"enhance",
						"format",
						"redeye",
						"compress"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/auto",
			"short_description": "Applies automatic enhancements to images."
		},
		"ba": {
			"display_name": "blend align",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"top",
						"bottom",
						"middle",
						"left",
						"right",
						"center"
					]
				}
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/ba",
			"short_description": "Changes the blend alignment relative to the parent image."
		},
		"balph": {
			"display_name": "blend alpha",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"strict_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"default": 100,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/balph",
			"short_description": "Changes the alpha of the blend image."
		},
		"bc": {
			"display_name": "blend crop",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"top",
						"bottom",
						"left",
						"right",
						"faces"
					]
				}
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bc",
			"short_description": "Specifies the type of crop for blend images."
		},
		"bf": {
			"display_name": "blend fit",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"clamp",
						"clip",
						"crop",
						"scale",
						"max"
					]
				}
			],
			"default": "clip",
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bf",
			"short_description": "Specifies the fit mode for blend images."
		},
		"bg": {
			"display_name": "background color",
			"category": "background",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "hex_color"
				}
			],
			"default": "fff",
			"url": "https://docs.imgix.com/apis/url/bg",
			"short_description": "Colors the background of padded images."
		},
		"bh": {
			"display_name": "blend height",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"strict_range": {
						"min": 0
					}
				}
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bh",
			"short_description": "Adjusts the height of the blend image."
		},
		"blend": {
			"display_name": "blend",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "url"
				},
				{
					"type": "path"
				}
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend",
			"short_description": "Specifies the location of the blend image."
		},
		"blur": {
			"display_name": "blur",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 2000
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/stylize/blur",
			"short_description": "Applies a gaussian blur to an image."
		},
		"bm": {
			"display_name": "blend mode",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"color",
						"burn",
						"dodge",
						"darken",
						"difference",
						"exclusion",
						"hardlight",
						"hue",
						"lighten",
						"luminosity",
						"multiply",
						"overlay",
						"saturation",
						"screen",
						"softlight",
						"normal"
					]
				}
			],
			"default": "overlay",
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bm",
			"short_description": "Sets the blend mode for a blend image."
		},
		"border": {
			"display_name": "border",
			"category": "border_and_padding",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"0": {
						"type": "integer",
						"suggested_range": {
							"min": 0
						}
					},
					"1": {
						"type": "hex_color"
					},
					"type": "list",
					"length": 2
				}
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border",
			"short_description": "Applies a border to an image."
		},
		"bp": {
			"display_name": "blend padding",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bp",
			"short_description": "Applies padding to the blend image."
		},
		"bri": {
			"display_name": "brightness",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/bri",
			"short_description": "Adjusts the brightness of the source image."
		},
		"bs": {
			"display_name": "blend size",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"inherit"
					]
				}
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bs",
			"short_description": "Adjusts the size of the blend image."
		},
		"bw": {
			"display_name": "blend width",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"strict_range": {
						"min": 0
					}
				}
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bw",
			"short_description": "Adjusts the width of the blend image."
		},
		"bx": {
			"display_name": "blend x",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/bx",
			"short_description": "Adjusts the x-offset of the blend image relative to its parent."
		},
		"by": {
			"display_name": "blend y",
			"category": "blend",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/by",
			"short_description": "Adjusts the y-offset of the blend image relative to its parent."
		},
		"ch": {
			"display_name": "client-hints",
			"category": "format",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"width",
						"dpr"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/format/ch",
			"short_description": "Sets one or more Client-Hints headers"
		},
		"chromasub": {
			"display_name": "chroma subsampling",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"possible_values": [
						444,
						422,
						420
					]
				}
			],
			"default": 420,
			"url": "https://docs.imgix.com/apis/url/format/chromasub",
			"short_description": "Specifies the output chroma subsampling rate."
		},
		"colorquant": {
			"display_name": "color quantization",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 2,
						"max": 256
					}
				}
			],
			"url": "https://docs.imgix.com/apis/url/format/colorquant",
			"short_description": "Limits the number of unique colors in an image."
		},
		"colors": {
			"display_name": "color count",
			"category": "palette",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0,
						"max": 16
					}
				}
			],
			"default": 6,
			"depends": [
				"palette"
			],
			"url": "https://docs.imgix.com/apis/url/color-palette/colors",
			"short_description": "Specifies how many colors to include in a palette-extraction response."
		},
		"con": {
			"display_name": "contrast",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/con",
			"short_description": "Adjusts the contrast of the source image."
		},
		"crop": {
			"display_name": "crop mode",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"top",
						"bottom",
						"left",
						"right",
						"faces",
						"entropy",
						"edges",
						"focalpoint"
					]
				}
			],
			"depends": [
				"fit=crop"
			],
			"url": "https://docs.imgix.com/apis/url/size/crop",
			"short_description": "Specifies how to crop an image."
		},
		"cs": {
			"display_name": "colorspace",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"srgb",
						"adobergb1998",
						"tinysrgb",
						"strip"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/format/cs",
			"short_description": "Specifies the color space of the output image."
		},
		"dl": {
			"display_name": "download",
			"category": "format",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string"
				}
			],
			"url": "https://docs.imgix.com/apis/url/format/dl",
			"short_description": "Forces a URL to use send-file in its response."
		},
		"dpi": {
			"display_name": "dots per inch",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"url": "https://docs.imgix.com/apis/url/format/dpi",
			"short_description": "Sets the DPI value in the EXIF header."
		},
		"dpr": {
			"display_name": "device pixel ratio",
			"category": "pixel_density",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0.75,
						"max": 8
					},
					"strict_range": {
						"min": 0
					}
				}
			],
			"default": 1,
			"url": "https://docs.imgix.com/apis/url/dpr",
			"short_description": "Adjusts the device-pixel ratio of the output image."
		},
		"exp": {
			"display_name": "exposure",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/exp",
			"short_description": "Adjusts the exposure of the output image."
		},
		"faceindex": {
			"display_name": "face index",
			"category": "face_detection",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 1
					}
				}
			],
			"depends": [
				"fit=facearea"
			],
			"url": "https://docs.imgix.com/apis/url/face-detection/faceindex",
			"short_description": "Selects a face to crop to."
		},
		"facepad": {
			"display_name": "face padding",
			"category": "face_detection",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 1,
			"depends": [
				"fit=facearea"
			],
			"url": "https://docs.imgix.com/apis/url/face-detection/facepad",
			"short_description": "Adjusts padding around a selected face."
		},
		"faces": {
			"display_name": "faces",
			"category": "face_detection",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"possible_values": [
						1
					]
				}
			],
			"depends": [
				"fm=json"
			],
			"url": "https://docs.imgix.com/apis/url/face-detection/faces",
			"short_description": "Specifies that face data should be included in output when combined with `fm=json`."
		},
		"fit": {
			"display_name": "fit mode",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"clamp",
						"clip",
						"crop",
						"facearea",
						"fill",
						"max",
						"min",
						"scale"
					]
				}
			],
			"default": "clip",
			"aliases": [
				"f"
			],
			"url": "https://docs.imgix.com/apis/url/size/fit",
			"short_description": "Specifies how to map the source image to the output image dimensions."
		},
		"flip": {
			"display_name": "flip direction",
			"category": "rotation",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"h",
						"v",
						"hv"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/rotation/flip",
			"short_description": "Flips an image on a specified axis."
		},
		"fm": {
			"display_name": "output format",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"gif",
						"jpg",
						"jp2",
						"json",
						"jxr",
						"pjpg",
						"mp4",
						"png",
						"png8",
						"png32",
						"webp"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/format/fm",
			"short_description": "Changes the format of the output image."
		},
		"gam": {
			"display_name": "gamma",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/gam",
			"short_description": "Adjusts the gamma of the source image."
		},
		"h": {
			"display_name": "height",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number"
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0
					}
				}
			],
			"url": "https://docs.imgix.com/apis/url/size/h",
			"short_description": "Adjusts the height of the output image."
		},
		"high": {
			"display_name": "high",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/high",
			"short_description": "Adjusts the highlights of the source image."
		},
		"htn": {
			"display_name": "halftone",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/stylize/htn",
			"short_description": "Applies a half-tone effect to the source image."
		},
		"hue": {
			"display_name": "hue shift",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 360
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/hue",
			"short_description": "Adjusts the hue of the source image."
		},
		"invert": {
			"display_name": "invert",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"true"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/adjustment/invert",
			"short_description": "Inverts the colors on the source image."
		},
		"lossless": {
			"display_name": "lossless",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"possible_values": [
						0,
						1
					]
				},
				{
					"type": "string",
					"possible_values": [
						"false",
						"true"
					]
				}
			],
			"default": "false",
			"depends": [
				"fm=webp",
				"fm=jxr"
			],
			"url": "https://docs.imgix.com/apis/url/format/lossless",
			"short_description": "Specifies that the output image should be a lossless variant."
		},
		"mark": {
			"display_name": "watermark image",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "url"
				},
				{
					"type": "path"
				}
			],
			"aliases": [
				"m"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark",
			"short_description": "Specifies the location of the watermark image."
		},
		"markalign": {
			"display_name": "watermark alignment mode",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"top",
						"middle",
						"bottom",
						"left",
						"center",
						"right"
					]
				}
			],
			"aliases": [
				"ma"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markalign",
			"short_description": "Changes the watermark alignment relative to the parent image."
		},
		"markalpha": {
			"display_name": "watermark alpha",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 1,
						"max": 100
					}
				}
			],
			"default": 100,
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markalpha",
			"short_description": "Changes the alpha of the watermark image."
		},
		"markbase": {
			"display_name": "watermark url base",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "url"
				},
				{
					"type": "path"
				}
			],
			"aliases": [
				"mb"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markbase",
			"short_description": "Changes base URL of the watermark image."
		},
		"markfit": {
			"display_name": "watermark fit mode",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"clip",
						"crop",
						"fill",
						"max",
						"scale"
					]
				}
			],
			"default": "clip",
			"aliases": [
				"mf"
			],
			"depends": [
				"mark",
				"markw",
				"markh"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markfit",
			"short_description": "Specifies the fit mode for watermark images."
		},
		"markh": {
			"display_name": "watermark height",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number"
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0
					}
				}
			],
			"aliases": [
				"mh"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markh",
			"short_description": "Adjusts the height of the watermark image."
		},
		"markpad": {
			"display_name": "watermark padding",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 10,
			"aliases": [
				"mp"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markpad",
			"short_description": "Applies padding to the watermark image."
		},
		"markscale": {
			"display_name": "watermark scale",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"aliases": [
				"ms"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markscale",
			"short_description": "Adjusts the scale of the watermark image."
		},
		"markw": {
			"display_name": "watermark width",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number"
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0
					}
				}
			],
			"aliases": [
				"mw"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markw",
			"short_description": "Adjusts the width of the watermark image."
		},
		"markx": {
			"display_name": "watermark x-position",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"aliases": [
				"mx"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/markx",
			"short_description": "Adjusts the x-offset of the watermark image relative to its parent."
		},
		"marky": {
			"display_name": "watermark y-position",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 0
					}
				}
			],
			"aliases": [
				"my"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/marky",
			"short_description": "Adjusts the y-offset of the watermark image relative to its parent."
		},
		"mask": {
			"display_name": "mask",
			"category": "mask",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"ellipse"
					]
				},
				{
					"type": "url"
				},
				{
					"type": "path"
				}
			],
			"url": "https://docs.imgix.com/apis/url/mask",
			"short_description": "Specifies the location of the mask image."
		},
		"mono": {
			"display_name": "monochrome",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "hex_color"
				}
			],
			"aliases": [
				"monochrome"
			],
			"url": "https://docs.imgix.com/apis/url/stylize/mono",
			"short_description": "Applies a monochrome effect to the source image."
		},
		"nr": {
			"display_name": "noise blur",
			"category": "noise",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 20,
			"url": "https://docs.imgix.com/apis/url/noise-reduction/nr",
			"short_description": "Reduces the noise in an image."
		},
		"nrs": {
			"display_name": "noise sharpen",
			"category": "noise",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 20,
			"url": "https://docs.imgix.com/apis/url/noise-reduction/nrs",
			"short_description": "Provides a threshold by which to sharpen an image."
		},
		"or": {
			"display_name": "orientation",
			"category": "rotation",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"possible_values": [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						90,
						180,
						270
					]
				}
			],
			"aliases": [
				"orient"
			],
			"url": "https://docs.imgix.com/apis/url/rotation/or",
			"short_description": "Changes the image orientation."
		},
		"pad": {
			"display_name": "padding",
			"category": "border_and_padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/border-and-padding/pad",
			"short_description": "Pads an image."
		},
		"page": {
			"display_name": "pdf page number",
			"category": "pdf",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 1
					}
				}
			],
			"default": 1,
			"url": "https://docs.imgix.com/apis/url/pdf-page-number",
			"short_description": "Selects a page from a PDF for display."
		},
		"palette": {
			"display_name": "palette extraction",
			"category": "palette",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"css",
						"json"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/color-palette/palette",
			"short_description": "Specifies an output format for palette-extraction."
		},
		"prefix": {
			"display_name": "css prefix",
			"category": "palette",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string"
				}
			],
			"default": "image",
			"depends": [
				"palette=css"
			],
			"url": "https://docs.imgix.com/apis/url/color-palette/prefix",
			"short_description": "Specifies a CSS prefix for all classes in palette-extraction."
		},
		"px": {
			"display_name": "pixellate",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/stylize/px",
			"short_description": "Applies a pixelation effect to an image."
		},
		"q": {
			"display_name": "output quality",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"default": 75,
			"depends": [
				"fm=jpg",
				"fm=pjpg",
				"fm=webp",
				"fm=jxr"
			],
			"url": "https://docs.imgix.com/apis/url/format/q",
			"short_description": "Adjusts the quality of an output image."
		},
		"rect": {
			"display_name": "crop rectangle",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"0": {
						"type": "number",
						"suggested_range": {
							"min": 0
						}
					},
					"1": {
						"type": "number",
						"suggested_range": {
							"min": 0
						}
					},
					"2": {
						"type": "number",
						"suggested_range": {
							"min": 0
						}
					},
					"3": {
						"type": "number",
						"suggested_range": {
							"min": 0
						}
					},
					"type": "list"
				}
			],
			"url": "https://docs.imgix.com/apis/url/size/rect",
			"short_description": "Crops an image to a specified rectangle."
		},
		"rot": {
			"display_name": "rotation angle",
			"category": "rotation",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 359
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/rotation/rot",
			"short_description": "Rotates an image by a specified number of degrees."
		},
		"sat": {
			"display_name": "saturation",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/sat",
			"short_description": "Adjusts the saturation of an image."
		},
		"sepia": {
			"display_name": "sepia",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/stylize/sepia",
			"short_description": "Applies a sepia effect to an image."
		},
		"shad": {
			"display_name": "shadow",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/shad",
			"short_description": "Adjusts the highlights of the source image."
		},
		"sharp": {
			"display_name": "sharpen",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/sharp",
			"short_description": "Adjusts the sharpness of the source image."
		},
		"trim": {
			"display_name": "trim mode",
			"category": "trim",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"auto",
						"color"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/trim/trim",
			"short_description": "Trims the source image."
		},
		"trimcolor": {
			"display_name": "trim color",
			"category": "trim",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "hex_color"
				}
			],
			"depends": [
				"trim=color"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trimcolor",
			"short_description": "Specifies a trim color on a trim operation."
		},
		"trimmd": {
			"display_name": "trim mean difference",
			"category": "trim",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 11,
			"depends": [
				"trim=auto"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trimmd",
			"short_description": "Specifies the mean difference on a trim operation."
		},
		"trimsd": {
			"display_name": "trim standard deviation",
			"category": "trim",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 10,
			"depends": [
				"trim=auto"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trimsd",
			"short_description": "Specifies the standard deviation on a trim operation."
		},
		"trimtol": {
			"display_name": "trim tolerance",
			"category": "trim",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"depends": [
				"trim=color"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trimtol",
			"short_description": "Specifies the tolerance on a trim operation."
		},
		"txt": {
			"display_name": "text",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string"
				}
			],
			"aliases": [
				"t"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt",
			"short_description": "Sets the text to render."
		},
		"txtalign": {
			"display_name": "text align",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"top",
						"middle",
						"bottom",
						"left",
						"center",
						"right"
					]
				}
			],
			"aliases": [
				"ta"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtalign",
			"short_description": "Sets the alignment of rendered text."
		},
		"txtclip": {
			"display_name": "text clipping",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"start",
						"middle",
						"end",
						"ellipsis"
					]
				}
			],
			"default": "end",
			"aliases": [
				"tcl"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtclip",
			"short_description": "Sets the clipping properties of rendered text."
		},
		"txtclr": {
			"display_name": "text color",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				}
			],
			"aliases": [
				"txtcolor",
				"tc"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtclr",
			"short_description": "Specifies the color of rendered text"
		},
		"txtfit": {
			"display_name": "text fit mode",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"max"
					]
				}
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtfit",
			"short_description": "Specifies the fit approach for rendered text."
		},
		"txtfont": {
			"display_name": "text font",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list"
				}
			],
			"aliases": [
				"tf"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtfont",
			"short_description": "Selects a font for rendered text."
		},
		"txtlead": {
			"display_name": "text leading",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtlead",
			"short_description": "Sets the leading for rendered text. Only works on the multi-line text endpoint."
		},
		"txtlig": {
			"display_name": "text ligatures",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"possible_values": [
						0,
						1,
						2
					]
				}
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtlig",
			"short_description": "Controls the level of ligature substitution"
		},
		"txtline": {
			"display_name": "text outline",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"aliases": [
				"tl"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtline",
			"short_description": "Outlines the rendered text with a specified color."
		},
		"txtlineclr": {
			"display_name": "text outline color",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				}
			],
			"default": "FFF",
			"aliases": [
				"txtlinecolor"
			],
			"depends": [
				"txt",
				"txtline"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtlineclr",
			"short_description": "Specifies a text outline color."
		},
		"txtpad": {
			"display_name": "text padding",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"default": 10,
					"suggested_range": {
						"min": 0
					}
				}
			],
			"aliases": [
				"tp"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtpad",
			"short_description": "Specifies padding for rendered text."
		},
		"txtshad": {
			"display_name": "text shadow",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0,
						"max": 10
					}
				}
			],
			"default": 0,
			"aliases": [
				"tsh"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtshad",
			"short_description": "Applies a shadow to rendered text."
		},
		"txtsize": {
			"display_name": "text font size",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 12,
			"aliases": [
				"tsz"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtsize",
			"short_description": "Sets the size of rendered text."
		},
		"txttrack": {
			"display_name": "text tracking",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -4
					}
				}
			],
			"default": 0,
			"aliases": [
				"tt"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtlead",
			"short_description": "Sets the tracking for rendered text. Only works on the multi-line text endpoint."
		},
		"txtwidth": {
			"display_name": "text width",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txtwidth",
			"short_description": "Sets the width of rendered text."
		},
		"usm": {
			"display_name": "unsharp mask",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/usm",
			"short_description": "Sharpens the source image using an unsharp mask."
		},
		"usmrad": {
			"display_name": "unsharp mask radius",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 2.5,
			"depends": [
				"usm"
			],
			"url": "https://docs.imgix.com/apis/url/adjustment/usmrad",
			"short_description": "Specifies the radius for an unsharp mask operation."
		},
		"vib": {
			"display_name": "vibrance",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/vib",
			"short_description": "Adjusts the vibrance an image."
		},
		"w": {
			"display_name": "width",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number"
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0
					}
				}
			],
			"url": "https://docs.imgix.com/apis/url/size/w",
			"short_description": "Adjusts the width of the output image."
		}
	},
	"deprecatedParameters": {
		"class": {
			"display_name": "css class",
			"category": "palette",
			"available_in": [
				"url",
				"output"
			],
			"expects": [
				{
					"type": "string"
				}
			],
			"depends": [
				"palette=css"
			],
			"deprecated": true,
			"short_description": "Specifies the CSS class to use for palette extraction."
		},
		"skin": {
			"display_name": "skin detection",
			"category": "misc",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"map"
					]
				}
			],
			"experimental": true,
			"deprecated": true
		}
	},
	"experimentalParameters": {
		"fp-debug": {
			"display_name": "focal point crosshairs",
			"category": "focal_point_crop",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"possible_values": [
						0,
						1
					]
				},
				{
					"type": "string",
					"possible_values": [
						"false",
						"true"
					]
				}
			],
			"depends": [
				"fit=crop",
				"crop=focalpoint"
			],
			"experimental": true,
			"url": "https://www.imgix.com/docs/reference/focalpoint-crop#param-fp-debug",
			"short_description": "Displays crosshairs identifying the location of the set focal point"
		},
		"fp-x": {
			"display_name": "focal point x value",
			"category": "focal_point_crop",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "unit_scalar",
					"default": 0.5,
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"depends": [
				"fit=crop",
				"crop=focalpoint"
			],
			"experimental": true,
			"url": "https://www.imgix.com/docs/reference/focalpoint-crop#param-fp-x",
			"short_description": "Sets the relative horizontal value for the focal point of an image"
		},
		"fp-y": {
			"display_name": "focal point y value",
			"category": "focal_point_crop",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "unit_scalar",
					"default": 0.5,
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"depends": [
				"fit=crop",
				"crop=focalpoint"
			],
			"experimental": true,
			"url": "https://www.imgix.com/docs/reference/focalpoint-crop#param-fp-y",
			"short_description": "Sets the relative vertical value for the focal point of an image"
		},
		"fp-z": {
			"display_name": "focal point zoom value",
			"category": "focal_point_crop",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "number",
					"default": 1,
					"suggested_range": {
						"min": 1,
						"max": 10
					},
					"strict_range": {
						"min": 1,
						"max": 100
					}
				}
			],
			"depends": [
				"fit=crop",
				"crop=focalpoint"
			],
			"experimental": true,
			"url": "https://www.imgix.com/docs/reference/focalpoint-crop#param-fp-z",
			"short_description": "Sets the relative zoom value for the focal point of an image"
		},
		"fps": {
			"display_name": "frames per second",
			"category": "animation",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "number"
				}
			],
			"experimental": true,
			"short_description": "Specifies the framerate of the generated image."
		},
		"frame": {
			"display_name": "frame number",
			"category": "animation",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 1
					}
				}
			],
			"experimental": true,
			"short_description": "Specifies the frame of an animated image to use."
		},
		"loop": {
			"display_name": "animation loop count",
			"category": "animation",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					}
				}
			],
			"default": 0,
			"experimental": true,
			"short_description": "Specifies the number of times an animated image should repeat. A value of 0 means infinite looping."
		},
		"reverse": {
			"display_name": "frame number",
			"category": "animation",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"possible_values": [
						0,
						1
					]
				},
				{
					"type": "string",
					"possible_values": [
						"false",
						"true"
					]
				}
			],
			"default": "false",
			"experimental": true,
			"short_description": "Reverses the frame order on the source animation."
		},
		"rott": {
			"display_name": "rotation type",
			"category": "rotation",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"pivot",
						"straighten"
					]
				}
			],
			"experimental": true,
			"short_description": "Changes the rotation type."
		},
		"skin": {
			"display_name": "skin detection",
			"category": "misc",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"map"
					]
				}
			],
			"experimental": true,
			"deprecated": true
		}
	},
	"aliases": {
		"f": "fit",
		"m": "mark",
		"ma": "markalign",
		"mb": "markbase",
		"mf": "markfit",
		"mh": "markh",
		"mp": "markpad",
		"ms": "markscale",
		"mw": "markw",
		"mx": "markx",
		"my": "marky",
		"monochrome": "mono",
		"orient": "or",
		"t": "txt",
		"ta": "txtalign",
		"tcl": "txtclip",
		"txtcolor": "txtclr",
		"tc": "txtclr",
		"tf": "txtfont",
		"tl": "txtline",
		"txtlinecolor": "txtlineclr",
		"tp": "txtpad",
		"tsh": "txtshad",
		"tsz": "txtsize",
		"tt": "txttrack"
	},
	"version": "4.1.0"
};

}));
