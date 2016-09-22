var search = document.querySelector('#search');
var list = document.querySelector('#list');
var data = [{
  name:"红米Note4",
  engLishName:"hongMiNote4"
},{
  name:"红米Pro",
  engLishName:"hongMiPro"
},{
  name:"红米手机3S",
  engLishName:"hongMiShouJi3S"
},{
  name:"红米Note3",
  engLishName:"hongMiNote3"
},{
  name:"小米Max全网通",
  engLishName:"xiaoMiMaxQuanWangTong"
},{
  name:"小米手机5 标准版/高配版",
  engLishName:"xiaoMiShouJi5 BiaoZhunBan/GaoPeiBan"
}];
function initCtrl(data){
var strHtml = '';
data.forEach(function(item){
  // strHtml +='<div>' + item.name + '</div>' ;
  strHtml +='<a>' + item.name + '</a>' ;
});
list.innerHTML = strHtml;
}
search.onkeyup = function(e){
  var str = search.value;
  var result = data.filter(function(item){
    if (item.name.toLowerCase().indexOf(str.toLowerCase())>-1
    || item.engLishName.toLowerCase().indexOf(str.toLowerCase())>-1){
      if (!str) {
        return;
      }
      else {
          return item;
      }

    }
  });
initCtrl(result);
}
