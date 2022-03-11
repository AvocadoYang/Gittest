

const addInput = document.querySelector(".card input");
const list = document.querySelector(".list");
const addBtn = document.querySelector(".btn_add");
const wait = document.querySelector(".todoWait");
const tab = document.querySelector(".tab");
let data = [
    {"content":'把冰箱發霉檸檬丟掉',"state":true},
    {"content":'寫功課',"state":false}
];

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
//顯示待完成項目
const todoNum = () => 
{   //顯示待完成項目
    let count = 0;
    data.forEach(item => 
    {
      if(item.state==false)
      {count += 1;}
    wait.innerHTML = `${count}個待完成項目`;   
    })
}
function initial()
{
renderAll();
todoNum();
}
initial();

//判斷 待完成/已完成 狀態下元素設置
function renderSet(elemt)
{   let str = '';
   if(elemt=='待完成')
   {
       data.forEach((item,index)=>
       {
        if(item.state==true)
            {
                str += `<li>
                <label class="checkbox" for="">
                <input type="checkbox" value=${item.content} />
                <span>${item.content}</span>
                </label>
                <a href="#" class="delete" data-num=${index}></a>
                </li>`
            }
       })
    list.innerHTML = str;
   }
   else if (elemt =='已完成')
   {
       data.forEach((item,index) =>
       {
        if(item.state==false)
            {   
                str += `<li>
                <label class="checkbox" for="">
                <input type="checkbox" checked value=${item.content} />
                <span>${item.content}</span>
                </label>
                <a href="#" class="delete" data-num=${index}></a>
                </li>`
            }
       })
    list.innerHTML = str;
   }
}

//改變顯示
tab.addEventListener("click",function(e){
    if(e.target.textContent==="全部")
    {renderAll()}
    else if(e.target.textContent==="待完成")
    {renderSet(e.target.textContent)}
    else if(e.target.textContent==="已完成")
    {renderSet(e.target.textContent)}
})

//狀態轉換
list.addEventListener("click",function(e)
{   
    if(e.target.nodeName==='INPUT')
    {let count =0 ;
        data.forEach(function(item,idex,arr)
        {   
            
            if(item.content === e.target.value)
            {
                item.state = !item.state;
            
            }
            if(item.state == true)
            {
                count += 1;
            }
         
        })
    wait.innerHTML = `${count}個待完成項目`;
    }
})


//增加代辦
addBtn.addEventListener('click',(e) => {
    let eList = {};
    let count = 0;
    if(addInput.value === ""){
       alert('請輸入代辦事項');
       return ;
   }
    eList.content = addInput.value;
    eList.state = true; 
    data.push(eList);
    addInput.value = '';
   renderAll();
   data.forEach(item =>
    {
        if(item.state == true)
        {count +=1;}
    })
    wait.innerHTML = `${count}個待完成項目`;
})

//刪除代辦
list.addEventListener('click',(e) => 
{
    let count = 0;
    if(e.target.nodeName !== 'A'){
        return;}
    e.preventDefault();
    num = e.target.getAttribute('data-num');
    data.splice(num,1);
    renderAll();
    data.forEach(item =>
        {
            if(item.state == true)
            {count +=1;}
        })
        wait.innerHTML = `${count}個待完成項目`;
    
})


