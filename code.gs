function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}
function submitData(obj){
  var ss = SpreadsheetApp.openById("/// PASTE YOUR GOOGLE SHEET ID");
  var sheet = ss.getSheetByName("/// PASTE YOUR GOOGLE SHEET NAME");
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 1;i <= lr;i++){
  var id = sheet.getRange(i, 1).getValue();
      if(id == obj){
      flag = 0;
  var colB = sheet.getRange(i, 2).getValue();      
  var colC = sheet.getRange(i, 3).getValue();
  var colD = sheet.getRange(i, 4).getValue();
  var colE = sheet.getRange(i, 5).getValue();
  var colF = sheet.getRange(i, 6).getValue();
  var colG = sheet.getRange(i, 7).getValue();
  var colH = sheet.getRange(i, 8).getValue();
  var colI = sheet.getRange(i, 9).getDisplayValue();
  var data ="<table><tr><th colspan=2><center><img src='https://cdn.bio.link/uploads/profile_pictures/2023-05-01/99W0Tjmve2OQBALqb1fmZt5S2HjXyXbg.png'style='width:80px;margin-top:8px'><br>Sub Buy Karo | Biggest Online Shopping Platform <br>A Project of Astoe Company</center></th></tr><tr><td>Order number: </td><td>"
+obj+"</td></tr><tr><td>Customer Name:</td><td>"+colB+"</td></tr><tr><td>Phone Number:</td><td>"
+colC+"</td></tr><tr><td>Product Name:</td><td>"+colD+"</td></tr><tr><td>Product Name:</td><td>"+colE+"</td></tr><tr><td>Payment Method:</td><td>"+colF+"</td></tr><tr><td>Billing and shipping address:</td><td>"+colG+"</td></tr><td>Delivery Status:</td><td>"+colH+"</td></tr><tr><td>Payment Status:</td><td>"+colI+"</td></table>";
  return data;
    }
   }
     if(flag==1){
  var data ="Your Entered Order ID is wrong Please Enter The Authetic Customer ID";
      return data;
    }
    };


