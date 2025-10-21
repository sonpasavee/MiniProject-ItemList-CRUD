# SimpleItemList - Mini Project (CRUD Application)

## 📌 Overview

**SimpleItemList** เป็นโปรเจกต์ตัวอย่างแบบ **CRUD (Create, Read, Update, Delete)** ด้วย **Node.js**, **Express**, **MongoDB**, และ **EJS** ใช้สำหรับจัดการรายการสินค้า (Item) แต่ละรายการ โดยสามารถ:

- ดูรายการทั้งหมด
- เพิ่มสินค้าใหม่
- แก้ไขสินค้า
- ลบสินค้า
- ดูรายละเอียดสินค้าทีละรายการ

โปรเจกต์นี้สามารถใช้เป็น Mini Project สำหรับเรียนรู้ Node.js และ MongoDB และสามารถพัฒนาต่อไป เช่น เพิ่มระบบ Authentication, Pagination, Search, หรือเชื่อม API อื่น ๆ

---

## 🛠 Features

- **View Items:** แสดงรายการสินค้าทั้งหมด
- **Add Item:** เพิ่มสินค้าใหม่
- **Edit Item:** แก้ไขข้อมูลสินค้า
- **Delete Item:** ลบสินค้า
- **Detail Page:** ดูรายละเอียดสินค้าแต่ละชิ้น
- **RESTful Routes:** ใช้ HTTP GET, POST, PUT, DELETE ตามหลัก REST

---

## 📂 Project Structure

```
SimpleItemList/
│
├─ controllers/
│   └─ itemController.js      # Controller สำหรับ CRUD ของ Item
│
├─ models/
│   └─ item.js                # Schema ของ Item (Mongoose)
│
├─ routes/
│   └─ items.js               # Router สำหรับ Item
│
├─ views/
│   ├─ index.ejs              # หน้าแสดงรายการทั้งหมด
│   ├─ new.ejs                # หน้าเพิ่ม Item
│   ├─ edit.ejs               # หน้าแก้ไข Item
│   └─ show.ejs               # หน้าแสดงรายละเอียด Item
│
├─ public/
│   └─ styles.css             # ไฟล์ CSS สำหรับหน้าตา
│
├─ app.js                     # Main Application File
├─ package.json               # Node.js Dependencies
└─ README.md                  # คู่มือโปรเจกต์
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone <YOUR_REPO_URL>
cd SimpleItemList
```

### 2. Install Dependencies

```bash
npm install
```

Dependencies หลัก:

- express
- mongoose
- ejs
- body-parser
- method-override

### 3. MongoDB Setup

1. ติดตั้ง [MongoDB](https://www.mongodb.com/) หรือใช้ MongoDB Atlas
2. สร้าง Database ชื่อ `final_lab` (หรือเปลี่ยนในไฟล์ `.env`)
3. หากใช้ Local DB:
```javascript
const mongoURI = 'mongodb://localhost:27017/final_lab';
```
4. หากใช้ Atlas:
```javascript
const mongoURI = process.env.MONGO_URI;
```

### 4. Run Application

```bash
node app.js
```

หรือใช้ **nodemon** สำหรับพัฒนาต่อ:

```bash
npx nodemon app.js
```

เปิดเว็บเบราว์เซอร์และเข้าไปที่:

```
http://localhost:3000
```

---

## 🔗 RESTful Routes

| Method | URL            | Action               |
|--------|----------------|--------------------|
| GET    | /items         | แสดงรายการทั้งหมด   |
| GET    | /items/new     | หน้าเพิ่มสินค้า     |
| POST   | /items         | เพิ่มสินค้าใหม่     |
| GET    | /items/:id     | แสดงรายละเอียดสินค้า|
| GET    | /items/:id/edit| แก้ไขสินค้า        |
| PUT    | /items/:id     | อัปเดตสินค้า       |
| DELETE | /items/:id     | ลบสินค้า           |

---

## 🧩 Sample Item Model (Mongoose)

```javascript
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  price: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('item', itemSchema);
```

---

## 🧠 Future Enhancements

- 🔐 เพิ่มระบบ Authentication (Login / Register)
- 🧑‍💼 แยก User แต่ละคน (Owner ของ Item)
- 📸 เพิ่มระบบอัปโหลดรูปภาพสินค้า
- 🕹️ ปรับดีไซน์ด้วย TailwindCSS หรือ Bootstrap
- 🌐 สร้าง REST API สำหรับ Mobile App
- ☁️ Deploy ขึ้น Render / Vercel / Railway

---

## 🤝 Author

**Pasavee Pongkaew**  
🎓 วิทยาลัยการคอมพิวเตอร์ — สาขาวิทยาการคอมพิวเตอร์  
📅 พัฒนาในปี 2025  
📍 สำหรับใช้เป็น Mini Project รายวิชา Node.js / Express Framework

---

**Happy Coding! 🚀**

