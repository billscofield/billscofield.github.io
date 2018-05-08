---
layout: post
title: "Git cheat sheet"
description: "A quick way to learn git"
categories: [Git]
tags: [git]
redirect_from:
  - /2018/04/30/
---

## 起源和发展
Linux -> Linux -> no svn -> bitKeeper -> git

## 安装
* sudo apt-get install git

## 配置
* /etc/gitconfig
* ~/.gitconfig
* .git/config
* git config --system/global/local --list
* git config --system/global/local -e
* git config --system/global/local user.name
* git config --gloal --unset user.name
 
* user.name
* user.email
* color.ui
* push.default
* commit.template
* core.editor
 
## Init
* git init
* git init [path]
* git clone -o [自定义远程主机名] [地址] [本地名字]

## Basic
* git add [file]
* git add -u .
* git add -p(--patch) . //交互式

* git mv [file]
* git rm  [file]
    * -r
* git rm --cached [file]
* git checkout -- [file]
    * 另一种删除修改的方式,同时适用于index
    * git stash save [msg]
    * git stash drop [stash]
* git reset HEAD [file]

* git commit 
    * -m 
    * -v

* git cat-file -p [commit]
* git rev-parse [短commit]

## branch
* git branch
* git branch --list
* git branch -r
* git branch -a
* git branch -vv
* git branch [new branch] [branch-base]
* git branch [new branch] [commit]
* git checkout -b [new branch] [branch-base]
* git checkout -b [new branch] [commit]
* git checkout -b [new branch] -t [origin/master]

* **git branch --track [new branch] [origin/master]  // 与远程主机建立了联系**

* git checkout -

* git branch --set-upstream-to=origin/master master

* git branch -d
* git branch -D //强制删除

* git push origin --delete [branch name] //删除远程主机上的 branch name
* git push origin :master
* git branch -dr origin/master
 
* git cherry-pick [commit]

* 别人删除了某个分支，你自己运行 git branch -r 显示还在，此时可以运行
    * git remote prune [origin] --dry-run 查看本地数据库中，哪些分支将会删除
    * 确认无误后 git remote prune origin 进行同步本地的远程分支和remote

* git branch -vv 后,远程端显示为gone的也是应该在本地进行删除的

* 思考
    * git fetch 下来的remote分支如何删除？
    * git prune, git remote prune, git fetch --prune 三者异同？
## stash
*  对当前的暂存区和工作区状态进行保存
* git stash 'msg'
* git stash save 'msg'
* git stash list
* git stash drop
    * 如果没有写 具体的stash ,则删除最后一个
    * 删除了就不能恢复了
* git stash pop 
* git stash apply
* **git stash pop/apply --index **: 同时恢复工作区 和 暂存区;
	* 没有--index,stash之前在暂存区中的内容也会恢复到工作区
* **git stash show [stash]**
    * show the changes recorded in the stash as a diff between the stashed state and it's original parent(最近一次提交)
    * 不论是 工作区 还是 暂存区 ，将两个区域合在一起和HEAD作diff
* **git stash save --all/--include--untracked msg**
    * --all : 会把.ignore中的文件也包含进来，且包含未被追踪的文件
    * --include-untracked : 包含未被跟踪的文件
* git stash clear
* *git stash branch [branch name] [stash]* 基于进度创建分支,并进入该分支

## remote
* git remote 
* git remote -v
* git remote show
* git remote add
* git remote remove
* git remote rename
* git remote set-url 
* git remote set-url --add [origin] [新地址]

* git push origin master:master
* git push -u origin master:master //同时track远程分支
* git push origin --force

* git pull origin master:master
* git pull --rebase origin master
* git fetch origin master

* git merge origin/master
* git rebase origin/master

* git remote update [origin]

## revert
* git revert -m 撤销这个 commit
* 区别于 git reset 恢复至这个 commit

## ssh
* cd ~/.ssh
* ssh-keygen -t rsa -C "email"
* ssh add id_rsa
* cat id_rsa.pub
* ssh -T git@gitee.com

## tag
* git tag --list/-l
* git tag [tag name]
* git tag -a [tag name] -m [msg]
* git tag -d [tag name]
* git push origin [tag name]
* git push origin --tags
* **git show [tag name]**
* **git push origin --delete tag <tagname>**
* git fetch origin tag [tagname]
* 注意

## log
* git rebase -i 
* git rebase --continue
* git rebase --abort
* git commit --amend
    * git commit --amend --date="$(date -R)" 
* git status
* git shortlog -sn
* git log
    * --oneline
    * --decorate
    * --stat
    * --since=/--before=
    * --after=/--until=
    * --author=
    * --committer=
        * format
            * %H	提交对象（commit）的完整哈希字串
            * %h	提交对象的简短哈希字串
            * %T	树对象（tree）的完整哈希字串
            * %t	树对象的简短哈希字串
            * %P	父对象（parent）的完整哈希字串
            * %p	父对象的简短哈希字串
            * %an	作者（author）的名字
            * %ae	作者的电子邮件地址
            * %ad	作者修订日期（可以用 -date= 选项定制格式）
            * %ar	作者修订日期，按多久以前的方式显示
            * %cn	提交者(committer)的名字
                * fork -> pull request -> accept & merge -> 重新从项目所有者那里clone -> git log --pretty=format:"%h %an %cn"
            * %ce	提交者的电子邮件地址
            * %cd	提交日期
            * %cr	提交日期，按多久以前的方式显示
            * %s	提交说明
    * --grep=
        * --all-match:Limit the commits output to ones that match all given --grep, instead of ones that match at least one.
        * -i / --regexp-ignore-case:不区分大小写
    * -S [string]
        * 根据源代码中某些字符串的 增加 和 删除 来搜索提交。
    * -p(--patch)
        * Generate patch 
    * --stat 显示每次更新的文件修改统计信息。
    * --shortstat 只显示 --stat 中最后的行数修改添加移除统计。
    * --name-only 仅在提交信息后显示已修改的文件清单。
    * --name-status 显示新增、修改、删除的文件清单。
    * --abbrev-commit 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。
    * --relative-date 使用较短的相对时间显示（比如，“2 weeks ago”）。
    * --graph 显示 ASCII 图形表示的分支合并历史。
    * --pretty 使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）。

### 推荐用法
* **git log -p --follow -- [file]**
* git blame [file]
     
## diff
* git diff [file]
* git diff [commit] [file]
* git diff --cached [file]
* git diff [commit1] [commit2]
* git diff [branch1] [branch2]

## Reset
* git reset --soft [commit]
    * doesn't touch the WORKING AREA && the INDEX, changes after the [commit] is pushed into the INDEX
* git reset --mixed [commit]
    * doesn't touch the WORKING AREA , the INDEX is set to the same state as [commit] ,and changes after [commit] is pushed into the WORKING AREA
* git reset --hard [commit]
    * touch the WORKING AREA && INDEX, the changes after [commit] is regarded as garbase and throwed.
* 改动的部分都会同步至[commit]
* 注意^与~之间的区别，当存在多个分支时，^可以用来选择分支，HEAD~i永远只选择第i级父节点的第一个分支，HEAD~i^2选择第i级父节点的第二个分支，以此类推；HEAD^=HEAD^1=HEAD~1；如果没有分支，只有一条主线，则HEAD^^^=HEAD^1^1^1=HEAD~3，如果该级几点有第二个分支，则表示为：HEAD^^^2 = HEAD~2^2. 

## show
* git show --name-only [commit]

## :
* git push origin master:master
* git pull origin master:master
* git pull --rebase origin master

## /
* git branch --set-upstream-to=origin/master master
* git merge origin/master
* git rebase origin/master
* git branch -dr origin/master
* git branch [new branch] origin/master

## Github
* 如果你想要参与某个项目,但是并没有推送权限,这时可以对这个项目进行“派生”。 派生的意思是指,GitHub 将在你的空间中创建一个完全属于你的项目副本,且你对其具有推送权限。
* 人们可以派生这个项目,将修改推送到派生出的项目副本中,并通过创建合并请求(Pull Request)来让他们的改动进入源版本库

* GitHub常用的开发协同流程为
    1. 将别人的仓库fork成自己的origin仓库 
    1. git clone origin仓库到本地 
    1. 本地添加fork源仓库  
    1. 工作前先git remote update下fork源保持代码较新 
    1. coding 
    1. push回自己 
    1. github上提出Push Request即可
