# 📘 DOM & DOM Manipulation Notes

## What is DOM?

The **DOM (Document Object Model)** is a programming interface that represents your HTML as a **tree of objects**, allowing JavaScript to read, modify, and interact with the webpage dynamically.

👉 In simple terms:
**DOM = bridge between HTML and JavaScript**

---

## 4 Pillars of DOM

---

### 1. Selection of an Element

Before you change anything, you need to **grab it**.

```html
<h1 class="title">
  Hey
</h1>
```

```javascript
document.querySelector("h1") // selects first h1
document.getElementsByClassName("title") // selects by class (HTMLCollection)
document.getElementById("idname") // selects by id
```

💡 Reality check:

* `querySelector` = most flexible (modern devs use this a lot)
* `getElementById` = fastest but limited
* `getElementsByClassName` = returns collection (not a single element)

---

### 2. Changing HTML (Content Manipulation)

```js
var a = document.querySelector("h1");
console.log(a); // <h1>Hey</h1>

a.innerHTML = "Changed text here";
```

💡 Key idea:

* `innerHTML` → replaces everything inside the tag
* You can even insert HTML tags inside it

---

### 3. Changing CSS (Styling via JS)

```css
.title {
  color: red;
  padding: 10px;
}
```

```js
var a = document.querySelector(".title");

a.style.color = "green";
a.style.backgroundColor = "teal";
```

💡 Important:

* CSS properties become **camelCase** in JS
  (`background-color` → `backgroundColor`)

---

### 4. Event Listeners (Making Things Interactive)

```js
a.addEventListener("click", function () {
  console.log("haiyaa");
  a.innerHTML = "Changed by event";
  a.style.color = "#0f0f0f";
});
```

💡 Translation:

* “When user clicks → do something”
* This is where websites stop being static and start feeling alive

---

# 💡 Mini Project: Bulb ON/OFF (Click Toggle)

Simple, clean, and actually useful for understanding DOM flow.

---

## 📄 HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bulb Toggle</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="bulb" id="bulb"></div>
  <button id="btn">Turn ON</button>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 CSS

```css
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  font-family: sans-serif;
}

.bulb {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: gray;
  margin-bottom: 20px;
  transition: 0.3s;
}

.on {
  background-color: yellow;
  box-shadow: 0 0 40px yellow;
}
```

---

## ⚙️ JavaScript

```js
const bulb = document.getElementById("bulb");
const btn = document.getElementById("btn");

let isOn = false;

btn.addEventListener("click", function () {
  if (isOn) {
    bulb.classList.remove("on");
    btn.innerHTML = "Turn ON";
  } else {
    bulb.classList.add("on");
    btn.innerHTML = "Turn OFF";
  }

  isOn = !isOn;
});
```

---

## 🧠 What’s actually happening (don’t skip this)

* You **select elements** (bulb, button)
* You **listen for click**
* You **toggle a class**
* CSS does the visual magic

👉 That’s real DOM power:
**JS controls logic → CSS controls appearance → HTML holds structure**

---

## Final Thought

If you master just these 4 pillars, you can already build:

* buttons that react
* forms that validate
* UI that actually feels alive

Everything else (React, frameworks, fancy stuff) is just sitting on top of this.

