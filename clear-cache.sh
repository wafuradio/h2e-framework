#!/bin/bash

echo "🔍 H2E Framework - Cache Clearing Script"
echo "=========================================="
echo ""

# Navigate to project directory
cd ~/Desktop/h2e-framework

echo "1️⃣ Clearing Astro build cache..."
rm -rf .astro
rm -rf dist

echo "2️⃣ Clearing Vite cache..."
rm -rf node_modules/.vite

echo "3️⃣ Clearing system temp files..."
rm -rf .DS_Store

echo ""
echo "✅ Cache cleared!"
echo ""
echo "Now run:"
echo "  npm run dev"
echo ""
echo "Then open browser in INCOGNITO mode:"
echo "  http://localhost:4321/terminal"
echo ""
