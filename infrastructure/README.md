# 🐳 Infrastructure - AWS EC2 Deployment

**Mục đích**: Deploy backend lên AWS EC2 với Docker, Nginx, và SSL  
**Trạng thái**: 📦 Sẵn sàng sử dụng (chưa deploy)

---

## 📋 TỔNG QUAN

Thư mục này chứa config để deploy backend lên **AWS EC2** (alternative cho Render).

**Stack**:
- **Docker Compose**: Orchestrate containers
- **Backend Container**: Spring Boot app
- **Nginx**: Reverse proxy + SSL termination
- **Certbot**: Let's Encrypt SSL certificates

---

## 🚀 QUICK START

### Prerequisites

1. **AWS EC2 Instance**:
   - Ubuntu 22.04 LTS
   - t2.micro hoặc t3.micro
   - Security Group: Ports 22, 80, 443 open
   - Elastic IP (recommended)

2. **Domain** (optional):
   - Point A record to EC2 IP
   - Example: `api.yourdomain.com`

3. **Docker & Docker Compose** installed on EC2

---

## 📦 DEPLOYMENT STEPS

### 1. Setup EC2 Instance

```bash
# SSH to EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Install Docker Compose
sudo apt install docker-compose -y

# Logout and login again
exit
```

### 2. Upload Infrastructure Files

```bash
# From your local machine
cd /home/mhieu/Coding/deloy-fullstack

# Copy infrastructure folder to EC2
scp -i your-key.pem -r infrastructure ubuntu@your-ec2-ip:~/app/
```

### 3. Configure Environment Variables

```bash
# SSH to EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Navigate to app folder
cd ~/app/infrastructure

# Create .env file
cp .env.example .env
nano .env
```

**Edit `.env` với thông tin thật**:
```env
DB_URL=jdbc:postgresql://db.qiwzdemexljtcnzneana.supabase.co:5432/postgres
DB_USERNAME=postgres
DB_PASSWORD=YOUR_PASSWORD
CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
JWT_SECRET=YOUR_JWT_SECRET
```

### 4. Build & Push Docker Image

```bash
# From local machine
cd /home/mhieu/Coding/deloy-fullstack/backend

# Build image
docker build -t YOUR_DOCKERHUB_USERNAME/backend:latest .

# Login to Docker Hub
docker login

# Push image
docker push YOUR_DOCKERHUB_USERNAME/backend:latest
```

**Update `docker-compose.yml`**:
```yaml
services:
  backend:
    image: YOUR_DOCKERHUB_USERNAME/backend:latest  # Update this
```

### 5. Start Services

```bash
# On EC2
cd ~/app/infrastructure

# Pull latest image
docker-compose pull

# Start services
docker-compose up -d

# Check logs
docker-compose logs -f backend
```

### 6. Setup SSL (if using domain)

```bash
# Edit init-letsencrypt.sh
nano init-letsencrypt.sh

# Update domain and email
domains=(api.yourdomain.com)
email="your-email@example.com"

# Run SSL setup
chmod +x init-letsencrypt.sh
./init-letsencrypt.sh

# Restart nginx
docker-compose restart nginx
```

---

## 📁 FILE STRUCTURE

```
infrastructure/
├── docker-compose.yml       # Main orchestration file
├── nginx/
│   └── conf.d/
│       └── app.conf         # Nginx configuration
├── init-letsencrypt.sh      # SSL setup script
├── .env.example             # Environment template
├── .gitignore
└── README.md                # This file
```

---

## 🔧 CONFIGURATION FILES

### docker-compose.yml

**Services**:
- `backend`: Spring Boot app (port 8080)
- `nginx`: Reverse proxy (ports 80, 443)
- `certbot`: SSL certificate management

### nginx/conf.d/app.conf

**Cần update**:
```nginx
server_name api.yourdomain.com;  # Your domain
```

### init-letsencrypt.sh

**Cần update**:
```bash
domains=(api.yourdomain.com)     # Your domain
email="your-email@example.com"   # Your email
```

---

## 🧪 TESTING

### Test Backend

```bash
# Without domain (using IP)
curl http://YOUR_EC2_IP/api/articles/public

# With domain
curl https://api.yourdomain.com/api/articles/public
```

### Check Logs

```bash
# Backend logs
docker-compose logs -f backend

# Nginx logs
docker-compose logs -f nginx

# All logs
docker-compose logs -f
```

### Check Running Containers

```bash
docker-compose ps
```

---

## 🔄 UPDATES & MAINTENANCE

### Update Backend Code

```bash
# Local: Build & push new image
cd backend
docker build -t YOUR_USERNAME/backend:latest .
docker push YOUR_USERNAME/backend:latest

# EC2: Pull & restart
cd ~/app/infrastructure
docker-compose pull backend
docker-compose up -d backend
```

### Restart Services

```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart backend
docker-compose restart nginx
```

### Stop Services

```bash
docker-compose down
```

### View Logs

```bash
# Real-time logs
docker-compose logs -f

# Last 100 lines
docker-compose logs --tail=100
```

---

## 🆚 COMPARISON: Render vs EC2

| Feature | Render | EC2 + Docker |
|---------|--------|--------------|
| **Setup** | Easy (click) | Complex (manual) |
| **Cost** | Free tier | ~$5-10/month |
| **Control** | Limited | Full control |
| **SSL** | Auto | Manual setup |
| **Deploy** | Auto (Git push) | Manual |
| **Maintenance** | Zero | Self-managed |
| **Performance** | Cold start (free) | Always on |
| **Scaling** | Auto | Manual |

---

## 💰 COST ESTIMATE

### AWS EC2
- **t2.micro**: ~$8/month (free tier 1 year)
- **t3.micro**: ~$7/month
- **Elastic IP**: Free (if attached)
- **Data transfer**: ~$0.09/GB

### Total
- **First year**: Free (free tier)
- **After**: ~$7-10/month

---

## 🐛 TROUBLESHOOTING

### Backend won't start

```bash
# Check logs
docker-compose logs backend

# Common issues:
# 1. Environment variables missing
# 2. Database connection failed
# 3. Port already in use
```

### Nginx 502 Bad Gateway

```bash
# Check backend is running
docker-compose ps

# Check backend logs
docker-compose logs backend

# Restart services
docker-compose restart
```

### SSL certificate issues

```bash
# Re-run SSL setup
./init-letsencrypt.sh

# Check certbot logs
docker-compose logs certbot

# Manual renewal
docker-compose run --rm certbot renew
```

### Can't access from browser

```bash
# Check Security Group
# - Port 80 (HTTP) open
# - Port 443 (HTTPS) open

# Check nginx is running
docker-compose ps nginx

# Check nginx logs
docker-compose logs nginx
```

---

## 📚 RESOURCES

- **Docker Compose Docs**: https://docs.docker.com/compose/
- **Nginx Docs**: https://nginx.org/en/docs/
- **Let's Encrypt**: https://letsencrypt.org/
- **AWS EC2**: https://aws.amazon.com/ec2/

---

## 🎯 WHEN TO USE

**Use EC2 when**:
- ✅ Need always-on (no cold start)
- ✅ High traffic production app
- ✅ Need full control
- ✅ Want to learn DevOps
- ✅ Have budget (~$7-10/month)

**Use Render when**:
- ✅ Side project / demo
- ✅ Want zero DevOps
- ✅ Free tier is enough
- ✅ Don't mind cold start

---

## 📝 NOTES

- **Current deployment**: Render (production)
- **This folder**: Backup/alternative option
- **Status**: Ready to use, not deployed yet

---

## 🚀 NEXT STEPS

Khi muốn deploy lên EC2:

1. ✅ Setup EC2 instance
2. ✅ Configure domain (optional)
3. ✅ Follow deployment steps above
4. ✅ Update frontend to point to EC2 backend
5. ✅ Test thoroughly

---

**Good luck with EC2 deployment!** 🎉
