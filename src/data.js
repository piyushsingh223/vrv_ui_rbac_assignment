export const users = [
    { id: 1, name: "Piyush", role: "Admin", status: "Active" },
    { id: 2, name: "Shyam", role: "Editor", status: "Inactive" },
    { id: 3, name: "Rahul", role: "Viewer", status: "Active" },
  ];
  
  export const roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ];
  