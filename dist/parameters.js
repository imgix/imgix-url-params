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
	"version": "11.15.4",
	"parameters": {
		"ar": {
			"display_name": "aspect ratio",
			"category": "size",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "ratio",
					"strict_range": {
						"min": 0
					}
				}
			],
			"depends": [
				"fit=crop"
			],
			"url": "https://docs.imgix.com/apis/url/size/ar",
			"short_description": "Specifies an aspect ratio to maintain when resizing and cropping the image"
		},
		"auto": {
			"display_name": "automatic",
			"category": "auto",
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
						"compress",
						"true"
					]
				}
			],
			"disallow_base64": true,
			"url": "https://docs.imgix.com/apis/url/auto",
			"short_description": "Applies automatic enhancements to images."
		},
		"bg-remove": {
			"display_name": "background removal",
			"category": "background removal",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "boolean"
				}
			],
			"default": false,
			"url": "https://docs.imgix.com/apis/rendering/background-removal/bg-remove",
			"short_description": "Removes background from image."
		},
		"bg-remove-fallback": {
			"display_name": "background removal fallback",
			"category": "background removal",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "boolean"
				}
			],
			"default": true,
			"url": "https://docs.imgix.com/apis/rendering/background-removal/bg-remove",
			"short_description": "Overrides default fallback behavior for bg-remove failures."
		},
		"bg": {
			"display_name": "background color",
			"category": "fill",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"default": "fff",
			"url": "https://docs.imgix.com/apis/url/bg",
			"short_description": "Colors the background of padded and partially-transparent images."
		},
		"blend-align": {
			"display_name": "blend align",
			"category": "blending",
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
			"aliases": [
				"blendalign",
				"ba"
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-align",
			"short_description": "Changes the blend alignment relative to the parent image."
		},
		"blend-alpha": {
			"display_name": "blend alpha",
			"category": "blending",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"aliases": [
				"blendalpha",
				"balph"
			],
			"default": 100,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-alpha",
			"short_description": "Changes the alpha of the blend image."
		},
		"blend-color": {
			"display_name": "blend color",
			"category": "blending",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"aliases": [
				"blendcolor",
				"blend-clr",
				"blendclr"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-color",
			"short_description": "Specifies a color to use when applying the blend."
		},
		"blend-crop": {
			"display_name": "blend crop",
			"category": "blending",
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
			"aliases": [
				"blendcrop",
				"bc"
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-crop",
			"short_description": "Specifies the type of crop for blend images."
		},
		"blend-fit": {
			"display_name": "blend fit",
			"category": "blending",
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
			"aliases": [
				"blendfit",
				"bf"
			],
			"default": "clip",
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-fit",
			"short_description": "Specifies the fit mode for blend images."
		},
		"blend-h": {
			"display_name": "blend height",
			"category": "blending",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 2,
						"max": 8192
					}
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"aliases": [
				"blendh",
				"bh"
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-h",
			"short_description": "Adjusts the height of the blend image."
		},
		"blend-mode": {
			"display_name": "blend mode",
			"category": "blending",
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
			"aliases": [
				"blendmode",
				"bm"
			],
			"default": "overlay",
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-mode",
			"short_description": "Sets the blend mode for a blend image."
		},
		"blend-pad": {
			"display_name": "blend padding",
			"category": "blending",
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
				"blendpad",
				"bp"
			],
			"default": 0,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-pad",
			"short_description": "Applies padding to the blend image."
		},
		"blend-size": {
			"display_name": "blend size",
			"category": "blending",
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
			"aliases": [
				"blendsize",
				"bs"
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-size",
			"short_description": "Adjusts the size of the blend image."
		},
		"blend-w": {
			"display_name": "blend width",
			"category": "blending",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 2,
						"max": 8192
					}
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"aliases": [
				"blendw",
				"bw"
			],
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-w",
			"short_description": "Adjusts the width of the blend image."
		},
		"blend-x": {
			"display_name": "blend x position",
			"category": "blending",
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
				"blendx",
				"bx"
			],
			"default": 0,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-x",
			"short_description": "Adjusts the x-offset of the blend image relative to its parent."
		},
		"blend-y": {
			"display_name": "blend y position",
			"category": "blending",
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
				"blendy",
				"by"
			],
			"default": 0,
			"depends": [
				"blend"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend-y",
			"short_description": "Adjusts the y-offset of the blend image relative to its parent."
		},
		"blend": {
			"display_name": "blend",
			"category": "blending",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				},
				{
					"type": "url"
				},
				{
					"type": "path"
				}
			],
			"aliases": [
				"b"
			],
			"url": "https://docs.imgix.com/apis/url/blending/blend",
			"short_description": "Specifies the location of the blend image."
		},
		"blur": {
			"display_name": "gaussian blur",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
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
		"border-bottom": {
			"display_name": "border bottom",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"depends": [
				"border"
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border-bottom",
			"short_description": "Sets bottom border of an image."
		},
		"border-left": {
			"display_name": "border left",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"depends": [
				"border"
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border-left",
			"short_description": "Sets left border of an image."
		},
		"border-radius-inner": {
			"display_name": "inner border radius",
			"category": "border-and-padding",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 0
					}
				},
				{
					"0": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"1": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"2": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"3": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"type": "list",
					"length": 4
				}
			],
			"depends": [
				"border"
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner",
			"short_description": "Sets the inner radius of the image's border in pixels."
		},
		"border-radius": {
			"display_name": "outer border radius",
			"category": "border-and-padding",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 0
					}
				},
				{
					"0": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"1": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"2": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"3": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"type": "list",
					"length": 4
				}
			],
			"depends": [
				"border"
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border-radius",
			"short_description": "Sets the outer radius of the image's border in pixels."
		},
		"border-right": {
			"display_name": "border right",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"depends": [
				"border"
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border-right",
			"short_description": "Sets right border of an image."
		},
		"border-top": {
			"display_name": "border top",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"depends": [
				"border"
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border-top",
			"short_description": "Sets top border of an image."
		},
		"border": {
			"display_name": "border size & color",
			"category": "border-and-padding",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"0": [
						{
							"type": "integer",
							"suggested_range": {
								"min": 1,
								"max": 100
							}
						}
					],
					"1": [
						{
							"type": "hex_color"
						},
						{
							"type": "color_keyword"
						}
					],
					"type": "list",
					"length": 2
				}
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/border",
			"short_description": "Applies a border to an image."
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
					"type": "integer",
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
		"ch": {
			"display_name": "client hints",
			"category": "format",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
					"possible_values": [
						"width",
						"dpr",
						"save-data"
					]
				}
			],
			"disallow_base64": true,
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
			"display_name": "palette color count",
			"category": "color-palette",
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
					"type": "integer",
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
		"corner-radius": {
			"display_name": "mask corner radius",
			"category": "mask",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 0
					}
				},
				{
					"0": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"1": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"2": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"3": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						}
					],
					"type": "list",
					"length": 4
				}
			],
			"depends": [
				"mask=corners"
			],
			"url": "https://docs.imgix.com/apis/url/mask/corner-radius",
			"short_description": "Specifies the radius value for a rounded corner mask."
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
			"display_name": "color space",
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
					"type": "integer",
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
			"category": "pixel-density",
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
						"max": 5
					},
					"strict_range": {
						"min": 0,
						"max": 5
					}
				}
			],
			"default": 1,
			"url": "https://docs.imgix.com/apis/url/dpr",
			"short_description": "Adjusts the device-pixel ratio of the output image."
		},
		"duotone-alpha": {
			"display_name": "duotone alpha",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"default": 100,
			"depends": [
				"duotone"
			],
			"url": "https://docs.imgix.com/apis/url/stylize/duotone-alpha",
			"short_description": "Changes the alpha of the duotone effect atop the source image."
		},
		"duotone": {
			"display_name": "duotone",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"0": [
						{
							"type": "hex_color"
						},
						{
							"type": "color_keyword"
						}
					],
					"1": [
						{
							"type": "hex_color"
						},
						{
							"type": "color_keyword"
						}
					],
					"type": "list",
					"length": 2
				}
			],
			"url": "https://docs.imgix.com/apis/url/stylize/duotone",
			"short_description": "Applies a duotone effect to the source image."
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
					"type": "integer",
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
		"expires": {
			"display_name": "URL expiration timestamp",
			"category": "expiration",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "timestamp"
				}
			],
			"url": "https://docs.imgix.com/apis/url/expires",
			"short_description": "A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code."
		},
		"faceindex": {
			"display_name": "face index",
			"category": "face-detection",
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
			"category": "face-detection",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "number",
					"suggested_range": {
						"min": 1,
						"max": 10
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
			"display_name": "json face data",
			"category": "face-detection",
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
		"fill-color": {
			"display_name": "fill color",
			"category": "fill",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"aliases": [
				"fillcolor"
			],
			"default": "fff",
			"depends": [
				"fill=solid"
			],
			"url": "https://docs.imgix.com/apis/url/fill/fill-color",
			"short_description": "Sets the fill color for images with additional space created by the fit setting"
		},
		"fill": {
			"display_name": "fill mode",
			"category": "fill",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"solid",
						"blur"
					]
				}
			],
			"depends": [
				"fit"
			],
			"url": "https://docs.imgix.com/apis/url/fill/fill",
			"short_description": "Determines how to fill in additional space created by the fit setting"
		},
		"fit": {
			"display_name": "resize fit mode",
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
						"fillmax",
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
			"display_name": "flip axis",
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
						"webp",
						"webm",
						"blurhash",
						"avif"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/format/fm",
			"short_description": "Changes the format of the output image."
		},
		"fp-debug": {
			"display_name": "focal point debug",
			"category": "focalpoint-crop",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "boolean"
				}
			],
			"default": false,
			"depends": [
				"fit=crop",
				"crop=focalpoint"
			],
			"url": "https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug",
			"short_description": "Displays crosshairs identifying the location of the set focal point"
		},
		"fp-x": {
			"display_name": "focal point x position",
			"category": "focalpoint-crop",
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
			"url": "https://docs.imgix.com/apis/url/focalpoint-crop/fp-x",
			"short_description": "Sets the relative horizontal value for the focal point of an image"
		},
		"fp-y": {
			"display_name": "focal point y position",
			"category": "focalpoint-crop",
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
			"url": "https://docs.imgix.com/apis/url/focalpoint-crop/fp-y",
			"short_description": "Sets the relative vertical value for the focal point of an image"
		},
		"fp-z": {
			"display_name": "focal point zoom",
			"category": "focalpoint-crop",
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
			"url": "https://docs.imgix.com/apis/url/focalpoint-crop/fp-z",
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
					"type": "integer",
					"suggested_range": {
						"min": 1,
						"max": 60
					}
				}
			],
			"short_description": "Specifies the framerate of the generated image."
		},
		"frame": {
			"display_name": "frame selection",
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
				},
				{
					"type": "interval",
					"lower_bound": {
						"type": "integer",
						"suggested_range": {
							"min": 1
						},
						"required": false
					},
					"upper_bound": {
						"type": "integer",
						"suggested_range": {
							"min": 1
						},
						"required": false
					}
				}
			],
			"short_description": "Specifies the frame of an animated image to use."
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
					"type": "integer",
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
		"gif-q": {
			"display_name": "animated gif quality",
			"category": "animation",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 1
					}
				}
			],
			"depends": [
				"fm=gif"
			],
			"aliases": [
				"gifq"
			]
		},
		"grid-colors": {
			"display_name": "grid colors",
			"category": "fill",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"0": [
						{
							"type": "hex_color"
						},
						{
							"type": "color_keyword"
						}
					],
					"1": [
						{
							"type": "hex_color"
						},
						{
							"type": "color_keyword"
						}
					],
					"type": "list",
					"default": "D0D7DD,FFFFFF",
					"length": 2
				}
			],
			"depends": [
				"transparency"
			],
			"short_description": "Sets grid colors for the transparency checkerboard grid."
		},
		"grid-size": {
			"display_name": "grid size",
			"category": "fill",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"default": 4,
					"strict_range": {
						"min": 0
					}
				}
			],
			"depends": [
				"transparency"
			],
			"short_description": "Sets grid size for the transparency checkerboard grid."
		},
		"h": {
			"display_name": "image height",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 2,
						"max": 8192
					}
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"aliases": [
				"height"
			],
			"url": "https://docs.imgix.com/apis/url/size/h",
			"short_description": "Adjusts the height of the output image."
		},
		"high": {
			"display_name": "highlight",
			"category": "adjustment",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": -100,
						"max": 0
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
					"type": "integer",
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
					"type": "integer",
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
		"interval": {
			"display_name": "frame interval",
			"category": "animation",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 1
					}
				}
			],
			"short_description": "Displays every Nth frame starting with the first frame."
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
					"type": "boolean"
				}
			],
			"aliases": [
				"inv"
			],
			"default": false,
			"url": "https://docs.imgix.com/apis/url/adjustment/invert",
			"short_description": "Inverts the colors on the source image."
		},
		"iptc": {
			"display_name": "IPTC Passthrough",
			"category": "format",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"allow",
						"block"
					]
				}
			],
			"short_description": "Determine if IPTC data should be passed for JPEG images."
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
			"short_description": "Specifies the number of times an animated image should repeat. A value of 0 means infinite looping."
		},
		"lossless": {
			"display_name": "lossless compression",
			"category": "format",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "boolean"
				}
			],
			"default": false,
			"depends": [
				"fm=webp",
				"fm=jxr"
			],
			"url": "https://docs.imgix.com/apis/url/format/lossless",
			"short_description": "Specifies that the output image should be a lossless variant."
		},
		"mark-align": {
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
				"ma",
				"markalign"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-align",
			"short_description": "Changes the watermark alignment relative to the parent image."
		},
		"mark-alpha": {
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
			"aliases": [
				"markalpha",
				"malph"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-alpha",
			"short_description": "Changes the alpha of the watermark image."
		},
		"mark-base": {
			"display_name": "watermark base url",
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
				"mb",
				"markbase"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-base",
			"short_description": "Changes base URL of the watermark image."
		},
		"mark-fit": {
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
				"mf",
				"markfit"
			],
			"depends": [
				"mark",
				"markw",
				"markh"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-fit",
			"short_description": "Specifies the fit mode for watermark images."
		},
		"mark-h": {
			"display_name": "watermark height",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 2,
						"max": 8192
					}
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"aliases": [
				"mh",
				"markh"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-h",
			"short_description": "Adjusts the height of the watermark image."
		},
		"mark-pad": {
			"display_name": "watermark padding",
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
			"default": 5,
			"aliases": [
				"mp",
				"markpad"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-pad",
			"short_description": "Applies padding to the watermark image."
		},
		"mark-rot": {
			"display_name": "watermark rotation",
			"category": "watermark",
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
			"url": "https://docs.imgix.com/apis/url/watermark/mark-rot",
			"short_description": "Rotates a watermark or tiled watermarks by a specified number of degrees."
		},
		"mark-scale": {
			"display_name": "watermark scale",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0,
						"max": 100
					}
				}
			],
			"aliases": [
				"ms",
				"markscale"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-scale",
			"short_description": "Adjusts the scale of the watermark image."
		},
		"mark-tile": {
			"display_name": "watermark tile",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"grid"
					]
				}
			],
			"aliases": [
				"mtile",
				"marktile"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-tile",
			"short_description": "Adds tiled watermark."
		},
		"mark-w": {
			"display_name": "watermark width",
			"category": "watermark",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 2,
						"max": 8192
					}
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"aliases": [
				"mw",
				"markw"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-w",
			"short_description": "Adjusts the width of the watermark image."
		},
		"mark-x": {
			"display_name": "watermark x position",
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
				"mx",
				"markx"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-x",
			"short_description": "Adjusts the x-offset of the watermark image relative to its parent."
		},
		"mark-y": {
			"display_name": "watermark y position",
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
				"my",
				"marky"
			],
			"depends": [
				"mark"
			],
			"url": "https://docs.imgix.com/apis/url/watermark/mark-y",
			"short_description": "Adjusts the y-offset of the watermark image relative to its parent."
		},
		"mark": {
			"display_name": "watermark image url",
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
		"mask-bg": {
			"display_name": "mask background color",
			"category": "mask",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"default": "fff",
			"aliases": [
				"maskbg"
			],
			"depends": [
				"mask"
			],
			"url": "https://docs.imgix.com/apis/url/mask/mask-bg",
			"short_description": "Colors the background of the transparent mask area of images"
		},
		"mask": {
			"display_name": "mask type",
			"category": "mask",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"ellipse",
						"corners"
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
			"short_description": "Defines the type of mask and specifies the URL if that type is selected."
		},
		"max-h": {
			"display_name": "maximum height",
			"category": "size",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 1,
						"max": 8192
					}
				}
			],
			"aliases": [
				"max-height"
			],
			"depends": [
				"fit=crop"
			],
			"url": "https://docs.imgix.com/apis/url/size/max-height",
			"short_description": "Specifies the maximum height of the output image in pixels."
		},
		"max-w": {
			"display_name": "maximum width",
			"category": "size",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 1,
						"max": 8192
					}
				}
			],
			"aliases": [
				"max-width"
			],
			"depends": [
				"fit=crop"
			],
			"url": "https://docs.imgix.com/apis/url/size/max-width",
			"short_description": "Specifies the maximum width of the output image in pixels."
		},
		"min-h": {
			"display_name": "minimum height",
			"category": "size",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 1,
						"max": 8192
					}
				}
			],
			"aliases": [
				"min-height"
			],
			"depends": [
				"fit=crop"
			],
			"url": "https://docs.imgix.com/apis/url/size/min-height",
			"short_description": "Specifies the minimum height of the output image in pixels."
		},
		"min-w": {
			"display_name": "minimum width",
			"category": "size",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 1,
						"max": 8192
					}
				}
			],
			"aliases": [
				"min-width"
			],
			"depends": [
				"fit=crop"
			],
			"url": "https://docs.imgix.com/apis/url/size/min-width",
			"short_description": "Specifies the minimum width of the output image in pixels."
		},
		"monochrome": {
			"display_name": "monochrome",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"aliases": [
				"mono"
			],
			"url": "https://docs.imgix.com/apis/url/stylize/monochrome",
			"short_description": "Applies a monochrome effect to the source image."
		},
		"nr": {
			"display_name": "noise reduction bound",
			"category": "noise-reduction",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
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
			"display_name": "noise reduction sharpen",
			"category": "noise-reduction",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
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
		"orient": {
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
				"or"
			],
			"url": "https://docs.imgix.com/apis/url/rotation/orient",
			"short_description": "Changes the image orientation."
		},
		"pad-bottom": {
			"display_name": "padding bottom",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					},
					"default": 0
				}
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/pad-bottom",
			"short_description": "Sets bottom padding of an image."
		},
		"pad-left": {
			"display_name": "padding left",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					},
					"default": 0
				}
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/pad-left",
			"short_description": "Sets left padding of an image."
		},
		"pad-right": {
			"display_name": "padding right",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					},
					"default": 0
				}
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/pad-right",
			"short_description": "Sets right padding of an image."
		},
		"pad-top": {
			"display_name": "padding top",
			"category": "border-and-padding",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": 0
					},
					"default": 0
				}
			],
			"url": "https://docs.imgix.com/apis/url/border-and-padding/pad-top",
			"short_description": "Sets top padding of an image."
		},
		"pad": {
			"display_name": "padding",
			"category": "border-and-padding",
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
			"url": "https://docs.imgix.com/apis/url/pdf/page",
			"short_description": "Selects a page from a PDF for display."
		},
		"palette": {
			"display_name": "color palette extraction",
			"category": "color-palette",
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
		"pdf-annotation": {
			"display_name": "pdf annotation",
			"category": "pdf",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "boolean"
				}
			],
			"default": true,
			"aliases": [
				"annotation"
			],
			"url": "https://docs.imgix.com/apis/url/pdf/pdf-annotation",
			"short_description": "Enables or disables PDF annotation."
		},
		"prefix": {
			"display_name": "css prefix",
			"category": "color-palette",
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
					"type": "integer",
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
					"type": "integer",
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
			"display_name": "source rectangle region",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"0": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						},
						{
							"type": "string",
							"possible_values": [
								"left",
								"center",
								"right"
							]
						},
						{
							"type": "unit_scalar",
							"strict_range": {
								"min": 0,
								"max": 1
							}
						}
					],
					"1": [
						{
							"type": "integer",
							"strict_range": {
								"min": 0
							}
						},
						{
							"type": "string",
							"possible_values": [
								"top",
								"middle",
								"bottom"
							]
						},
						{
							"type": "unit_scalar",
							"strict_range": {
								"min": 0,
								"max": 1
							}
						}
					],
					"2": [
						{
							"type": "integer",
							"strict_range": {
								"min": 1
							}
						}
					],
					"3": [
						{
							"type": "integer",
							"strict_range": {
								"min": 1
							}
						}
					],
					"type": "list",
					"length": 4
				}
			],
			"url": "https://docs.imgix.com/apis/url/size/rect",
			"short_description": "Crops an image to a specified rectangle."
		},
		"reverse": {
			"display_name": "reverse",
			"category": "animation",
			"available_in": [
				"url",
				"graph",
				"output"
			],
			"expects": [
				{
					"type": "boolean"
				}
			],
			"default": false,
			"short_description": "Reverses the frame order on the source animation."
		},
		"rot": {
			"display_name": "rotation",
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
					"type": "integer",
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
			"display_name": "sepia tone",
			"category": "stylize",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
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
						"min": 0,
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
		"skip": {
			"display_name": "frame skip",
			"category": "animation",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 1
					}
				}
			],
			"short_description": "Skips every Nth frame starting with the first frame."
		},
		"transparency": {
			"display_name": "transparency",
			"category": "fill",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "string",
					"possible_values": [
						"grid"
					]
				}
			],
			"url": "https://docs.imgix.com/apis/url/fill/transparency",
			"short_description": "Adds checkerboard behind images which support transparency."
		},
		"trim-color": {
			"display_name": "trim color",
			"category": "trim",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"aliases": [
				"trimcolor"
			],
			"depends": [
				"trim=color"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trim-color",
			"short_description": "Specifies a trim color on a trim operation."
		},
		"trim-md": {
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
			"aliases": [
				"trimmd"
			],
			"default": 11,
			"depends": [
				"trim=auto"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trim-md",
			"short_description": "Specifies the mean difference on a trim operation."
		},
		"trim-pad": {
			"display_name": "trim padding",
			"category": "trim",
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
			"aliases": [
				"trimpad"
			],
			"depends": [
				"trim"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trim-pad",
			"short_description": "Pads the area of the source image before trimming."
		},
		"trim-sd": {
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
			"aliases": [
				"trimsd"
			],
			"default": 10,
			"depends": [
				"trim=auto"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trim-sd",
			"short_description": "Specifies the standard deviation on a trim operation."
		},
		"trim-tol": {
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
			"aliases": [
				"trimtol"
			],
			"default": 0,
			"depends": [
				"trim=color"
			],
			"url": "https://docs.imgix.com/apis/url/trim/trim-tol",
			"short_description": "Specifies the tolerance on a trim operation."
		},
		"trim": {
			"display_name": "trim image",
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
		"txt-align": {
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
				"txtalign",
				"ta"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-align",
			"short_description": "Sets the vertical and horizontal alignment of rendered text relative to the base image."
		},
		"txt-clip": {
			"display_name": "text clipping mode",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "list",
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
				"txtclip",
				"tcl"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-clip",
			"short_description": "Sets the clipping properties of rendered text."
		},
		"txt-color": {
			"display_name": "text color",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"aliases": [
				"txtcolor",
				"txt-clr",
				"txtclr",
				"tc"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-color",
			"short_description": "Specifies the color of rendered text."
		},
		"txt-fit": {
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
			"aliases": [
				"txtfit"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-fit",
			"short_description": "Specifies the fit approach for rendered text."
		},
		"txt-font": {
			"display_name": "text font",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "font"
				}
			],
			"aliases": [
				"tf",
				"txtfont"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-font",
			"short_description": "Selects a font for rendered text."
		},
		"txt-lead": {
			"display_name": "text leading",
			"category": "typesetting",
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
				"txtlead"
			],
			"default": 0,
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/typesetting/txt-lead",
			"short_description": "Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint."
		},
		"txt-lig": {
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
			"aliases": [
				"txtlig"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-lig",
			"short_description": "Controls the level of ligature substitution"
		},
		"txt-line-color": {
			"display_name": "text outline color",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "hex_color"
				},
				{
					"type": "color_keyword"
				}
			],
			"default": "fff",
			"aliases": [
				"txtlinecolor",
				"txt-line-clr",
				"txtlineclr"
			],
			"depends": [
				"txt",
				"txtline"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-line-color",
			"short_description": "Specifies a text outline color."
		},
		"txt-line": {
			"display_name": "text outline",
			"category": "text",
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
			"aliases": [
				"txtline",
				"tl"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-line",
			"short_description": "Outlines the rendered text with a specified color."
		},
		"txt-pad": {
			"display_name": "text padding",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"default": 10,
					"suggested_range": {
						"min": 0
					}
				}
			],
			"aliases": [
				"txtpad",
				"tp"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-pad",
			"short_description": "Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image."
		},
		"txt-shad": {
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
				"txtshad",
				"tsh"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-shad",
			"short_description": "Applies a shadow to rendered text."
		},
		"txt-size": {
			"display_name": "text font size",
			"category": "text",
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
			"default": 12,
			"aliases": [
				"tsz",
				"txtsize"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-size",
			"short_description": "Sets the font size of rendered text."
		},
		"txt-track": {
			"display_name": "text tracking",
			"category": "typesetting",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer",
					"suggested_range": {
						"min": -4
					}
				}
			],
			"default": 0,
			"aliases": [
				"txttrack",
				"tt"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/typesetting/txt-track",
			"short_description": "Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint."
		},
		"txt-width": {
			"display_name": "text width",
			"category": "text",
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
				"txtwidth"
			],
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-width",
			"short_description": "Sets the width of rendered text."
		},
		"txt-x": {
			"display_name": "text x position",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer"
				}
			],
			"aliases": [
				"txtx"
			],
			"default": 0,
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-x",
			"short_description": "Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image."
		},
		"txt-y": {
			"display_name": "text y position",
			"category": "text",
			"available_in": [
				"url"
			],
			"expects": [
				{
					"type": "integer"
				}
			],
			"aliases": [
				"txty"
			],
			"default": 0,
			"depends": [
				"txt"
			],
			"url": "https://docs.imgix.com/apis/url/text/txt-y",
			"short_description": "Sets the vertical (y) position of the text in pixels relative to the top edge of the base image."
		},
		"txt": {
			"display_name": "text string",
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
			"short_description": "Sets the text string to render."
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
					"type": "integer",
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
					"type": "integer",
					"suggested_range": {
						"min": -100,
						"max": 100
					}
				}
			],
			"default": 0,
			"url": "https://docs.imgix.com/apis/url/adjustment/vib",
			"short_description": "Adjusts the vibrance of an image."
		},
		"w": {
			"display_name": "image width",
			"category": "size",
			"available_in": [
				"url",
				"graph"
			],
			"expects": [
				{
					"type": "integer",
					"strict_range": {
						"min": 2,
						"max": 8192
					}
				},
				{
					"type": "unit_scalar",
					"strict_range": {
						"min": 0,
						"max": 1
					}
				}
			],
			"aliases": [
				"width"
			],
			"url": "https://docs.imgix.com/apis/url/size/w",
			"short_description": "Adjusts the width of the output image."
		}
	},
	"aliases": {
		"blendalign": "blend-align",
		"ba": "blend-align",
		"blendalpha": "blend-alpha",
		"balph": "blend-alpha",
		"blendcolor": "blend-color",
		"blend-clr": "blend-color",
		"blendclr": "blend-color",
		"blendcrop": "blend-crop",
		"bc": "blend-crop",
		"blendfit": "blend-fit",
		"bf": "blend-fit",
		"blendh": "blend-h",
		"bh": "blend-h",
		"blendmode": "blend-mode",
		"bm": "blend-mode",
		"blendpad": "blend-pad",
		"bp": "blend-pad",
		"blendsize": "blend-size",
		"bs": "blend-size",
		"blendw": "blend-w",
		"bw": "blend-w",
		"blendx": "blend-x",
		"bx": "blend-x",
		"blendy": "blend-y",
		"by": "blend-y",
		"b": "blend",
		"fillcolor": "fill-color",
		"f": "fit",
		"gifq": "gif-q",
		"height": "h",
		"inv": "invert",
		"ma": "mark-align",
		"markalign": "mark-align",
		"markalpha": "mark-alpha",
		"malph": "mark-alpha",
		"mb": "mark-base",
		"markbase": "mark-base",
		"mf": "mark-fit",
		"markfit": "mark-fit",
		"mh": "mark-h",
		"markh": "mark-h",
		"mp": "mark-pad",
		"markpad": "mark-pad",
		"ms": "mark-scale",
		"markscale": "mark-scale",
		"mtile": "mark-tile",
		"marktile": "mark-tile",
		"mw": "mark-w",
		"markw": "mark-w",
		"mx": "mark-x",
		"markx": "mark-x",
		"my": "mark-y",
		"marky": "mark-y",
		"m": "mark",
		"maskbg": "mask-bg",
		"max-height": "max-h",
		"max-width": "max-w",
		"min-height": "min-h",
		"min-width": "min-w",
		"mono": "monochrome",
		"or": "orient",
		"annotation": "pdf-annotation",
		"trimcolor": "trim-color",
		"trimmd": "trim-md",
		"trimpad": "trim-pad",
		"trimsd": "trim-sd",
		"trimtol": "trim-tol",
		"txtalign": "txt-align",
		"ta": "txt-align",
		"txtclip": "txt-clip",
		"tcl": "txt-clip",
		"txtcolor": "txt-color",
		"txt-clr": "txt-color",
		"txtclr": "txt-color",
		"tc": "txt-color",
		"txtfit": "txt-fit",
		"tf": "txt-font",
		"txtfont": "txt-font",
		"txtlead": "txt-lead",
		"txtlig": "txt-lig",
		"txtlinecolor": "txt-line-color",
		"txt-line-clr": "txt-line-color",
		"txtlineclr": "txt-line-color",
		"txtline": "txt-line",
		"tl": "txt-line",
		"txtpad": "txt-pad",
		"tp": "txt-pad",
		"txtshad": "txt-shad",
		"tsh": "txt-shad",
		"tsz": "txt-size",
		"txtsize": "txt-size",
		"txttrack": "txt-track",
		"tt": "txt-track",
		"txtwidth": "txt-width",
		"txtx": "txt-x",
		"txty": "txt-y",
		"t": "txt",
		"width": "w"
	},
	"categoryValues": [
		"adjustment",
		"animation",
		"auto",
		"blending",
		"border-and-padding",
		"color-palette",
		"expiration",
		"face-detection",
		"fill",
		"focalpoint-crop",
		"format",
		"mask",
		"misc",
		"noise-reduction",
		"pdf",
		"pixel-density",
		"rotation",
		"size",
		"stylize",
		"text",
		"typesetting",
		"trim",
		"watermark"
	],
	"colorKeywordValues": [
		"aliceblue",
		"antiquewhite",
		"aqua",
		"aquamarine",
		"azure",
		"beige",
		"bisque",
		"black",
		"blanchedalmond",
		"blue",
		"blueviolet",
		"brown",
		"burlywood",
		"cadetblue",
		"chartreuse",
		"chocolate",
		"coral",
		"cornflowerblue",
		"cornsilk",
		"crimson",
		"cyan",
		"darkblue",
		"darkcyan",
		"darkgoldenrod",
		"darkgray",
		"darkgreen",
		"darkgrey",
		"darkkhaki",
		"darkmagenta",
		"darkolivegreen",
		"darkorange",
		"darkorchid",
		"darkred",
		"darksalmon",
		"darkseagreen",
		"darkslateblue",
		"darkslategray",
		"darkslategrey",
		"darkturquoise",
		"darkviolet",
		"deeppink",
		"deepskyblue",
		"dimgray",
		"dimgrey",
		"dodgerblue",
		"firebrick",
		"floralwhite",
		"forestgreen",
		"fuchsia",
		"gainsboro",
		"ghostwhite",
		"gold",
		"goldenrod",
		"gray",
		"green",
		"greenyellow",
		"grey",
		"honeydew",
		"hotpink",
		"imgixorange",
		"imgixblue",
		"indianred",
		"indigo",
		"ivory",
		"khaki",
		"lavender",
		"lavenderblush",
		"lawngreen",
		"lemonchiffon",
		"lightblue",
		"lightcoral",
		"lightcyan",
		"lightgoldenrodyellow",
		"lightgray",
		"lightgreen",
		"lightgrey",
		"lightpink",
		"lightsalmon",
		"lightseagreen",
		"lightskyblue",
		"lightslategray",
		"lightslategrey",
		"lightsteelblue",
		"lightyellow",
		"lime",
		"limegreen",
		"linen",
		"magenta",
		"maroon",
		"mediumaquamarine",
		"mediumblue",
		"mediumorchid",
		"mediumpurple",
		"mediumseagreen",
		"mediumslateblue",
		"mediumspringgreen",
		"mediumturquoise",
		"mediumvioletred",
		"midnightblue",
		"mintcream",
		"mistyrose",
		"moccasin",
		"navajowhite",
		"navy",
		"oldlace",
		"olive",
		"olivedrab",
		"orange",
		"orangered",
		"orchid",
		"palegoldenrod",
		"palegreen",
		"paleturquoise",
		"palevioletred",
		"papayawhip",
		"peachpuff",
		"peru",
		"pink",
		"plum",
		"powderblue",
		"purple",
		"rebeccapurple",
		"red",
		"rosybrown",
		"royalblue",
		"saddlebrown",
		"salmon",
		"sandybrown",
		"seagreen",
		"seashell",
		"sienna",
		"silver",
		"skyblue",
		"slateblue",
		"slategray",
		"slategrey",
		"snow",
		"springgreen",
		"steelblue",
		"tan",
		"teal",
		"thistle",
		"tomato",
		"turquoise",
		"violet",
		"wheat",
		"white",
		"whitesmoke",
		"yellow",
		"yellowgreen"
	],
	"fontValues": [
		"AlBayan",
		"AlBayan-Bold",
		"AlNile",
		"AlNile-Bold",
		"AlTarikh",
		"AmericanTypewriter",
		"AmericanTypewriter-Bold",
		"AmericanTypewriter-Condensed",
		"AmericanTypewriter-CondensedBold",
		"AmericanTypewriter-CondensedLight",
		"AmericanTypewriter-Light",
		"AmericanTypewriter-Semibold",
		"AndaleMono",
		"Apple-Chancery",
		"AppleBraille",
		"AppleBraille-Outline6Dot",
		"AppleBraille-Outline8Dot",
		"AppleBraille-Pinpoint6Dot",
		"AppleBraille-Pinpoint8Dot",
		"AppleColorEmoji",
		"AppleGothic",
		"AppleMyungjo",
		"AppleSDGothicNeo-Bold",
		"AppleSDGothicNeo-ExtraBold",
		"AppleSDGothicNeo-Heavy",
		"AppleSDGothicNeo-Light",
		"AppleSDGothicNeo-Medium",
		"AppleSDGothicNeo-Regular",
		"AppleSDGothicNeo-SemiBold",
		"AppleSDGothicNeo-Thin",
		"AppleSDGothicNeo-UltraLight",
		"AppleSymbols",
		"AquaKana",
		"AquaKana-Bold",
		"Arial-Black",
		"Arial-BoldItalicMT",
		"Arial-BoldMT",
		"Arial-ItalicMT",
		"ArialHebrew",
		"ArialHebrew-Bold",
		"ArialHebrew-Light",
		"ArialHebrewScholar",
		"ArialHebrewScholar-Bold",
		"ArialHebrewScholar-Light",
		"ArialMT",
		"ArialNarrow",
		"ArialNarrow-Bold",
		"ArialNarrow-BoldItalic",
		"ArialNarrow-Italic",
		"ArialRoundedMTBold",
		"ArialUnicodeMS",
		"Athelas-Bold",
		"Athelas-BoldItalic",
		"Athelas-Italic",
		"Athelas-Regular",
		"Avenir-Black",
		"Avenir-BlackOblique",
		"Avenir-Book",
		"Avenir-BookOblique",
		"Avenir-Heavy",
		"Avenir-HeavyOblique",
		"Avenir-Light",
		"Avenir-LightOblique",
		"Avenir-Medium",
		"Avenir-MediumOblique",
		"Avenir-Oblique",
		"Avenir-Roman",
		"AvenirNext-Bold",
		"AvenirNext-BoldItalic",
		"AvenirNext-DemiBold",
		"AvenirNext-DemiBoldItalic",
		"AvenirNext-Heavy",
		"AvenirNext-HeavyItalic",
		"AvenirNext-Italic",
		"AvenirNext-Medium",
		"AvenirNext-MediumItalic",
		"AvenirNext-Regular",
		"AvenirNext-UltraLight",
		"AvenirNext-UltraLightItalic",
		"AvenirNextCondensed-Bold",
		"AvenirNextCondensed-BoldItalic",
		"AvenirNextCondensed-DemiBold",
		"AvenirNextCondensed-DemiBoldItalic",
		"AvenirNextCondensed-Heavy",
		"AvenirNextCondensed-HeavyItalic",
		"AvenirNextCondensed-Italic",
		"AvenirNextCondensed-Medium",
		"AvenirNextCondensed-MediumItalic",
		"AvenirNextCondensed-Regular",
		"AvenirNextCondensed-UltraLight",
		"AvenirNextCondensed-UltraLightItalic",
		"Ayuthaya",
		"BIZUDGothic-Bold",
		"BIZUDGothic-Regular",
		"BIZUDMincho-Regular",
		"BIZUDPGothic-Bold",
		"BIZUDPGothic-Regular",
		"BIZUDPMincho-Regular",
		"Baghdad",
		"BanglaMN",
		"BanglaMN-Bold",
		"BanglaSangamMN",
		"BanglaSangamMN-Bold",
		"Baskerville",
		"Baskerville-Bold",
		"Baskerville-BoldItalic",
		"Baskerville-Italic",
		"Baskerville-SemiBold",
		"Baskerville-SemiBoldItalic",
		"Beirut",
		"BigCaslon-Medium",
		"BodoniOrnamentsITCTT",
		"BodoniSvtyTwoITCTT-Bold",
		"BodoniSvtyTwoITCTT-Book",
		"BodoniSvtyTwoITCTT-BookIta",
		"BodoniSvtyTwoOSITCTT-Bold",
		"BodoniSvtyTwoOSITCTT-Book",
		"BodoniSvtyTwoOSITCTT-BookIt",
		"BodoniSvtyTwoSCITCTT-Book",
		"BradleyHandITCTT-Bold",
		"BrushScriptMT",
		"C059-BdIta",
		"C059-Bold",
		"C059-Italic",
		"C059-Roman",
		"CenturySchL-Bold",
		"CenturySchL-BoldItal",
		"CenturySchL-Ital",
		"CenturySchL-Roma",
		"Chalkboard",
		"Chalkboard-Bold",
		"ChalkboardSE-Bold",
		"ChalkboardSE-Light",
		"ChalkboardSE-Regular",
		"Chalkduster",
		"Charter-Black",
		"Charter-BlackItalic",
		"Charter-Bold",
		"Charter-BoldItalic",
		"Charter-Italic",
		"Charter-Roman",
		"Cochin",
		"Cochin-Bold",
		"Cochin-BoldItalic",
		"Cochin-Italic",
		"ComicSansMS",
		"ComicSansMS-Bold",
		"Copperplate",
		"Copperplate-Bold",
		"Copperplate-Light",
		"CorsivaHebrew",
		"CorsivaHebrew-Bold",
		"Courier",
		"Courier-Bold",
		"Courier-BoldOblique",
		"Courier-Oblique",
		"CourierNewPS-BoldItalicMT",
		"CourierNewPS-BoldMT",
		"CourierNewPS-ItalicMT",
		"CourierNewPSMT",
		"D050000L",
		"DFWaWaSC-W5",
		"DFWaWaTC-W5",
		"DINAlternate-Bold",
		"DINCondensed-Bold",
		"Damascus",
		"DamascusBold",
		"DamascusLight",
		"DamascusMedium",
		"DamascusSemiBold",
		"DecoTypeNaskh",
		"DejaVuSans",
		"DejaVuSans-Bold",
		"DejaVuSansMono",
		"DejaVuSansMono-Bold",
		"DejaVuSerif",
		"DejaVuSerif-Bold",
		"DelaGothicOne-Regular",
		"DevanagariMT",
		"DevanagariMT-Bold",
		"DevanagariSangamMN",
		"DevanagariSangamMN-Bold",
		"Didot",
		"Didot-Bold",
		"Didot-Italic",
		"Dingbats",
		"DiwanKufi",
		"DiwanMishafi",
		"DiwanMishafiGold",
		"DiwanThuluth",
		"DotGothic16-Regular",
		"DroidSansFallback",
		"EuphemiaUCAS",
		"EuphemiaUCAS-Bold",
		"EuphemiaUCAS-Italic",
		"FZLTTHB--B51-0",
		"FZLTTHK--GBK1-0",
		"FZLTXHB--B51-0",
		"FZLTXHK--GBK1-0",
		"FZLTZHB--B51-0",
		"FZLTZHK--GBK1-0",
		"Farah",
		"Farisi",
		"FreeMono",
		"FreeMonoBold",
		"FreeMonoBoldOblique",
		"FreeMonoOblique",
		"FreeSans",
		"FreeSansBold",
		"FreeSansBoldOblique",
		"FreeSansOblique",
		"FreeSerif",
		"FreeSerifBold",
		"FreeSerifBoldItalic",
		"FreeSerifItalic",
		"Futura-Bold",
		"Futura-CondensedExtraBold",
		"Futura-CondensedMedium",
		"Futura-Medium",
		"Futura-MediumItalic",
		"Galvji",
		"Galvji-Bold",
		"Galvji-BoldOblique",
		"Galvji-Oblique",
		"GeezaPro",
		"GeezaPro-Bold",
		"Geneva",
		"Georgia",
		"Georgia-Bold",
		"Georgia-BoldItalic",
		"Georgia-Italic",
		"GillSans",
		"GillSans-Bold",
		"GillSans-BoldItalic",
		"GillSans-Italic",
		"GillSans-Light",
		"GillSans-LightItalic",
		"GillSans-SemiBold",
		"GillSans-SemiBoldItalic",
		"GillSans-UltraBold",
		"GujaratiMT",
		"GujaratiMT-Bold",
		"GujaratiSangamMN",
		"GujaratiSangamMN-Bold",
		"GurmukhiMN",
		"GurmukhiMN-Bold",
		"GurmukhiSangamMN",
		"GurmukhiSangamMN-Bold",
		"HachiMaruPop-Regular",
		"HannotateSC-W5",
		"HannotateSC-W7",
		"HannotateTC-W5",
		"HannotateTC-W7",
		"HanziPenSC-W3",
		"HanziPenSC-W5",
		"HanziPenTC-W3",
		"HanziPenTC-W5",
		"Helvetica",
		"Helvetica-Bold",
		"Helvetica-BoldOblique",
		"Helvetica-Light",
		"Helvetica-LightOblique",
		"Helvetica-Oblique",
		"HelveticaNeue",
		"HelveticaNeue-Bold",
		"HelveticaNeue-BoldItalic",
		"HelveticaNeue-CondensedBlack",
		"HelveticaNeue-CondensedBold",
		"HelveticaNeue-Italic",
		"HelveticaNeue-Light",
		"HelveticaNeue-LightItalic",
		"HelveticaNeue-Medium",
		"HelveticaNeue-MediumItalic",
		"HelveticaNeue-Thin",
		"HelveticaNeue-ThinItalic",
		"HelveticaNeue-UltraLight",
		"HelveticaNeue-UltraLightItalic",
		"Herculanum",
		"HinaMincho-Regular",
		"HiraKakuPro-W3",
		"HiraKakuPro-W6",
		"HiraKakuProN-W3",
		"HiraKakuProN-W6",
		"HiraKakuStd-W8",
		"HiraKakuStdN-W8",
		"HiraMaruPro-W4",
		"HiraMaruProN-W4",
		"HiraMinPro-W3",
		"HiraMinPro-W6",
		"HiraMinProN-W3",
		"HiraMinProN-W6",
		"HiraginoSans-W0",
		"HiraginoSans-W1",
		"HiraginoSans-W2",
		"HiraginoSans-W3",
		"HiraginoSans-W4",
		"HiraginoSans-W5",
		"HiraginoSans-W6",
		"HiraginoSans-W7",
		"HiraginoSans-W8",
		"HiraginoSans-W9",
		"HiraginoSansGB-W3",
		"HiraginoSansGB-W6",
		"HoeflerText-Black",
		"HoeflerText-BlackItalic",
		"HoeflerText-Italic",
		"HoeflerText-Ornaments",
		"HoeflerText-Regular",
		"IBMPlexSansJP-Bold",
		"IBMPlexSansJP-ExtraLight",
		"IBMPlexSansJP-Light",
		"IBMPlexSansJP-Medium",
		"IBMPlexSansJP-Regular",
		"IBMPlexSansJP-SemiBold",
		"IBMPlexSansJP-Thin",
		"ITFDevanagari-Bold",
		"ITFDevanagari-Book",
		"ITFDevanagari-Demi",
		"ITFDevanagari-Light",
		"ITFDevanagari-Medium",
		"ITFDevanagariMarathi-Bold",
		"ITFDevanagariMarathi-Book",
		"ITFDevanagariMarathi-Demi",
		"ITFDevanagariMarathi-Light",
		"ITFDevanagariMarathi-Medium",
		"Impact",
		"InaiMathi",
		"InaiMathi-Bold",
		"IowanOldStyle-Black",
		"IowanOldStyle-BlackItalic",
		"IowanOldStyle-Bold",
		"IowanOldStyle-BoldItalic",
		"IowanOldStyle-Italic",
		"IowanOldStyle-Roman",
		"IowanOldStyle-Titling",
		"JCHEadA",
		"JCfg",
		"JCkg",
		"JCsmPC",
		"Kailasa",
		"Kailasa-Bold",
		"KaiseiDecol-Bold",
		"KaiseiDecol-Medium",
		"KaiseiDecol-Regular",
		"KaiseiHarunoUmi-Bold",
		"KaiseiHarunoUmi-Medium",
		"KaiseiHarunoUmi-Regular",
		"KaiseiOpti-Bold",
		"KaiseiOpti-Medium",
		"KaiseiOpti-Regular",
		"KaiseiTokumin-Bold",
		"KaiseiTokumin-ExtraBold",
		"KaiseiTokumin-Medium",
		"KaiseiTokumin-Regular",
		"KannadaMN",
		"KannadaMN-Bold",
		"KannadaSangamMN",
		"KannadaSangamMN-Bold",
		"Kefa-Bold",
		"Kefa-Regular",
		"KhmerMN",
		"KhmerMN-Bold",
		"KhmerSangamMN",
		"KiwiMaru-Light",
		"KiwiMaru-Medium",
		"KiwiMaru-Regular",
		"Klee-Demibold",
		"Klee-Medium",
		"KleeOne-Regular",
		"KleeOne-SemiBold",
		"KohinoorBangla-Bold",
		"KohinoorBangla-Light",
		"KohinoorBangla-Medium",
		"KohinoorBangla-Regular",
		"KohinoorBangla-Semibold",
		"KohinoorDevanagari-Bold",
		"KohinoorDevanagari-Light",
		"KohinoorDevanagari-Medium",
		"KohinoorDevanagari-Regular",
		"KohinoorDevanagari-Semibold",
		"KohinoorGujarati-Bold",
		"KohinoorGujarati-Light",
		"KohinoorGujarati-Medium",
		"KohinoorGujarati-Regular",
		"KohinoorGujarati-Semibold",
		"KohinoorTelugu-Bold",
		"KohinoorTelugu-Light",
		"KohinoorTelugu-Medium",
		"KohinoorTelugu-Regular",
		"KohinoorTelugu-Semibold",
		"Kokonor",
		"Kosugi-Regular",
		"KosugiMaru-Regular",
		"Krungthep",
		"KufiStandardGK",
		"LaoMN",
		"LaoMN-Bold",
		"LaoSangamMN",
		"LastResort",
		"Lato-Black",
		"Lato-BlackItalic",
		"Lato-Bold",
		"Lato-BoldItalic",
		"Lato-Hairline",
		"Lato-HairlineItalic",
		"Lato-Heavy",
		"Lato-HeavyItalic",
		"Lato-Italic",
		"Lato-Light",
		"Lato-LightItalic",
		"Lato-Medium",
		"Lato-MediumItalic",
		"Lato-Regular",
		"Lato-Semibold",
		"Lato-SemiboldItalic",
		"Lato-Thin",
		"Lato-ThinItalic",
		"LiHeiPro",
		"LiSongPro",
		"LiberationMono",
		"LiberationMono-Bold",
		"LiberationMono-BoldItalic",
		"LiberationMono-Italic",
		"LiberationSans",
		"LiberationSans-Bold",
		"LiberationSans-BoldItalic",
		"LiberationSans-Italic",
		"LiberationSansNarrow",
		"LiberationSansNarrow-Bold",
		"LiberationSansNarrow-BoldItalic",
		"LiberationSansNarrow-Italic",
		"LiberationSerif",
		"LiberationSerif-Bold",
		"LiberationSerif-BoldItalic",
		"LiberationSerif-Italic",
		"LucidaGrande",
		"LucidaGrande-Bold",
		"Luminari-Regular",
		"MPLUS1-Black",
		"MPLUS1-Bold",
		"MPLUS1-ExtraBold",
		"MPLUS1-ExtraLight",
		"MPLUS1-Light",
		"MPLUS1-Medium",
		"MPLUS1-Regular",
		"MPLUS1-SemiBold",
		"MPLUS1-Thin",
		"MPLUS1Code-Bold",
		"MPLUS1Code-ExtraLight",
		"MPLUS1Code-Light",
		"MPLUS1Code-Medium",
		"MPLUS1Code-Regular",
		"MPLUS1Code-SemiBold",
		"MPLUS1Code-Thin",
		"MPLUS1p-Black",
		"MPLUS1p-Bold",
		"MPLUS1p-ExtraBold",
		"MPLUS1p-Light",
		"MPLUS1p-Medium",
		"MPLUS1p-Regular",
		"MPLUS1p-Thin",
		"MPLUS2-Black",
		"MPLUS2-Bold",
		"MPLUS2-ExtraBold",
		"MPLUS2-ExtraLight",
		"MPLUS2-Light",
		"MPLUS2-Medium",
		"MPLUS2-Regular",
		"MPLUS2-SemiBold",
		"MPLUS2-Thin",
		"MalayalamMN",
		"MalayalamMN-Bold",
		"MalayalamSangamMN",
		"MalayalamSangamMN-Bold",
		"Marion-Bold",
		"Marion-Italic",
		"Marion-Regular",
		"MarkerFelt-Thin",
		"MarkerFelt-Wide",
		"Menlo-Bold",
		"Menlo-BoldItalic",
		"Menlo-Italic",
		"Menlo-Regular",
		"MicrosoftSansSerif",
		"MochiyPopOne-Regular",
		"MochiyPopPOne-Regular",
		"Monaco",
		"MonotypeGurmukhi",
		"Mshtakan",
		"MshtakanBold",
		"MshtakanBoldOblique",
		"MshtakanOblique",
		"MuktaMahee-Bold",
		"MuktaMahee-ExtraBold",
		"MuktaMahee-ExtraLight",
		"MuktaMahee-Light",
		"MuktaMahee-Medium",
		"MuktaMahee-Regular",
		"MuktaMahee-SemiBold",
		"Muna",
		"MunaBlack",
		"MunaBold",
		"Murecho-Black",
		"Murecho-Bold",
		"Murecho-ExtraBold",
		"Murecho-ExtraLight",
		"Murecho-Light",
		"Murecho-Medium",
		"Murecho-Regular",
		"Murecho-SemiBold",
		"Murecho-Thin",
		"MyanmarMN",
		"MyanmarMN-Bold",
		"MyanmarSangamMN",
		"MyanmarSangamMN-Bold",
		"Nadeem",
		"NanumBrush",
		"NanumGothic",
		"NanumGothicBold",
		"NanumGothicExtraBold",
		"NanumMyeongjo",
		"NanumMyeongjoBold",
		"NanumMyeongjoExtraBold",
		"NanumPen",
		"NewPeninimMT",
		"NewPeninimMT-Bold",
		"NewPeninimMT-BoldInclined",
		"NewPeninimMT-Inclined",
		"NewTegomin-Regular",
		"NimbusMonL-Bold",
		"NimbusMonL-BoldObli",
		"NimbusMonL-Regu",
		"NimbusMonL-ReguObli",
		"NimbusMonoPS-Bold",
		"NimbusMonoPS-BoldItalic",
		"NimbusMonoPS-Italic",
		"NimbusMonoPS-Regular",
		"NimbusRomNo9L-Medi",
		"NimbusRomNo9L-MediItal",
		"NimbusRomNo9L-Regu",
		"NimbusRomNo9L-ReguItal",
		"NimbusRoman-Bold",
		"NimbusRoman-BoldItalic",
		"NimbusRoman-Italic",
		"NimbusRoman-Regular",
		"NimbusSanL-Bold",
		"NimbusSanL-BoldCond",
		"NimbusSanL-BoldCondItal",
		"NimbusSanL-BoldItal",
		"NimbusSanL-Regu",
		"NimbusSanL-ReguCond",
		"NimbusSanL-ReguCondItal",
		"NimbusSanL-ReguItal",
		"NimbusSans-Bold",
		"NimbusSans-BoldItalic",
		"NimbusSans-Italic",
		"NimbusSans-Regular",
		"NimbusSansNarrow-Bold",
		"NimbusSansNarrow-BoldOblique",
		"NimbusSansNarrow-Oblique",
		"NimbusSansNarrow-Regular",
		"Noteworthy-Bold",
		"Noteworthy-Light",
		"NotoMono",
		"NotoNastaliqUrdu",
		"NotoNastaliqUrdu-Bold",
		"NotoSansArmenian-Black",
		"NotoSansArmenian-Bold",
		"NotoSansArmenian-ExtraBold",
		"NotoSansArmenian-ExtraLight",
		"NotoSansArmenian-Light",
		"NotoSansArmenian-Medium",
		"NotoSansArmenian-Regular",
		"NotoSansArmenian-SemiBold",
		"NotoSansArmenian-Thin",
		"NotoSansAvestan-Regular",
		"NotoSansBamum-Regular",
		"NotoSansBatak-Regular",
		"NotoSansBrahmi-Regular",
		"NotoSansBuginese-Regular",
		"NotoSansBuhid-Regular",
		"NotoSansCarian-Regular",
		"NotoSansChakma-Regular",
		"NotoSansCham-Regular",
		"NotoSansCoptic-Regular",
		"NotoSansCuneiform-Regular",
		"NotoSansCypriot-Regular",
		"NotoSansEgyptianHieroglyphs-Regular",
		"NotoSansGlagolitic-Regular",
		"NotoSansGothic-Regular",
		"NotoSansHanunoo-Regular",
		"NotoSansImperialAramaic-Regular",
		"NotoSansInscriptionalPahlavi-Regular",
		"NotoSansInscriptionalParthian-Regular",
		"NotoSansJP-Black",
		"NotoSansJP-Bold",
		"NotoSansJP-Light",
		"NotoSansJP-Medium",
		"NotoSansJP-Regular",
		"NotoSansJP-Thin",
		"NotoSansJavanese-Regular",
		"NotoSansKaithi-Regular",
		"NotoSansKannada-Black",
		"NotoSansKannada-Bold",
		"NotoSansKannada-ExtraBold",
		"NotoSansKannada-ExtraLight",
		"NotoSansKannada-Light",
		"NotoSansKannada-Medium",
		"NotoSansKannada-Regular",
		"NotoSansKannada-SemiBold",
		"NotoSansKannada-Thin",
		"NotoSansKayahLi-Regular",
		"NotoSansKharoshthi-Regular",
		"NotoSansLepcha-Regular",
		"NotoSansLimbu-Regular",
		"NotoSansLinearB-Regular",
		"NotoSansLisu-Regular",
		"NotoSansLycian-Regular",
		"NotoSansLydian-Regular",
		"NotoSansMandaic-Regular",
		"NotoSansMeeteiMayek-Regular",
		"NotoSansMongolian",
		"NotoSansMyanmar-Black",
		"NotoSansMyanmar-Bold",
		"NotoSansMyanmar-ExtraBold",
		"NotoSansMyanmar-ExtraLight",
		"NotoSansMyanmar-Light",
		"NotoSansMyanmar-Medium",
		"NotoSansMyanmar-Regular",
		"NotoSansMyanmar-SemiBold",
		"NotoSansMyanmar-Thin",
		"NotoSansNKo-Regular",
		"NotoSansNewTaiLue-Regular",
		"NotoSansOgham-Regular",
		"NotoSansOlChiki-Regular",
		"NotoSansOldItalic-Regular",
		"NotoSansOldPersian-Regular",
		"NotoSansOldSouthArabian-Regular",
		"NotoSansOldTurkic-Regular",
		"NotoSansOriya",
		"NotoSansOriya-Bold",
		"NotoSansOsmanya-Regular",
		"NotoSansPhagsPa-Regular",
		"NotoSansPhoenician-Regular",
		"NotoSansRejang-Regular",
		"NotoSansRunic-Regular",
		"NotoSansSamaritan-Regular",
		"NotoSansSaurashtra-Regular",
		"NotoSansShavian-Regular",
		"NotoSansSundanese-Regular",
		"NotoSansSylotiNagri-Regular",
		"NotoSansSyriac-Regular",
		"NotoSansTagalog-Regular",
		"NotoSansTagbanwa-Regular",
		"NotoSansTaiLe-Regular",
		"NotoSansTaiTham",
		"NotoSansTaiViet-Regular",
		"NotoSansThaana-Regular",
		"NotoSansTifinagh-Regular",
		"NotoSansUgaritic-Regular",
		"NotoSansVai-Regular",
		"NotoSansYi-Regular",
		"NotoSansZawgyi-Black",
		"NotoSansZawgyi-Bold",
		"NotoSansZawgyi-ExtraBold",
		"NotoSansZawgyi-ExtraLight",
		"NotoSansZawgyi-Light",
		"NotoSansZawgyi-Medium",
		"NotoSansZawgyi-Regular",
		"NotoSansZawgyi-SemiBold",
		"NotoSansZawgyi-Thin",
		"NotoSerifBalinese-Regular",
		"NotoSerifJP-Black",
		"NotoSerifJP-Bold",
		"NotoSerifJP-ExtraLight",
		"NotoSerifJP-Light",
		"NotoSerifJP-Medium",
		"NotoSerifJP-Regular",
		"NotoSerifJP-SemiBold",
		"NotoSerifMyanmar-Black",
		"NotoSerifMyanmar-Bold",
		"NotoSerifMyanmar-ExtraBold",
		"NotoSerifMyanmar-ExtraLight",
		"NotoSerifMyanmar-Light",
		"NotoSerifMyanmar-Medium",
		"NotoSerifMyanmar-Regular",
		"NotoSerifMyanmar-SemiBold",
		"NotoSerifMyanmar-Thin",
		"Optima-Bold",
		"Optima-BoldItalic",
		"Optima-ExtraBlack",
		"Optima-Italic",
		"Optima-Regular",
		"OriyaMN",
		"OriyaMN-Bold",
		"OriyaSangamMN",
		"OriyaSangamMN-Bold",
		"Osaka",
		"Osaka-Mono",
		"P052-Bold",
		"P052-BoldItalic",
		"P052-Italic",
		"P052-Roman",
		"PTMono-Bold",
		"PTMono-Regular",
		"PTSans-Bold",
		"PTSans-BoldItalic",
		"PTSans-Caption",
		"PTSans-CaptionBold",
		"PTSans-Italic",
		"PTSans-Narrow",
		"PTSans-NarrowBold",
		"PTSans-Regular",
		"PTSerif-Bold",
		"PTSerif-BoldItalic",
		"PTSerif-Caption",
		"PTSerif-CaptionItalic",
		"PTSerif-Italic",
		"PTSerif-Regular",
		"Palatino-Bold",
		"Palatino-BoldItalic",
		"Palatino-Italic",
		"Palatino-Roman",
		"Papyrus",
		"Papyrus-Condensed",
		"Phosphate-Inline",
		"Phosphate-Solid",
		"PingFangHK-Light",
		"PingFangHK-Medium",
		"PingFangHK-Regular",
		"PingFangHK-Semibold",
		"PingFangHK-Thin",
		"PingFangHK-Ultralight",
		"PingFangSC-Light",
		"PingFangSC-Medium",
		"PingFangSC-Regular",
		"PingFangSC-Semibold",
		"PingFangSC-Thin",
		"PingFangSC-Ultralight",
		"PingFangTC-Light",
		"PingFangTC-Medium",
		"PingFangTC-Regular",
		"PingFangTC-Semibold",
		"PingFangTC-Thin",
		"PingFangTC-Ultralight",
		"PlantagenetCherokee",
		"PottaOne-Regular",
		"Raanana",
		"RaananaBold",
		"RampartOne-Regular",
		"ReggaeOne-Regular",
		"RocknRollOne-Regular",
		"Rockwell-Bold",
		"Rockwell-BoldItalic",
		"Rockwell-Italic",
		"Rockwell-Regular",
		"RoundedMplus1c-Black",
		"RoundedMplus1c-Bold",
		"RoundedMplus1c-ExtraBold",
		"RoundedMplus1c-Light",
		"RoundedMplus1c-Medium",
		"RoundedMplus1c-Regular",
		"RoundedMplus1c-Thin",
		"STBaoli-SC-Regular",
		"STFangsong",
		"STHeiti",
		"STHeitiSC-Light",
		"STHeitiSC-Medium",
		"STHeitiTC-Light",
		"STHeitiTC-Medium",
		"STIXGeneral-Bold",
		"STIXGeneral-BoldItalic",
		"STIXGeneral-Italic",
		"STIXGeneral-Regular",
		"STIXIntegralsD-Bold",
		"STIXIntegralsD-Regular",
		"STIXIntegralsSm-Bold",
		"STIXIntegralsSm-Regular",
		"STIXIntegralsUp-Bold",
		"STIXIntegralsUp-Regular",
		"STIXIntegralsUpD-Bold",
		"STIXIntegralsUpD-Regular",
		"STIXIntegralsUpSm-Bold",
		"STIXIntegralsUpSm-Regular",
		"STIXNonUnicode-Bold",
		"STIXNonUnicode-BoldItalic",
		"STIXNonUnicode-Italic",
		"STIXNonUnicode-Regular",
		"STIXSizeFiveSym-Regular",
		"STIXSizeFourSym-Bold",
		"STIXSizeFourSym-Regular",
		"STIXSizeOneSym-Bold",
		"STIXSizeOneSym-Regular",
		"STIXSizeThreeSym-Bold",
		"STIXSizeThreeSym-Regular",
		"STIXSizeTwoSym-Bold",
		"STIXSizeTwoSym-Regular",
		"STIXVariants-Bold",
		"STIXVariants-Regular",
		"STKaiTi-TC-Bold",
		"STKaiTi-TC-Regular",
		"STKaiti",
		"STKaiti-SC-Black",
		"STKaiti-SC-Bold",
		"STKaiti-SC-Regular",
		"STLibian-SC-Regular",
		"STSong",
		"STSongti-SC-Black",
		"STSongti-SC-Bold",
		"STSongti-SC-Light",
		"STSongti-SC-Regular",
		"STSongti-TC-Bold",
		"STSongti-TC-Light",
		"STSongti-TC-Regular",
		"STXihei",
		"STXingkai-SC-Bold",
		"STXingkai-SC-Light",
		"STYuanti-SC-Bold",
		"STYuanti-SC-Light",
		"STYuanti-SC-Regular",
		"STYuanti-TC-Bold",
		"STYuanti-TC-Light",
		"STYuanti-TC-Regular",
		"Sana",
		"Sathu",
		"SavoyeLetPlain",
		"SawarabiGothic-Regular",
		"SawarabiMincho-Regular",
		"Seravek",
		"Seravek-Bold",
		"Seravek-BoldItalic",
		"Seravek-ExtraLight",
		"Seravek-ExtraLightItalic",
		"Seravek-Italic",
		"Seravek-Light",
		"Seravek-LightItalic",
		"Seravek-Medium",
		"Seravek-MediumItalic",
		"ShipporiAntique-Regular",
		"ShipporiAntiqueB1-Regular",
		"ShipporiMincho-Bold",
		"ShipporiMincho-ExtraBold",
		"ShipporiMincho-Medium",
		"ShipporiMincho-Regular",
		"ShipporiMincho-SemiBold",
		"ShipporiMinchoB1-Bold",
		"ShipporiMinchoB1-ExtraBold",
		"ShipporiMinchoB1-Medium",
		"ShipporiMinchoB1-Regular",
		"ShipporiMinchoB1-SemiBold",
		"ShreeDev0714",
		"ShreeDev0714-Bold",
		"ShreeDev0714-BoldItalic",
		"ShreeDev0714-Italic",
		"SignPainter-HouseScript",
		"SignPainter-HouseScriptSemibold",
		"Silom",
		"SinhalaMN",
		"SinhalaMN-Bold",
		"SinhalaSangamMN",
		"SinhalaSangamMN-Bold",
		"Skia-Black",
		"Skia-BlackCondensed",
		"Skia-BlackExtended",
		"Skia-Bold",
		"Skia-Condensed",
		"Skia-Extended",
		"Skia-Light",
		"Skia-LightCondensed",
		"Skia-LightExtended",
		"Skia-Regular",
		"SnellRoundhand",
		"SnellRoundhand-Black",
		"SnellRoundhand-Bold",
		"StandardSymL",
		"StandardSymbolsPS",
		"Stick-Regular",
		"SukhumvitSet-Bold",
		"SukhumvitSet-Light",
		"SukhumvitSet-Medium",
		"SukhumvitSet-SemiBold",
		"SukhumvitSet-Text",
		"SukhumvitSet-Thin",
		"Superclarendon-Black",
		"Superclarendon-BlackItalic",
		"Superclarendon-Bold",
		"Superclarendon-BoldItalic",
		"Superclarendon-Italic",
		"Superclarendon-Light",
		"Superclarendon-LightItalic",
		"Superclarendon-Regular",
		"Symbol",
		"Tahoma",
		"Tahoma-Bold",
		"TamilMN",
		"TamilMN-Bold",
		"TamilSangamMN",
		"TamilSangamMN-Bold",
		"TeluguMN",
		"TeluguMN-Bold",
		"TeluguSangamMN",
		"TeluguSangamMN-Bold",
		"Thonburi",
		"Thonburi-Bold",
		"Thonburi-Light",
		"Times-Bold",
		"Times-BoldItalic",
		"Times-Italic",
		"Times-Roman",
		"TimesNewRomanPS-BoldItalicMT",
		"TimesNewRomanPS-BoldMT",
		"TimesNewRomanPS-ItalicMT",
		"TimesNewRomanPSMT",
		"TrainOne-Regular",
		"Trattatello",
		"Trebuchet-BoldItalic",
		"TrebuchetMS",
		"TrebuchetMS-Bold",
		"TrebuchetMS-Italic",
		"TsukuARdGothic-Bold",
		"TsukuARdGothic-Regular",
		"TsukuBRdGothic-Bold",
		"TsukuBRdGothic-Regular",
		"URWBookman-Demi",
		"URWBookman-DemiItalic",
		"URWBookman-Light",
		"URWBookman-LightItalic",
		"URWBookmanL-DemiBold",
		"URWBookmanL-DemiBoldItal",
		"URWBookmanL-Ligh",
		"URWBookmanL-LighItal",
		"URWChanceryL-MediItal",
		"URWGothic-Book",
		"URWGothic-BookOblique",
		"URWGothic-Demi",
		"URWGothic-DemiOblique",
		"URWGothicL-Book",
		"URWGothicL-BookObli",
		"URWGothicL-Demi",
		"URWGothicL-DemiObli",
		"URWPalladioL-Bold",
		"URWPalladioL-BoldItal",
		"URWPalladioL-Ital",
		"URWPalladioL-Roma",
		"Verdana",
		"Verdana-Bold",
		"Verdana-BoldItalic",
		"Verdana-Italic",
		"Waseem",
		"WaseemLight",
		"Webdings",
		"Weibei-SC-Bold",
		"Weibei-TC-Bold",
		"Wingdings-Regular",
		"Wingdings2",
		"Wingdings3",
		"Yomogi-Regular",
		"YuGo-Bold",
		"YuGo-Medium",
		"YuMin-Demibold",
		"YuMin-Medium",
		"YuMin_36pKn-Demibold",
		"YuMin_36pKn-Medium",
		"YujiBoku-Regular",
		"YujiMai-Regular",
		"YujiSyuku-Regular",
		"YuppySC-Regular",
		"YuppyTC-Regular",
		"YuseiMagic-Regular",
		"Z003-MediumItalic",
		"ZapfDingbatsITC",
		"Zapfino",
		"ZenAntique-Regular",
		"ZenAntiqueSoft-Regular",
		"ZenKakuGothicAntique-Black",
		"ZenKakuGothicAntique-Bold",
		"ZenKakuGothicAntique-Light",
		"ZenKakuGothicAntique-Medium",
		"ZenKakuGothicAntique-Regular",
		"ZenKakuGothicNew-Black",
		"ZenKakuGothicNew-Bold",
		"ZenKakuGothicNew-Light",
		"ZenKakuGothicNew-Medium",
		"ZenKakuGothicNew-Regular",
		"ZenKurenaido-Regular",
		"ZenMaruGothic-Black",
		"ZenMaruGothic-Bold",
		"ZenMaruGothic-Light",
		"ZenMaruGothic-Medium",
		"ZenMaruGothic-Regular",
		"ZenOldMincho-Black",
		"ZenOldMincho-Bold",
		"ZenOldMincho-Medium",
		"ZenOldMincho-Regular",
		"ZenOldMincho-SemiBold"
	]
};

}));
