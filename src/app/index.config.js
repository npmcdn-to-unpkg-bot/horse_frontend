(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$translateProvider) {
     
      
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;
      
      
      
    $translateProvider.translations('english', {
    HOME: 'Home',
    ABOUT: 'About',
    APP: 'App',  
    LOGIN: 'Login to Racing Pro',LOGINBUT:'Login',
    CONTACT: 'Contact',
    SLIDE1:'Professional',SLIDE2:'horse racing program',
    SLIDE3:'Data analysis',SLIDE4:'of competition',
    SLIDE5:'Simple',SLIDE6:'and easy to use',
    ABOUT_CONTENT:'Our company, RACING PRO, has invested horse racing matches in Hong Kong for many years. Our company owns a very strong Horse Racing database. What’s more, we hire specially-assigned persons to analyze each competition in order to make horse racing becomes a professional investment with abundant profits. All horse racing matches are calculated by the program and data. When the data meet the requirement, the program will provide some information for you to bet. Professional horse racing program RACING PRO collects one-off fee, and members may use it permanently. We provide independent entry account for each person.',
    ABOUT_GT1:'STRONG DATABASE',ABOUT_GT2:'AFTER-SALE SERVICE',ABOUT_GT3:'PROFESSIONAL ANALYSIS',
    ABOUT_GC1:'Our company owns horse racing data for many years',
    ABOUT_GC2:'Answer all questions about the program and marches to members' ,  
    ABOUT_GC3:'In order to improve the winning rate, specially-assigned persons analyze each match'   ,
    
    CONTACT_GT1:'PROFESSIONAL HORSE RACING PROGRAM',CONTACT_GT2:'TEL. (WHATSAPP)',CONTACT_GT3:'ACCOUNT IN HONG KONG',CONTACT_GT4:'ACCOUNT IN MACAO',
    CONTACT_GC1:'(Computer / smart phone / tablet PC)<br>Price: $9,000<br>(One-off charge and permanent use)<br>',
    CONTACT_GC2:'+852 5663 2361 <br>',
    CONTACT_GC3:' Hang Seng Bank: 209-445142-668<br> Bank of China: 012-35510088660<br>Hong Kong Jockey Club: 13830359<br><br>',
    CONTACT_GC4:'Bank of China in Macao: 010-110409-370',
                             
                                
    
    TERMS:'Terms',
        TERMS_TITLE:'Terms and conditions for services provided by RACING PRO'
    
        
  });
  $translateProvider.translations('chinese', {
     HOME: '首頁',
    ABOUT: '關於我們',
    APP: '程式使用',
      LOGIN: '登入 Racing Pro',LOGINBUT:'登入',
    CONTACT: '聯絡我們',
    SLIDE1:'Professional',SLIDE2:'horse racing program',
    SLIDE3:'Data analysis',SLIDE4:'of competition',
    SLIDE5:'Simple',SLIDE6:'and easy to use',
    ABOUT_CONTENT:"本公司RACING PRO 多年來鑽研香港賽馬賽事, 公司擁有超強大賽馬數據庫,更有專人分析每場賽事, 令到賽馬變成一項專業而帶有豐厚利益的投資.所有賽馬賽事用程式及數據計算,當數據達到要求就可以投注賽事.RACING PRO專業賽馬程式一次性收費,永久使用,所有會員設有獨立登入户口.",
       ABOUT_GT1:'強大數據庫',ABOUT_GT2:'售後服務',ABOUT_GT3:'專業分析',
    ABOUT_GC1:'本公司擁有多年來賽馬數據',
    ABOUT_GC2:'解答會員所有程式或賽事問題' ,  
    ABOUT_GC3:'專人分析每場賽事,令到勝率大大提高',
    TERMS:'服務條款',
      TERMS_TITLE:'「Racing Pro」服務條款',
     
      CONTACT_GT1:'RACING PRO專業賽馬程式',CONTACT_GT2:'電話. (WHATSAPP)',CONTACT_GT3:'香港區户口',CONTACT_GT4:'澳門區户口',
    CONTACT_GC1:'(電腦 / 手機 / 平板電腦使用)<br>價格 : $9,000<br>(一次性收費,永久使用)<br>',
    CONTACT_GC2:'+852 5663 2361 <br>',
    CONTACT_GC3:' 恆生銀行 : 209-445142-668<br> 中國銀行 : 012-35510088660<br>香港賽馬會戶口 : 13830359<br><br>',
    CONTACT_GC4:'澳門中國銀行 : 010-110409-370',
  });
  $translateProvider.preferredLanguage('english');

    
    
    
  }

})();
