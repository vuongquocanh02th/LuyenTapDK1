let giuaky=parseFloat(prompt("Nhap diem giua ky"));
let cuoiky=parseFloat(prompt("Nhap diem cuoi ky"));
let avg=(giuaky+cuoiky)/2;
if(avg>=8 && avg<=10){
    document.write("Hoc luc GIOI");
}else if(avg>=6.5 && avg<8){
    document.write("Hoc luc KHA");
}else if(avg>=5 && avg<6.5){
    document.write("Hoc luc TRUNG BINH");
}else if(avg<5 && avg>=0){
    document.write("Hoc luc YEU");
}else {
    document.write("Vui long nhap lai diem");
}

