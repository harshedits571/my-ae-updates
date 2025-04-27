(function(thisObj) {
    function Harsh_Ka_Haithiyra(thisObj) {
        try {
            // Create a window or panel
            var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Harsh_Ka_Haithiyra", undefined, {resizeable: true});
            
            // Set window properties
            win.orientation = "column";
            win.alignChildren = ["fill", "top"];
            win.spacing = 8;
            win.margins = 10;
            
            // Group 1: Alignment and Anchor Point Mover
            var panelsGroup = win.add("group");
            panelsGroup.orientation = "row";
            panelsGroup.alignChildren = ["fill", "top"];
            panelsGroup.spacing = 5;

            // Align Panel
            var alignPanel = panelsGroup.add("panel", undefined, "Align");
            alignPanel.orientation = "column";
            alignPanel.alignChildren = ["center", "center"];
            alignPanel.spacing = 5;

            alignPanel.add("statictext", undefined, "Align Layers to:");

            var alignButtonsGroup = alignPanel.add("group");
            alignButtonsGroup.orientation = "row";
            alignButtonsGroup.spacing = 2;

            var alignLeftBtn = alignButtonsGroup.add("button", undefined, "←");
            var alignCenterHBtn = alignButtonsGroup.add("button", undefined, "⟐");
            var alignRightBtn = alignButtonsGroup.add("button", undefined, "→");

            var alignButtonsGroup2 = alignPanel.add("group");
            alignButtonsGroup2.orientation = "row";
            alignButtonsGroup2.spacing = 2;

            var alignTopBtn = alignButtonsGroup2.add("button", undefined, "↑");
            var alignCenterVBtn = alignButtonsGroup2.add("button", undefined, "⟑");
            var alignBottomBtn = alignButtonsGroup2.add("button", undefined, "↓");

            alignLeftBtn.size = [30, 30];
            alignCenterHBtn.size = [30, 30];
            alignRightBtn.size = [30, 30];
            alignTopBtn.size = [30, 30];
            alignCenterVBtn.size = [30, 30];
            alignBottomBtn.size = [30, 30];

            // Anchor Point Mover Panel
            var anchorPanel = panelsGroup.add("panel", undefined, "Anchor Point Mover");
            anchorPanel.orientation = "column";
            anchorPanel.alignChildren = ["center", "center"];
            anchorPanel.spacing = 2;

            var anchorRow1 = anchorPanel.add("group");
            anchorRow1.spacing = 2;
            var anchorTopLeftBtn = anchorRow1.add("button", undefined, "↖");
            var anchorTopCenterBtn = anchorRow1.add("button", undefined, "↑");
            var anchorTopRightBtn = anchorRow1.add("button", undefined, "↗");

            var anchorRow2 = anchorPanel.add("group");
            anchorRow2.spacing = 2;
            var anchorMiddleLeftBtn = anchorRow2.add("button", undefined, "←");
            var anchorCenterBtn = anchorRow2.add("button", undefined, "•");
            var anchorMiddleRightBtn = anchorRow2.add("button", undefined, "→");

            var anchorRow3 = anchorPanel.add("group");
            anchorRow3.spacing = 2;
            var anchorBottomLeftBtn = anchorRow3.add("button", undefined, "↙");
            var anchorBottomCenterBtn = anchorRow3.add("button", undefined, "↓");
            var anchorBottomRightBtn = anchorRow3.add("button", undefined, "↘");

            anchorTopLeftBtn.size = [30, 30];
            anchorTopCenterBtn.size = [30, 30];
            anchorTopRightBtn.size = [30, 30];
            anchorMiddleLeftBtn.size = [30, 30];
            anchorCenterBtn.size = [30, 30];
            anchorMiddleRightBtn.size = [30, 30];
            anchorBottomLeftBtn.size = [30, 30];
            anchorBottomCenterBtn.size = [30, 30];
            anchorBottomRightBtn.size = [30, 30];

            // Group 2: Precomp and Center Tools Panel
            var precompPanel = win.add("panel", undefined, "Precomp & Center Tools");
            precompPanel.orientation = "column";
            precompPanel.alignChildren = ["fill", "top"];
            precompPanel.spacing = 5;
            
            var precompGroup = precompPanel.add("group");
            precompGroup.orientation = "row";
            precompGroup.alignChildren = ["fill", "center"];
            precompGroup.spacing = 5;

            var precompSingleButton = precompGroup.add("button", undefined, "Precomp Together");
            precompSingleButton.size = [190, 25];

            var precompSeparateButton = precompGroup.add("button", undefined, "Precomp Separately");
            precompSeparateButton.size = [190, 25];

            var organizeBtn = precompPanel.add("button", undefined, "Organize Project Files");
            organizeBtn.size = [380, 25];

            var trimButtonsGroup = precompPanel.add("group");
            trimButtonsGroup.orientation = "row";
            trimButtonsGroup.alignChildren = ["fill", "center"];
            trimButtonsGroup.spacing = 5;

            var deleteBeforeBtn = trimButtonsGroup.add("button", undefined, "Delete Before");
            var deleteAfterBtn = trimButtonsGroup.add("button", undefined, "Delete After");
            deleteBeforeBtn.size = [190, 25];
            deleteAfterBtn.size = [190, 25];
            
            // Group 3: SRT Tools Panel
            var srtPanel = win.add("panel", undefined, "SRT Tools");
            srtPanel.orientation = "column";
            srtPanel.alignChildren = ["fill", "top"];
            srtPanel.spacing = 5;

            var srtButtonsGroup = srtPanel.add("group");
            srtButtonsGroup.orientation = "row";
            srtButtonsGroup.spacing = 5;
            var importSRTBtn = srtButtonsGroup.add("button", undefined, "Import SRT");
            var editSRTBtn = srtButtonsGroup.add("button", undefined, "Edit SRT");
            importSRTBtn.size = [190, 25];
            editSRTBtn.size = [190, 25];

            // Group 4: Layer Creation Panel
            var layerCreationPanel = win.add("panel", undefined, "Layer Creation");
            layerCreationPanel.orientation = "column";
            layerCreationPanel.alignChildren = ["fill", "top"];
            layerCreationPanel.spacing = 5;
            
            var layerCreationRow1 = layerCreationPanel.add("group");
            layerCreationRow1.spacing = 5;
            var solBtn = layerCreationRow1.add("button", undefined, "SOL");
            var shaBtn = layerCreationRow1.add("button", undefined, "SHA");
            var nulBtn = layerCreationRow1.add("button", undefined, "NUL");
            var camBtn = layerCreationRow1.add("button", undefined, "CAM");
            var textBtn = layerCreationRow1.add("button", undefined, "TEXT");

            solBtn.size = [76, 25];
            shaBtn.size = [76, 25];
            nulBtn.size = [76, 25];
            camBtn.size = [76, 25];
            textBtn.size = [76, 25];

            var layerCreationRow2 = layerCreationPanel.add("group");
            layerCreationRow2.orientation = "row";
            layerCreationRow2.spacing = 5;
            layerCreationRow2.margins = 0;
            layerCreationRow2.alignChildren = ["left", "center"];
            var grampBtn = layerCreationRow2.add("button", undefined, "GRAMP");
            var fitBtn = layerCreationRow2.add("button", undefined, "FIT");
            var glueBtn = layerCreationRow2.add("button", undefined, "GLOW");
            var adjBtn = layerCreationRow2.add("button", undefined, "ADJ");
            var mirBtn = layerCreationRow2.add("button", undefined, "MIR");

            grampBtn.size = [76, 25];
            fitBtn.size = [76, 25];
            glueBtn.size = [76, 25];
            adjBtn.size = [76, 25];
            mirBtn.size = [76, 25];

            var layerCreationRow3 = layerCreationPanel.add("group");
            layerCreationRow3.spacing = 5;
            var fillBtn = layerCreationRow3.add("button", undefined, "FILL");
            var tintBtn = layerCreationRow3.add("button", undefined, "TINT");
            var blurBtn = layerCreationRow3.add("button", undefined, "BLUR");
            var lumBtn = layerCreationRow3.add("button", undefined, "LUM");
            var curvBtn = layerCreationRow3.add("button", undefined, "CURV");

            fillBtn.size = [76, 25];
            tintBtn.size = [76, 25];
            blurBtn.size = [76, 25];
            lumBtn.size = [76, 25];
            curvBtn.size = [76, 25];

            // Group 5: Number Counter Panel
            var counterPanel = win.add("panel", undefined, "Number Counter");
            counterPanel.orientation = "column";
            counterPanel.alignChildren = ["fill", "top"];
            counterPanel.spacing = 5;

            var counterRow1 = counterPanel.add("group");
counterRow1.spacing = 5;
counterRow1.add("statictext", undefined, "Start:");
var startValueInput = counterRow1.add("edittext", undefined, "100000", {characters: 20}); // Increased from 6 to 10
counterRow1.add("statictext", undefined, "End:");
var endValueInput = counterRow1.add("edittext", undefined, "900000", {characters: 10}); // Increased from 6 to 10
counterRow1.add("statictext", undefined, "Symbol:");
var symbolInput = counterRow1.add("edittext", undefined, "$", {characters: 6}); // Increased from 4 to 6
counterRow1.add("statictext", undefined, "Position:");
var symbolPositionDropdown = counterRow1.add("dropdownlist", undefined, ["Prefix", "Suffix"]);
symbolPositionDropdown.selection = 0;
counterRow1.add("statictext", undefined, "FPS:");
var fpsInput = counterRow1.add("edittext", undefined, "30", {characters: 6}); // Increased from 4 to 6

            var counterButtons = counterPanel.add("group");
            counterButtons.spacing = 5;
            var applyCounterBtn = counterButtons.add("button", undefined, "Apply Counter");
            var posterizeBtn = counterButtons.add("button", undefined, "Posterize");
            applyCounterBtn.size = [190, 25];
            posterizeBtn.size = [190, 25];

            // Add an "i" (info) button at the top of the panel
            var infoBtn = win.add("button", undefined, "About");
            infoBtn.size = [120, 30];
            infoBtn.alignment = ["right", "top"];

            // --- Functionality ---
            // Align Left
            alignLeftBtn.onClick = function() {
                app.beginUndoGroup("Align Left");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var layerWidth = layer.sourceRectAtTime(comp.time, false).width;
                        layer.transform.position.setValue([layerWidth / 2, layer.transform.position.value[1]]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            // Align Center Horizontally
            alignCenterHBtn.onClick = function() {
                app.beginUndoGroup("Align Center Horizontally");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    var compWidth = comp.width;
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.transform.position.setValue([compWidth / 2, layer.transform.position.value[1]]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            // Align Right
            alignRightBtn.onClick = function() {
                app.beginUndoGroup("Align Right");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    var compWidth = comp.width;
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var layerWidth = layer.sourceRectAtTime(comp.time, false).width;
                        layer.transform.position.setValue([compWidth - layerWidth / 2, layer.transform.position.value[1]]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            // Align Top
            alignTopBtn.onClick = function() {
                app.beginUndoGroup("Align Top");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var layerHeight = layer.sourceRectAtTime(comp.time, false).height;
                        layer.transform.position.setValue([layer.transform.position.value[0], layerHeight / 2]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            // Align Center Vertically
            alignCenterVBtn.onClick = function() {
                app.beginUndoGroup("Align Center Vertically");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    var compHeight = comp.height;
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.transform.position.setValue([layer.transform.position.value[0], compHeight / 2]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            // Align Bottom
            alignBottomBtn.onClick = function() {
                app.beginUndoGroup("Align Bottom");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    var compHeight = comp.height;
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var layerHeight = layer.sourceRectAtTime(comp.time, false).height;
                        layer.transform.position.setValue([layer.transform.position.value[0], compHeight - layerHeight / 2]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            // Precomp Together
            precompSingleButton.onClick = function() {
                app.beginUndoGroup("Precomp Together");
                try {
                    var comp = app.project.activeItem;
                    if (!(comp && comp instanceof CompItem)) {
                        alert("Please select a composition.");
                        return;
                    }
                    var selectedLayers = comp.selectedLayers;
                    if (selectedLayers.length === 0) {
                        alert("Please select at least one layer to precompose.");
                        return;
                    }
                    var minInPoint = selectedLayers[0].inPoint;
                    var maxOutPoint = selectedLayers[0].outPoint;
                    for (var i = 0; i < selectedLayers.length; i++) {
                        if (selectedLayers[i].inPoint < minInPoint) minInPoint = selectedLayers[i].inPoint;
                        if (selectedLayers[i].outPoint > maxOutPoint) maxOutPoint = selectedLayers[i].outPoint;
                    }
                    var layerIndices = [];
                    for (var i = 0; i < selectedLayers.length; i++) {
                        layerIndices.push(selectedLayers[i].index);
                    }
                    var precompName = comp.name + "_Precomp_" + (comp.numLayers + 1);
                    var precomp = comp.layers.precompose(layerIndices, precompName, true);
                    precomp.duration = maxOutPoint - minInPoint;
                    for (var i = 1; i <= precomp.numLayers; i++) {
                        var layer = precomp.layer(i);
                        layer.startTime -= minInPoint;
                    }
                    var precompLayer = comp.selectedLayers[0];
                    if (precompLayer) {
                        precompLayer.startTime = minInPoint;
                    } else {
                        alert("Failed to find the precomp layer.");
                    }
                } catch (e) {
                    alert("Error: " + e.toString());
                }
                app.endUndoGroup();
            };

            // Precomp Separately
            precompSeparateButton.onClick = function() {
                app.beginUndoGroup("Precomp Separately");
                try {
                    var comp = app.project.activeItem;
                    if (!(comp && comp instanceof CompItem)) {
                        alert("Please select a composition.");
                        return;
                    }
                    var selectedLayers = comp.selectedLayers;
                    if (selectedLayers.length === 0) {
                        alert("Please select at least one layer to precompose.");
                        return;
                    }
                    for (var i = 0; i < selectedLayers.length; i++) {
                        var layer = selectedLayers[i];
                        var minInPoint = layer.inPoint;
                        var maxOutPoint = layer.outPoint;
                        var layerIndices = [layer.index];
                        var precompName = comp.name + "_Precomp_" + layer.name + "_" + (comp.numLayers + 1);
                        var precomp = comp.layers.precompose(layerIndices, precompName, true);
                        precomp.duration = maxOutPoint - minInPoint;
                        for (var j = 1; j <= precomp.numLayers; j++) {
                            var precompLayerInside = precomp.layer(j);
                            precompLayerInside.startTime -= minInPoint;
                        }
                        var precompLayer = comp.selectedLayers[0];
                        if (precompLayer) {
                            precompLayer.startTime = minInPoint;
                        } else {
                            alert("Failed to find the precomp layer for layer " + layer.name + ".");
                        }
                    }
                } catch (e) {
                    alert("Error: " + e.toString());
                }
                app.endUndoGroup();
            };

            // After other button onClick functions
// Default settings and objects setup
organizeBtn.onClick = function() {
    mainOrganizer();
};
var defaultSettings = new Object();
defaultSettings.folderNames = new Array("Comps", "Footage", "tmp", "Solids", "Precomps");
defaultSettings.folderObjects = new Array();
defaultSettings.placeholderObjects = new Array();

// Helper Functions from @medel.fpv's Script

// Retrieves project items based on type and updates the UI
function fetchProjectItems(itemType, windowContext) {
    statusDisplay = windowContext;
    statusDisplay.text = "Cleaning your mess 🧹...";
    var itemCategories = new Array("Composition", "Folder", "Footage");
    for (var index = 0; index < 3; index++) {
        if (itemType == itemCategories[index]) {
            projectItems = new Array();
            project = app.project;
            itemCount = project.numItems;
            for (var i = 1; i <= itemCount; i++) {
                currentItem = project.item(i);
                if (currentItem.typeName == itemType) {
                    projectItems[projectItems.length] = currentItem;
                }
            }
            return projectItems;
        }
    }
}

// Moves items to specified folder and updates progress in the UI
function relocateItems(itemsArray, destinationFolder, windowContext) {
    statusDisplay = windowContext.statusGrp.status;
    progressBar = windowContext.progBar;
    var arrayLength = itemsArray.length;
    for (var i = 0; i < arrayLength; i++) {
        itemsArray[i].parentFolder = destinationFolder;
        statusDisplay.text = "Moving " + itemsArray[i].name;
        progressBar.value++;
    }
}

// Gathers placeholders from the project
function collectPlaceholders() {
    var itemTotal = app.project.numItems;
    for (var index = 1; index <= itemTotal; index++) {
        currentItem = app.project.item(index);
        for (var i = 0; i < 4; i++) {
            if ((currentItem instanceof FootageItem) && (currentItem.name == "Placeholder")) {
                defaultSettings.placeholderObjects[defaultSettings.placeholderObjects.length] = currentItem;
                break;
            }
        }
    }
    return defaultSettings.placeholderObjects;
}

// Collects folder objects based on predefined names
function collectFolderObjects() {
    var itemTotal = app.project.numItems;
    for (var index = 1; index <= itemTotal; index++) {
        currentItem = app.project.item(index);
        for (var i = 0; i < 4; i++) {
            if ((currentItem instanceof FolderItem) && (currentItem.name == defaultSettings.folderNames[i])) {
                defaultSettings.folderObjects[defaultSettings.folderObjects.length] = currentItem;
                break;
            }
        }
    }
}

// Fetches items based on file extension type
function fetchByExtension(extensionName, itemType, mediaType, windowContext) {
    function extractExtension(fileName) {
        var parts = fileName.split(".");
        if (parts.length > 1) {
            return parts[parts.length - 1].toLowerCase();
        } else {
            return null;
        }
    }
    statusDisplay = windowContext.statusGrp.status;
    matchedItems = new Array();
    project = app.project;
    itemTotal = project.numItems;
    for (var i = 1; i <= itemTotal; i++) {
        currentItem = project.item(i);
        statusDisplay.text = "Grabbing all " + itemType + "...";
        if (eval("currentItem instanceof " + itemType)) {
            extension = extractExtension(currentItem.name);
            userExtension = extensionName.toLowerCase();
            if (extension == userExtension) {
                if ((currentItem.duration > 1) && (mediaType == "Video")) {
                    matchedItems[matchedItems.length] = currentItem;
                } else if ((currentItem.duration == 0) && (mediaType == "Still")) {
                    matchedItems[matchedItems.length] = currentItem;
                } else {
                    matchedItems[matchedItems.length] = currentItem;
                }
            }
        }
    }
    return matchedItems.length >= 1 ? matchedItems : null;
}

// Gathers all extensions from project items and sorts them
function getAllExtensions() {
    allExtensions = new Array();
    project = app.project;
    totalItems = project.numItems;
    hasFootage = false;
    for (var i = 1; i <= totalItems; i++) {
        currentItem = project.item(i);
        var parts = currentItem.name.split(".");
        if (currentItem instanceof FootageItem) {
            if (parts.length > 1) {
                allExtensions[allExtensions.length] = parts[parts.length - 1].toLowerCase();
            }
        }
    }
    allExtensions = sortAndDeduplicate(allExtensions);
    return allExtensions;
}

// Sorts an array and removes duplicates
function sortAndDeduplicate(inputArray) {
    var sortedArray = inputArray.sort();
    var arrayLength = sortedArray.length;
    var uniqueResults = new Array();
    for (var i = 0; i < arrayLength; i++) {
        if (sortedArray[i] != sortedArray[i + 1]) {
            uniqueResults[uniqueResults.length] = sortedArray[i];
        }
    }
    return uniqueResults;
}

// Collects all solid items from the project
function fetchAllSolids(statusObj) {
    solidsArray = new Array();
    project = app.project;
    totalItems = project.numItems;
    statusObj.text = "Retrieving all solids...";
    for (var i = 1; i <= totalItems; i++) {
        currentItem = project.item(i);
        if (currentItem.duration == 0) {
            if (currentItem.mainSource.color) {
                solidsArray[solidsArray.length] = currentItem;
            }
        }
    }
    return solidsArray;
}

// Collects all precomposition items from the project
function fetchAllPrecomps(statusObj) {
    precompArray = new Array();
    project = app.project;
    totalItems = project.numItems;
    statusObj.text = "Retrieving all precomps...";
    for (var i = 1; i <= totalItems; i++) {
        currentItem = project.item(i);
        if (currentItem instanceof CompItem) {
            if (currentItem.usedIn.length > 0) {
                precompArray[precompArray.length] = currentItem;
            }
        }
    }
    return precompArray;
}

// Main organizer function (adapted to work without standalone UI)
function mainOrganizer() {
    // Initializes the progress bar UI and starts the organization process
    function initializeProgress() {
        var progressWindowResource = "palette{orientation:'column', alignChildren:['fill', 'top'],\n\t\tstatusGrp: Group{orientation:'stack', alignment:['fill', 'top'], alignChildren:['fill', 'top'],\n\t\t\tstatus: StaticText{text:'Organizing...', alignment:['fill', 'center'], preferredSize:[300, -1]},\n\t\t},\n\t\tprogBar: Progressbar{text:'myProgBar', value:0},\n\t}";
        var progressWindow = new Window(progressWindowResource);
        progressWindow.center();
        var statusText = progressWindow.statusGrp.status;
        progressWindow.show();
        app.beginUndoGroup("Project Cleanup");
        extensionsSorted = getAllExtensions().sort();
        extensionsLength = extensionsSorted.length;
        var comps = fetchProjectItems("Composition", statusText);
        var compsLength = comps.length;
        var footageItems = fetchProjectItems("Footage", statusText);
        var footageLength = footageItems.length;
        var folders = fetchProjectItems("Folder", statusText);
        var folderLength = folders.length;
        var solids = fetchAllSolids(statusText);
        var solidsLength = solids.length;
        var preComps = fetchAllPrecomps(statusText);
        var preCompsLength = preComps.length;
        var placeholders = collectPlaceholders();
        var placeholdersLength = placeholders.length;
        compFolder = app.project.items.addFolder(defaultSettings.folderNames[0]);
        footageFolder = app.project.items.addFolder(defaultSettings.folderNames[1]);
        tempFolder = app.project.items.addFolder(defaultSettings.folderNames[2]);
        solidFolder = app.project.items.addFolder(defaultSettings.folderNames[3]);
        precompFolder = app.project.items.addFolder(defaultSettings.folderNames[4]);
        if (placeholdersLength > 0) {
            placeholderFolder = app.project.items.addFolder("Placeholder");
            placeholderFolder.parentFolder = footageFolder;
        }
        progressWindow.progBar.maxvalue = parseInt(extensionsLength + compsLength + footageLength + folderLength + solidsLength + preCompsLength + placeholdersLength);
        relocateItems(folders, tempFolder, progressWindow);
        relocateItems(comps, compFolder, progressWindow);
        relocateItems(preComps, precompFolder, progressWindow);
        precompFolder.parentFolder = compFolder;
        relocateItems(footageItems, footageFolder, progressWindow);
        for (var index = 0; index < extensionsLength; index++) {
            extensionFolder = app.project.items.addFolder(extensionsSorted[index]);
            statusText.text = "Creating " + extensionsSorted[index] + " folder...";
            matchingItems = fetchByExtension(extensionsSorted[index], "FootageItem", "", progressWindow);
            progressWindow.progBar.maxvalue += matchingItems.length;
            relocateItems(matchingItems, extensionFolder, progressWindow);
            extensionFolder.parentFolder = footageFolder;
        }
        if (placeholdersLength > 0) {
            relocateItems(placeholders, placeholderFolder, progressWindow);
        }
        relocateItems(solids, solidFolder, progressWindow);
        statusText.text = "Removing empty folders...";
        tempFolder.remove();
        app.endUndoGroup();
        progressWindow.progBar.value = progressWindow.progBar.maxvalue;
        statusText.text = "All done!";
        progressWindow.close();
    }

    // Starts the main function if a project is open
    if (app.project.file != null) {
        initializeProgress();
    } else {
        alert("⚠️ Save your project first! ⚠️");
    }
}
            grampBtn.onClick = function() {
                app.beginUndoGroup("Apply Gradient Ramp");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.Effects.addProperty("ADBE Ramp");
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            fitBtn.onClick = function() {
                var comp = app.project.activeItem;
                if (!comp || !(comp instanceof CompItem) || comp.selectedLayers.length === 0) {
                    alert("Please select at least one layer in an active composition.");
                    return;
                }
                var fitDialog = new Window("dialog", "Fit to Comp Options");
                fitDialog.orientation = "column";
                fitDialog.alignChildren = "fill";
                fitDialog.spacing = 10;
                fitDialog.margins = 16;
                var fitGroup = fitDialog.add("group");
                fitGroup.add("statictext", undefined, "Fit Option:");
                var fitDropdown = fitGroup.add("dropdownlist", undefined, ["Fit to Height (Ctrl+Alt+Shift+G)", "Fit to Width (Ctrl+Alt+Shift+H)"]);
                fitDropdown.selection = 0;
                var buttonGroup = fitDialog.add("group");
                buttonGroup.orientation = "row";
                buttonGroup.alignChildren = "center";
                var okBtn = buttonGroup.add("button", undefined, "OK");
                var cancelBtn = buttonGroup.add("button", undefined, "Cancel");
                okBtn.onClick = function() {
                    app.beginUndoGroup("Fit to Comp");
                    var compWidth = comp.width;
                    var compHeight = comp.height;
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var layerWidth = layer.sourceRectAtTime(comp.time, false).width;
                        var layerHeight = layer.sourceRectAtTime(comp.time, false).height;
                        if (fitDropdown.selection.index === 0) {
                            var scale = (compHeight / layerHeight) * 100;
                            layer.transform.scale.setValue([scale, scale]);
                        } else {
                            var scale = (compWidth / layerWidth) * 100;
                            layer.transform.scale.setValue([scale, scale]);
                        }
                    }
                    app.endUndoGroup();
                    fitDialog.close();
                };
                cancelBtn.onClick = function() { fitDialog.close(); };
                fitDialog.center();
                fitDialog.show();
            };

            glueBtn.onClick = function() {
                app.beginUndoGroup("Apply Deep Glow and Drop Shadow");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        try {
                            layer.Effects.addProperty("Deep Glow");
                        } catch (e) {
                            alert("Deep Glow plugin not found. Please ensure it is installed. Drop Shadow will still be applied.");
                        }
                        layer.Effects.addProperty("ADBE Drop Shadow");
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            adjBtn.onClick = function() {
                app.beginUndoGroup("Add Adjustment Layer");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem) {
                    if (comp.selectedLayers.length > 0) {
                        var selectedLayer = comp.selectedLayers[0];
                        var inPoint = selectedLayer.inPoint;
                        var outPoint = selectedLayer.outPoint;
                        var adjLayer = comp.layers.addSolid([1, 1, 1], "Adjustment Layer", comp.width, comp.height, 1);
                        adjLayer.adjustmentLayer = true;
                        adjLayer.inPoint = inPoint;
                        adjLayer.outPoint = outPoint;
                        var selectedLayerIndex = selectedLayer.index;
                        if (selectedLayerIndex > 1) {
                            adjLayer.moveBefore(comp.layer(selectedLayerIndex));
                        }
                    } else {
                        var adjLayer = comp.layers.addSolid([1, 1, 1], "Adjustment Layer", comp.width, comp.height, 1);
                        adjLayer.adjustmentLayer = true;
                        adjLayer.inPoint = 0;
                        adjLayer.outPoint = comp.duration;
                    }
                } else {
                    alert("Please select an active composition.");
                }
                app.endUndoGroup();
            };

            mirBtn.onClick = function() {
                app.beginUndoGroup("Mirror Layer");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var currentScale = layer.transform.scale.value;
                        layer.transform.scale.setValue([-currentScale[0], currentScale[1]]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            solBtn.onClick = function() {
                app.beginUndoGroup("Add Solid");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem) {
                    comp.layers.addSolid([1, 0, 0], "Solid", comp.width, comp.height, 1);
                } else {
                    alert("Please select an active composition.");
                }
                app.endUndoGroup();
            };

            shaBtn.onClick = function() {
                app.beginUndoGroup("Add Shape Layer");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem) {
                    comp.layers.addShape();
                } else {
                    alert("Please select an active composition.");
                }
                app.endUndoGroup();
            };

            nulBtn.onClick = function() {
                app.beginUndoGroup("Add Null Object");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem) {
                    if (comp.selectedLayers.length > 0) {
                        var selectedLayer = comp.selectedLayers[0];
                        var inPoint = selectedLayer.inPoint;
                        var outPoint = selectedLayer.outPoint;
                        var nullLayer = comp.layers.addNull();
                        nullLayer.name = "Null";
                        nullLayer.inPoint = inPoint;
                        nullLayer.outPoint = outPoint;
                        var selectedLayerIndex = selectedLayer.index;
                        if (selectedLayerIndex > 1) {
                            nullLayer.moveBefore(comp.layer(selectedLayerIndex));
                        }
                        selectedLayer.parent = nullLayer;
                    } else {
                        var nullLayer = comp.layers.addNull();
                        nullLayer.name = "Null";
                        nullLayer.inPoint = 0;
                        nullLayer.outPoint = comp.duration;
                    }
                } else {
                    alert("Please select an active composition.");
                }
                app.endUndoGroup();
            };

            camBtn.onClick = function() {
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem) {
                    app.beginUndoGroup("CAM");
                    var camera = comp.layers.addCamera("Camera 1", [comp.width / 2, comp.height / 2]);
                    var centerX = comp.width / 2;
                    var centerY = comp.height / 2;
                    var posZ = (-2.777 * comp.width) / 2;
                    camera.property("Position").setValue([centerX, centerY, posZ]);
                    camera.property("Point of Interest").setValue([centerX, centerY, 0]);
                    var selectedLayers = comp.selectedLayers;
                    if (selectedLayers.length > 0) {
                        var selectedLayer = selectedLayers[0];
                        camera.inPoint = selectedLayer.inPoint;
                        camera.outPoint = selectedLayer.outPoint;
                        camera.moveBefore(selectedLayer);
                    } else {
                        camera.inPoint = 0;
                        camera.outPoint = comp.duration;
                        if (comp.numLayers > 0) {
                            camera.moveBefore(comp.layer(1));
                        }
                    }
                    app.endUndoGroup();
                } else {
                    alert("Please select a composition.");
                }
            };

            textBtn.onClick = function() {
                app.beginUndoGroup("Add Text Layer");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem) {
                    var textLayer = comp.layers.addText("Text");
                    textLayer.transform.position.setValue([comp.width / 2, comp.height / 2]);
                } else {
                    alert("Please select an active composition.");
                }
                app.endUndoGroup();
            };

            fillBtn.onClick = function() {
                app.beginUndoGroup("Apply Fill Effect");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.Effects.addProperty("ADBE Fill");
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            tintBtn.onClick = function() {
                app.beginUndoGroup("Apply Tint Effect");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.Effects.addProperty("ADBE Tint");
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            blurBtn.onClick = function() {
                app.beginUndoGroup("Apply Gaussian Blur");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.Effects.addProperty("ADBE Gaussian Blur 2");
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            lumBtn.onClick = function() {
                app.beginUndoGroup("Apply Lumetri Color");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.Effects.addProperty("ADBE Lumetri");
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            curvBtn.onClick = function() {
                app.beginUndoGroup("Apply Curves");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        layer.Effects.addProperty("ADBE CurvesCustom");
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            applyCounterBtn.onClick = function() {
                var startValue = parseFloat(startValueInput.text);
                var endValue = parseFloat(endValueInput.text);
                var symbol = symbolInput.text;
                var symbolPosition = symbolPositionDropdown.selection.text;

                if (isNaN(startValue) || isNaN(endValue)) {
                    alert("Please enter valid numbers.");
                    return;
                }

                var comp = app.project.activeItem;
                if (!comp || !(comp instanceof CompItem)) {
                    alert("Please open a composition and select a text layer.");
                    return;
                }

                var selectedLayer = comp.selectedLayers[0];
                if (!selectedLayer || !selectedLayer.property("Source Text")) {
                    alert("Please select a text layer.");
                    return;
                }

                app.beginUndoGroup("Apply Number Counter Keyframes");

                var angleEffect = selectedLayer.Effects.addProperty("ADBE Angle Control");
                angleEffect.name = "Counter Angle";

                var startTime = comp.time;
                var endTime = comp.time + 1;

                angleEffect.property("Angle").setValueAtTime(startTime, startValue);
                angleEffect.property("Angle").setInterpolationTypeAtKey(1, KeyframeInterpolationType.LINEAR);

                angleEffect.property("Angle").setValueAtTime(endTime, endValue);
                angleEffect.property("Angle").setInterpolationTypeAtKey(2, KeyframeInterpolationType.LINEAR);

                var textProp = selectedLayer.property("Source Text");
                var expression = "num = '' + effect('Counter Angle')('Angle').value.toFixed() + '';\n" +
                                "function addCommas(x) {\n" +
                                "    return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n" +
                                "}\n";
                if (symbolPosition === "Prefix") {
                    expression += "'" + symbol + "' + addCommas(num);";
                } else {
                    expression += "addCommas(num) + '" + symbol + "';";
                }

                textProp.expression = expression;

                app.endUndoGroup();
            };

            posterizeBtn.onClick = function() {
                var posterizeFPS = parseFloat(fpsInput.text);

                if (isNaN(posterizeFPS) || posterizeFPS <= 0) {
                    alert("Please enter a valid FPS value.");
                    return;
                }

                var comp = app.project.activeItem;
                if (!comp || !(comp instanceof CompItem)) {
                    alert("Please open a composition and select a text layer.");
                    return;
                }

                var selectedLayer = comp.selectedLayers[0];
                if (!selectedLayer || !selectedLayer.property("Source Text")) {
                    alert("Please select a text layer.");
                    return;
                }

                app.beginUndoGroup("Apply Posterize Time");

                var textProp = selectedLayer.property("Source Text");
                var currentExpression = textProp.expression;

                var newExpression = currentExpression.replace(/posterizeTime\(\d+\.?\d*\);?\n?/g, "");
                textProp.expression = "posterizeTime(" + posterizeFPS + ");\n" + newExpression;

                app.endUndoGroup();
            };

            function deleteBefore() {
                app.beginUndoGroup("Delete Before");
                var comp = app.project.activeItem;
                if (!(comp && comp instanceof CompItem)) {
                    alert("Please select a composition first.");
                    return;
                }
                var selectedLayers = comp.selectedLayers;
                if (selectedLayers.length === 0) {
                    alert("Please select at least one layer to trim.");
                    return;
                }
                var currentTime = comp.time;
                for (var i = 0; i < selectedLayers.length; i++) {
                    var layer = selectedLayers[i];
                    if (layer.inPoint >= currentTime || layer.outPoint <= currentTime) {
                        alert("Playhead must be within the layer's duration for " + layer.name);
                        continue;
                    }
                    var originalOutPoint = layer.outPoint;
                    layer.inPoint = currentTime;
                    if (layer.outPoint > originalOutPoint) {
                        layer.outPoint = originalOutPoint;
                    }
                }
                app.endUndoGroup();
            }

            function deleteAfter() {
                app.beginUndoGroup("Delete After");
                var comp = app.project.activeItem;
                if (!(comp && comp instanceof CompItem)) {
                    alert("Please select a composition first.");
                    return;
                }
                var selectedLayers = comp.selectedLayers;
                if (selectedLayers.length === 0) {
                    alert("Please select at least one layer to trim.");
                    return;
                }
                var currentTime = comp.time;
                for (var i = 0; i < selectedLayers.length; i++) {
                    var layer = comp.selectedLayers[i];
                    if (layer.inPoint >= currentTime || layer.outPoint <= currentTime) {
                        alert("Playhead must be within the layer's duration for " + layer.name);
                        continue;
                    }
                    layer.outPoint = currentTime;
                }
                app.endUndoGroup();
            }

            deleteBeforeBtn.onClick = deleteBefore;
            deleteAfterBtn.onClick = deleteAfter;

            function TimeToFrames(time, comp) {
                var frames = time * (1.0 / comp.frameDuration);
                return frames;
            }

            function FramesToTime(frames, comp) {
                var time = frames / (1.0 / comp.frameDuration);
                return time;
            }

            function Time(timeInString) {
                var t = timeInString.split(":");
                var s = parseInt(t[0])*3600 + parseInt(t[1])*60 + parseFloat(t[2].replace(",","."));
                return s;
            }

            function formatTime(seconds) {
                var h = Math.floor(seconds/3600);
                var m = Math.floor((seconds%3600)/60);
                var s = Math.floor(seconds%60);
                var ms = Math.round((seconds%1)*1000);
                return padZero(h) + ":" + padZero(m) + ":" + padZero(s) + "," + padZero(ms);
            }

            function formatTimeSimple(seconds) {
                var h = Math.floor(seconds/3600);
                var m = Math.floor((seconds%3600)/60);
                var s = Math.floor(seconds%60);
                return padZero(h) + ":" + padZero(m) + ":" + padZero(s);
            }

            function padZero(num, size) {
                size = size || 2;
                var s = "000" + num;
                return s.substr(s.length-size);
            }

            importSRTBtn.onClick = function() {
                app.beginUndoGroup("Import SRT");
                var comp = app.project.activeItem;
                if (comp instanceof CompItem) {
                    var srt = File.openDialog("Select a text file to open.", "SRT subtitles:*.srt");
                    if (srt != null) {
                        srt.open("r");
                        while (!srt.eof) {
                            var layer = comp.layers.addText("SRT");
                            var sourceText = layer.property("sourceText");
                            var line = srt.readln();
                            while (line == "") {
                                line = srt.readln();
                            }
                            line = srt.readln();
                            var times = line.split("-->");
                            var f = Time(times[0]);
                            var l = Time(times[1]);
                            var text = "";
                            while ((line = srt.readln()) != "") {
                                text += line.replace(/<(.*?)>/g, "")+"\r\n";
                            }
                            sourceText.setValue(text);
                            var inFrame = TimeToFrames(f, comp);
                            var outFrame = TimeToFrames(l, comp);
                            var roundedInFrame = Math.round(inFrame);
                            var roundedOutFrame = Math.round(outFrame);
                            var inTime = FramesToTime(roundedInFrame, comp);
                            var outTime = FramesToTime(roundedOutFrame, comp);
                            layer.inPoint = inTime;
                            layer.outPoint = outTime;
                        }
                        srt.close();
                    }
                } else {
                    alert("Please select a composition first.");
                }    
                app.endUndoGroup();
            };

            editSRTBtn.onClick = function() {
                var comp = app.project.activeItem;
                if (!(comp instanceof CompItem)) {
                    alert("Please select a composition first.");
                    return;
                }

                var editorWin = new Window("palette", "Subtitle Editor");
                editorWin.orientation = "column";
                editorWin.alignChildren = ["fill", "top"];
                editorWin.spacing = 10;
                editorWin.margins = 16;

                var listPanel = editorWin.add("panel", undefined, "Subtitles");
                listPanel.alignChildren = ["fill", "top"];
                var subtitleList = listPanel.add("listbox", undefined, [], {multiselect: false});
                subtitleList.preferredSize.height = 120;
                subtitleList.preferredSize.width = 200;

                var editPanel = editorWin.add("panel", undefined, "Edit Subtitle");
                editPanel.alignChildren = ["fill", "top"];
                editPanel.spacing = 5;

                var textArea = editPanel.add("edittext", undefined, "", {multiline: true});
                textArea.preferredSize.height = 60;

                var timingGroup = editPanel.add("group");
                timingGroup.orientation = "row";
                timingGroup.spacing = 5;

                timingGroup.add("statictext", undefined, "In:");
                var inTime = timingGroup.add("edittext", undefined, "00:00:00,000");
                inTime.characters = 12;

                timingGroup.add("statictext", undefined, "Out:");
                var outTime = timingGroup.add("edittext", undefined, "00:00:00,000");
                outTime.characters = 12;

                var btnGroup = editPanel.add("group");
                btnGroup.orientation = "row";
                btnGroup.spacing = 10;
                var updateBtn = btnGroup.add("button", undefined, "Update");
                var refreshBtn = btnGroup.add("button", undefined, "Refresh List");

                function refreshSubtitleList() {
                    subtitleList.removeAll();
                    var textLayers = [];
                    for (var i = 1; i <= comp.numLayers; i++) {
                        var layer = comp.layer(i);
                        if (layer instanceof TextLayer) {
                            textLayers.push({
                                index: i,
                                inTime: layer.inPoint,
                                outTime: layer.outPoint,
                                text: layer.property("Source Text").value.text.split("\r\n")[0]
                            });
                        }
                    }
                    for (var j = textLayers.length - 1; j >= 0; j--) {
                        var item = textLayers[j];
                        var timeDisplay = formatTimeSimple(item.inTime) + " > " + formatTimeSimple(item.outTime);
                        var displayText = timeDisplay + " | " + item.text;
                        subtitleList.add("item", displayText);
                    }
                }

                function updateSubtitle() {
                    if (subtitleList.selection === null) {
                        alert("Please select a subtitle to update.");
                        return;
                    }

                    app.beginUndoGroup("Update Subtitle");
                    var index = subtitleList.selection.index;
                    var textLayers = [];
                    for (var i = 1; i <= comp.numLayers; i++) {
                        var currentLayer = comp.layer(i);
                        if (currentLayer instanceof TextLayer) {
                            textLayers.unshift(currentLayer);
                        }
                    }
                    var layer = textLayers[index];
                    if (layer) {
                        try {
                            var textProp = layer.property("Source Text");
                            var textDocument = textProp.value;
                            textDocument.text = textArea.text;
                            textProp.setValue(textDocument);
                            layer.inPoint = Time(inTime.text);
                            layer.outPoint = Time(outTime.text);
                            refreshSubtitleList();
                        } catch(e) {
                            alert("Error updating subtitle: " + e.toString());
                        }
                    }
                    app.endUndoGroup();
                }

                subtitleList.onChange = function() {
                    if (subtitleList.selection === null) return;
                    var textLayers = [];
                    for (var i = 1; i <= comp.numLayers; i++) {
                        var currentLayer = comp.layer(i);
                        if (currentLayer instanceof TextLayer) {
                            textLayers.unshift(currentLayer);
                        }
                    }
                    var layer = textLayers[subtitleList.selection.index];
                    if (layer) {
                        textArea.text = layer.property("Source Text").value.text;
                        inTime.text = formatTime(layer.inPoint);
                        outTime.text = formatTime(layer.outPoint);
                    }
                };

                updateBtn.onClick = updateSubtitle;
                refreshBtn.onClick = refreshSubtitleList;

                refreshSubtitleList();
                editorWin.center();
                editorWin.show();
            };

            // Anchor Point Mover Functions
            anchorTopLeftBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Top-Left");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left, rect.top];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorTopCenterBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Top-Center");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left + rect.width / 2, rect.top];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorTopRightBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Top-Right");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left + rect.width, rect.top];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorMiddleLeftBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Middle-Left");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left, rect.top + rect.height / 2];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorCenterBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Center");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left + rect.width / 2, rect.top + rect.height / 2];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorMiddleRightBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Middle-Right");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left + rect.width, rect.top + rect.height / 2];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorBottomLeftBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Bottom-Left");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left, rect.top + rect.height];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorBottomCenterBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Bottom-Center");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left + rect.width / 2, rect.top + rect.height];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };

            anchorBottomRightBtn.onClick = function() {
                app.beginUndoGroup("Move Anchor Point to Bottom-Right");
                var comp = app.project.activeItem;
                if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) {
                    for (var i = 0; i < comp.selectedLayers.length; i++) {
                        var layer = comp.selectedLayers[i];
                        var rect = layer.sourceRectAtTime(comp.time, false);
                        var currentPosition = layer.transform.position.value;
                        var currentAnchor = layer.transform.anchorPoint.value;
                        var newAnchor = [rect.left + rect.width, rect.top + rect.height];
                        layer.transform.anchorPoint.setValue(newAnchor);
                        var anchorDelta = [newAnchor[0] - currentAnchor[0], newAnchor[1] - currentAnchor[1]];
                        layer.transform.position.setValue([
                            currentPosition[0] + anchorDelta[0],
                            currentPosition[1] + anchorDelta[1]
                        ]);
                    }
                } else {
                    alert("Please select at least one layer in an active composition.");
                }
                app.endUndoGroup();
            };
    
            // Info button onClick event to open the info window
            infoBtn.onClick = function() {
                // Create a new window for the info panel
                var infoWin = new Window("dialog", "Info");
                infoWin.orientation = "column";
                infoWin.alignChildren = ["center", "center"];
                infoWin.spacing = 10;
                infoWin.margins = 16;

                // Add the message
                infoWin.add("statictext", undefined, "This script is made by Harsh.");
                // Add Instagram link as a clickable button
                var instaGroup = infoWin.add("group");
                instaGroup.orientation = "row";
                instaGroup.alignChildren = ["center", "center"];
                instaGroup.add("statictext", undefined, "Special thanks to @pintu.mp4");
                var instaBtn = instaGroup.add("button", undefined, "Visit");
                instaBtn.size = [50, 25];

                // Button to open Instagram link
                instaBtn.onClick = function() {
                    var instagramUrl = "https://www.instagram.com/pintu.mp4/";
                    openURL(instagramUrl);
                };
                
                infoWin.add("statictext", undefined, " Tool Version v1.0");
                // Add Check for Updates button
                var checkUpdateBtn = infoWin.add("button", undefined, "Check for Updates");
checkUpdateBtn.onClick = checkForUpdates;
infoBtn.onClick = function() {
    
    var infoWin = new Window("dialog", "Info");
    infoWin.orientation = "column";
    infoWin.alignChildren = ["center", "center"];
    infoWin.spacing = 10;
    infoWin.margins = 16;

    // Existing content...
    infoWin.add("statictext", undefined, "This script is made by Harsh Edits.");
    // ... other existing code ...

    infoWin.add("panel", [0, 0, 250, 1]); // Divider

    // Add the button here
    var checkUpdateBtn = infoWin.add("button", undefined, "Check for Updates");
    checkUpdateBtn.onClick = checkForUpdates;

    // Rest of the existing content...
    var moreScriptsGroup = infoWin.add("group");
    // ... other existing code ...
};

function checkForUpdates() {
    var githubUrl = "https://raw.githubusercontent.com/harshedits571/my-ae-updates/refs/heads/main/version.json";
    var SCRIPT_VERSION = "1.1.0"; 
    var settingsFile = new File(Folder.userData.fsName + "/my-ae-script-settings.ini");
    var lastCheckTimestamp = 0;
    var threeMonthsInMs = 90 * 24 * 60 * 60 * 1000;

    try {
        if (settingsFile.exists) {
            settingsFile.open("r");
            lastCheckTimestamp = parseInt(settingsFile.readln()) || 0;
            settingsFile.close();
        }

        var currentTimestamp = new Date().getTime();

        if (currentTimestamp - lastCheckTimestamp >= threeMonthsInMs) {      
            settingsFile.open("w");
            settingsFile.writeln(currentTimestamp);
            settingsFile.close();
            openURL(githubUrl);
        } else {
            alert("No updates available. You are running the latest version: " + SCRIPT_VERSION);
        }
    } catch (e) {
        alert("Error checking for updates: " + e.toString());
    }
}

function openURL(url) {
    try {
        if ($.os.indexOf("Windows") !== -1) {
            system.callSystem('cmd.exe /c start "" "' + url + '"');
        } else {
            var cmd = ($.os.indexOf("Mac") !== -1) ? 'open "' + url + '"' : 'xdg-open "' + url + '"';
            system.callSystem(cmd);
        }
    } catch (e) {
        alert("Error opening URL: " + e.toString());
    }
}
                
                // Add a divider (optional, for visual separation)
                infoWin.add("panel", [0, 0, 250, 1]); // Horizontal line

                // Add "For more scripts" text and "Here" button
                var moreScriptsGroup = infoWin.add("group");
                moreScriptsGroup.orientation = "row";
                moreScriptsGroup.alignChildren = ["left", "center"];
                moreScriptsGroup.spacing = 5;
                moreScriptsGroup.add("statictext", undefined, "For more scripts click");
                var hereBtn = moreScriptsGroup.add("button", undefined, "Here");
                hereBtn.size = [50, 25];

                // Add social media section
                infoWin.add("statictext", undefined, "My social media accounts :");

                // Add Instagram and YouTube buttons in a row
                var socialMediaGroup = infoWin.add("group");
                socialMediaGroup.orientation = "row";
                socialMediaGroup.alignChildren = ["fill", "center"];
                socialMediaGroup.spacing = 10;
                var instagramBtn = socialMediaGroup.add("button", undefined, "Instagram");
                var youtubeBtn = socialMediaGroup.add("button", undefined, "YouTube");
                var discordBtn = socialMediaGroup.add("button", undefined, "Discord");
                instagramBtn.size = [80, 25];
                youtubeBtn.size = [80, 25];
                discordBtn.size = [80, 25];

                // Button click events to open URLs
                hereBtn.onClick = function() {
                    var url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                    openURL(url);
                };

                instagramBtn.onClick = function() {
                    var url = "https://www.instagram.com/harshedits55/";
                    openURL(url);
                };

                youtubeBtn.onClick = function() {
                    var url = "https://www.youtube.com/@harshedits2332";
                    openURL(url);
                };

                discordBtn.onClick = function() {
                    var url = "https://discord.gg/y3qnSA4ZbE";
                    openURL(url);
                };
            
                // Function to open a URL in the default browser
                function openURL(url) {
                    try {
                        if ($.os.indexOf("Windows") !== -1) {
                            system.callSystem('cmd.exe /c start "" "' + url + '"');
                        } else {
                            system.callSystem('open "' + url + '"');
                        }
                    } catch (e) {
                        alert("Failed to open URL: " + e.toString());
                    }
                }

                // Center and show the info window
                infoWin.center();
                infoWin.show();
            };

            // Layout and resize handling
            win.layout.layout(true);
            win.layout.resize();
            win.onResizing = win.onResize = function() {
                if (this.layout) this.layout.resize();
            };

            if (win instanceof Window) {
                win.center();
                win.show();
            }
        } catch (e) {
            alert("Error initializing script: " + e.toString());
        }
    }

    Harsh_Ka_Haithiyra(thisObj);
})(this);
