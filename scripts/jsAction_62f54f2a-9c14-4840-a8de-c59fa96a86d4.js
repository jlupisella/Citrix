// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var staticduration = context.variableManager.getValue("duration");
var Actions_counter = context.variableManager.getValue("Actions_counter");
var dynamicduration = staticduration * Actions_counter;
context.variableManager.setValue("dynamicduration",dynamicduration);