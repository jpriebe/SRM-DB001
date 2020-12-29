#### getting started

- import the amxd file by double-clicking on it to add it to the open Ableton Live Project
- click the "save" icon on the M4L device
- this will save it to the User Library under Presets / MIDI Effects / Max MIDI Effect

#### javascript file references

Make sure that each JS file included in the project is in the patcher as a JS object, or else
it might not get packaged into the frozen amxd file

The JS files in the patcher will get saved to Documents / Max 8 / Max for Live Devices / SRM-DB001 Project / code

If you install the amxd to a clean system, there won't be a project folder under Max for Live Devices.  If you
open the device in Max for Live, the project folder will be created.  If you unfreeze it, all the javascript files will be unpacked into code/ and the media files will be unpacked into media/ (currently just a single PNG we use)

#### packaging

When you're done editing your project, flip it to presentation mode, click freeze, and then save it.

You need to do a "save as" to put the amxd file somewhere, but since you've just saved, the "save as" is grayed out.  Unfreeze, then freeze again, and you can now "save as".  Put the amxd file somewhere like your desktop.
