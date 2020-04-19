#### 简易的命令行入门教程:

Git 全局设置:

```
git config --global user.name "osvue"
git config --global user.email "hzqq110@163.com"
```

创建 git 仓库:

```
mkdir blog
cd blog
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin git@gitee.com:osvue/blog.git
git push -u origin master
```

已有仓库?

```
cd existing_git_repo
git remote add origin git@gitee.com:osvue/blog.git
git push -u origin master
```