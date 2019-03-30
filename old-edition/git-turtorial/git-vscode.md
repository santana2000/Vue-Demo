##  Git

0. ctrl + ` 唤出terminal  
1. 可以手动创建目录，然后init该文件夹，使其变为git仓库         
2. 改动文件，打开teminal,进入仓库文件夹查看git status  
3. add改动后的文件到staged,commit文件到仓库,在vsc中通过点击即可实现  
4. 多次commit的记录（后悔药对应的ID）通过git log查看（--oneline） 
   通过git checkout +（后悔药ID）回退到指定版本  
5. 通过git tag 查看所有版本
   完成第一章
   完成第二章
   ...
   完成第十章
   第一版全部完成  git tag -a V1.0 -m "第一版于9月完成"
   修改第二章
   增加番外篇
   ...
   完成第二版   git tag -a V1.0 -m "第二版于10月完成"
6. 完成第一章
   完成第二章
   第三章剧情分支  git branch rich + git checkout rich
   对分支内容做改动(修复前两章中不合理的人物设定) + add + commit
   切换后master不受影响,通过git log --all --graph查看全部记录
7. 先切换回master,通过git merge rich合并分支,把修正了前两章的分支rich合并到master里
8. 把工程的文件夹连接至远程仓库向其推送文件 / 克隆远程仓库至本地,注意区分二者
   添加远程仓库git remote add origin + url
   最好先在github上建好仓库然后克隆下来，方便一些
9. 多人合作往远程仓库push时可能会有冲突,记得先用git pull拉取最新文件,修改后再push
10. push如何保存密码