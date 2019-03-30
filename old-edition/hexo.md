秋林龙虾换了新的地方 ,
三十二路还是穿过挹江门

process
先在本地建hexo,初始化成git仓库,然后链接至码云仓库，直接生成部署就行，不用推送上去，部署的过程中hexo会自动推送
，可以部署在新的online分支上，然后把原来的文件目录用推送到主分支，等到换了新电脑后，就直接把远程仓库复制下来

所以操作都在hexo生成的文件夹下进行，外层只做git目录结构同步用

npm install cnpm -g –registry=https://registry.npm.taobao.org

git init

git add .

git commit -m ‘5081’

git remote add gitee git@gitee.com:galaxy_x/galaxy.git

npm install hexo-deployer-git –save

url:
root: !!!

deploy:
type: git
repo:
branch: online //部署分支

修改文件或者新建文章之后直接生成部署就行，不用再add push了，不过推送到主分支做版本控制时还需要这两步

hexo generate –deploy //先cd到galaxy文件夹下

hexo deploy //部署

git push gitee master -f //写作分支