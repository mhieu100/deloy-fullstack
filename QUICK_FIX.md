# 🚨 QUICK ACTION - FIX SECURITY INCIDENT

**⏰ Làm NGAY - Chỉ mất 30 phút!**

---

## ✅ CHECKLIST NHANH (Làm theo thứ tự)

### 1️⃣ ĐỔI CLOUDINARY KEYS (5 phút)

```
1. Mở: https://console.cloudinary.com/settings/security
2. Click "Regenerate API Secret"
3. Copy 3 giá trị mới:
   - Cloud Name: _______________
   - API Key: _______________
   - API Secret: _______________
```

### 2️⃣ ĐỔI POSTGRESQL PASSWORD (5 phút)

```
1. Mở: https://supabase.com/dashboard
2. Project Settings → Database
3. Click "Reset Database Password"
4. Copy password mới: _______________
5. Copy connection string mới: _______________
```

### 3️⃣ TẠO JWT SECRET MỚI (1 phút)

```bash
# Chạy lệnh này:
echo -n "my-new-super-secret-key-$(date +%s)" | base64

# Copy output: _______________
```

### 4️⃣ CẬP NHẬT RENDER (5 phút)

```
1. Mở: https://dashboard.render.com/
2. Your Service → Settings → Environment
3. Update các biến:
   ☐ DB_URL (với password mới)
   ☐ DB_PASSWORD (password mới)
   ☐ CLOUDINARY_CLOUD_NAME (nếu đổi)
   ☐ CLOUDINARY_API_KEY (key mới)
   ☐ CLOUDINARY_API_SECRET (secret mới)
   ☐ JWT_SECRET (secret mới)
4. Click "Save Changes"
5. Manual Deploy → "Deploy latest commit"
```

### 5️⃣ RESET GIT HISTORY (5 phút)

```bash
cd /home/mhieu/Coding/deloy-fullstack

# Chạy script
./reset-git-history.sh

# Nhập "yes" khi được hỏi
```

### 6️⃣ XÓA GITHUB REPO CŨ (2 phút)

```
1. Vào: https://github.com/YOUR_USERNAME/deloy-fullstack
2. Settings → Danger Zone
3. Click "Delete this repository"
4. Nhập tên repo để confirm
5. Click "I understand..."
```

### 7️⃣ TẠO GITHUB REPO MỚI (2 phút)

```
1. Vào: https://github.com/new
2. Name: deloy-fullstack-v2 (hoặc tên khác)
3. Visibility: Public
4. KHÔNG chọn "Initialize with README"
5. Click "Create repository"
6. Copy URL: _______________
```

### 8️⃣ PUSH CODE MỚI (2 phút)

```bash
cd /home/mhieu/Coding/deloy-fullstack

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/deloy-fullstack-v2.git

# Push
git push -u origin main
```

### 9️⃣ VERIFY (3 phút)

```
☐ Check GitHub repo mới không có secrets
☐ Check Render backend vẫn chạy OK
☐ Test API: curl https://YOUR-BACKEND.onrender.com/api/articles/public
☐ Check GitGuardian không còn alert
```

---

## 📝 GHI CHÚ CREDENTIALS MỚI

**⚠️ KHÔNG commit file này vào Git!**

### Cloudinary (Mới):
```
Cloud Name: _______________
API Key: _______________
API Secret: _______________
```

### PostgreSQL (Mới):
```
Host: db.qiwzdemexljtcnzneana.supabase.co
Port: 5432
Database: postgres
Username: postgres
Password: _______________
Connection String: _______________
```

### JWT Secret (Mới):
```
JWT_SECRET: _______________
```

---

## ⏰ TIMELINE

| Step | Time | Status |
|------|------|--------|
| 1. Đổi Cloudinary | 5 min | ☐ |
| 2. Đổi PostgreSQL | 5 min | ☐ |
| 3. Tạo JWT Secret | 1 min | ☐ |
| 4. Update Render | 5 min | ☐ |
| 5. Reset Git | 5 min | ☐ |
| 6. Xóa repo cũ | 2 min | ☐ |
| 7. Tạo repo mới | 2 min | ☐ |
| 8. Push code | 2 min | ☐ |
| 9. Verify | 3 min | ☐ |
| **TOTAL** | **30 min** | |

---

## 🎯 SAU KHI HOÀN THÀNH

✅ Tất cả credentials cũ đã vô hiệu hóa  
✅ Git history sạch, không còn secrets  
✅ GitHub repo mới, an toàn  
✅ Backend vẫn chạy bình thường  
✅ GitGuardian không còn cảnh báo  

---

**BẮT ĐẦU NGAY! ⏰**
