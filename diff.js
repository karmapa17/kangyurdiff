var fs=require("fs");
var splitsentence=function(bampo) {
	bampo=bampo.replace(/<.*?>/g,"").replace(/\r?\n/g,"").replace(/[^0xf00-0xfff ]+/,"");
	return bampo.replace(/།[། ]*/g,function(m){
		return m+"\n"
	});
}

var lhasa=splitsentence(fs.readFileSync("lh0001_001.xml","utf8"));
var jiang=splitsentence(fs.readFileSync("lj0001_001.xml","utf8"));
fs.writeFileSync("lhasa-sen.txt",lhasa,"utf8")
fs.writeFileSync("jiang-sen.txt",jiang,"utf8")
