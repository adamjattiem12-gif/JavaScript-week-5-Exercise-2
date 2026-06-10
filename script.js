// Task 1: Update Name
document.getElementById("updateNameBtn").addEventListener("click", function() {
  var newName = prompt("Enter a new name:");
  if (newName) {
    document.getElementById("profileName").textContent = newName;
  }
});

// Task 1: Update Role
document.getElementById("updateRoleBtn").addEventListener("click", function() {
  var newRole = prompt("Enter a new role:");
  if (newRole) {
    document.getElementById("profileRole").textContent = newRole;
  }
});

// Task 2: Toggle Active Status
document.getElementById("toggleStatusBtn").addEventListener("click", function() {
  document.getElementById("profileCard").classList.toggle("active-status");
});

// Bonus Task 3: Change Image
document.getElementById("changeImageBtn").addEventListener("click", function() {
  var newUrl = prompt("Enter a new image URL:");
  if (newUrl) {
    document.getElementById("profileImage").src = newUrl;
  }
});
