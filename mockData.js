// AssetFlow - Mock Database & Storage Manager
// This file initializes and manages the mock state in localStorage.
const DEFAULT_DB = {
  departments: [
    { id: "dept-1", name: "Engineering", code: "ENG", headId: "emp-3", status: "Active", parentId: null },
    { id: "dept-2", name: "Marketing", code: "MKT", headId: "emp-5", status: "Active", parentId: null },
    { id: "dept-3", name: "Operations", code: "OPS", headId: "emp-6", status: "Active", parentId: null },
    { id: "dept-4", name: "Human Resources", code: "HR", headId: "emp-7", status: "Active", parentId: null },
    { id: "dept-5", name: "Frontend Development", code: "FED", headId: "emp-4", status: "Active", parentId: "dept-1" }
  ],
  categories: [
    { 
      id: "cat-1", 
      name: "Electronics", 
      code: "ELE", 
      customFields: [
        { label: "Warranty Period (Months)", name: "warranty", type: "number", required: true },
        { label: "Manufacturer", name: "manufacturer", type: "text", required: false },
        { label: "Model Number", name: "model", type: "text", required: false }
      ]
    },
    { 
      id: "cat-2", 
      name: "Furniture", 
      code: "FUR", 
      customFields: [
        { label: "Material Type", name: "material", type: "text", required: true },
        { label: "Dimensions (LxWxH)", name: "dimensions", type: "text", required: false }
      ]
    },
    { 
      id: "cat-3", 
      name: "Vehicles", 
      code: "VEH", 
      customFields: [
        { label: "License Plate", name: "license_plate", type: "text", required: true },
        { label: "Fuel Type", name: "fuel_type", type: "text", required: false },
        { label: "Next Service Date", name: "next_service", type: "date", required: false }
      ]
    },
    { 
      id: "cat-4", 
      name: "Office Spaces", 
      code: "SPC", 
      customFields: [
        { label: "Capacity", name: "capacity", type: "number", required: true },
        { label: "Floor Number", name: "floor", type: "number", required: false }
      ]
    }
  ],
  employees: [
    { id: "emp-1", name: "Alex Admin", email: "admin@assetflow.com", password: "admin123", departmentId: "dept-3", role: "Admin", status: "Active" },
    { id: "emp-2", name: "Sarah Manager", email: "manager@assetflow.com", password: "manager123", departmentId: "dept-3", role: "Asset Manager", status: "Active" },
    { id: "emp-3", name: "Priya Head", email: "head@assetflow.com", password: "head123", departmentId: "dept-1", role: "Department Head", status: "Active" },
    { id: "emp-4", name: "John Developer", email: "john@assetflow.com", password: "user123", departmentId: "dept-5", role: "Employee", status: "Active" },
    { id: "emp-5", name: "Emily Marketer", email: "emily@assetflow.com", password: "user123", departmentId: "dept-2", role: "Department Head", status: "Active" },
    { id: "emp-6", name: "Robert Operations", email: "robert@assetflow.com", password: "user123", departmentId: "dept-3", role: "Department Head", status: "Active" },
    { id: "emp-7", name: "Jane HR", email: "jane@assetflow.com", password: "user123", departmentId: "dept-4", role: "Department Head", status: "Active" },
    { id: "emp-8", name: "Raj Employee", email: "employee@assetflow.com", password: "employee123", departmentId: "dept-1", role: "Employee", status: "Active" }
  ],
  assets: [
    { 
      id: "ast-1", 
      name: "MacBook Pro 16\"", 
      categoryId: "cat-1", 
      tag: "AF-0001", 
      serialNumber: "SN-C02D78X0MD6R", 
      acquisitionDate: "2025-01-15", 
      acquisitionCost: 2499.00, 
      condition: "New", 
      location: "Office A, Floor 3", 
      shared: false, 
      status: "Allocated", 
      assignedToType: "employee", // 'employee' or 'department'
      assignedToId: "emp-4", // John Developer
      customValues: { warranty: "36", manufacturer: "Apple", model: "A2485" },
      history: [
        { date: "2025-01-15", type: "Registration", userId: "emp-2", details: "Asset registered as New." },
        { date: "2025-01-16", type: "Allocation", userId: "emp-2", details: "Allocated to John Developer. Expected return: 2026-07-01." }
      ]
    },
    { 
      id: "ast-2", 
      name: "Dell UltraSharp 27\" Monitor", 
      categoryId: "cat-1", 
      tag: "AF-0002", 
      serialNumber: "SN-CN0D238D7122", 
      acquisitionDate: "2025-02-10", 
      acquisitionCost: 450.00, 
      condition: "Good", 
      location: "Office A, Floor 3", 
      shared: false, 
      status: "Available", 
      assignedToType: null,
      assignedToId: null,
      customValues: { warranty: "24", manufacturer: "Dell", model: "U2723QE" },
      history: [
        { date: "2025-02-10", type: "Registration", userId: "emp-2", details: "Asset registered as New." },
        { date: "2025-02-12", type: "Allocation", userId: "emp-2", details: "Allocated to Raj Employee." },
        { date: "2026-05-20", type: "Return", userId: "emp-2", details: "Returned in Good condition. Notes: Upgraded desk setup." }
      ]
    },
    { 
      id: "ast-3", 
      name: "Conference Room B2", 
      categoryId: "cat-4", 
      tag: "AF-0003", 
      serialNumber: "ROOM-B2", 
      acquisitionDate: "2024-05-01", 
      acquisitionCost: 15000.00, 
      condition: "Good", 
      location: "Office B, Floor 2", 
      shared: true, 
      status: "Available", 
      assignedToType: null,
      assignedToId: null,
      customValues: { capacity: "12", floor: "2" },
      history: [
        { date: "2024-05-01", type: "Registration", userId: "emp-1", details: "Meeting room registered as shared resource." }
      ]
    },
    { 
      id: "ast-4", 
      name: "Tesla Model 3 (Company)", 
      categoryId: "cat-3", 
      tag: "AF-0004", 
      serialNumber: "5YJ3E1EA5LF123456", 
      acquisitionDate: "2024-08-15", 
      acquisitionCost: 38000.00, 
      condition: "Good", 
      location: "Parking Lot A", 
      shared: true, 
      status: "Under Maintenance", 
      assignedToType: null,
      assignedToId: null,
      customValues: { license_plate: "AF-VEH-01", fuel_type: "Electric", next_service: "2026-07-20" },
      history: [
        { date: "2024-08-15", type: "Registration", userId: "emp-2", details: "Company Tesla registered." },
        { date: "2026-07-10", type: "Maintenance Approved", userId: "emp-2", details: "Sent for annual battery diagnostics." }
      ]
    },
    { 
      id: "ast-5", 
      name: "Ergonomic Mesh Chair", 
      categoryId: "cat-2", 
      tag: "AF-0005", 
      serialNumber: "SN-HM-AERON-99", 
      acquisitionDate: "2024-11-20", 
      acquisitionCost: 1200.00, 
      condition: "Good", 
      location: "Office A, Floor 2", 
      shared: false, 
      status: "Allocated", 
      assignedToType: "department", // Allocated to Marketing department
      assignedToId: "dept-2",
      customValues: { material: "Mesh", dimensions: "68x68x110 cm" },
      history: [
        { date: "2024-11-20", type: "Registration", userId: "emp-2", details: "Office chair registered." },
        { date: "2024-11-21", type: "Allocation", userId: "emp-2", details: "Allocated to Marketing Department for general lounge use." }
      ]
    },
    { 
      id: "ast-6", 
      name: "iPad Air 5th Gen", 
      categoryId: "cat-1", 
      tag: "AF-0006", 
      serialNumber: "SN-GG781190209D", 
      acquisitionDate: "2025-03-01", 
      acquisitionCost: 599.00, 
      condition: "Good", 
      location: "Office A, Floor 3", 
      shared: false, 
      status: "Allocated", 
      assignedToType: "employee",
      assignedToId: "emp-8", // Raj Employee (Overdue return!)
      customValues: { warranty: "12", manufacturer: "Apple", model: "iPad Air 5" },
      history: [
        { date: "2025-03-01", type: "Registration", userId: "emp-2", details: "Asset registered." },
        { date: "2025-03-02", type: "Allocation", userId: "emp-2", details: "Allocated to Raj Employee. Expected return: 2026-06-30." }
      ],
      expectedReturnDate: "2026-06-30" // Past return date!
    },
    { 
      id: "ast-7", 
      name: "Sony Projector 4K", 
      categoryId: "cat-1", 
      tag: "AF-0007", 
      serialNumber: "SN-SNY-998811", 
      acquisitionDate: "2024-09-12", 
      acquisitionCost: 1999.00, 
      condition: "Good", 
      location: "Office A, Storage", 
      shared: true, 
      status: "Available", 
      assignedToType: null,
      assignedToId: null,
      customValues: { warranty: "24", manufacturer: "Sony", model: "VPL-VW295ES" },
      history: [
        { date: "2024-09-12", type: "Registration", userId: "emp-2", details: "Projector registered as shared bookable resource." }
      ]
    }
  ],
  bookings: [
    { 
      id: "bkg-1", 
      resourceId: "ast-3", // Conf Room B2
      employeeId: "emp-4", // John Developer
      date: "2026-07-12", // Today
      startTime: "09:00",
      endTime: "10:30",
      status: "Completed",
      notes: "Sprint Planning Session"
    },
    { 
      id: "bkg-2", 
      resourceId: "ast-3", // Conf Room B2
      employeeId: "emp-8", // Raj Employee
      date: "2026-07-12", // Today
      startTime: "11:00",
      endTime: "12:00",
      status: "Ongoing",
      notes: "Client Sync Call"
    },
    { 
      id: "bkg-3", 
      resourceId: "ast-3", // Conf Room B2
      employeeId: "emp-5", // Emily Marketer
      date: "2026-07-12", // Today
      startTime: "14:00",
      endTime: "15:30",
      status: "Upcoming",
      notes: "Design Review"
    },
    { 
      id: "bkg-4", 
      resourceId: "ast-7", // Sony Projector
      employeeId: "emp-4", 
      date: "2026-07-13", // Tomorrow
      startTime: "10:00",
      endTime: "12:00",
      status: "Upcoming",
      notes: "Workshop Presentation"
    }
  ],
  transfers: [
    {
      id: "trf-1",
      assetId: "ast-1", // Macbook Pro 16 (held by John Developer)
      requestedBy: "emp-8", // Raj Employee wants it
      currentHolderId: "emp-4",
      approverId: "emp-3", // Priya Head (their Dept Head)
      status: "Pending", // Pending, Approved, Rejected
      requestDate: "2026-07-11",
      reason: "Needs higher GPU power for compiling neural nets."
    }
  ],
  maintenance: [
    { 
      id: "maint-1", 
      assetId: "ast-4", // Tesla
      reportedBy: "emp-6", // Robert Ops
      issueDescription: "Annual battery health checkup and tyre rotation.",
      priority: "Medium",
      photoUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=200", 
      status: "In Progress", // Pending, Approved, Technician Assigned, In Progress, Resolved
      technician: "Greens Drive Motors (Alex)",
      requestDate: "2026-07-10",
      approvalDate: "2026-07-10",
      cost: 320.00,
      resolutionDetails: ""
    },
    { 
      id: "maint-2", 
      assetId: "ast-1", // Macbook
      reportedBy: "emp-4", // John Dev
      issueDescription: "Keyboard key 'E' sticking occasionally.",
      priority: "Low",
      photoUrl: "", 
      status: "Pending",
      technician: "",
      requestDate: "2026-07-12",
      approvalDate: "",
      cost: 0,
      resolutionDetails: ""
    }
  ],
  audits: [
    { 
      id: "aud-1", 
      name: "Q2 IT Equipment Audit", 
      scopeType: "department", // 'department' or 'location'
      scopeId: "dept-1", // Engineering
      startDate: "2026-06-01",
      endDate: "2026-06-15",
      auditors: ["emp-2"], // Sarah Manager
      status: "Closed",
      records: [
        { assetId: "ast-1", condition: "Good", status: "Verified", notes: "Checked physical device." },
        { assetId: "ast-2", condition: "Good", status: "Verified", notes: "Connected at desk." },
        { assetId: "ast-6", condition: "Good", status: "Verified", notes: "User verified by email." }
      ],
      discrepancyCount: 0,
      completionDate: "2026-06-12"
    },
    { 
      id: "aud-2", 
      name: "Office A Floor 3 Audit", 
      scopeType: "location",
      scopeId: "Office A, Floor 3",
      startDate: "2026-07-10",
      endDate: "2026-07-20",
      auditors: ["emp-2", "emp-7"], // Sarah and Jane
      status: "In Progress",
      records: [
        { assetId: "ast-1", condition: "Good", status: "Verified", notes: "Confirmed in-person." },
        { assetId: "ast-2", condition: "Good", status: "Verified", notes: "Confirmed in-person." },
        { assetId: "ast-6", condition: "Fair", status: "Damaged", notes: "iPad screen has a hairline crack." }
      ],
      discrepancyCount: 1,
      completionDate: null
    }
  ],
  logs: [
    { id: "log-1", date: "2026-07-10 09:12:15", userId: "emp-1", userName: "Alex Admin", action: "User Role Promotion", details: "Promoted Sarah Manager to Asset Manager" },
    { id: "log-2", date: "2026-07-10 10:45:00", userId: "emp-2", userName: "Sarah Manager", action: "Asset Registration", details: "Registered MacBook Pro 16\" (AF-0001)" },
    { id: "log-3", date: "2026-07-10 11:30:12", userId: "emp-2", userName: "Sarah Manager", action: "Asset Allocation", details: "Allocated AF-0001 to John Developer" },
    { id: "log-4", date: "2026-07-11 14:15:30", userId: "emp-8", userName: "Raj Employee", action: "Transfer Request", details: "Requested transfer of AF-0001 from John Developer" },
    { id: "log-5", date: "2026-07-12 08:30:00", userId: "emp-4", userName: "John Developer", action: "Booking Created", details: "Booked Conference Room B2 (AF-0003) for today 09:00 - 10:30" }
  ],
  notifications: [
    { id: "ntf-1", date: "2026-07-12 08:30:00", userId: "emp-4", title: "Booking Confirmed", message: "Your booking for Conference Room B2 today at 09:00 is confirmed.", read: true },
    { id: "ntf-2", date: "2026-07-11 14:15:30", userId: "emp-3", title: "Transfer Approval Needed", message: "Raj Employee has requested to transfer MacBook Pro 16\" (AF-0001) from John Developer. Click to action.", read: false },
    { id: "ntf-3", date: "2026-07-12 09:00:00", userId: "emp-8", title: "Overdue Return Alert", message: "Your allocation for iPad Air 5th Gen (AF-0006) was due on 2026-06-30. Please return or extend.", read: false },
    { id: "ntf-4", date: "2026-07-12 09:15:00", userId: "emp-2", title: "Audit Discrepancy Found", message: "Audit 'Office A Floor 3 Audit' has flagged AF-0006 as Damaged.", read: false }
  ]
};
// Initialize DB if not exists
function initDatabase() {
  if (!localStorage.getItem("assetflow_db")) {
    localStorage.setItem("assetflow_db", JSON.stringify(DEFAULT_DB));
  }
}
// Reset DB to default values
function resetDatabase() {
  localStorage.setItem("assetflow_db", JSON.stringify(DEFAULT_DB));
  return DEFAULT_DB;
}
// Get the database from local storage
function getDatabase() {
  initDatabase();
  return JSON.parse(localStorage.getItem("assetflow_db"));
}
// Save database to local storage
function saveDatabase(db) {
  localStorage.setItem("assetflow_db", JSON.stringify(db));
  
  // Dispatch a custom event to notify listeners of a state change
  const event = new CustomEvent("dbStateChange", { detail: db });
  window.dispatchEvent(event);
}
// Get active session
function getSession() {
  const session = localStorage.getItem("assetflow_session");
  return session ? JSON.parse(session) : null;
}
// Set active session
function setSession(user) {
  if (user) {
    localStorage.setItem("assetflow_session", JSON.stringify(user));
  } else {
    localStorage.removeItem("assetflow_session");
  }
}
// Log an action to the audit logs
function logActivity(userId, userName, action, details) {
  const db = getDatabase();
  const now = new Date();
  const timestamp = now.getFullYear() + "-" + 
                    String(now.getMonth() + 1).padStart(2, "0") + "-" + 
                    String(now.getDate()).padStart(2, "0") + " " + 
                    String(now.getHours()).padStart(2, "0") + ":" + 
                    String(now.getMinutes()).padStart(2, "0") + ":" + 
                    String(now.getSeconds()).padStart(2, "0");
  
  const newLog = {
    id: "log-" + (db.logs.length + 1) + "-" + Math.floor(Math.random() * 1000),
    date: timestamp,
    userId,
    userName,
    action,
    details
  };
  
  db.logs.unshift(newLog); // Put new logs at the top
  saveDatabase(db);
}
// Create notification
function createNotification(userId, title, message) {
  const db = getDatabase();
  const now = new Date();
  const timestamp = now.getFullYear() + "-" + 
                    String(now.getMonth() + 1).padStart(2, "0") + "-" + 
                    String(now.getDate()).padStart(2, "0") + " " + 
                    String(now.getHours()).padStart(2, "0") + ":" + 
                    String(now.getMinutes()).padStart(2, "0") + ":" + 
                    String(now.getSeconds()).padStart(2, "0");
  
  const newNotification = {
    id: "ntf-" + (db.notifications.length + 1) + "-" + Math.floor(Math.random() * 1000),
    date: timestamp,
    userId,
    title,
    message,
    read: false
  };
  
  db.notifications.unshift(newNotification);
  saveDatabase(db);
}
