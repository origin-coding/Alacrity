# 入门

配置Git基本信息。

::code-group

```bash [demo.bash]
git config --global user.name 'username'
git config --global user.email 'user@email.com'
```

::

初始化本地仓库，或者克隆远程仓库。

::code-group

```bash [demo.bash]
git init  # 本地初始化
git clone url [direcroty]  # 获取远程仓库
```

::

# 提交修改

将更改保存到暂存区。

::code-group

```bash [demo.bash]
git add .  # 暂存一个目录下的文件
git add filename  # 暂存某个文件
git add *  # 使用通配符，暂存多个文件
```

::

提交暂存区的修改。

::code-group

```bash [demo.bash]
git commit -am "commit message"  # 提交所有修改
git commit --amend --no-edit  # 修改最近一次提交内容
git commit --amend  # 修改最近一次提交信息
```

::

撤销提交记录。

::code-group

```bash [demo.bash]
git reset HEAD [filename]  # 撤销最近一次提交
git reset HEAD~N  # 撤销最近N次提交
git reset HEAD~N --head  # 撤销最近N次提交，并且撤回修改
```

::

移动，删除文件。

::code-group

```bash [demo.bash]
git rm filename  # 删除某个文件
git rm -f filename  # 删除某个文件，并放弃暂存区的修改
git mv filename newfilename  # 移动或重命名文件
```

::

查看提交历史和状态。

::code-group

```bash [demo.bash]
git log  # 查看提交历史
git status  # 查看当前仓库的提交状态
git blame filename  # 列出某个文件的提交历史
```

::

# 分支和远程操作

管理分支。

::code-group

```bash [demo.bash]
git branch  # 列出所有分支
git branch branchname  # 创建分支
git checkout branchname  # 签出到某个分支
git branch -d branchname  # 删除分支
git branch -m branchname new-name  # 重命名分支
```

::

合并/变基更改。

::code-group

```bash [demo.bash]
git merge branchname  # 将目标分支合并到当前分支
git merge branch-target branch-source  # 将分支合并到目标分支上
git rebase branchname  # 将当前分支变基到目标分支
git rebase branch-target branch-source  # 将分支变基到目标分支上
```

::

管理远程仓库。

::code-group

```bash [demo.bash]
git remote  # 列出全部远程仓库
git remote -v  # 列出全部远程仓库，并附带URL
git remote add name url  # 添加远程仓库
git remote rename old-name new-name  # 重命名远程仓库
git remote remote name  # 删除远程仓库
git remote set-url new-url  # 修改远程仓库地址
```

::

管理远程和本地的修改。

::code-group

```bash [demo.bash]
git fetch  # 下载远程仓库的更新，不做其余任何事
git pull  # 下载远程仓库的更新，并合并到当前分支
git rebase  # 下载远程仓库的更新，并变基到当前分支
git push  # 提交更改到远程仓库
git push -u remote branch  # 提交更新，并设置分支为默认目标分支
```

::
