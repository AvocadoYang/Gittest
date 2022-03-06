const test = [
    {
        交易日期: "110.09.14",
        種類代碼: "N05",
        作物代號: "11",
        作物名稱: "椰子",
        市場代號: "104",
        市場名稱: "台北二",
        上價: 43.1,
        中價: 30.9,
        下價: 20,
        平均價: 31.2,
        交易量: 1290
    },
    {
        交易日期: "110.09.14",
        種類代碼: "N05",
        作物代號: "31",
        作物名稱: "釋迦",
        市場代號: "104",
        市場名稱: "台北二",
        上價: 122.6,
        中價: 69.4,
        下價: 53.6,
        平均價: 76.9,
        交易量: 2509
    }];
const list = document.querySelector('.showList');
const btn = document.querySelector('.button-group');

const input = document.querySelector(".seach-group");
const inputText = document.querySelector("#crop");

const sortSelects = document.querySelector('.sort-select');
const moblieSelects = document.querySelector("#js-moblie-select");

//console.log(list.classList)

//全部資料
let allData = [];

function dataAllQuery() {
    axios.get('https://hexschool.github.io/js-filter-data/data.json')
        .then(function (response) {
            allData = response.data.map(item => item);
            // itemData = response.data.filter(item => {
            //     // console.log(item)
            //     return item['作物名稱'] === '作物名稱'
            // });
        })
}
dataAllQuery();


//資料寫入
function renderData(inputData) {
    let str = '';
    inputData.forEach(item => {
        str += `<tr>
                <td>${item.作物名稱}</td>
                <td>${item.市場名稱}</td>
                <td>${item.上價}</td>
                <td>${item.中價}</td>
                <td>${item.下價}</td>
                <td>${item.平均價}</td>
                <td>${item.交易量}</td>
                </tr>`
    })
    list.innerHTML = str.trim();
}

//種類判斷鍵
btn.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
        arr = [];
        allData.forEach(item => {
            if (e.target.getAttribute("data-type") == item['種類代碼']) {
                arr.push(item)
            }
        })
        renderData(arr);
    }
})

//篩選關鍵字產品
 input.addEventListener('click', e => {
     if (e.target.nodeName === 'BUTTON') {
        searhValue=inputText.value.trim();
         let searchArr = [];
         searhValue = inputText.value.trim();
         if (searhValue.trim()== '') {
             alert('請輸入關鍵字');
             return ;
         }
        else{
            searchArr = allData.filter(item => {
                if(item['作物名稱']==null){
                    return;
                }
                else{
                return item['作物名稱'].match(searhValue);//如果產品名稱符合關鍵字則回傳產品名稱，若不符合則回傳null。
                }
            })   
        }
        if(searchArr.length==0){
            list.innerHTML = `<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊</td></tr>`
        }  
        else{
        searhValue = ''; 
        renderData(searchArr); 
        }
 }} )


 //排序方式
// select.addEventListener('change',selectButton)
// function selectButton(e){
//      switch(e.target.value)
//      {
//          case "依上架排序" :
//              console.log("123");
//          break;
//          default:
//          break;
//      }
        
//      }

     sortSelects.addEventListener("change", switchSelect);
     //moblieSelects.addEventListener("change", switchSelect);
     function switchSelect(e){
       switch(e.target.value){
         case "依上價排序":
           console.log(123)
           break;
         case "依中價排序":
           selectChange("中價");
           break;
         case "依下價排序":
           selectChange("下價");
           break;
         case "依平均價排序":
           selectChange("平均價");
           break;
         case "依交易量排序":
           selectChange("交易量");
           break;
         default:
           break;
       }
     }

