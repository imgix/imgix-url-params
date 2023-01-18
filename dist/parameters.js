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
	"version": "11.13.1",
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
		".Aqua Kana",
		".Arabic UI Display Black",
		".Arabic UI Text Regular",
		".HeitiUI TC Thin",
		".HeitiUI TC Ultra Light",
		".Helvetica Neue DeskInterface Regular",
		".New York",
		".New York Italic",
		".SF Compact Display",
		".SF Compact Rounded",
		".SF Compact Text",
		".SF Compact Text Italic",
		".SF NS Display Condensed Black",
		".SF NS Display Condensed Bold",
		".SF NS Display Condensed Heavy",
		".SF NS Display Condensed Light",
		".SF NS Display Condensed Medium",
		".SF NS Display Condensed Regular",
		".SF NS Display Condensed Semibold",
		".SF NS Display Condensed Thin",
		".SF NS Display Condensed Ultralight",
		".SF NS Mono Light",
		".SF NS Mono Light Italic",
		".SF NS Rounded",
		".SF NS Text Condensed Bold",
		".SF NS Text Condensed Heavy",
		".SF NS Text Condensed Light",
		".SF NS Text Condensed Medium",
		".SF NS Text Condensed Regular",
		".SF NS Text Condensed Semibold",
		"Al Nile",
		"Al Tarikh",
		"AlBayan",
		"AmericanTypewriter",
		"Andale Mono",
		"Apple Braille",
		"Apple Braille Outline 6 Dot",
		"Apple Braille Outline 8 Dot",
		"Apple Braille Pinpoint 6 Dot",
		"Apple Braille Pinpoint 8 Dot",
		"Apple Chancery",
		"Apple Color Emoji",
		"Apple Symbols",
		"AppleGothic",
		"AppleMyungjo Regular",
		"AppleSDGothicNeo",
		"Arial",
		"Arial Black",
		"Arial Bold",
		"Arial Bold Italic",
		"Arial Italic",
		"Arial Narrow",
		"Arial Narrow Bold",
		"Arial Narrow Bold Italic",
		"Arial Narrow Italic",
		"Arial Rounded MT Bold",
		"Arial Unicode MS",
		"ArialHB",
		"Athelas Regular",
		"Avenir Book",
		"Avenir Next Bold",
		"Avenir Next Condensed Bold",
		"Ayuthaya",
		"BIZ UDGothic",
		"BIZ UDGothic Bold",
		"BIZ UDMincho",
		"BIZ UDPGothic",
		"BIZ UDPGothic Bold",
		"BIZ UDPMincho",
		"Baghdad",
		"Bangla MN",
		"Bangla Sangam MN",
		"Baoli SC Regular",
		"Baskerville",
		"Beirut",
		"BigCaslon",
		"Bodoni 72 Book",
		"Bodoni 72 Oldstyle Book",
		"Bodoni 72 Smallcaps Book",
		"Bodoni Ornaments",
		"Bradley Hand Bold",
		"Brush Script MT Italic",
		"Chalkboard",
		"ChalkboardSE",
		"Chalkduster",
		"Charter Roman",
		"Cochin",
		"Comic Sans MS",
		"Comic Sans MS Bold",
		"Copperplate",
		"Corsiva",
		"Courier",
		"Courier New",
		"Courier New Bold",
		"Courier New Bold Italic",
		"Courier New Italic",
		"DIN Alternate Bold",
		"DIN Condensed Bold",
		"Damascus",
		"DecoTypeNaskh",
		"Dela Gothic One Regular",
		"Devanagari MT",
		"Devanagari Sangam MN",
		"Didot",
		"Diwan Kufi",
		"Diwan Thuluth",
		"DotGothic16 Regular",
		"EuphemiaCAS",
		"Farah",
		"Farisi",
		"Futura",
		"GB18030 Bitmap",
		"Galvji",
		"GeezaPro",
		"Geneva",
		"Georgia",
		"Georgia Bold",
		"Georgia Bold Italic",
		"Georgia Italic",
		"GillSans",
		"Gujarati Sangam MN",
		"GujaratiMT",
		"Gungseouche",
		"Gurmukhi",
		"Gurmukhi MN",
		"Gurmukhi Sangam MN",
		"Hachi Maru Pop Regular",
		"Hannotate SC Regular",
		"HanziPen SC Regular",
		"Headline Alternate",
		"Heiti TC Light",
		"Heiti TC Medium",
		"Helvetica",
		"HelveticaNeue",
		"Herculanum",
		"Hina Mincho Regular",
		"HiraMaruPro-W4",
		"HiraMinProN-W3",
		"HiraMinProN-W6",
		"Hiragino Sans GB W3",
		"Hiragino Sans GB W6",
		"Hiragino Sans W0",
		"Hiragino Sans W1",
		"Hiragino Sans W2",
		"Hiragino Sans W3",
		"Hiragino Sans W4",
		"Hiragino Sans W5",
		"Hiragino Sans W6",
		"Hiragino Sans W7",
		"Hiragino Sans W8",
		"Hiragino Sans W9",
		"Hoefler Text",
		"Hoefler Text Ornaments",
		"IBM Plex Sans JP Bold",
		"IBM Plex Sans JP ExtraLight",
		"IBM Plex Sans JP Light",
		"IBM Plex Sans JP Medium",
		"IBM Plex Sans JP Regular",
		"IBM Plex Sans JP SemiBold",
		"IBM Plex Sans JP Thin",
		"ITFDevanagari-Book",
		"Impact",
		"InaiMathi",
		"InaiMathi-MN",
		"Iowan Old Style Roman",
		"Kailasa",
		"Kaisei Decol Bold",
		"Kaisei Decol Medium",
		"Kaisei Decol Regular",
		"Kaisei HarunoUmi Bold",
		"Kaisei HarunoUmi Medium",
		"Kaisei HarunoUmi Regular",
		"Kaisei Opti Bold",
		"Kaisei Opti Medium",
		"Kaisei Opti Regular",
		"Kaisei Tokumin Bold",
		"Kaisei Tokumin ExtraBold",
		"Kaisei Tokumin Medium",
		"Kaisei Tokumin Regular",
		"Kaiti SC Black",
		"Kannada MN",
		"Kannada Sangam MN",
		"Kefa Regular",
		"Keyboard",
		"Khmer MN",
		"Khmer Sangam MN",
		"Kiwi Maru Light",
		"Kiwi Maru Medium",
		"Kiwi Maru Regular",
		"Klee Demibold",
		"Klee One Regular",
		"Klee One SemiBold",
		"Kohinoor Bangla",
		"Kohinoor Devanagari Regular",
		"Kohinoor Gujarati Bold",
		"Kohinoor Telugu",
		"Kokonor",
		"Kosugi Maru Regular",
		"Kosugi Regular",
		"Krungthep",
		"KufiStandardGK Regular",
		"Lantinghei SC Demibold",
		"Lao MN",
		"Lao Sangam MN",
		"LastResort",
		"Libian SC Regular",
		"LucidaGrande",
		"Luminari",
		"M PLUS 1 Black",
		"M PLUS 1 Bold",
		"M PLUS 1 Code Bold",
		"M PLUS 1 Code ExtraLight",
		"M PLUS 1 Code Light",
		"M PLUS 1 Code Medium",
		"M PLUS 1 Code Regular",
		"M PLUS 1 Code SemiBold",
		"M PLUS 1 Code Thin",
		"M PLUS 1 ExtraBold",
		"M PLUS 1 ExtraLight",
		"M PLUS 1 Light",
		"M PLUS 1 Medium",
		"M PLUS 1 Regular",
		"M PLUS 1 SemiBold",
		"M PLUS 1 Thin",
		"M PLUS 1p Black",
		"M PLUS 1p Bold",
		"M PLUS 1p ExtraBold",
		"M PLUS 1p Light",
		"M PLUS 1p Medium",
		"M PLUS 1p Regular",
		"M PLUS 1p Thin",
		"M PLUS 2 Black",
		"M PLUS 2 Bold",
		"M PLUS 2 ExtraBold",
		"M PLUS 2 ExtraLight",
		"M PLUS 2 Light",
		"M PLUS 2 Medium",
		"M PLUS 2 Regular",
		"M PLUS 2 SemiBold",
		"M PLUS 2 Thin",
		"Malayalam MN",
		"Malayalam Sangam MN",
		"Marion Regular",
		"MarkerFelt",
		"Menlo",
		"Microsoft Sans Serif",
		"Mishafi",
		"Mishafi Gold",
		"Mochiy Pop One Regular",
		"Mochiy Pop P One Regular",
		"Monaco",
		"Mshtakan",
		"MuktaMahee Regular",
		"Muna",
		"Murecho Black",
		"Murecho Bold",
		"Murecho ExtraBold",
		"Murecho ExtraLight",
		"Murecho Light",
		"Murecho Medium",
		"Murecho Regular",
		"Murecho SemiBold",
		"Murecho Thin",
		"Myanmar MN",
		"Myanmar Sangam MN",
		"Nadeem",
		"Nanum Brush Script",
		"NanumGothic",
		"NanumMyeongjo",
		"New Tegomin Regular",
		"NewPeninimMT",
		"Noteworthy Light",
		"Noto Nastaliq Urdu",
		"Noto Sans Armenian Black",
		"Noto Sans Avestan Regular",
		"Noto Sans Bamum Regular",
		"Noto Sans Batak Regular",
		"Noto Sans Brahmi Regular",
		"Noto Sans Buginese Regular",
		"Noto Sans Buhid Regular",
		"Noto Sans Carian Regular",
		"Noto Sans Chakma Regular",
		"Noto Sans Cham Regular",
		"Noto Sans Coptic Regular",
		"Noto Sans Cuneiform Regular",
		"Noto Sans Cypriot Regular",
		"Noto Sans Egyptian Hieroglyphs Regular",
		"Noto Sans Glagolitic Regular",
		"Noto Sans Gothic Regular",
		"Noto Sans Hanunoo Regular",
		"Noto Sans Imperial Aramaic Regular",
		"Noto Sans Inscriptional Pahlavi Regular",
		"Noto Sans Inscriptional Parthian Regular",
		"Noto Sans JP",
		"Noto Sans JP Black",
		"Noto Sans JP Bold",
		"Noto Sans JP Light",
		"Noto Sans JP Medium",
		"Noto Sans JP Thin",
		"Noto Sans Javanese Regular",
		"Noto Sans Kaithi Regular",
		"Noto Sans Kannada Black",
		"Noto Sans Kayah Li Regular",
		"Noto Sans Kharoshthi Regular",
		"Noto Sans Lepcha Regular",
		"Noto Sans Limbu Regular",
		"Noto Sans Linear B Regular",
		"Noto Sans Lisu Regular",
		"Noto Sans Lycian Regular",
		"Noto Sans Lydian Regular",
		"Noto Sans Mandaic Regular",
		"Noto Sans Meetei Mayek Regular",
		"Noto Sans Mongolian",
		"Noto Sans Myanmar Black",
		"Noto Sans NKo Regular",
		"Noto Sans New Tai Lue Regular",
		"Noto Sans Ogham Regular",
		"Noto Sans Ol Chiki Regular",
		"Noto Sans Old Italic Regular",
		"Noto Sans Old Persian Regular",
		"Noto Sans Old South Arabian Regular",
		"Noto Sans Old Turkic Regular",
		"Noto Sans Oriya",
		"Noto Sans Osmanya Regular",
		"Noto Sans PhagsPa Regular",
		"Noto Sans Phoenician Regular",
		"Noto Sans Rejang Regular",
		"Noto Sans Runic Regular",
		"Noto Sans Samaritan Regular",
		"Noto Sans Saurashtra Regular",
		"Noto Sans Shavian Regular",
		"Noto Sans Sundanese Regular",
		"Noto Sans Syloti Nagri Regular",
		"Noto Sans Syriac Regular",
		"Noto Sans Tagalog Regular",
		"Noto Sans Tagbanwa Regular",
		"Noto Sans Tai Le Regular",
		"Noto Sans Tai Tham",
		"Noto Sans Tai Viet Regular",
		"Noto Sans Thaana Regular",
		"Noto Sans Tifinagh Regular",
		"Noto Sans Ugaritic Regular",
		"Noto Sans Vai Regular",
		"Noto Sans Yi Regular",
		"Noto Serif Balinese Regular",
		"Noto Serif JP",
		"Noto Serif JP Black",
		"Noto Serif JP Bold",
		"Noto Serif JP ExtraLight",
		"Noto Serif JP Light",
		"Noto Serif JP Medium",
		"Noto Serif JP SemiBold",
		"Noto Serif Myanmar Black",
		"Optima",
		"Oriya MN",
		"Oriya Sangam MN",
		"Osaka",
		"OsakaMono",
		"PCmyoungjo",
		"PT Mono Bold",
		"PT Sans",
		"PT Serif Caption",
		"PT Serif",
		"Palatino",
		"Papyrus",
		"Phosphate",
		"Pilgiche",
		"PingFang HK Regular",
		"PlantagenetCherokee",
		"Potta One Regular",
		"Raanana",
		"Rampart One Regular",
		"Reggae One Regular",
		"RocknRoll One Regular",
		"Rockwell",
		"Rounded Mplus 1c",
		"Rounded Mplus 1c Black",
		"Rounded Mplus 1c Bold",
		"Rounded Mplus 1c ExtraBold",
		"Rounded Mplus 1c Light",
		"Rounded Mplus 1c Medium",
		"Rounded Mplus 1c Thin",
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
		"Sana",
		"Sathu",
		"Savoye LET",
		"Sawarabi Gothic",
		"Sawarabi Mincho",
		"Seravek",
		"Shippori Antique B1 Regular",
		"Shippori Antique Regular",
		"Shippori Mincho B1 Bold",
		"Shippori Mincho B1 ExtraBold",
		"Shippori Mincho B1 Medium",
		"Shippori Mincho B1 Regular",
		"Shippori Mincho B1 SemiBold",
		"Shippori Mincho Bold",
		"Shippori Mincho ExtraBold",
		"Shippori Mincho Medium",
		"Shippori Mincho Regular",
		"Shippori Mincho SemiBold",
		"Shree Devanagari 714",
		"SignPainter-HouseScript",
		"Silom",
		"Sinhala MN",
		"Sinhala Sangam MN",
		"Skia",
		"Snell Roundhand",
		"Songti SC Black",
		"Stick Regular",
		"SukhumvitSet-Thin",
		"Superclarendon Regular",
		"Symbol",
		"System Font",
		"System Font Black",
		"System Font Bold",
		"System Font Bold G1",
		"System Font Bold G2",
		"System Font Bold G3",
		"System Font Bold Italic",
		"System Font Bold Italic G1",
		"System Font Bold Italic G2",
		"System Font Bold Italic G3",
		"System Font Heavy",
		"System Font Heavy Italic",
		"System Font Italic",
		"System Font Italic G1",
		"System Font Italic G2",
		"System Font Italic G3",
		"System Font Light",
		"System Font Light Italic",
		"System Font Medium",
		"System Font Medium Italic",
		"System Font Regular",
		"System Font Regular G1",
		"System Font Regular G2",
		"System Font Regular G3",
		"System Font Regular Italic",
		"System Font SemiBold",
		"System Font SemiBold Italic",
		"System Font Thin",
		"System Font UltraLight",
		"Tahoma",
		"Tahoma Bold",
		"Tamil MN",
		"Tamil Sangam MN",
		"Telugu MN",
		"Telugu Sangam MN",
		"Thonburi",
		"Times",
		"Times New Roman",
		"Times New Roman Bold",
		"Times New Roman Bold Italic",
		"Times New Roman Italic",
		"Train One Regular",
		"Trattatello",
		"Trebuchet MS",
		"Trebuchet MS Bold",
		"Trebuchet MS Bold Italic",
		"Trebuchet MS Italic",
		"Tsukushi A Round Gothic Regular",
		"Tsukushi B Round Gothic Regula",
		"Verdana",
		"Verdana Bold",
		"Verdana Bold Italic",
		"Verdana Italic",
		"Waseem",
		"Wawati SC Regular",
		"Wawati TC Regular",
		"Webdings",
		"Weibei SC Bold",
		"Weibei TC Bold",
		"Wingdings",
		"Wingdings 2",
		"Wingdings 3",
		"Xingkai SC Bold",
		"Yomogi Regular",
		"YuGothic Bold",
		"YuGothic Medium",
		"YuMincho Medium",
		"Yuanti SC Bold",
		"Yuji Boku Regular",
		"Yuji Mai Regular",
		"Yuji Syuku Regular",
		"Yuppy SC Regular",
		"Yuppy TC Regular",
		"Yusei Magic Regular",
		"ZapfDingbats",
		"Zapfino",
		"Zen Antique Regular",
		"Zen Antique Soft Regular",
		"Zen Kaku Gothic Antique Black",
		"Zen Kaku Gothic Antique Bold",
		"Zen Kaku Gothic Antique Light",
		"Zen Kaku Gothic Antique Medium",
		"Zen Kaku Gothic Antique Regular",
		"Zen Kaku Gothic New Black",
		"Zen Kaku Gothic New Bold",
		"Zen Kaku Gothic New Light",
		"Zen Kaku Gothic New Medium",
		"Zen Kaku Gothic New Regular",
		"Zen Kurenaido Regular",
		"Zen Maru Gothic Black",
		"Zen Maru Gothic Bold",
		"Zen Maru Gothic Light",
		"Zen Maru Gothic Medium",
		"Zen Maru Gothic Regular",
		"Zen Old Mincho Black",
		"Zen Old Mincho Bold",
		"Zen Old Mincho Medium",
		"Zen Old Mincho Regular",
		"Zen Old Mincho SemiBold",
		"儷宋 Pro",
		"儷黑 Pro",
		"华文仿宋",
		"华文细黑",
		"华文黑体"
	]
};

}));
