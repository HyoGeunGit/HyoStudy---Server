## BreedPop

#Restful Api

* POST /signup ( 유저 회원가입 )

> Parmas

    id : {type: String, unique: true}, // 아이디
    
    name : {type: String, unique :false } // 유저이름

    phoneNum :{type: String} // 전화번호

    passwd : {type : String}, // 비밀번호

> Response

    HTTP 200 : { message: "success!"}

    HTTP 409 : { message : "already exist"}

    HTTP 400 : { message : e.message } // 나올 일 없음

* POST /signin ( 유저 로그인 )

> Params

    id : { type : String } // 유저 아이디

    passwd : { type : String } // 유저 비밀번호

> Response

    HTTP 200 : { user :
    
      id : {type: String, unique: true}, // 아이디
      
      passwd : {type : String},
      
      token : {type: String}, // 토큰
     } 

    HTTP 404 : { message : "User Not Found!"}


* POST /addJob (Job과 Health가 있음 ex. /addJob, /addHealth)

> Params

      name : { type : String } // 훈련명

      percent : { type : String } // 훈련 진행도

      count : {type : String } // 훈련 횟수
      
      userToken : {type: String} // 유저토큰
      
      ifFinish : {type :String} // 훈련 완료 유무

> Response

    HTTP 200 : {
      token : {type: String} // 토큰
     } 

    HTTP 404 : { message : "Training Not Found!"}


* POST /getJobList (Job과 Health가 있음 ex. /getJobList, /getHealthList)


> Params

    token : {type : String} //토큰

    > Response

    HTTP 200 : {
         name : { type : String } // 훈련명

         percent : { type : String } // 훈련 진행도

         count : {type : String } // 훈련 횟수
         
         ifFinish : {type :String} // 훈련 완료 유무
     } 

    HTTP 404 : { message : "Training Not Found!"}



* POST /allJobList (Job과 Health가 있음 ex. /allJobList, /allHealthList)


> Params

    userToken : {type : String} //유저 토큰

 > Response

    HTTP 200 : {
         name : { type : String } // 훈련명

         percent : { type : String } // 훈련 진행도

         count : {type : String } // 훈련 횟수
         
         ifFinish : {type :String} // 훈련 완료 유무
     } 

    HTTP 404 : { message : "User Training Not Found!"}
