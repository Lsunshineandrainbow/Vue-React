<template>
    <div class="contain">
        <div id="capture" >
            <div style="padding: 10px; background: #f5da55">
                <h4 style="color: #000; " @click="toImage">Hello world!</h4>
            </div>
            <a :href="dataURL" class="down" download="downImg" ref="down">下载</a>
            <img src="../assets/img/1.jpg" alt=""/>
            <div ref="canvasContain"></div>
        </div>

    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    export default {
        name: "index",
        data(){
          return{
              dataURL:0
          }
        },
        methods:{
            toImage(){
                let _this =this
                html2canvas(document.getElementById('capture')).then(function(canvas) {
                    //parse() 方法可解析一个日期时间字符串，并返回 1970/1/1 午夜距离该日期时间的毫秒数(时间戳)。
                    var timestamp = Date.parse(new Date());
                    _this.dataURL = canvas.toDataURL()
                    _this.$refs.down.download=timestamp+'.png'
                    document.getElementsByClassName('contain')[0].appendChild(canvas);
                });
            },
        }
    }
</script>

<style scoped>
#capture{
    background: #ffffff;
}
    img{
        width: 400px;
        height: auto;
        border-radius: 3px;
        display: block;
    }
</style>
