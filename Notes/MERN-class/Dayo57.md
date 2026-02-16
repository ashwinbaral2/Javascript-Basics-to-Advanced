# MERN CLASS NOTES — DAY 057

## 📆 Date: **February 12, 2026 (Monday)**

---

## 1) Production `.env` + Port Setup (Live Deployment)

When you deploy a MERN app, you usually keep **secrets + config** inside an `.env` file.

### Typical `.env` variables (example)

```env
PORT=8080
MONGO_URI=mongodb+srv://...
JWT_SECRET=some_super_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
NODE_ENV=production
```

### Why `.env` matters
- Keeps secrets out of GitHub
- Makes local vs production configs easy
- Lets hosting platforms (Render/Vercel/Heroku) inject environment variables safely

---

## 2) DDoS (Distributed Denial of Service)

A **DDoS attack** is a malicious attempt to disrupt a website/server by overwhelming it with a huge amount of traffic from **multiple sources**.

### How DDoS Works

| Part | Meaning |
|------|---------|
| Attacker | Person controlling the attack |
| Botnet | A network of infected devices (PCs / IoT / phones) |
| Flood traffic | Massive requests sent at once |
| Target | Your server / website |
| Result | Server slows down or becomes unavailable |

### Key Idea
- **DoS** = attack from one source  
- **DDoS** = attack from many sources (distributed), making it harder to block

---

## 3) Nodemailer (Email Sending Library)

**Nodemailer** is a popular Node.js library for sending emails.

- Website: `nodemailer.com`
- Use cases:
  - Email verification
  - Password reset emails
  - Notifications

---

## 4) MongoDB Query Reminder

Common commands:

```js
User.findOne({ email })
User.find()
```

### Difference

| Command | Returns |
|--------|---------|
| `findOne()` | One matching document (or `null`) |
| `find()` | Array of documents (can be empty) |

---

## 5) HTTP Status Codes (Full Quick Table)

### Main Categories

| Code Range | Meaning |
|-----------|---------|
| **1xx** | Informational |
| **2xx** | Success |
| **3xx** | Redirection |
| **4xx** | Client Error |
| **5xx** | Server Error |

---

### Common Status Codes (Important Ones)

#### ✅ 1xx — Informational

| Code | Meaning |
|------|---------|
| 100 | Continue (client should proceed) |

---

#### ✅ 2xx — Success

| Code | Meaning |
|------|---------|
| 200 | OK (standard success) |
| 201 | Created (new resource made) |
| 204 | No Content (success but no response body) |

---

#### 🔁 3xx — Redirection

| Code | Meaning |
|------|---------|
| 301 | Moved Permanently |
| 302 | Found (temporary redirect) |
| 304 | Not Modified (cache optimization) |

---

#### ❌ 4xx — Client Errors

| Code | Meaning |
|------|---------|
| 400 | Bad Request |
| 401 | Unauthorized (login needed) |
| 403 | Forbidden (server refuses) |
| 404 | Not Found |

---

#### 💥 5xx — Server Errors

| Code | Meaning |
|------|---------|
| 500 | Internal Server Error |
| 502 | Bad Gateway |
| 503 | Service Unavailable |

---

## 6) `bcrypt` (Password Hashing)

### What it is
`bcrypt` is a hashing library based on the **Blowfish** cipher design.

Install:

```bash
npm install bcrypt
```

### Why bcrypt is used
- Passwords should never be stored as plain text
- bcrypt adds **salt + cost factor** to slow down brute-force attacks

---

## 7) Encryption vs Hashing (Important!)

| Feature | Encryption | Hashing |
|--------|------------|---------|
| Reversible? | ✅ Yes (decryptable) | ❌ No |
| Purpose | Protect data + recover it later | Protect passwords |
| Examples | AES, RSA | bcrypt, scrypt, Argon2 |

### Note
When we talk about passwords in backend, we usually mean:

✅ **Hashing** (bcrypt)  
❌ not encryption

---

## 8) Common Algorithms Mentioned

| Type | Algorithms |
|------|------------|
| Symmetric encryption | AES |
| Asymmetric encryption | RSA |
| Hashing (passwords) | bcrypt, scrypt, Argon2 |

---

## 9) Salt Rounds (Cost Factor)

In bcrypt:

- **Salt rounds** decide how many times hashing is repeated internally.
- More rounds = slower hash = stronger security (but heavier on CPU).

Example:

```js
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);
```

### Quick rule
- `10` → common default  
- `12` → stronger, slower  
- `8` → faster, weaker  

---

## 10) JWT (JSON Web Token)

- Website: `jwt.io`
- Used for: **authentication**

### Install JWT package

```bash
npm install jsonwebtoken
```

### Typical usage (idea)

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);
```

---

## 11) Login / Register Task — Pseudocode

### 🔐 Login Flow (clean steps)

#### Step-by-step logic

1. Check if email exists  
2. If not → user doesn't exist  
3. If yes → compare password  
4. If password wrong → invalid password  
5. If correct → generate token  
6. Return token + user info

---

### 📌 Pseudocode

```txt
LOGIN(email, password):

  user = find user by email

  IF user does not exist:
      return "User not found"

  isMatch = compare(password, user.passwordHash)

  IF isMatch is false:
      return "Invalid password"

  token = generate JWT token using user id

  return token + user data
```

---

## 12) Strong Opinion (Real-World Tip 😤)

If you learn only one thing from MERN auth, make it this:

> **Never store passwords. Store hashes.**  
> If your database leaks and passwords are plain text, you're finished.

---