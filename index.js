const HTML_ATTRIBUTES = [
  'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency',
  'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding',
  'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className',
  'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords',
  'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download',
  'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate',
  'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang',
  'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType',
  'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth',
  'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted',
  'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster',
  'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role',
  'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected',
  'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start',
  'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width',
  'wmode', 'wrap'
]

const NON_STANDARD_ATTRIBUTES = [
  'autoCapitalize', 'autoCorrect', 'color', 'itemProp', 'itemScope', 'itemType', 'itemRef',
  'itemID', 'security', 'unselectable', 'results', 'autoSave'
]

const SVG_ATTRIBUTES = [
  'accentHeight', 'accumulate', 'additive', 'alignmentBaseline', 'allowReorder', 'alphabetic',
  'amplitude', 'arabicForm', 'ascent', 'attributeName', 'attributeType', 'autoReverse',
  'azimuth', 'baseFrequency', 'baseProfile', 'baselineShift', 'bbox', 'begin', 'bias', 'by',
  'calcMode', 'capHeight', 'clip', 'clipPath', 'clipPathUnits', 'clipRule', 'colorInterpolation',
  'colorInterpolationFilters', 'colorProfile', 'colorRendering', 'contentScriptType',
  'contentStyleType', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'diffuseConstant',
  'direction', 'display', 'divisor', 'dominantBaseline', 'dur', 'dx', 'dy', 'edgeMode',
  'elevation', 'enableBackground', 'end', 'exponent', 'externalResourcesRequired', 'fill',
  'fillOpacity', 'fillRule', 'filter', 'filterRes', 'filterUnits', 'floodColor', 'floodOpacity',
  'focusable', 'fontFamily', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle',
  'fontVariant', 'fontWeight', 'format', 'from', 'fx', 'fy', 'g1', 'g2', 'glyphName',
  'glyphOrientationHorizontal', 'glyphOrientationVertical', 'glyphRef', 'gradientTransform',
  'gradientUnits', 'hanging', 'horizAdvX', 'horizOriginX', 'ideographic', 'imageRendering',
  'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kernelMatrix', 'kernelUnitLength',
  'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letterSpacing',
  'lightingColor', 'limitingConeAngle', 'local', 'markerEnd', 'markerHeight', 'markerMid',
  'markerStart', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits',
  'mathematical', 'mode', 'numOctaves', 'offset', 'opacity', 'operator', 'order',
  'orient', 'orientation', 'origin', 'overflow', 'overlinePosition', 'overlineThickness',
  'paintOrder', 'panose1', 'pathLength', 'patternContentUnits', 'patternTransform',
  'patternUnits', 'pointerEvents', 'points', 'pointsAtX', 'pointsAtY', 'pointsAtZ',
  'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'r', 'radius', 'refX', 'refY',
  'renderingIntent', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures',
  'restart', 'result', 'rotate', 'rx', 'ry', 'scale', 'seed', 'shapeRendering', 'slope',
  'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset',
  'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stopColor', 'stopOpacity',
  'strikethroughPosition', 'strikethroughThickness', 'string', 'stroke', 'strokeDasharray',
  'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit',
  'strokeOpacity', 'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX',
  'targetY', 'textAnchor', 'textDecoration', 'textLength', 'textRendering', 'to', 'transform',
  'u1', 'u2', 'underlinePosition', 'underlineThickness', 'unicode', 'unicodeBidi',
  'unicodeRange', 'unitsPerEm', 'vAlphabetic', 'vHanging', 'vIdeographic', 'vMathematical',
  'values', 'vectorEffect', 'version', 'vertAdvY', 'vertOriginX', 'vertOriginY', 'viewBox',
  'viewTarget', 'visibility', 'widths', 'wordSpacing', 'writingMode', 'x', 'x1', 'x2',
  'xChannelSelector', 'xHeight', 'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole',
  'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlBase', 'xmlLang', 'xmlSpace', 'y', 'y1', 'y2',
  'yChannelSelector', 'z', 'zoomAndPan'
]

const attributeMap = [
  ...HTML_ATTRIBUTES,
  ...NON_STANDARD_ATTRIBUTES,
  ...SVG_ATTRIBUTES
].reduce((accumulator, attribute) => {
  const lowerCase = attribute.toLowerCase()

  if (attribute !== lowerCase) {
    accumulator[ lowerCase ] = attribute
  }

  return accumulator
}, {})

attributeMap['class'] = 'className'

function camelCase (string) {
  return string.toLowerCase().replace(/-([a-z])/g, (match, $1) => $1.toUpperCase())
}

function styleStringToJSON (string = '') {
  return string.split(';').reduce((accumulator, piece) => {
    const pair = piece.split(':')
    const key = camelCase(pair[0] || '').trim()
    const value = (pair[1] || '').trim()

    if (key && value) {
      accumulator[key] = value
    }

    return accumulator
  }, {})
}

export function attributeListToReact (attributeList) {
  return [...attributeList].reduce((accumulator, { name, value }) => {
    let key = attributeMap[name.replace(/[-:]/, '')] || name

    if (key === 'style') {
      value = styleStringToJSON(value)
    }

    accumulator[key] = value

    return accumulator
  }, {})
}

let keyCounter = 0

export function nodeListToReact (nodeList, createElement) {
  return [...nodeList].reduce((accumulator, node) => {
    if (!node._domReactKey) {
      node._domReactKey = '_domReact' + String(keyCounter++)
    }

    const child = nodeToReact(node, createElement)

    if (Array.isArray(child)) {
      accumulator.push(...child)
    } else {
      accumulator.push(child)
    }

    return accumulator
  }, [])
}

export function nodeToReact (node, createElement) {
  if (!node) {
    return null
  }

  if (node.nodeType === 3) {
    return node.nodeValue
  }

  if (node.nodeType !== 1) {
    return null
  }

  const type = node.nodeName.toLowerCase()

  let props = {}
  let children = []

  if (node.hasAttributes()) {
    props = attributeListToReact(node.attributes)
  }

  if (node._domReactKey) {
    props.key = node._domReactKey
  }

  if (node.hasChildNodes()) {
    children = nodeListToReact(node.childNodes, createElement)
  }

  return createElement(type, props, ...children)
}
