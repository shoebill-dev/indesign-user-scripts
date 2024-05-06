if (app.documents.length === 0) {
  alert("Please open a document and try again.");
  exit();
}

var doc = app.activeDocument;

function applyGradientToLayer(doc, layerName, gradient, page) {
  try {
    var layer = doc.layers.itemByName(layerName);
    if (!layer.isValid) {
      alert("Layer does not exist.");
      return false;
    }

    var items = page.pageItems;
    for (var i = 0; i < items.length; i++) {
      if (items[i] instanceof Rectangle) {
        items[i].fillColor = gradient;
        items[i].fillTint = 100;
        items[i].gradientFillAngle = 45;
      }
    }
    return true;
  } catch (error) {
    alert("Error applying gradient: " + e.message);
    return false;
  }
}

function getRandomGradient(doc) {
  var gradients = doc.gradients;
  var randomIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomIndex];
}

function execute(doc) {
  for (var i; i < doc.pages.length - 1; i + 2) {
    var page = doc.pages.item(i);
  }
}

// function doesColorExist(doc, colorName) {
//   try {
//     var color = doc.colors.itemByName(colorName);
//     return color.isValid;
//   } catch (error) {
//     return false;
//   }
// }

// function createGradient(name, color1, color2) {
//   var gradient = doc.gradients.add({ name: name, type: GradientType.LINEAR });
//   gradient.gradientStops[0].properties = {
//     stopColor: color1,
//     location: 0,
//   };

//   gradient.gradientStops.add({ stopColor: color2, location: 100 });
//   return gradient;
// }

// function addColorByHex(doc, colorName, hexCode) {
//   if (hexCode[0] !== "#") {
//     hexCode = "#" + hexCode;
//   }
// }

// var r = parseInt(hexCode.substr(1, 2), 16);
// var g = parseInt(hexCode.substr(3, 2), 16);
// var b = parseInt(hexCode.substr(5, 2), 16);

// try {
//   var color = doc.colors.item(colorName);
//   color.properties = {
//     model: ColorModel.PROCESS,
//     space: ColorSpace.RGB,
//     colorValue: [r, g, b],
//   };
// } catch (error) {
//   doc.colors.add({
//     name: colorName,
//     model: ColorModel.PROCESS,
//     space: ColorSpace.RGB,
//     colorValue: [r, g, b],
//   });
// }
