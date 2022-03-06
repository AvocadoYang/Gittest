const renderAll = function()
{//顯示全部
    let str='';
    data.forEach((item,index)=> {
      //尚未完成
        if(item.state==true){
        str += `<li>
        <label class="checkbox" for="">
        <input type="checkbox" value=${item.content} />
        <span>${item.content}</span>
        </label>
        <a href="#" class="delete" data-num=${index}></a>
        </li>`}
      //已完成
       else if(item.state == false){str += `<li>
      <label class="checkbox" for="">
      <input type="checkbox" checked value=${item.content} />
      <span>${item.content}</span>
      </label>
      <a href="#" class="delete" data-num=${index}></a>
      </li>`}})
    
     
     list.innerHTML = str;
}
let ff = 3;
export default ff;