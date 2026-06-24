# 🚀 Push to GitHub - Step by Step

## Step 1: Configure Git (Do this ONCE)
```bash
cd /Users/govindchoudhary/Desktop/stack/waypoint

git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

Replace with your actual name and email!

---

## Step 2: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `waypoint`
3. Description: "Travel itinerary planning web app"
4. **Keep it PUBLIC** (so recruiters can see it)
5. **DON'T** add README, .gitignore (we already have them)
6. Click "Create repository"

---

## Step 3: Connect Local to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
cd /Users/govindchoudhary/Desktop/stack/waypoint

git remote add origin https://github.com/YOUR-USERNAME/waypoint.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

---

## Step 4: Verify It Worked

Go to: `https://github.com/YOUR-USERNAME/waypoint`

You should see:
- ✅ README.md
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ .gitignore
- ✅ Your commit message

---

## Daily Workflow (After Setup)

Every day when you make changes:

```bash
cd /Users/govindchoudhary/Desktop/stack/waypoint

# 1. Add changes
git add .

# 2. Commit with message
git commit -m "Day 2: Added budget input field"

# 3. Push to GitHub
git push
```

**That's it!** Your GitHub profile will show green squares for each commit.

---

## Tomorrow's Features to Add

Pick one and commit it:

- [ ] Add budget input field
- [ ] Add interest dropdown (Adventure, Relaxation, etc.)
- [ ] Improve styling (colors, fonts)
- [ ] Make it mobile responsive
- [ ] Add a simple itinerary display

---

## Troubleshooting

**Problem:** "Permission denied"
**Solution:** You need to authenticate. Use GitHub Desktop app OR set up SSH keys.

**Problem:** "Repository not found"
**Solution:** Check the remote URL: `git remote -v`

**Problem:** "Nothing to commit"
**Solution:** Make sure you changed files! Check with: `git status`

---

## GitHub Authentication (If needed)

If it asks for login:
1. Use **Personal Access Token** (not password)
2. Go to: GitHub Settings → Developer Settings → Personal Access Tokens
3. Generate new token with "repo" permissions
4. Use token as password

OR easier: Install **GitHub Desktop** app!
