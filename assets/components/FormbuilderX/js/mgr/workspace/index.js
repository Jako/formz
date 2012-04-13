Ext.onReady(function() {
    MODx.load({ xtype: 'FormbuilderX-page-workspace'});
});

/**
 * Loads the FormBuilder environment
 *
 * @class FormbuilderX.page.Workspace
 * @extends MODx.Component
 * @params {Object} config An object of config properties
 * @xtype FormbuilderX-page-workspace
 */
FormbuilderX.page.Workspace = function(config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'FormbuilderX-panel-home'
            ,renderTo: 'FormbuilderX-panel-workspace-div'
        }]
    });
    FormbuilderX.page.Workspace.superclass.constructor.call(this, config);
};
Ext.extend(FormbuilderX.page.Workspace, MODx.Component);
Ext.reg('FormbuilderX-page-workspace', FormbuilderX.page.Workspace);
