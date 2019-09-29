//Declare Needed Variabels
var permissions = {}; //Used To Store The Permission Data
var editingPermission = { //Used To Remember What User/Group Is Being Edited
    type: null,
    id: null,
    data: null
};

//Load The YML Code
function load(loadDefault = false) {
    let error = ''; //Decalre A Variable To Store The Possible Error Message
    try {
        let yml = $('#permissionsYMLInput').val(); //Load The YML Code
        if(loadDefault) yml = "groups:\n  default:\n    options:\n      default: true\n      prefix: PREFIX\n      suffix: SUFFIX\n    permissions:\n    - modifyworld.*\nschema-version: 1"; //If
        permissions = jsyaml.load(yml); //Parse The YML To An Object

        //Check For Errors
        if(permissions == null) error += 'YML parser returned NULL! '; //Check If The YML Is Empty

        //Fix Normal Problems
        if(!permissions.groups) permissions.groups = {}; //Create A Group Object Array, If No Group Object Array Exists
        if(!permissions.users) permissions.users = {}; //Create A User Object Array, If No User Object Array Exists
        fixPermissionsProblems();

        //Start Loading The Permissions Lists
        loadGroupPermissionsList();

        //Hide The YML Input Popup
        $('.loadYMLInputPopup').fadeOut(200);
    } catch (e) { console.error(e); }
    if(error != '') console.error(error);
    if(error != '') alert(error);
}

//Fix All Permissions
function fixPermissionsProblems() {
    let groups = Object.keys(permissions.groups); //Get All Group Keys
    for(let i = 0; i < groups.length; i++) { //Loop Through All Group Keys
        if(!permissions.groups[groups[i]].options) permissions.groups[groups[i]].options = {}; //Make Sure That An Options Object Exists
        if(!permissions.groups[groups[i]].permissions) permissions.groups[groups[i]].permissions = []; //Make Sure That A Permissions Array Exists
    }

    let users = Object.keys(permissions.users); //Get All User Keys
    for(let i = 0; i < users.length; i++) { //Loop Through All User Keys
        if(!permissions.users[users[i]].options) permissions.users[users[i]].options = {}; //Make Sure That An Options Object Exists
        if(!permissions.users[users[i]].permissions) permissions.users[users[i]].permissions = []; //Make Sure That A Permissions Array Exists
    }
}

//Load The HTML For The Group Permissions List
function loadGroupPermissionsList() {
    let groups = Object.keys(permissions.groups); //Fetch All Group Ids
    let listHtml = '<tr id="createNew" onclick="createPermissionsGroup();"><th>Create a new group</th><td></td><td></td></tr>';
    for(let i = 0; i < groups.length; i++) { //Loop Through All Groups
        let group = permissions.groups[groups[i]]; //Fetch The Group Into A Variable
        let groupIsDefault = !!group.options && !!group.options.default;
        let groupPermissions = group.permissions.length > 0 ? group.permissions.slice(0, 5).join(', ') : 'No permissions added';
        listHtml += '<tr onclick="editGroup(\'' + htmlParse(groups[i]) + '\');"><th>' + htmlParse(groups[i]) + '</th><td>' + (groupIsDefault ? 'Yes' : 'No') + '</td><td>' + htmlParse(groupPermissions) + '</td></tr>';
    }
    $('.groupPermissionsList > tbody').html(listHtml); //Set The List HTML

    $('.groupPermissionsList').css('display', 'table'); //Show The Group Permission List
    $('.userPermissionsList').css('display', 'none'); //Hide The User Permission List
    $('.gplpi').addClass('active');
    $('.uplpi').removeClass('active');
}

//Load The HTML For The User Permissions List
function loadUserPermissionsList() {
    let users = Object.keys(permissions.users);
    let listHtml = '';
    for(let i = 0; i < users.length; i++) {
        let user = permissions.users[users[i]];
        let userPermissions = user.permissions.length > 0 ? user.permissions.slice(0, 3).join(', ') : 'No permissions added';
        listHtml += '<tr onclick="editUser(\'' + htmlParse(users[i]) + '\');"><th>' + htmlParse(user.options.name) + '</th><td>' + htmlParse(users[0]) + '</td><td>' + htmlParse(userPermissions) + '</td></tr>';
    }
    $('.userPermissionsList > tbody').html(listHtml); //Set The List HTML

    $('.userPermissionsList').css('display', 'table'); //Show The User Permission List
    $('.groupPermissionsList').css('display', 'none'); //Hide The Group Permission List
    $('.uplpi').addClass('active');
    $('.gplpi').removeClass('active');
}

//Create A New Permissions Group
function createPermissionsGroup(callFromForm = false) {
    if(callFromForm == false) {
        $('.newPermissionGroupPopup').fadeIn(200); //Fade In The Popup
        $('#npgpGroupName').val(''); //Clear The Group Name Input
    }

    if(callFromForm == true) {
        permissions['groups'][$('#npgpGroupName').val().toLowerCase().replaceAll(' ', '_')] =
            {
                'options': { default: $('#npgpDefaultGroup').val() == 'true', prefix: '', suffix: '' },
                permissions: ['modifyworld.*']
            };
        $('.newPermissionGroupPopup').fadeOut(200); //Fade In The Popup
        loadGroupPermissionsList();
    }
}

//Start Editing A Group
function editGroup(groupId) {
    let group = jsonClone(permissions.groups[groupId]); //Fetch A JSON Clone Of The Permissions Groups Data, As So To Not Edit The Data Directly
    editingPermission.type = 'group'; //Set The Editing Type To Group
    editingPermission.id = groupId; //Set The Group Id
    editingPermission.data = group; //Set The Group Data
    prepareEditingPermissions(); //Make Sure That There Are No Errors In The Permissions Group Before Starting To Edit It
    openPermissionsEditorPopup(); //Open The Permission Editor Popup
}

//Start Editing A User
function editUser(uuid) {
    let user = jsonClone(permissions.users[uuid]); //Fetch A JSON Clone Of The Permissions User Data, As So To Not Edit The Data Directly
    editingPermission.type = 'user'; //Set The Editing Type To User
    editingPermission.id = uuid; //Set The User UUID
    editingPermission.data = user; //Set The User Data
    prepareEditingPermissions(); //Make Sure That There Are No Errors In The Permissions Group Before Starting To Edit It
    openPermissionsEditorPopup(); //Open The Permission Editor Popup
}

//Open The Permissions Editor
function openPermissionsEditorPopup() {
    $('#pepName').val(editingPermission.type == 'group' ? editingPermission.id : editingPermission.data.options.name); //Set The User/Group Name
    $('#pepName').prop('disabled', editingPermission.type == 'user'); //Disable The Name Input If It's A User Being Edited
    $('#pepPrefix').val(editingPermission.data.options.prefix); //Set The Prefix Input
    $('#pepSuffix').val(editingPermission.data.options.suffix); //Set The Suffix Input
    $('#pepAddPermission').val(''); //Clear The Permission Input
    updatePermissionEditorList(); //Update The Permissions List

    $('.permissionsEditorPopup').fadeIn(200); //Open The Editor
}

function prepareEditingPermissions() {
    if(!editingPermission.data.options) { editingPermission.data.options = {}; }
    if(!editingPermission.data.permissions) { editingPermission.permissions = {}; }
}

function updatePermissionEditorList() {
    let permissionsHtml = '<i>No permissions have been added yet</i>'; //Add The Message About There Being No Permissions Yet
    for(let i = 0; i < editingPermission.data.permissions.length; i++) {
        let permission = editingPermission.data.permissions[i]; //Fetch The Permission
        permissionsHtml += '<span>' + htmlParse(permission) + '<i class="material-icons" onclick="removePermission(\'' + htmlParse(permission) + '\');">close</i></span>';
    }
    $('#pepPermissionsList').html(permissionsHtml);
}

function addPermission() {
    let permission = $('#pepAddPermission').val(); //Get The Permission Node
    if(editingPermission.data.permissions.indexOf(permission) == -1) //Check If The Permission Already Has Been Added
        editingPermission.data.permissions.push(permission); //Add The Permission
    $('#pepAddPermission').val(''); //Clear The Permission Input
    updatePermissionEditorList(); //Update The Permissions List
}

function removePermission(permission) {
    if(editingPermission.data.permissions.indexOf(permission) != -1) //Check If The Permission Has Been Added
        editingPermission.data.permissions = arrayRemove( //Remove The Permission From The List
            editingPermission.data.permissions, permission
        );
    updatePermissionEditorList(); //Update The Permissions List
}

function savePermissionEditor() {
    editingPermission.data.options.prefix = $('#pepPrefix').val(); //Load The Prefix
    editingPermission.data.options.suffix = $('#pepSuffix').val(); //Load The Suffix

    if(editingPermission.type == 'group') { //Check If The Editing Permission Is A Group
        $('#pepName').val($('#pepName').val().replaceAll(' ', '_')); //Fix All Spaces In Name
        if(Object.keys(permissions.groups).indexOf($('#pepName').val()) != -1 && $('#pepName').val() != editingPermission.id) return; //Check If An Updated Name Is Already Used
        permissions.groups[editingPermission.id] = editingPermission.data; //Update The Permissions Data
        if($('#pepName').val() != editingPermission.id) { //Check If The Name Has Been Changed
            permissions.groups[$('#pepName').val()] = permissions.groups[editingPermission.id]; //Set The New Name
            delete permissions.groups[editingPermission.id]; //Remove The Old Name
        }
    }

    if(editingPermission.type == 'user') { //Check If The Editing Permission Is A User
        permissions.users[editingPermission.id] = editingPermission.data; //Update The Permissions Data
    }

    if(editingPermission.type == 'group') loadGroupPermissionsList(); //Reload The Group Permissions List
    else loadUserPermissionsList(); //Reload The User Permissions List
    cancelPermissonEditor(); //Close The Editor
}

function cancelPermissonEditor() {
    $('.permissionsEditorPopup').fadeOut(200); //Close The Editor
    editingPermission = {}; //Clear The Editing Permissions
}

function removePermissionsEditor() {
    if(editingPermission.type == 'group') //Check If The Editing Permission Is A Group
        delete permissions.groups[editingPermission.id]; //Remove The Group

    loadGroupPermissionsList(); //Reload The Group Permissions List
    cancelPermissonEditor(); //Close The Editor
}

function exportYML() {
    let yml = jsyaml.safeDump(permissions); //Convert The Permissions Object To YML Code
    $('#permissionsYMLInput').val(yml); //Set The Textarea Value To The YML Code
    $('.loadYMLInputPopup').fadeIn(200); //Fade In The Import Popup
}

///
/// NEEDED FUNCTIONS
///

function htmlParse(input, fixLineBreaks = false) {
    var htmlFormatter = document.createElement('p');
    $(htmlFormatter).text(input);
    if(fixLineBreaks) { return $(htmlFormatter).html().replaceAll("\n", '<br>'); }
    else { return $(htmlFormatter).html(); }
}

function jsonClone(inp) { return JSON.parse(JSON.stringify(inp)); } //Return A Cloned Version Of The Input
function arrayRemove(r,n){return r.filter(function(r){return r!=n})}
String.prototype.replaceAll = function(str1, str2, ignore) { return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2); }
