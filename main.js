var iron=0;
var cable=0;
var silicon=0;
var science=0;
var phone=0;

var thing;
var coin=1000;

var str=new Array("当经费不足时，工人们就会集体罢工",
    '作者b站主页：<a href="https://space.bilibili.com/1612843773" target="_blank">https://space.bilibili.com/1612843773</a>',
    "游玩时应注意工人分配，否则容易亏钱",
    "这家电子厂其实是主角斥巨资办的，所以他只剩下了1000&",
    "作 者 破 产 了",
    "科技可以研发出ipad之类的东西，但造价也是十分的  低  廉",
    "我的 钱！！！");


function rand(){
    var adv=str[parseInt(Math.random()*7)];
    document.getElementById("adv").innerHTML='<br>'+adv
    +'<button  style="text-align:right;" type="button" onclick="rand()" class="btn btn-outline-secondary">刷新</button><br>';
}

function add_i(num){
    iron+=num;
    materials();
}

function add_c(num){
    cable+=1;
    materials();
}

function add_s(num){
    silicon+=1;
    materials();
}

function materials(){
    thing=0;
    document.getElementById("out").innerHTML="<br>钢铁数量："+iron+'千克    <button type="button" onclick="add_i(1)" class="btn btn-outline-secondary">采购</button> <br><br>'
    +"铜丝数量："+cable+'米    <button type="button" onclick="add_c(1)" class="btn btn-outline-secondary">采购</button> <br><br>'
    +"硅元素数量："+silicon+'千克    <button type="button" onclick="add_s(1)" class="btn btn-outline-secondary">采购</button> <br><br>';
    document.getElementById("coin").innerHTML="<h3><b>剩余钱数："+coin+"&<br></h3></b>";
}


var man=0;
var iwork=0;
var cwork=0;
var swork=0;
var pwork=0;
var scientist=0;

function add_iw(num){
    if(man>=num&&iwork+num>=0){
        iwork+=num;
        man-=num;
    }
    worker();
}

function add_cw(num){
    if(man>=num&&cwork+num>=0){
        cwork+=num;
        man-=num;
    }
    worker();
}

function add_sw(num){
    if(man>=num&&swork+num>=0){
        swork+=num;
        man-=num;
    }
    worker();
}

function add_pw(num){
    if(man>=num&&pwork+num>=0){
        pwork+=num;
        man-=num;
    }
    worker();
}

function add_sci(num){
    if(man>=num&&coin>=200){
        scientist+=num;
        coin-=200;
        man-=num;
    }
    worker();
}

function add_w(num){
    if(iron>=10&&cable>=5&&silicon>=5&&coin>=10){
        man+=num;
        iron-=10,cable-=5,silicon-=5;
    }   
    worker();
}

function worker(){
    thing=1;
    document.getElementById("out").innerHTML="<br>工人数量(每秒-1.5&)："+(man+iwork+cwork+swork+pwork+scientist)
    +'人    <button type="button" onclick="add_w(1)" class="btn btn-outline-secondary">招聘 铁*10+铜*5+硅*5+10&</button> <br><br>'
    +"空闲人数："+man+"人 <br><br>"
    +"钢铁采集工人(每秒2千克)："+iwork+'人    <button type="button" onclick="add_iw(1)" class="btn btn-outline-secondary">+</button> '
    +'<button type="button" onclick="add_iw(-1)" class="btn btn-outline-secondary">-</button> <br><br>'
    +"铜丝采集工人(每秒2米)："+cwork+'人    <button type="button" onclick="add_cw(1)" class="btn btn-outline-secondary">+</button> '
    +'<button type="button" onclick="add_cw(-1)" class="btn btn-outline-secondary">-</button> <br><br>'
    +"硅元素采集工人(每秒2千克)："+swork+'人    <button type="button" onclick="add_sw(1)" class="btn btn-outline-secondary">+</button> '
    +'<button type="button" onclick="add_sw(-1)" class="btn btn-outline-secondary">-</button> <br><br>'
    +"手机生产工人(每秒1个手机并损耗铁*2+铜*1+硅*3)："+pwork+'人    <button type="button" onclick="add_pw(1)" class="btn btn-outline-secondary">+</button> '
    +'<button type="button" onclick="add_pw(-1)" class="btn btn-outline-secondary">-</button> <br><br>'
    +"科研工人(每秒5科技 培养费200&)："+scientist+'人    <button type="button" onclick="add_sci(1)" class="btn btn-outline-secondary">+</button> ';
    document.getElementById("coin").innerHTML="<h3><b>剩余钱数："+coin+"&<br></h3></b>";
}


function sell(){
    coin+=(phone*20);
    phone=0;
    iphone();
}

function iphone(){
    thing=2;
    document.getElementById("out").innerHTML="<br>已生产手机个数(每个20&)："+phone+'个    <button type="button" onclick="sell()" class="btn btn-outline-secondary">全部卖出</button> <br><br>';
    document.getElementById("coin").innerHTML="<h3><b>剩余钱数："+coin+"&<br></h3></b>";
}


var spaid=0;

function sp(){
    if(science>=100){
        spaid=1;
        science-=100;
    }
}

function scit(){
    thing=3;
    if(spaid==0){
        document.getElementById("out").innerHTML="<br>科技量："+science+'<br><br>'
        +'<button type="button" onclick="sp()" class="btn btn-outline-secondary">研发ipad</button> <br><br>'
    }else{
        document.getElementById("out").innerHTML="<br>科技量："+science+'<br><br>'
        +'<button type="button" onclick="sp()" disabled="disabled" class="btn btn-outline-secondary">研发ipad</button> <br><br>'
    }
    document.getElementById("coin").innerHTML="<h3><b>剩余钱数："+coin+"&<br></h3></b>";
}

function update(){
    setInterval(function(){
        document.getElementById("coin").innerHTML="<h3><b>剩余钱数："+coin+"&<br></h3></b>";
        if((man+iwork+cwork+swork+pwork+scientist)*1.5<=coin){
            iron+=(iwork*2);
            cable+=(cwork*2);
            silicon+=(swork*2);
            science+=(scientist*5);
            if(iron>=pwork*2&&cable>=pwork&&silicon>=pwork*3){
                phone+=pwork;
                iron-=(pwork*2);
                cable-=(pwork*1);
                silicon-=(pwork*3);
            }
            coin-=(man+iwork+cwork+swork+pwork)*1.5;
        }
        if(thing==0){
            materials();
        }else if(thing==1){
            worker();
        }else if(thing==2){
            iphone();
        }else if(thing==3){
            scit();
        }
    },1000); 
}