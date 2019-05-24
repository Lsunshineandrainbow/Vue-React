<template>
        <div id="box" style="width:1080px;height:800px">
            <div id="bomb" @click="getSand">啪嗒！</div>
            <ul ref="ulContain">
                <li class="item">
                    <h3>襟三江而带五湖，控蛮荆而引瓯越。</h3>
                </li>
                <li class="item">
                    <h3>潦水尽而寒潭清，烟光凝而暮山紫。</h3>
                </li>
                <li class="item">
                    <h3>落霞与孤鹜齐飞，秋水共长天一色。</h3>
                </li>
                <li class="item">
                    <img src="../assets/img/1.jpg" />
                </li>
            </ul>
        </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    export default {
        name: "Canvas",
        data(){
          return {
              width:0,
              height:0,
          }
        },
        created(){
            var bomb = document.getElementById('bomb')
            var ele= document.getElementById('box')
            let UL = this.$refs.ulContain
            html2canvas(UL).then(dom=>{
                console.log(dom)
                const width =dom.style.width.split('px')[0]
                const height =dom.style.height.split('px')[0]
                this.width=width
                this.height=height
                // const { width, height } = dom; // canvas宽高
                let ctx = dom.getContext('2d'); // canvas绘图对象
                //获取到cancvas画布上每个像素的信息
                let originalFrame = ctx.getImageData(0,0,width,height)
                let frames = []
                //createImageData() 方法创建新的空白 ImageData 对象
                for(let i=0;i<32;i++){
                    frames[i] = ctx.createImageData(width, height);
                }
                for(var x=0;x<width;x++){
                    for(var y=0;y<height;y++){
                        var frameIndex = Math.floor((32*(Math.random()+(2*x)/width)/3))
                        var pixelIndex = 4*(y*width+x)
                        for (let offset = 0; offset < 4; offset++) {
                            frames[frameIndex].data[pixelIndex + offset] = originalFrame.data[pixelIndex + offset];
                        }
                    }
                }
            })
        },
        methods:{
            getSand()   {
                var bomb = document.getElementById('bomb')
                var ele= document.getElementById('box')
                let UL = this.$refs.ulContain
                // html2canvas(UL).then(dom=>{
                //     console.log(dom)
                //     const width =dom.style.width.split('px')[0]
                //     const height =dom.style.height.split('px')[0]
                //     // const { width, height } = dom; // canvas宽高
                //     let ctx = dom.getContext('2d'); // canvas绘图对象
                //     let originalFrame = ctx.getImageData(0,0,width,height)
                //     let frames = []
                //     //createImageData() 方法创建新的空白 ImageData 对象
                //     for(let i=0;i<32;i++){
                //         frames[i] = ctx.createImageData(width, height);
                //     }
                //     for(var x=0;x<width;x++){
                //         for(var y=0;y<height;y++){
                //             var frameIndex = Math.floor((32*(Math.random()+(2*x)/width)/3))
                //             var pixelIndex = 4*(y*width+x)
                //             for (let offset = 0; offset < 4; offset++) {
                //                 frames[frameIndex].data[pixelIndex + offset] = originalFrame.data[pixelIndex + offset];
                //             }
                //         }
                //     }
                // })
                let contain = document.createElement('div')
                contain.classList.add('contain');
                contain.style.width = `${width}px`;
                contain.style.height = `${height}px`;
                let frames2doms = frames.map((frameData,i)=>{
                    //如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。否则，它只复制当前节点。
                    let domCopy = dom.cloneNode(true)
                    //putImageData(规定要放回画布的 ImageData 对象,	ImageData 对象左上角的 x 坐标.ImageData 对象左上角的 y 坐标)
                    domCopy.getContext('2d').putImageData(frameData,0,0)
                    domCopy.style.transitionDelay=`${(1.35*i)/frames.length}s`
                    contain.appendChild(domCopy);
                    return domCopy
                })
                ele.classList.add('disintegrated')
                ele.appendChild(contain)
                ele.border='0'
                contain.offsetLeft;
                frames2doms.map(item=>{
                    let random = 2*Math.PI*(Math.random()-0.5)
                    item.style.transform=`rotate(${15*(Math.random()-0.5)}deg  translate(${60 * Math.cos(random)}px, ${30 * Math.sin(random)}px) rotate(${-15 * (Math.random() - 0.5)}deg) `
                    item.style.opacity = 0;
                })
            }

        },

    }
</script>

<style scoped>
img {
    width: 200px;
    height: auto;
}
</style>
