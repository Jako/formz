##Formz Builder User Interface

The User Interface (UI) of Formz should be easy to use and follow. Inside of 
the UI we tried to keep action names as user friendly as possible so that even 
a beginner can start using the system from as early as possible.

##Formz Template Variable

In the Formz Template Variable you could set a few Output Options. They all 
change the output of the Formz Snippet `fmzForms` called in the template 
variable output. The following Output Options change the the following Snippet 
Properties.

Output Option | fmzForms Snippet Property
------------|------------
Form Template | tpl
Form Field Template | fieldTpl
Form Field Types Template | fieldTypesTpl
Form Field Wrapper Template | fieldWrapTpl

##Formz Snippet

This is what make creating frontend forms with Formz so easy, the main Formz 
Snippet `fmzForms` ties in all the code for the frontend form using 
[FormIt](http://modx.com/extras/package/formit) and 
[FormItFastPack](http://modx.com/extras/package/formitfastpack).

The Snippet work behind the scenes when you are using the formz output type in 
your Template Variable. You can use the Formz Snippet `fmzForms` directly by 
adding it in the template you have attached your Formz Template Variable to. If 
you decide to use the Formz Snippet `fmzForms` inside of your template, make 
sure you change the Template Variable output type to `default`.

The default Formz Snippet call should look like this:

```
[[!fmzForms?
&id=`[[*formz]]`
]]
```

`[[*formz]]` has to be replaced with the name of your Formz TV, this is the 
only required parameter you need to pass to the Formz Snippet `fmzForms`.

The following properties could be set in the snippet call:

Property | Description | Default
---------|-------------|--------
tpl | Name of the chunk containing the Formz form template. | formTpl
id | Form ID | -
hookPrefix | Prefix of the FormIt hooks called by Formz[^1]. | fmzForm_
fieldTpl | Name of the chunk containing the Formz field template. | fieldTpl
fieldTypesTpl | Name of the chunk containing the Formz field types template (see tpl property in [FormitFastPack Field Snippet](https://rtfm.modx.com/extras/revo/formitfastpack/formitfastpack.field)). | -
fieldWrapTpl | Name of the chunk containing the Formz field wrapper template (see outer_tpl property in [FormitFastPack Field Snippet](https://rtfm.modx.com/extras/revo/formitfastpack/formitfastpack.field)). | -

[^1]: Depending on the Formz form method the following hooks are called with 
the default hookPrefix `fmzForm_database` or `fmzForm_email`

You have to duplicate and change the default Formz chunks `emailTpl`, 
`fieldTpl` and `formTpl`, if you want to set your own options to the `FormIt` 
and the `field` snippet calls created with Formz.

