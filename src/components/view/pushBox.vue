<template>
    <div class="game-container">
        <div class="game-title">
            <button class="go-back" @click="goBack">返回</button>
            <p class="text">
                第 {{currentLevelNum + 1}} 关
            </p>
        </div>
        <div class="mon">
            <canvas id="canvas" width="560" height="560"></canvas>
        </div>
        <div class="button-box">

            <div class="system-key">
                <div class="button-row">
                    <div class="button-item">
                        <button class="prev" @click="NextLevel(-1)">上一关</button>
                    </div>
                    <div class="button-item">
                        <button class="restar" @click="NextLevel(0)">重玩本关</button>
                    </div>
                    <div class="button-item">
                        <button class="next" @click="NextLevel(1)">下一关</button>
                    </div>
                </div>
            </div>
            
            <div class="direction-key" :style="keyBoardStyle">
                <div class="button-row">
                    <div class="button-item"></div>
                    <div class="button-item">
                        <button class="up" @click="go('up')"></button>
                    </div>
                    <div class="button-item"></div>
                </div>
                <div class="button-row">
                    <div class="button-item">
                        <button class="left" @click="go('left')"></button>
                    </div>
                    <div class="button-item"></div>
                    <div class="button-item">
                        <button class="right" @click="go('right')"></button>
                    </div>
                </div>
                <div class="button-row">
                    <div class="button-item"></div>
                    <div class="button-item">
                        <button class="down" @click="go('down')"></button>
                    </div>
                    <div class="button-item"></div>
                </div>
            </div>
            
        </div>
        <div class="hidden">
            <img id="imgBlock" @load="preload('imgBlock')" src ="../../assets/img/block.gif">
            <img id="imgWall" @load="preload('imgWall')" src ="../../assets/img/wall.png">
            <img id="imgBox" @load="preload('imgBox')" src ="../../assets/img/box.png">
            <img id="imgBall" @load="preload('imgBall')" src ="../../assets/img/ball.png">
            <img id="imgUp" @load="preload('imgUp')" src ="../../assets/img/up.png">
            <img id="imgDown" @load="preload('imgDown')" src ="../../assets/img/down.png">
            <img id="imgLeft" @load="preload('imgLeft')" src ="../../assets/img/left.png">
            <img id="imgRight" @load="preload('imgRight')" src ="../../assets/img/right.png">
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import levels from '../../assets/js/levelData.js'

export default {
    name: 'index',
    components: {
    },
    data(){
        return {
            uWidth: 35,
            canvasObj: {},
            cxtObj: {},
            currentMap: [],     //当前地图
            currentLevel: [],   //当前关卡
            currentMan: {},     //当前小人
            currentLevelNum: 0, //当前关卡数
            moveTimes: 0,       //移动次数
            imgBlock: {},
            imgWall:{},
            imgBox: {},
            imgBall: {},
            imgUp: {},
            imgDown: {},
            imgLeft: {},
            imgRight: {},
            perPosition: {
                x: 5,
                y: 5
            },
            showMsg: false,
            imgNum: 0,
            keyBoardStyle: ''
        }
    },
    mounted() {
        var _this = this;

        this.canvasObj = document.getElementById("canvas");
        this.cxtObj = this.canvasObj.getContext("2d");

        document.onkeydown = (e) => {
            _this.doKeyDown(e);
        };

        let height = document.querySelector('.direction-key').clientHeight;
        this.keyBoardStyle = 'width: '+ height +'px;'
    },
    methods: {
        preload (num) {
            this.imgNum++;

            if(num == 'imgBlock') {
                this.imgBlock = document.getElementById("imgBlock")
            }
            if(num == 'imgWall') {
                this.imgWall = document.getElementById("imgWall")
            }
            if(num == 'imgBox') {
                this.imgBox = document.getElementById("imgBox")
            }
            if(num == 'imgBall') {
                this.imgBall = document.getElementById("imgBall")
            }
            if(num == 'imgUp') {
                this.imgUp = document.getElementById("imgUp")
            }
            if(num == 'imgDown') {
                this.imgDown = document.getElementById("imgDown")
            }
            if(num == 'imgLeft') {
                this.imgLeft = document.getElementById("imgLeft")
            }
            if(num == 'imgRight') {
                this.imgRight = document.getElementById("imgRight")
            }

            if(this.imgNum >= 8) {
                this.init();
            }
        },
        init(){
            this.initLevel();//初始化对应等级的游戏
        },
        InitMap(){  //绘制地图
            for (let i=0;i<16 ;i++ )
            {
                for (let j=0;j<16 ;j++ )
                {
                    this.cxtObj.drawImage(this.imgBlock,this.uWidth*j,this.uWidth*i,this.uWidth,this.uWidth);
                }
            }
        },
        initLevel(){
            this.currentMap = this.copyArray(levels[this.currentLevelNum]);//当前移动过的游戏地图
            this.currentLevel = levels[this.currentLevelNum];//当前等级的初始地图
            this.currentMan = this.imgDown;//初始化小人
            this.InitMap();//初始化地板
            this.DrawMap(this.currentMap);//绘制出当前等级的地图
        },
        Point(x,y){
            this.x = x;
            this.y = y;
        },
        DrawMap(level){
            for (let i=0;i<level.length ;i++ )
            {
                for (let j=0;j<level[i].length ;j++ )
                {
                    let pic = this.imgBlock;//初始图片
                    switch (level[i][j])
                    {
                    case 1://绘制墙壁
                        pic = this.imgWall;
                        break;
                    case 2://绘制陷进
                        pic = this.imgBall;
                        break;
                    case 3://绘制箱子
                        pic = this.imgBox;
                        break;
                    case 4://绘制小人
                        pic = this.currentMan;//小人有四个方向 具体显示哪个图片需要和上下左右方位值关联
                        //获取小人的坐标位置
                        this.perPosition.x = i;
                        this.perPosition.y = j;
                        break;
                    case 5://绘制箱子及陷进位置
                        pic = this.imgBox;
                        break;
                    }
                    //每个图片不一样宽 需要在对应地板的中心绘制地图
                    this.cxtObj.drawImage(pic,this.uWidth*j-(pic.width-this.uWidth)/2,this.uWidth*i-(pic.height-this.uWidth),pic.width,pic.height)
                }
            }
        },
        NextLevel(i){
            //iCurlevel当前的地图关数
            this.currentLevelNum = this.currentLevelNum + i;
            if (this.currentLevelNum < 0)
            {
                this.currentLevelNum = 0;
                return;
            }
            let len = levels.length;
            if (this.currentLevelNum > len-1)
            {
                this.currentLevelNum = len-1;
            }
            this.initLevel();//初始当前等级关卡
            this.moveTimes = 0;//游戏关卡移动步数清零
        },
        go(dir){
            let p1,p2;
            switch (dir)
            {
            case "up":
                this.currentMan = this.imgUp;
                //获取小人前面的两个坐标位置来进行判断小人是否能够移动
                p1 = new this.Point(this.perPosition.x-1,this.perPosition.y);
                p2 = new this.Point(this.perPosition.x-2,this.perPosition.y);
                break;
            case "down":
                this.currentMan = this.imgDown;
                p1 = new this.Point(this.perPosition.x+1,this.perPosition.y);
                p2 = new this.Point(this.perPosition.x+2,this.perPosition.y);
                break;
            case "left":
                this.currentMan = this.imgLeft;
                p1 = new this.Point(this.perPosition.x,this.perPosition.y-1);
                p2 = new this.Point(this.perPosition.x,this.perPosition.y-2);
                break;
            case "right":
                this.currentMan = this.imgRight;
                p1 = new this.Point(this.perPosition.x,this.perPosition.y+1);
                p2 = new this.Point(this.perPosition.x,this.perPosition.y+2);
                break;
            }
            //若果小人能够移动的话，更新游戏数据，并重绘地图
            if (this.Trygo(p1,p2))
            {
                this.moveTimes ++;
            }
            //重绘地板
            this.InitMap();
            //重绘当前更新了数据的地图
            this.DrawMap(this.currentMap);
            //若果移动完成了进入下一关
            if (this.checkFinish())
            {
                alert("恭喜过关！！");
                this.NextLevel(1);
            }
        },
        checkFinish(){
            for (let i=0;i<this.currentMap.length ;i++ )
            {
                for (let j=0;j<this.currentMap[i].length ;j++ )
                {
                    //当前移动过的地图和初始地图进行比较，若果初始地图上的陷进参数在移动之后不是箱子的话就指代没推成功
                    if (this.currentLevel[i][j] == 2 && this.currentMap[i][j] != 3 || this.currentLevel[i][j] == 5 && this.currentMap[i][j] != 3)
                    {
                        return false;
                    }
                }
            }
            return true;
        },
        Trygo(p1,p2){
            if(p1.x<0) return false;//若果超出地图的上边，不通过
            if(p1.y<0) return false;//若果超出地图的左边，不通过
            if(p1.x>this.currentMap.length) return false;//若果超出地图的下边，不通过
            if(p1.y>this.currentMap[0].length) return false;//若果超出地图的右边，不通过
            if(this.currentMap[p1.x][p1.y]==1) return false;//若果前面是墙，不通过
            if (this.currentMap[p1.x][p1.y]==3 || this.currentMap[p1.x][p1.y]==5)
            {//若果小人前面是箱子那就还需要判断箱子前面有没有障碍物(箱子/墙)
                if (this.currentMap[p2.x][p2.y]==1 || this.currentMap[p2.x][p2.y]==3)
                {
                    return false;
                }
                //若果判断不成功小人前面的箱子前进一步
                this.currentMap[p2.x][p2.y] = 3;//更改地图对应坐标点的值
                //console.log(this.currentMap[p2.x][p2.y]);
            }
            //若果都没判断成功小人前进一步
            this.currentMap[p1.x][p1.y] = 4;//更改地图对应坐标点的值
            //若果小人前进了一步，小人原来的位置如何显示
            let v = this.currentLevel[this.perPosition.x][this.perPosition.y];
            if (v!=2)//若果刚开始小人位置不是陷进的话
            {
                if (v==5)//可能是5 既有箱子又陷进
                {
                    v=2;//若果小人本身就在陷进里面的话移开之后还是显示陷进
                }else{
                    v=0;//小人移开之后之前小人的位置改为地板
                }
            }
            //重置小人位置的地图参数
            this.currentMap[this.perPosition.x][this.perPosition.y] = v;
            //若果判断小人前进了一步，更新坐标值
            this.perPosition = p1;
            //若果小动了 返回true 指代能够移动小人
            return true;
        },
        copyArray(arr){
            let b=[];//每次移动更新地图数据都先清空再添加新的地图
            for (let i=0;i<arr.length ;i++ )
            {
                b[i] = arr[i].concat();//链接两个数组
            }
            return b;
        },
        doKeyDown(event){
            switch (event.keyCode)
            {
            case 37://左键头
                this.go("left");
                break;
            case 38://上键头
                this.go("up");
                break;
            case 39://右箭头
                this.go("right");
                break;
            case 40://下箭头
                this.go("down");
                break;
            }

        },
        goBack() {
            this.$router.push('/index')
        }
    }
}
</script>

<style lang='scss'>
.game-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    overflow: hide;
    background-color: #fff;
    .game-title{
        padding-top: 5vw;
        .go-back{
            position: absolute;
            left: 5vw;
            width: 4rem;
            height: 1.5rem;
            background-color: #fff;
            font-size: 0.7rem;
            border: 2px solid #222;
            border-radius: 1rem;
        }
        .text{
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 1.5rem;
            text-align: center;
            margin: 0;
        }
    }
    .mon{
        width: 90%;
        height: 0;
        padding-top: 90%;
        margin: 0 auto;
        #canvas{
            margin-top: -100%;
            width: 100%;
            height: 90vw;
        }
    }
    .button-box{
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 10% 5% 5%;
        .system-key{
            flex: 1;
            .button-item{
                &:nth-child(2){
                    padding: 0 3%;
                }
                button{
                    border: 2px solid #222;
                    border-radius: 1rem;
                }
            }
        }
        .direction-key{
            display: flex;
            flex: 6;
            flex-direction: column;
            padding-top: 10px;
            margin: 0 auto;
            button{
                border: none;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 3.2rem;
                background-size: contain;
                &.up{
                    background-image: url(../../assets/img/button-UP.png);
                }
                &.left{
                    background-image: url(../../assets/img/button-LEFT.png);
                }
                &.right{
                    background-image: url(../../assets/img/button-RIGHT.png);
                }
                &.down{
                    background-image: url(../../assets/img/button-DOWN.png);
                }
            }
        }
        .button-row{
            display: flex;
            flex: 1;
            .button-item{
                flex: 1;
                button{
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                    font-size: 0.7rem;
                }
            }
        }
    }
    .hidden{
        display: none;
    }
}
</style>