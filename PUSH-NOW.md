# 🚀 PUSH TO GITHUB - EXACT COMMANDS

## Step 1: Configure Git (Run Once)
```bash
cd /Users/govindchoudhary/Desktop/stack/waypoint
git config --global user.name "Govind Choudhary"
git config --global user.email "your-email@example.com"
```
⚠️ Replace `your-email@example.com` with your actual email!

---

## Step 2: Create GitHub Repository

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name:** `waypoint`
   - **Description:** `Travel itinerary planning web application`
   - **Public** ✅ (so recruiters can see)
   - **DON'T** check "Add README" (we have it)
3. Click **"Create repository"**

---

## Step 3: Push Your Code (Copy-Paste These)

```bash
cd /Users/govindchoudhary/Desktop/stack/waypoint

git remote add origin https://github.com/govindaaaaa/waypoint.git

git branch -M main

git push -u origin main
```

---

## If It Asks for Authentication:

**Option 1: Use GitHub Desktop** (Easiest)
- Download from: https://desktop.github.com
- Sign in with your GitHub account
- Add existing repository: `/Users/govindchoudhary/Desktop/stack/waypoint`
- Click "Publish repository"

**Option 2: Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select "repo" scope
4. Copy the token
5. Use token as password when pushing

---

## Verify Success:

Go to: **https://github.com/govindaaaaa/waypoint**

You should see your files! 🎉

---

## After First Push (Daily Routine):

Every time you make changes:
```bash
cd /Users/govindchoudhary/Desktop/stack/waypoint
git add .
git commit -m "Day X: What you added"
git push
```

That's it!
