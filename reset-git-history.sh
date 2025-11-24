#!/bin/bash

# Script để xóa Git history và bắt đầu lại với clean history
# Sử dụng khi đã commit secrets lên Git

echo "🚨 CẢNH BÁO: Script này sẽ XÓA TOÀN BỘ GIT HISTORY!"
echo "Bạn sẽ mất tất cả commit history và bắt đầu lại từ đầu."
echo ""
read -p "Bạn có chắc chắn muốn tiếp tục? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Đã hủy."
    exit 1
fi

echo ""
echo "🔄 Đang xóa Git history..."

# Xóa thư mục .git
rm -rf .git

# Khởi tạo Git repository mới
git init

# Add tất cả files (trừ những file trong .gitignore)
git add .

# Commit lần đầu với clean history
git commit -m "Initial commit - Clean version without secrets"

echo ""
echo "✅ Hoàn thành!"
echo ""
echo "📝 Git history đã được reset."
echo "📝 Bạn có một commit mới, sạch sẽ, không chứa secrets."
echo ""
echo "⚠️  LƯU Ý QUAN TRỌNG:"
echo "1. KHÔNG push lên GitHub repository cũ"
echo "2. Tạo một GitHub repository MỚI"
echo "3. Hoặc force push (nguy hiểm nếu có người khác đang dùng repo)"
echo ""
echo "🔐 TIẾP THEO:"
echo "1. Đổi tất cả passwords/API keys đã bị lộ"
echo "2. Tạo GitHub repository mới (hoặc xóa repo cũ)"
echo "3. Push code mới lên"
echo ""
