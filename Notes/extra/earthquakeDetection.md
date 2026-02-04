# 🌍 Earthquake Schema — Detailed Explanation

This document explains each field in the **Earthquake Mongoose Schema**, why it exists, and how it’s used in a real-world GIS-based system.

---

## 1️⃣ `eventId`

```ts
eventId: {
  type: String,
  required: true,
  unique: true,
}
````

### 📌 What it is

A **unique identifier** for each earthquake event.
Think of it as a **serial number** assigned by the data source (e.g., USGS event ID).

### 🎯 Why it matters

* `required: true` → Every earthquake **must** have an ID
* `unique: true` → Prevents duplicate events in the database
* Enables **fast lookups** and clean REST APIs

---

## 2️⃣ `source`

```ts
source: {
  type: String,
  required: true,
}
```

### 📌 What it is

The **agency or system** reporting the earthquake
Examples:

* USGS
* EMSC
* Local seismological institutes

### 🎯 Why it matters

* Helps track **data origin**
* Useful when combining data from **multiple sources**
* Adds credibility and traceability

---

## 3️⃣ `detectedAt`

```ts
detectedAt: {
  type: Date,
  required: true,
}
```

### 📌 What it is

The **timestamp** when the earthquake was detected.

### 🕒 Format

Stored in **ISO 8601 format**
Example:

```json
"2026-02-04T12:34:56Z"
```

### 🎯 Why it matters

* Enables **time-based queries**
* Used for:

  * Trend analysis
  * Alerts & notifications
  * Sorting recent events

---

## 4️⃣ `location` (GeoJSON)

```ts
location: {
  type: {
    type: String,
    enum: ["Point"],
    default: "Point",
  },
  coordinates: {
    type: [Number],
    required: true,
  },
}
```

### 📌 What it is

A **GeoJSON Point** representing the earthquake’s epicenter.

### 🧭 Structure

* `type` → Always `"Point"`
* `coordinates` → `[longitude, latitude]`

⚠️ **Important**:
GeoJSON uses **longitude first**, latitude second — opposite of Google Maps UI.

### 🎯 Why it matters

* Enables **geospatial queries**
* Supports:

  * Radius-based searches
  * GIS map rendering
  * Proximity alerts

Example use case:

> “Find all earthquakes within 100 km of Kathmandu”

---

## 5️⃣ `depthKm`

```ts
depthKm: {
  type: Number,
  required: true,
}
```

### 📌 What it is

Depth of the earthquake **below the Earth’s surface**, measured in kilometers.

### 🎯 Why it matters

* Depth strongly affects **surface shaking**
* Shallow earthquakes are usually **more destructive**
* Important for disaster assessment

---

## 6️⃣ `magnitude`

```ts
magnitude: {
  value: { type: Number, required: true },
  scale: {
    type: String,
    enum: ["Mw", "ML", "Ms", "Mb"],
    default: "Mw",
  },
}
```

### 📌 What it is

An object describing how **strong** the earthquake was.

### 🔢 Fields

* `value` → Numeric magnitude (e.g., `6.5`)
* `scale` → Magnitude scale used

### 📏 Supported Scales

* **Mw** → Moment magnitude (modern standard)
* **ML** → Local magnitude (Richter)
* **Ms** → Surface wave magnitude
* **Mb** → Body wave magnitude

### 🎯 Why it matters

* Different scales measure different wave types
* Storing the scale ensures **correct interpretation**

---

## 7️⃣ `reviewed`

```ts
reviewed: {
  type: Boolean,
  default: false,
}
```

### 📌 What it is

Indicates whether a **seismologist has verified** the earthquake.

### 🎯 Why it matters

* Differentiates:

  * Preliminary data
  * Confirmed events
* Useful for:

  * Public dashboards
  * Trust & credibility filters

---

## 8️⃣ `remarks`

```ts
remarks: String
```

### 📌 What it is

Optional **human-readable notes** about the earthquake.

### 📝 Examples

* “Aftershock of previous M6.2 quake”
* “Data incomplete”
* “Automatic detection — under review”

### 🎯 Why it matters

Adds **context** beyond raw numbers.

---

## 9️⃣ `timestamps`

```ts
{ timestamps: true }
```

### 📌 What it does

Automatically adds:

* `createdAt`
* `updatedAt`

### 🎯 Why it matters

* Useful for **auditing**
* Tracks when records were:

  * Created
  * Modified
* Helps with debugging & data history

---

# 🔌 API Design (REST Overview)

## 1️⃣ Create a New Earthquake

```http
POST /api/earthquakes
```

```json
{
  "eventId": "us12345678",
  "source": "USGS",
  "detectedAt": "2026-02-04T12:34:56Z",
  "location": { "type": "Point", "coordinates": [85.324, 27.717] },
  "depthKm": 10,
  "magnitude": { "value": 6.5, "scale": "Mw" },
  "remarks": "Preliminary report"
}
```

---

## 2️⃣ Get All Earthquakes

```http
GET /api/earthquakes
```

---

## 3️⃣ Get One Earthquake by ID

```http
GET /api/earthquakes/:eventId
```

---

## 4️⃣ Update an Earthquake

```http
PATCH /api/earthquakes/:eventId
```

```json
{
  "reviewed": true,
  "remarks": "Confirmed by seismologist"
}
```

---

## 5️⃣ Delete an Earthquake

```http
DELETE /api/earthquakes/:eventId
```

---

## 6️⃣ Geospatial Query (Optional)

```http
GET /api/earthquakes/near?lat=27.7&lng=85.3&radius=50
```

📍 Returns all earthquakes **within 50 km** of the given location.

---

## 🧠 Final Memory Hook

> **Identity** → `eventId + source + detectedAt`
> **Impact** → `location + depthKm + magnitude`
> **Trust** → `reviewed`

---

