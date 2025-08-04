#!/usr/bin/env python3
"""
Production entry point for Aqlan Agent
Runs without reload for PM2 compatibility
"""

import uvicorn
from main import app

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001, reload=False, log_level="info")
