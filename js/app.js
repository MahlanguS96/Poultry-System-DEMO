// This file is for your notes - actual security logic is inside index.html gate for simplicity and editability
// If you want to move logic out, you can, but keep index.html gate working
// ORIGINAL FULL SYSTEM IS IN index.html - layers, broilers, vaccination, all sections - untouched

// Clear My Farm Data removes:
// - poultry_*, small_*, flock*, chicken*, goat*, layer*, broiler* keys
// It KEEPS:
// - agritech_codes (Sands96, etc)
// - agritech_logged (so farmer stays logged in)
// - agritech_device
// - agritech_requests

// Anti-share:
// - Code + Farm must match
// - Device ID locked on first use
// - If ABC shares Sands96 with XYZ Farm -> blocked
// - If same farm different device -> blocked until owner resets via Ctrl+Shift+O -> GENERATE new or reset
