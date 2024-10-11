let a=parseInt(prompt("Nhap a"));
let b=parseInt(prompt("Nhap b"));
let c=parseInt(prompt("Nhap c"));
let max;
if(a>=b && a>=c){
    max=a;
}else if(b>=c && b>=a){
    max=b;
}else if(c>=b && c>=a){
    max=c;
}
document.write(max +" la gia tri lon nhat");
