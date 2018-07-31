/* 清除浮动 display:block 和 display:table 有区别? 稍后查看*/
.clearfix::after{
        content:'';
        display:block;
        clear:both;
}

/*float具有“包裹性”*/
