# 🤖 Blog Full-Stack Thông Minh Tích Hợp AI

Dự án Blog cá nhân Full-Stack hiện đại với khả năng tạo nội dung tự động bằng AI (Gemini), bảo mật mạnh mẽ và giao diện người dùng tối ưu.

## 🌟 Demo
- **Frontend**: [https://mhieu100.space](https://mhieu100.space)
- **Backend**: [https://api.mhieu100.space](https://api.mhieu100.space)
- **API Health Check**: [https://api.mhieu100.space/api/welcome](https://api.mhieu100.space/api/welcome)

## ✨ Tính Năng Nổi Bật

### 🧠 Tích Hợp AI (Gemini)
- **Tự động viết bài**: Tạo nội dung blog, tiêu đề và tóm tắt chỉ từ một gợi ý (prompt).
- **Trợ lý Chat AI**: Hỗ trợ giải đáp thắc mắc và tương tác với người dùng.

### 👤 Người Dùng
- **Authentication**: Đăng ký, Đăng nhập bảo mật với JWT.
- **Quản lý bài viết**: Tạo, đọc, cập nhật và xóa bài viết (CRUD).
- **Upload ảnh**: Tải ảnh lên Cloudinary nhanh chóng.
- **Tương tác**: Giao diện mượt mà, responsive trên mọi thiết bị.

### 🛡️ Quản Trị (Admin)
- **Kiểm duyệt**: Duyệt hoặc từ chối bài viết.
- **Quản lý người dùng**: Xem và quản lý danh sách người dùng.
- **Thống kê**: Dashboard tổng quan về hệ thống.

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **Framework**: React 19 + Vite
- **Ngôn ngữ**: TypeScript
- **Styling**: TailwindCSS
- **State/Data**: React Hooks, Axios
- **Build & Deploy**: Vercel

### Backend
- **Framework**: Spring Boot 3.2
- **Ngôn ngữ**: Java 21
- **Security**: Spring Security + JWT + Rate Limiting
- **Database**: PostgreSQL (Supabase)
- **AI**: Google Gemini API
- **Storage**: Cloudinary
- **Build & Deploy**: Docker, Render

### CI/CD & DevOps
- **GitHub Actions**: Tự động build và deploy backend khi có thay đổi trên nhánh main.
- **Docker**: Containerization cho backend