# 🚀 Scalable Job Importer System

A comprehensive job import system that fetches data from multiple external APIs, processes them through a Redis-based queue system, and provides a real-time admin dashboard for monitoring and management.

## 🏗️ Architecture

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Queue**: BullMQ with Redis
- **Real-time**: Socket.IO
- **Deployment**: vercel

## ✨ Features

### Core Functionality
- 🔄 **Automated Job Fetching**: Hourly cron jobs fetch from multiple APIs
- 📊 **Queue Processing**: Redis-based background job processing
- 📈 **Import Tracking**: Detailed history with success/failure metrics
- 🎯 **Real-time Updates**: Live dashboard updates via Socket.IO
- 🔍 **Advanced Search**: Filter jobs by category, type, and keywords

### Admin Dashboard
- 📊 **Statistics Overview**: Total jobs, import success rates, queue status
- 📋 **Import History**: Detailed logs with New/Updated/Failed counts
- 💼 **Job Management**: Browse and search imported jobs
- 📈 **Visual Analytics**: Charts and graphs for data insights

### Technical Features
- 🚀 **Scalable Architecture**: Configurable worker concurrency
- 🔄 **Retry Logic**: Exponential backoff for failed jobs
- 📝 **Comprehensive Logging**: Winston-based structured logging
- 🛡️ **Rate Limiting**: API protection against abuse
- 🐳 **Docker Support**: Complete containerization

## 🚀 Quick Start

### Prerequisites
- Node.js 
- MongoDB
- Redis

### Option 1: Docker Compose (Recommended)

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd job




Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017
- Redis: localhost:6379

### Option 2: Manual Setup

#### Backend Setup
\`\`\`bash
cd server
npm install
cp .env .env
# Edit .env with your configuration
npm run dev
\`\`\`

#### Frontend Setup
\`\`\`bash
cd client
npm install
cp .env .env
# Edit .env with your configuration
npm run dev
\`\`\`


## 📊 API Endpoints

### Jobs
- `GET /api/jobs` - Get paginated jobs list
- `GET /api/jobs/:id` - Get specific job
- `GET /api/jobs/stats` - Get job statistics

### Imports
- `GET /api/imports/history` - Get import history
- `GET /api/imports/stats` - Get import statistics
- `POST /api/imports/trigger` - Trigger single import
- `POST /api/imports/trigger-all` - Trigger all imports

## 🔧 Configuration

### Environment Variables

#### Server (.env)
\`\`\`bash
MONGODB_URI=mongodb://localhost:27017/job-importer
REDIS_HOST=localhost
REDIS_PORT=6379
PORT=5000
CLIENT_URL=http://localhost:3000
BATCH_SIZE=50
WORKER_CONCURRENCY=2
LOG_LEVEL=info
\`\`\`

#### Client (.env)
\`\`\`bash
REACT_APP_API_URL=http://localhost:5000
\`\`\`

## 📋 Data Sources

The system fetches jobs from multiple APIs:

1. **Jobicy APIs**:
   - General jobs feed
   - Category-specific feeds (SMM, Design, Data Science, etc.)
   - Location-filtered feeds

2. **Higher Ed Jobs**:
   - Academic positions RSS feed

3. **XML to JSON Conversion**:
   - Automatic parsing and normalization
   - Error handling and validation

## 🏗️ System Design

### Queue Processing Flow
\`\`\`
API Sources → Fetch Service → Redis Queue → Worker Pool → MongoDB
     ↓              ↓            ↓           ↓          ↓
Import Logs ← Progress Tracking ← Job Processing ← Data Validation
\`\`\`

### Database Schema

#### Jobs Collection
\`\`\`javascript
{
  jobId: String (unique),
  title: String,
  company: String,
  location: String,
  description: String,
  category: String,
  jobType: String,
  url: String,
  publishedDate: Date,
  source: String,
  sourceUrl: String,
  createdAt: Date,
  updatedAt: Date
}
\`\`\`

#### Import Logs Collection
\`\`\`javascript
{
  fileName: String,
  source: String,
  sourceUrl: String,
  status: String,
  startTime: Date,
  endTime: Date,
  totalFetched: Number,
  totalImported: Number,
  newJobs: Number,
  updatedJobs: Number,
  failedJobs: Number,
  failureReasons: Array,
  processingTime: Number
}
\`\`\`

## 🔍 Monitoring

### Dashboard Metrics
- Total jobs in database
- Import success/failure rates
- Queue status (waiting, active, completed, failed)
- Recent import history
- Job distribution by category and source

### Logging
- Structured JSON logging with Winston
- Multiple log levels (error, warn, info, debug)
- Separate error and combined log files
- Console output in development

## 🚀 Deployment

### Production Deployment


# Build and deploy
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

#### Manual Deployment
1. Deploy frontend to Vercel



## 🧪 Testing

\`\`\`bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
\`\`\`

## 📈 Performance Optimization

- **Database Indexing**: Optimized queries with compound indexes
- **Batch Processing**: Configurable batch sizes for imports
- **Connection Pooling**: MongoDB connection optimization
- **Caching**: Redis caching for frequently accessed data
- **Pagination**: Efficient data loading with pagination

## 🛡️ Security

- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Environment variable protection
- Error message sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in `/docs`
- Review the architecture diagram

---

Built with ❤️ using Node.js, React, MongoDB, and Redis
















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


