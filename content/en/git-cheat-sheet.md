# Getting started

Config basic info.

::code-group

```bash [demo.bash]
git config --global user.name 'username'
git config --global user.email 'user@email.com'
```

::

Initialize a git repository or clone from remote server.

::code-group

```bash [demo.bash]
git init  # Init locally
git clone url [direcroty]  # Init from remote server
```

::

# Commit changes

Add changes to staging area.

::code-group

```bash [demo.bash]
git add .  # Add files in a directory
git add filename  # Add a file
git add *  # Use wildcard to add multiple files
```

::

Commit changes in staging area.

::code-group

```bash [demo.bash]
git commit -am "commit message"  # Commit all changes
git commit --amend --no-edit  # Add new changes to the latest commit
git commit --amend  # Change commit message
```

::

Reset changes or commits.

::code-group

```bash [demo.bash]
git reset HEAD [filename]  # Reset the latest commit
git reset HEAD~N  # Reset latest N commits
git reset HEAD~N --head  # Reset N commits and remove changes
```

::

Move or remove files.

::code-group

```bash [demo.bash]
git rm filename  # Remove a file
git rm -f filename  # Remove a file and discard staged changes
git mv filename newfilename  # Move or rename a file
```

::

Show history and status.

::code-group

```bash [demo.bash]
git log  # Show git commits
git status  # Show current state of repository
git blame filename  # List a file's changes
```

::

# Branches and remote origins

Manage branches.

::code-group

```bash [demo.bash]
git branch  # List branches
git branch branchname  # Create a branch
git checkout branchname  # Checkout to a branch
git branch -d branchname  # Delete a branch
git branch -m branchname new-name  # Rename a branch
```

::

Merge/rebase branches.

::code-group

```bash [demo.bash]
git merge branchname  # Merge changes to current branch
git merge branch-target branch-source  # Merge source to target branch
git rebase branchname  # Rebase changes to current branch
git rebase branch-target branch-source  # Rebase source to target branch
```

::

Manage remote repositories.

::code-group

```bash [demo.bash]
git remote  # List all remote repositories
git remote -v  # List all repositories, with URL
git remote add name url  # Add a new remote repository
git remote rename old-name new-name  # Rename a remote repository
git remote remote name  # Remove a remote repository
git remote set-url new-url  # Change a repository's URL
```

::

Manage local and remote changes.

::code-group

```bash [demo.bash]
git fetch  # Download changes, without doing anything
git pull  # Download changes, and merge to local repository
git rebase  # Download changes, and rebase onto local repository
git push  # Upload changes
git push -u remote branch  # Push and set remote branch as default target
```

::
