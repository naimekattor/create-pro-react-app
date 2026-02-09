#!/bin/bash

echo "🚀 FINAL PUBLISH ATTEMPT"
echo "========================"

# Step 1: Clean authentication
echo "1. Cleaning old authentication..."
npm config delete //registry.npmjs.org/:_authToken
npm config delete _auth
npm logout 2>/dev/null

# Step 2: Login fresh
echo "2. Logging in to npm..."
echo "   A browser window will open for authentication."
echo "   Please complete the login process in your browser."
echo ""
read -p "Press Enter to open browser login..."
npm login --auth-type=web

# Step 3: Verify login
echo "3. Verifying login..."
if npm whoami >/dev/null 2>&1; then
  echo "✅ Logged in as: $(npm whoami)"
else
  echo "❌ Login failed. Trying manual method..."
  
  # Manual token method
  echo ""
  echo "Please create an access token:"
  echo "1. Go to: https://www.npmjs.com/"
  echo "2. Login → Profile → Access Tokens"
  echo "3. Generate 'Automation' token"
  echo "4. Paste token below:"
  read -p "Token: " NPM_TOKEN
  
  npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN
fi

# Step 4: Set package details
echo "4. Setting package details..."
npm pkg set name="@naimekattor/create-pro-react-app"
npm pkg set version="1.0.0"

# Step 5: Show package info
echo "5. Package info:"
echo "   Name: $(npm pkg get name | tr -d '\"')"
echo "   Version: $(npm pkg get version | tr -d '\"')"

# Step 6: Publish
echo "6. Publishing..."
echo "   Command: npm publish --access public"
echo ""
read -p "Press Enter to publish or Ctrl+C to cancel..."

npm publish --access public

# Step 7: Check result
if [ $? -eq 0 ]; then
  echo ""
  echo "🎉🎉🎉 SUCCESS! 🎉🎉🎉"
  echo ""
  echo "📦 Your package is LIVE on npm!"
  echo "🌐 View at: https://www.npmjs.com/package/@naimekattor/create-pro-react-app"
  echo ""
  echo "🚀 Install with:"
  echo "   npx @naimekattor/create-pro-react-app my-app"
  echo "   or"
  echo "   npx create-pro-react-app my-app"
  echo ""
  echo "💡 Test it:"
  echo "   cd ~/Desktop"
  echo "   npx @naimekattor/create-pro-react-app test-app"
else
  echo ""
  echo "❌ Publish failed with error code: $?"
  echo ""
  echo "🔧 Try this alternative:"
  echo "   Visit the auth link manually when prompted"
fi
