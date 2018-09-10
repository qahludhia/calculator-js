//Luas Persegi (p.l)

function persegi(p, l){
    var luas = p * l;
    
    return luas;

}
console.log(persegi(5, 6));

//Volume Kubus (sisi.sisi.sisi.sisi)
function kubus(a, b, c, d) {
	var volume = a * b * c * d;
	
	return volume;
	
}
console.log(kubus(1, 2, 3, 4));

//Luas Segitiga (1/2.a.t)
function segitiga(setengah, alas, tinggi) {
	var luasSegitiga = setengah * alas * tinggi
	
	return luasSegitiga;
}
console.log(segitiga(0.5, 10, 5));

//Luas Jajargenjang (a.t)
function jajarGenjang(alas, tinggi) {
	var luasJajar = alas * tinggi
	
	return luasJajar;
}
console.log(jajarGenjang(10, 5));

// Luas permukaan tabung = 2.luas alas + luas selimut 
function tabung(luasAlas, luasSelimut) {
	var permukaanTabung = 2 * luasAlas + luasSelimut;
	
	return permukaanTabung;
}
console.log(tabung(5, 5));

