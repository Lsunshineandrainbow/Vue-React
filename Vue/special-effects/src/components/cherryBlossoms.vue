<template>
    <div class="warp" ref="warp">
        <button @click="createDustImages">按钮</button>
        <div class="pop" v-show="popFlag" >
            <a href="" :src="url" :download="address"></a>
        </div>
        <div class="pop-contain" v-show="popFlag" ref="popContain">
            <div class="pop-img"></div>
                <div class="poetry">
                    <ul class="poetry-right">
                        <li>樱</li>
                        <li>花</li>
                        <li>落</li>
                        <li>尽</li>
                        <li>春</li>
                        <li>将</li>
                        <li>困</li>
                    </ul>
                    <ul class="poetry-left">
                        <li>秋</li>
                        <li>千</li>
                        <li>架</li>
                        <li>下</li>
                        <li>归</li>
                        <li>时</li>
                    </ul>
            </div>
        </div>
        <div class='main' :class="copy?'quickFade':''" ref="main">
            <div class="article-img article-img1" style="filter: blur(2px);">
            </div>
            <div class="article-text">
                <h2>日本人为什么喜欢<span @click="popOpen">樱花</span> ？</h2>
            <p>日本被誉为“樱花之国”。每年的3至4月，当列岛各处的樱花报春般地从气温高些的南方向北方一路逐次盛开时，日本的“樱花节”就到了。在这充满樱花气息的季节里，日本人多会走出家门，或偕家人，或邀上三五好友一同赏樱。樱树下，人们一边儿享用自带的食物、美酒，一边儿欣赏那云蒸霞蔚的花树，身边不时有片片飞花随风飘过，构成了春天里独特的风景。日本国家电视台甚至会开播“樱前线”，预报各地樱花开放的情况，指引着人们的赏樱路线。</p>
            <p>日本人喜欢樱花，在日本到处都可见到樱树，生活中也常遇到用樱花命名的街道、车站、市镇、商标、饭菜、茶点、汤饮。文学家写咏樱诗，画家绘樱花图，音乐家谱颂樱曲，连钞票上也印有樱花的图案。对日本而言，樱花不仅仅是花卉，它作为一种风景，一种象征，甚至一种精神，已扎根在民族文化的深处。</p>
            <p>那么，日本人为何如此钟爱樱花呢？</p>
            <p>樱花是一种古老的花卉，在日本已经有1000多年的历史了。在日本人看来，它是花的神灵、春天的化身，日本语中的“樱时”就是“春天的时节”；而樱花是否顺利开花，则预兆着这一年是否风调雨顺、五谷丰登。因此，古时候，每逢樱花时节，人们都会聚集在樱树下，祭祀农神，占卜年成。这种传统的祭祀占卜活动后来演化为“花见”（即赏花）。据考证，“花见”的习俗源于日本平安时代（794—1192）皇宫中举行的樱花宴。赏樱是当时权贵的雅好，至江户时代（1603—1867）才逐渐发展为春季的民间活动，并最终成为传统的民间节日。</p>
            <p>还有人认为，樱花之所以为日本人所喜爱，是由于它与日本文化所推崇的英雄观和价值观有相通之处。樱花的生命很短暂，素有“樱花七日”之说，一般而言，一朵樱花从开放到零落大约为一周，整棵樱树从开花到飘零辞枝也只有15天左右。盛开之时，樱树团团锦簇，热烈灿烂；但几天之后，阵风吹过，樱花花瓣会如雪般静静飘落。至花期尾声，樱树常会在一夜之间落尽花儿。这种凋落方式如此利落决断，且落樱宁静素洁、不污不染，显得异常凄美。樱花这种骤然开放骤然飘零的特点得到不少日本人的欣赏和认同，他们认为人生短暂，活着就要像樱花一样灿烂，即使死，也该果断离去。日本有一句谚语：“花则樱花，人则武士”，意为做花就要做樱花，做人就要做武士。古代的日本武士常自比樱花，因为武士崇尚舍生取义的英雄品格，他们追求的精神境界就如同樱花：灿烂开放，寂寥洒脱；壮烈凋零，悄然无声。</p>
                  <div class="article-img article-img2"></div>
                <h2>关于日本樱花那些事</h2>
                <p>花是美的，而很多人也对这种美的东西毫无抵抗力，而每个国家也有属于自己的国花。日本人喜爱樱花，把她誉为“国花”，自称是“樱花之国”。日本到处有樱花，花开时，漫山遍野，层层樱云和绿树相映，成为日本独特的景色</p>
                <p>在日本，春天是和“樱花开花前线”一起来临的。“开花前线”，是指同一时间内樱花“开花”的几个地点联成的一条线，每年这条波状曲线在日本列岛上由南向北推进。调查樱花开花状况的，是分布在日本各地的一百零二个气象站和测候所。他们仔细地观察樱花“标准树”的变化。这种“标准树”在大部分地区内采用“染井吉野樱”。但是在没有这种樱花的西南群岛是“绯寒樱”;北海道岩见泽至室兰一线以北是“虾夷山樱”;而到了最北端的根室，则是“千岛樱”。“标准树”上开出数朵樱花，这一天就被定为“开花日”,可以立即发表“开花宣言”。</p>
                <p>一九八三年， 日本本士开花最早的是四国的宿毛地方，在那里三月二十五日发表了“开花宣言”。三月二十八日是东京。三月三十一日，九州、四国、纪伊半岛、伊豆半岛和房总半岛沿岸，花开联成一线， 而后再继续上......。一般到了七月份，最北端的“千岛樱”才开花。这就是说，在大约半年的时间内，日本国内总有樱花盛开的地方。随着“樱花开花前线”的北上，漫长的日本列岛由一片片的淡红色，逐渐变成了嫩绿色。</p>
                <p>进入樱花盛开的季节，日本全国各地要举行传统的观樱活动，几乎家家户户扶老携幼到公园或郊区去看樱花。商店里也摆出了“樱花糕”、“樱花茶”等应时商品。这时也正是小学开学的时候，美丽的樱花， 又常常引起人们对小学时代的美好回忆。东京的上野公园， 此时到处是一片片、一排排的樱花， 有的地方几乎成了樱花覆盖的甬道， 每年来观樱的达数十万人。人们在樱花树下铺起席子，饮酒，唱歌，跳舞，整天拥挤得水泄不通。</p>
                <h2>日本哪里樱花最出名 来一场日本樱花之旅</h2>
                <h3>日本樱花之青森篇</h3>
                <p>青森好玩吗？日本樱花看青森，我们常在网上见到的樱花图，实际多数来源于青森。在青森赏樱，是种很享受的体验，这里种植着欧染井吉野樱、八重樱和枝垂樱等，面积大而广，森林覆盖率也高达近70%，不用担心人挤人。除此之外，青森还是著名的富士苹果发源地，来到这，吃个苹果赏樱花，是必须体验的乐趣。青森樱花什么时候开：4月21日-5月1日</p>
                <h4>弘前公园</h4>
                <p>无论在哪份评选日本赏樱胜地的榜单上，弘前公园总能排在前三位，目前该公园种植53种樱花树，单是染井吉野樱、里樱和枝垂樱就多达5000棵，花季时吸引众多游客前来参观，尤其是赏夜樱活动。此外，弘前的樱花祭十分盛大，除了品尝各类小吃、美食和特长之外，还有津轻民谣热唱、佞武多祭的游行等，让你的旅行娱乐不再枯燥。在哪里：青森县弘前市下白银町1如何去：从青森或秋田搭奥羽本线抵达弘前站，再搭往茂森．驹越方向的巴士公园入口处下车。</p>
                <h4>芦野公园</h4>
                <p>曾入选日本百大赏樱胜地榜单，也是津轻半岛数一数二的赏樱圣地。每当樱花盛开之时，附近的居民和远道而来的游客，使得这里都非常热闹。公园内芦野湖湖面飘着淡粉色樱花，更是有着别样的迷人风情。芦野公园也是儿时的太宰治（著名文学作品《人间失格》的作者）最爱的地方，因此公园内也有着他的文学碑和铜像。在哪里：青森县五所川原市金木町芦野84-170如何去：搭乘津轻铁路至芦野公园站下车即可到达</p>
                <h3>日本樱花之北海道篇</h3>
                <p>北海道是日本樱花最晚开的地区，适合近期无法安排行程的小伙伴。再者，5-6月并非旅游旺季，此时住宿、饮食水平比旺季低很多，无论在哪里赏樱花，也不用担心会人挤人。此外，北海道的雪期比较长，5月初仍有少部分滑雪场在营业，如果你想体验这里最出名的粉雪，赏完樱花也可以去滑雪场撒撒野哦。北海道樱花什么时候开：5月1日-5月10日</p>
                <h4>二十间道路</h4>
                <p>樱花长廊全长约7千米，属北海道文化遗产，有着“一眼赏万花”的独特观赏体验，在日本堪称独一无二。每年约有20万的游客来此赏樱花。这条长廊中的樱花大部分是蝦夷山樱，这是北海道樱花的代表，约有一半的树龄已超过80年。长廊的岔路上还有个极具特色的花隧道，约300米长，这里的樱花开得很茂盛，值得欣赏。在哪里：北海道静内町字田原—字御园如何去：在JR静内站乘坐道南巴士前往农田方向，到樱丘小学校站下车后，步行约15分钟</p>
                <h4>松前公园</h4>
                <p>北海道最先能欣赏到樱花的地方，就是松前公园。园内共种植有1万株樱花，品种多达250种，树龄普遍很大。其中重瓣樱最多，它以花期长而著称，因此行程赶的小伙伴耶能欣赏到它，还有血脉樱、雨宿樱等具有动人传说的樱花树在此也有种植。此外，江户时代修建的城郭和松前城也坐落于松前公园内，并设有博物馆，这些建筑和历史，感兴趣的小伙伴也可以到园内搜寻。在哪里：松前郡松前町松城如何去：从JR木古内站乘坐巴士约1个半小时，到松城站下车后步行约5分钟</p>
            </div>
        </div>
    </div>
</template>
<script>
    import html2canvas from 'html2canvas'
    import Chance from '../assets/js/chance'
    export default {
        name: "cherryBlossoms",

        data(){
            return {
                popFlag:false,
                address:0,
                url:'',
                copy:false
            }
        },
        methods:{
            popOpen(){
                this.popFlag=true
            },
            createDustImages(){
                let _this = this
                // let chance = new  Chance(Math.random)
                let dom = this.$refs.popContain
                let domMain = this.$refs.main
                domMain.setAttribute('class','quickFade')
                console.log(dom)
                html2canvas(domMain,{
                    allowTaint: 0,
                    useCORS: true,
                    backgroundColor: ""
                })
                    .then(function(canvas){
                     const canvasCount =20;
                     const ctx=canvas.getContext("2d")
                        _this.url = canvas.toDataURL()
                        _this.address='ccc'+'.png'
                        let width = domMain.offsetWidth
                        let height= domMain.offsetWidth
                        // _this.$refs.warp.appendChild(canvas)
                        //getImageData(开始复制的x坐标，y坐标，width,height) 复制画布上指定矩形的像素数据
                     const copyImg = ctx.getImageData(0,0,width,height)
                    //获取像素信息 data是一个数组 存着用rgba表示的像素信息
                     const pixelArry =copyImg.data
                    //准备一个存储像素信息的透明图象数组
                    const data = pixelArry.slice(0).fill(0)
                    //将透明图象数组复制多个
                     let  pixelArryCopy = Array.from({length:canvasCount},e=>data.slice(0)) //二维数组
                    //进行随机赋值
                    for(let i=0;i<pixelArry.length;i+=4){
                        let a = pixelArryCopy[Math.floor(canvasCount*Math.random())];
                        // console.log(canvasCount*Math.random())
                        // debugger
                        a[i] = pixelArry[i];
                        a[i+1]=pixelArry[i+1];
                        a[i+2]=pixelArry[i+2];
                        a[i+3]=pixelArry[i+3]
                    }
                    for(let i=0;i<canvasCount;i++){
                        const c = _this.newCanvasImage(
                            pixelArryCopy[i], width,

                            height
                        )

                        setTimeout(()=>{
                            document.getElementsByClassName('warp')[0].appendChild(c)
                            _this.animateTransform(c,100,-100,chance.integer({ min: -300, max: 600 }),2000)
                            c.setAttribute('style',"z-index:100;position:absolute;top:0;left:0")
                            _this.copy=true
                        },0)
                        setTimeout(()=>{
                            c.remove(); // 删除元素
                        },2050)
                    }
                })
            },
            newCanvasImage(canvasElem,width,height){
                let canvas =document.createElement('canvas');
                canvas.width=width;
                canvas.height=height;
                const tempCtx = canvas.getContext('2d')
                //把每个像素放在画板上 putImageData(规定要放回画布的 ImageData 对象,相对于左上角x,y)
                tempCtx.putImageData(new ImageData(canvasElem,width,height),0,0 )
                return canvas
            },
            animateTransform(elem,sx,sy,angle,duration){
                elem.animate([
                    {transform:'rotate(0) translate(0,0)'},
                    {transform:'rotate('+angle+"deg) translate("+sx+"px,"+sy+"px)"}
                ],{
                    duration:duration,
                    easing:"ease-in",
                },)
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../assets/css/font/font.css";
    .dust {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        filter: blur(0.05em); // 模糊
    }
    .warp{
        margin: 8px;
        width: 100%;
        height: 100%;
        overflow: scroll;
        position: relative;
    }
    .main{
        width: 80%;
        border-right: 1px solid #CCCCCC;
        padding-right: 20px;
    }
    .article-img{
        width: 400px;
        height:500px;
        background-size: contain;
        float: left;
        margin: 0 30px 30px 0;
        &1{
            background-image:url('../assets/img/0.jpg')}
        &2{
            background-image: url('../assets/img/1.jpg')
        }
    }

    .article-text{
        font-size: 20px;
        background-image:url("../assets/img/back.jpg") ;
        /*background-size: 100% 400px;*/
        background-repeat: no-repeat;
        background-position: bottom right;
    }
    p{
        text-indent: 2em;
        margin-bottom: 20px;
    }
    span{
        background-image: -webkit-gradient(linear,left top ,right top ,from(#ced5ff),to(#ffcbeb));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h3{
        width: 240px;
        background-image: -webkit-gradient(linear,left top ,right top ,from(#fd4b81),to(#fdf7c7));
        -webkit-background-clip:text!important;
        -webkit-text-fill-color: transparent;
    }
    .pop{
        position: fixed;
        top:0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 10;
        background: rgba(251,198,218,.3);
    }
    .pop-contain{
        z-index: 11;
        position: fixed;
        width: 50%;
        padding-top: 100vh;
        /*top: 60%;*/
        left: 50%;
        top: 40%;
        height: 1000px;
        transform: translate(-50%, -50%);
    }
    .pop-img{
        position: absolute;
        top:10%;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: url("../assets/img/5.gif") no-repeat 100% 100%;
        background-size: 100% 100%;
    }
    .poetry{
        top:0;
        right: 0;
        position: absolute;
        width:300px;
        height: 200px;
        display: flex;
        justify-content: space-around;
    }
    ul>li{
        font-size: 100px;
        color: #000;
        font-family: font;
    }
    .poetry-right{
        width: 100px;
        height: 100px;
        overflow: hidden;
        animation: dropdown0 1.5s linear ;
        animation-iteration-count:1;
        animation-fill-mode:forwards
    }
    .poetry-left{
        padding-top: 250px;
        width: 100px;
        height:0px ;
        animation: dropdown1 1.5s linear;
        overflow: hidden;
        animation-delay:2s;
        animation-iteration-count:1;
        animation-fill-mode: forwards;
    }
    .temp{
        width: 200px;
        height: 200px;
        background: #282c34;
    }
    @keyframes dropdown0 {
        0%{
            height: 0px;
        }
        15%{
            height: 100px;
            }
        30%{
            height: 200px;
        }
        40%{
            height: 300px;
        }
        65%{
            height: 400px;
        }
        80%{
            height: 500px;
        }
        100%{
            height: 730px;
        }
    }
    @keyframes dropdown1 {
        0%{
            height: 100px;
        }
        30%{
            height: 200px;
        }
        40%{
            height: 300px;
        }
        65%{
            height: 400px;
        }
        80%{
            height: 500px;
        }
        100%{
            height: 730px;
        }
    }
    .dust {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        filter: blur(0.05em); // 模糊
    }
    .quickFade{
        animation: fadeout 1s linear forwards;
    }
    .fade{
        animation: fadeblur 2s ease-in forwards;
    }
    @keyframes fadeout {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes fadeblur {
        0%{
            opacity: 0;
        }
        100%{
            opacity:1;
        }
    }
</style>
